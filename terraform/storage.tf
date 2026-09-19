# ── Private S3 Bucket: Paid Project Deliverables ────────────────────────────
resource "aws_s3_bucket" "deliverables" {
  bucket        = "${var.project_name}-deliverables-${var.environment}-${random_id.bucket_suffix.hex}"
  force_destroy = false

  tags = {
    Name        = "${var.project_name}-deliverables"
    Purpose     = "Private Protected Engineering Project ZIPs, CAD, Reports"
    Environment = var.environment
  }
}

# Block all public access for deliverables bucket
resource "aws_s3_bucket_public_access_block" "deliverables_block" {
  bucket = aws_s3_bucket.deliverables.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Enable AES256 Server-Side Encryption
resource "aws_s3_bucket_server_side_encryption_configuration" "deliverables_crypto" {
  bucket = aws_s3_bucket.deliverables.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# Enable Versioning for file recovery
resource "aws_s3_bucket_versioning" "deliverables_versioning" {
  bucket = aws_s3_bucket.deliverables.id

  versioning_configuration {
    status = "Enabled"
  }
}

# ── Private S3 Bucket: PostgreSQL Database Backups ──────────────────────────
resource "aws_s3_bucket" "backups" {
  bucket        = "${var.project_name}-db-backups-${var.environment}-${random_id.bucket_suffix.hex}"
  force_destroy = false

  tags = {
    Name        = "${var.project_name}-db-backups"
    Purpose     = "Automated Daily PostgreSQL Dumps"
    Environment = var.environment
  }
}

resource "aws_s3_bucket_public_access_block" "backups_block" {
  bucket = aws_s3_bucket.backups.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "backups_crypto" {
  bucket = aws_s3_bucket.backups.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# Lifecycle policy to expire daily backups after 30 days
resource "aws_s3_bucket_lifecycle_configuration" "backups_lifecycle" {
  bucket = aws_s3_bucket.backups.id

  rule {
    id     = "delete-old-backups-after-30d"
    status = "Enabled"

    expiration {
      days = 30
    }
  }
}
