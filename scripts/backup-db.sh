#!/usr/bin/env bash
# =============================================================================
# HA LABS — AUTOMATED POSTGRESQL BACKUP TO S3 SCRIPT
# =============================================================================

set -e

# Load environment variables if available
if [ -f "/var/www/ha-labs-backend/.env" ]; then
    export $(grep -v '^#' /var/www/ha-labs-backend/.env | xargs)
fi

BACKUP_DATE=$(date +%Y-%m-%d_%H%M%S)
BACKUP_FILENAME="halabs_db_${BACKUP_DATE}.sql.gz"
BACKUP_PATH="/tmp/${BACKUP_FILENAME}"
S3_BUCKET="${S3_BACKUPS_BUCKET:-ha-labs-db-backups}"

echo "[BACKUP] Initiating database dump for ${DB_NAME:-halabs_production}..."

# Execute pg_dump and compress on the fly
PGPASSWORD="${DB_PASSWORD}" pg_dump -h "${DB_HOST:-127.0.0.1}" -p "${DB_PORT:-5432}" -U "${DB_USER:-halabs_admin}" "${DB_NAME:-halabs_production}" | gzip > "$BACKUP_PATH"

echo "[BACKUP] Uploading dump to Amazon S3 bucket: ${S3_BUCKET}..."
aws s3 cp "$BACKUP_PATH" "s3://${S3_BUCKET}/manual/${BACKUP_FILENAME}" --region "${AWS_REGION:-ap-south-1}"

# Cleanup local temp dump
rm -f "$BACKUP_PATH"

echo "[BACKUP] Backup completed and archived to s3://${S3_BUCKET}/manual/${BACKUP_FILENAME}! 📦"
