variable "aws_region" {
  description = "AWS region for HA Labs deployment (default: Mumbai)"
  type        = string
  default     = "ap-south-1"
}

variable "environment" {
  description = "Deployment environment name (e.g. prod, staging, dev)"
  type        = string
  default     = "prod"
}

variable "project_name" {
  description = "Project identifier used in resource naming and tags"
  type        = string
  default     = "ha-labs"
}

variable "domain_name" {
  description = "Primary domain name for the HA Labs platform"
  type        = string
  default     = "halabs.in"
}

variable "create_route53_zone" {
  description = "Whether to create a new Route 53 public hosted zone or look up an existing one"
  type        = bool
  default     = false
}

variable "vpc_cidr" {
  description = "CIDR block for the HA Labs dedicated VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnet_cidr" {
  description = "CIDR block for the public subnet (EC2 #1 Frontend)"
  type        = string
  default     = "10.0.1.0/24"
}

variable "private_subnet_cidr" {
  description = "CIDR block for the private subnet (EC2 #2 Backend + PostgreSQL)"
  type        = string
  default     = "10.0.2.0/24"
}

variable "frontend_instance_type" {
  description = "EC2 instance type for Frontend Next.js server"
  type        = string
  default     = "t3.small"
}

variable "backend_instance_type" {
  description = "EC2 instance type for Backend Node.js API + PostgreSQL server"
  type        = string
  default     = "t3.medium"
}

variable "custom_ami_id" {
  description = "Custom AMI ID for EC2 instances (default: Ubuntu LTS ami-01a00762f46d584a1 in ap-south-1)"
  type        = string
  default     = "ami-01a00762f46d584a1"
}

variable "key_name" {
  description = "Name of existing AWS EC2 Key Pair to associate with instances (e.g. Brawl_Star for Brawl_Star.pem)"
  type        = string
  default     = "Brawl_Star"
}

variable "create_key_pair" {
  description = "Whether to auto-generate a new RSA key pair via Terraform. Set to false when using an existing AWS Key Pair (e.g. Brawl_Star)"
  type        = bool
  default     = false
}

variable "allowed_ssh_cidr" {
  description = "IP CIDR allowed to connect to EC2 instances via SSH (set to your IP/32 for security)"
  type        = list(string)
  default     = ["0.0.0.0/0"]
}

variable "db_name" {
  description = "PostgreSQL database name on EC2 #2"
  type        = string
  default     = "halabs_production"
}

variable "db_user" {
  description = "PostgreSQL admin username on EC2 #2"
  type        = string
  default     = "halabs_admin"
}

variable "db_password" {
  description = "PostgreSQL password (if empty, a secure random string is generated via Terraform)"
  type        = string
  sensitive   = true
  default     = ""
}

variable "jwt_secret" {
  description = "Secret key for signing JSON Web Tokens (if empty, generated automatically)"
  type        = string
  sensitive   = true
  default     = ""
}

variable "enable_nat_gateway" {
  description = "Set to true to provision a NAT Gateway for EC2 #2 private internet egress (updates, packages)"
  type        = bool
  default     = true
}

variable "git_repo_url" {
  description = "Git repository URL for cloning frontend and backend code on bootstrap"
  type        = string
  default     = "https://github.com/ajithkumar31082004-bit/HA-Labs.git"
}
