#!/bin/bash
set -e

# Redirect output to syslog and logfile
exec > >(tee /var/log/user-data-backend.log|logger -t user-data-backend -s 2>/dev/console) 2>&1

echo "========================================="
echo "HA LABS — EC2 #2 BACKEND BOOTSTRAP START"
echo "========================================="

export DEBIAN_FRONTEND=noninteractive
apt-get update -y
apt-get upgrade -y
apt-get install -y curl git build-essential ufw unzip lsb-release gnupg

# ── 1. Install PostgreSQL 16 ────────────────────────────────────────────────
echo "Installing PostgreSQL 16..."
sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
curl -fsSL https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor -o /etc/apt/trusted.gpg.d/postgresql.gpg
apt-get update -y
apt-get install -y postgresql-16 postgresql-client-16

systemctl start postgresql
systemctl enable postgresql

# ── 2. Configure PostgreSQL Security & Credentials ──────────────────────────
echo "Configuring PostgreSQL database and user..."
sudo -u postgres psql -c "CREATE USER ${db_user} WITH PASSWORD '${db_password}' CREATEDB;" || true
sudo -u postgres psql -c "CREATE DATABASE ${db_name} OWNER ${db_user};" || true
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE ${db_name} TO ${db_user};" || true

# Enforce localhost-only access in pg_hba.conf
PG_HBA="/etc/postgresql/16/main/pg_hba.conf"
sed -i 's/host\s*all\s*all\s*0.0.0.0\/0\s*md5/#host all all 0.0.0.0\/0 md5/g' $PG_HBA || true
echo "host    ${db_name}    ${db_user}    127.0.0.1/32    scram-sha-256" >> $PG_HBA
systemctl restart postgresql

# ── 3. Install Node.js 20 LTS & PM2 ─────────────────────────────────────────
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs
npm install -g pm2

# Install AWS CLI v2
curl -s "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip -q awscliv2.zip
./aws/install
rm -rf awscliv2.zip ./aws

# ── 4. Set up Backend Application ───────────────────────────────────────────
mkdir -p /var/www/ha-labs-backend
cd /var/www/ha-labs-backend

# Clone backend or copy files
if [ ! -d "/var/www/ha-labs-backend/.git" ]; then
    git clone "${git_repo_url}" /tmp/ha-labs-repo || true
    if [ -d "/tmp/ha-labs-repo/backend" ]; then
        cp -r /tmp/ha-labs-repo/backend/* /var/www/ha-labs-backend/
    fi
    rm -rf /tmp/ha-labs-repo
fi

# Write environment configuration
cat <<EOF > /var/www/ha-labs-backend/.env
PORT=4000
NODE_ENV=production
DATABASE_URL=postgresql://${db_user}:${db_password}@127.0.0.1:5432/${db_name}
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=${db_name}
DB_USER=${db_user}
DB_PASSWORD=${db_password}
JWT_SECRET=${jwt_secret}
S3_DELIVERABLES_BUCKET=${s3_deliverables_bucket}
S3_BACKUPS_BUCKET=${s3_backups_bucket}
AWS_REGION=${aws_region}
ALLOWED_ORIGIN=http://${frontend_private_ip}
EOF

# Initialize Database Schema if schema.sql exists
if [ -f "/var/www/ha-labs-backend/schema.sql" ]; then
    echo "Running initial database migration..."
    PGPASSWORD='${db_password}' psql -h 127.0.0.1 -U ${db_user} -d ${db_name} -f /var/www/ha-labs-backend/schema.sql || true
fi

# Install dependencies and start server with PM2
cd /var/www/ha-labs-backend
if [ -f "package.json" ]; then
    npm install --production
    chown -R ubuntu:ubuntu /var/www/ha-labs-backend
    su - ubuntu -c "cd /var/www/ha-labs-backend && pm2 start src/server.js --name 'halabs-backend-api'"
    su - ubuntu -c "pm2 save"
    env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
fi

# ── 5. Setup Daily Automated S3 PostgreSQL Backup Cron ──────────────────────
cat <<'CRON_EOF' > /usr/local/bin/backup-halabs-db.sh
#!/bin/bash
BACKUP_DATE=$(date +\%Y-\%m-\%d_\%H\%M\%S)
BACKUP_FILE="/tmp/halabs_db_$BACKUP_DATE.sql.gz"

PGPASSWORD='${db_password}' pg_dump -h 127.0.0.1 -U ${db_user} ${db_name} | gzip > $BACKUP_FILE
aws s3 cp $BACKUP_FILE s3://${s3_backups_bucket}/daily/halabs_db_$BACKUP_DATE.sql.gz --region ${aws_region}
rm -f $BACKUP_FILE
CRON_EOF

chmod +x /usr/local/bin/backup-halabs-db.sh
echo "0 2 * * * root /usr/local/bin/backup-halabs-db.sh >> /var/log/db-backup.log 2>&1" > /etc/cron.d/halabs-db-backup

# ── 6. Configure Firewall ───────────────────────────────────────────────────
ufw allow 22/tcp
ufw allow from ${frontend_private_ip} to any port 4000 proto tcp
ufw --force enable

echo "========================================="
echo "HA LABS — EC2 #2 BACKEND BOOTSTRAP COMPLETE"
echo "========================================="
