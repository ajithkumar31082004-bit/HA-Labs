#!/bin/bash
set -e

echo "=== Pulling latest changes and building HA Labs ==="
cd /var/www/ha-labs
git fetch origin main
git reset --hard origin/main

# Build Next.js with standalone export
npm run build

# Start or restart PM2
pm2 delete halabs-frontend || true
pm2 start npm --name "halabs-frontend" -- start -- -p 3000
pm2 save
pm2 startup systemd -u root --hp /root || true

# Configure Nginx reverse proxy
cat <<'EON' > /etc/nginx/sites-available/ha-labs
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EON

rm -f /etc/nginx/sites-enabled/default
ln -sf /etc/nginx/sites-available/ha-labs /etc/nginx/sites-enabled/ha-labs
nginx -t
systemctl restart nginx

echo "=== HA Labs successfully deployed and running on port 80! ==="
