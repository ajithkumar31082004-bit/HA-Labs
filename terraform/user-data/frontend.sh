#!/bin/bash
set -e

# Redirect output to syslog and logfile
exec > >(tee /var/log/user-data-frontend.log|logger -t user-data-frontend -s 2>/dev/console) 2>&1

echo "========================================="
echo "HA LABS — EC2 #1 FRONTEND BOOTSTRAP START"
echo "========================================="

# Update system packages
export DEBIAN_FRONTEND=noninteractive
apt-get update -y
apt-get upgrade -y
apt-get install -y curl git nginx build-essential ufw unzip

# Install Node.js 20 LTS (NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Install PM2 globally
npm install -g pm2

# Install AWS CLI v2
curl -s "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip -q awscliv2.zip
./aws/install
rm -rf awscliv2.zip ./aws

# Create application directory
mkdir -p /var/www/ha-labs
cd /var/www/ha-labs

# Clone or set up the repository
if [ ! -d "/var/www/ha-labs/.git" ]; then
    echo "Cloning HA Labs repository..."
    git clone "${git_repo_url}" /var/www/ha-labs || true
fi

# Create production environment file for frontend
cat <<EOF > /var/www/ha-labs/.env.production
NODE_ENV=production
NEXT_PUBLIC_APP_URL=http://${domain_name}
NEXT_PUBLIC_API_URL=http://${backend_private_ip}:4000
NEXT_PUBLIC_ENV=${environment}
EOF

# Install dependencies and build Next.js application
cd /var/www/ha-labs
if [ -f "package.json" ]; then
    npm ci --prefer-offline --no-audit || npm install
    npm run build
fi

# Start Next.js with PM2 as ubuntu user
chown -R ubuntu:ubuntu /var/www/ha-labs
su - ubuntu -c "cd /var/www/ha-labs && pm2 start npm --name 'halabs-frontend' -- start -- -p 3000"
su - ubuntu -c "pm2 save"
env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu

# Write Nginx configuration
cat <<'EOF' > /etc/nginx/sites-available/ha-labs
${nginx_config}
EOF

# Enable Nginx site and test
ln -sf /etc/nginx/sites-available/ha-labs /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx
systemctl enable nginx

# Configure UFW firewall
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

echo "=========================================="
echo "HA LABS — EC2 #1 FRONTEND BOOTSTRAP COMPLETE"
echo "=========================================="
