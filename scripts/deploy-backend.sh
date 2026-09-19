#!/usr/bin/env bash
# =============================================================================
# HA LABS — ZERO-DOWNTIME BACKEND DEPLOYMENT & MIGRATION SCRIPT (EC2 #2)
# =============================================================================

set -e

BACKEND_DIR="/var/www/ha-labs-backend"
BRANCH="${1:-main}"

echo "[DEPLOY] Starting HA Labs backend deployment from branch: $BRANCH..."

cd $BACKEND_DIR

# Pull latest commits
git fetch origin $BRANCH
git reset --hard origin/$BRANCH

# Install Node dependencies
echo "[DEPLOY] Installing backend dependencies..."
npm install --production

# Run database migrations if any new schema changes exist
if [ -f "schema.sql" ]; then
    echo "[DEPLOY] Applying schema migrations..."
    # Execute idempotent schema updates
    psql "$DATABASE_URL" -f schema.sql || true
fi

# Reload PM2 process with zero downtime
echo "[DEPLOY] Reloading PM2 backend cluster..."
pm2 reload halabs-backend-api || pm2 start src/server.js --name "halabs-backend-api"

echo "[DEPLOY] Backend deployment completed successfully! 🚀"
