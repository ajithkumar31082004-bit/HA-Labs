# Generate random password for PostgreSQL if not provided
resource "random_password" "db_password" {
  length           = 24
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

# Generate random JWT secret if not provided
resource "random_password" "jwt_secret" {
  length  = 32
  special = false
}

# Generate random suffix for S3 bucket uniqueness
resource "random_id" "bucket_suffix" {
  byte_length = 4
}

# Generate an RSA private key for EC2 SSH access
resource "tls_private_key" "ec2_key" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

# Create AWS Key Pair from generated public key
resource "aws_key_pair" "generated_key" {
  key_name   = "${var.project_name}-${var.environment}-key"
  public_key = tls_private_key.ec2_key.public_key_openssh
}

# Save the private key locally for convenience (.pem file)
resource "local_file" "private_key_pem" {
  content         = tls_private_key.ec2_key.private_key_pem
  filename        = "${path.module}/${var.project_name}-${var.environment}.pem"
  file_permission = "0400"
}

# Store database password in AWS SSM Parameter Store (SecureString)
resource "aws_ssm_parameter" "db_password" {
  name        = "/${var.project_name}/${var.environment}/database/password"
  description = "PostgreSQL password for ${var.project_name} ${var.environment}"
  type        = "SecureString"
  value       = var.db_password != "" ? var.db_password : random_password.db_password.result
}

# Store JWT secret in AWS SSM Parameter Store (SecureString)
resource "aws_ssm_parameter" "jwt_secret" {
  name        = "/${var.project_name}/${var.environment}/auth/jwt_secret"
  description = "JWT Signing Secret for ${var.project_name} ${var.environment}"
  type        = "SecureString"
  value       = var.jwt_secret != "" ? var.jwt_secret : random_password.jwt_secret.result
}

# Fetch latest Ubuntu 22.04 LTS AMI
data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}

# Data source for availability zones in the current region
data "aws_availability_zones" "available" {
  state = "available"
}
