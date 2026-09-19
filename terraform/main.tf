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

# Optional: Generate an RSA private key for EC2 SSH access if create_key_pair is true
resource "tls_private_key" "ec2_key" {
  count     = var.create_key_pair ? 1 : 0
  algorithm = "RSA"
  rsa_bits  = 4096
}

# Optional: Create AWS Key Pair from generated public key
resource "aws_key_pair" "generated_key" {
  count      = var.create_key_pair ? 1 : 0
  key_name   = "${var.project_name}-${var.environment}-key"
  public_key = tls_private_key.ec2_key[0].public_key_openssh
}

# Optional: Save the private key locally for convenience (.pem file)
resource "local_file" "private_key_pem" {
  count           = var.create_key_pair ? 1 : 0
  content         = tls_private_key.ec2_key[0].private_key_pem
  filename        = "${path.module}/${var.project_name}-${var.environment}.pem"
  file_permission = "0400"
}

# Local variables for dynamic key and AMI resolution
locals {
  key_name     = var.create_key_pair ? aws_key_pair.generated_key[0].key_name : var.key_name
  key_pem_file = var.create_key_pair ? local_file.private_key_pem[0].filename : "${var.key_name}.pem"
  ami_id       = var.custom_ami_id != "" ? var.custom_ami_id : data.aws_ami.ubuntu.id
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
