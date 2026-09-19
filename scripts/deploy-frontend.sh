#!/usr/bin/env bash
# =============================================================================
# HA LABS — ZERO-DOWNTIME FRONTEND DEPLOYMENT SCRIPT (EC2 #1)
# =============================================================================

set -e

APP_DIR="/var/www/ha-labs"
BRANCH="${1:-main}"

echo "[DEPLOY] Starting HA Labs frontend deployment from branch: $BRANCH..."

cd $APP_DIR

# Pull latest commits
git fetch origin $BRANCH
git reset --hard origin/$BRANCH

# Install dependencies if package.json changed
echo "[DEPLOY] Installing dependencies..."
npm ci --prefer-offline --no-audit

# Build Next.js production bundle
echo "[DEPLOY] Building Next.js application..."
npm run build

# Reload PM2 process with zero downtime
echo "[DEPLOY] Reloading PM2 frontend cluster..."
pm2 reload halabs-frontend || pm2 start npm --name "halabs-frontend" -- start -- -p 3000

# Test Nginx status
echo "[DEPLOY] Checking Nginx reverse proxy..."
sudo systemctl reload nginx

echo "[DEPLOY] Frontend deployment completed successfully! 🚀"
