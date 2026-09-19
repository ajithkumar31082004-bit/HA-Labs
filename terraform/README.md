# 🏗️ HA Labs — 2-EC2 AWS Architecture via Terraform

This directory contains the complete, production-grade **Infrastructure as Code (IaC)** for deploying **HA Labs** on Amazon Web Services (AWS).

```
                         🌍 INTERNET
                              │
                              ▼
                     Route 53 / DNS
                              │
               ┌──────────────▼──────────────┐
               │    VPC (10.0.0.0/16)        │
               │                             │
               │  PUBLIC SUBNET (10.0.1.0/24)│
               │  ┌───────────────────────┐  │
               │  │       EC2 #1          │  │
               │  │   FRONTEND SERVER     │  │
               │  │                       │  │
               │  │ Nginx (Ports 80/443)  │  │
               │  │ Next.js 14 (Port 3000)│  │
               │  │ PM2 Daemon Manager    │  │
               │  │ Elastic IP            │  │
               │  └───────────┬───────────┘  │
               │              │              │
               │       Private VPC Route     │
               │       (Port 4000 ONLY)      │
               │              │              │
               │  PRIVATE SUBNET (10.0.2.0/24│
               │  ┌───────────▼───────────┐  │
               │  │       EC2 #2          │  │
               │  │   BACKEND + DATABASE  │  │
               │  │                       │  │
               │  │ Node.js API (Port 4000│  │
               │  │ Auth, Orders, Payments│  │
               │  │                       │  │
               │  │ ┌───────────────────┐ │  │
               │  │ │   PostgreSQL 16   │ │  │
               │  │ │   (Port 5432)     │ │  │
               │  │ │   Localhost Only  │ │  │
               │  │ └───────────────────┘ │  │
               │  └───────────┬───────────┘  │
               └──────────────┼──────────────┘
                              │
                              ▼
               ┌─────────────────────────────┐
               │  Private Amazon S3 Bucket   │
               │  Project Files & DB Backups │
               └─────────────────────────────┘
```

---

## 🔐 Security Architecture

1. **Zero Database Internet Exposure**:
   - PostgreSQL runs on **EC2 #2 in the private subnet** and is bound to `127.0.0.1`.
   - Security group ingress for port `5432` only accepts connections from the instance itself.
2. **Private API Traffic**:
   - Backend port `4000` is **only** accessible from the EC2 #1 Frontend Security Group ID (`aws_security_group.frontend.id`).
   - Direct internet calls to EC2 #2 are completely blocked.
3. **Encrypted Private S3 Deliverables**:
   - Paid project deliverables (`.zip`, `.kicad`, `.docx`, `.pptx`, `.sql`) are stored in a private, encrypted S3 bucket with all 4 public access blocks enabled.
   - Buyers receive time-limited (60-minute) S3 pre-signed download URLs generated on-demand by EC2 #2 after verifying ownership.
4. **Zero Open SSH Ports Required**:
   - Both EC2 instances are attached to an IAM instance profile with `AmazonSSMManagedInstanceCore`.
   - You can connect to either instance directly from the AWS Console or terminal via AWS Systems Manager (`aws ssm start-session`) without opening port 22 to the public internet!

---

## 📁 File Structure

| File | Purpose |
| :--- | :--- |
| `providers.tf` | Configures AWS provider (`~> 5.40`), TLS, Random, and Local providers. |
| `variables.tf` | Customizable parameters (Region, instance types, domain, DB credentials). |
| `main.tf` | Generates random passwords, RSA SSH keys, and Ubuntu 22.04 LTS AMI lookup. |
| `networking.tf` | Creates VPC (`10.0.0.0/16`), Public & Private Subnets, IGW, NAT Gateway, Route Tables. |
| `security.tf` | Security groups for Frontend (80/443 open) and Backend (4000 allowed only from Frontend). |
| `iam.tf` | IAM roles for EC2 with S3 access and AWS Systems Manager (SSM) integration. |
| `storage.tf` | Encrypted private S3 buckets for project deliverables and automated DB backups. |
| `ec2_frontend.tf` | EC2 #1 resource with Elastic IP, Next.js bootstrap, and Nginx proxying. |
| `ec2_backend.tf` | EC2 #2 resource in private subnet with PostgreSQL 16 bootstrap and S3 backup cron. |
| `dns.tf` | Route 53 A records for `halabs.in` and `www.halabs.in` pointing to EC2 #1. |
| `outputs.tf` | Displays public IPs, S3 bucket names, domain URLs, and connection commands. |
| `user-data/frontend.sh` | Cloud-init script: Installs Node 20, Nginx, PM2, and builds Next.js. |
| `user-data/backend.sh` | Cloud-init script: Installs PostgreSQL 16, Node 20, PM2, runs schema, sets up backup cron. |
| `templates/nginx-frontend.conf` | Nginx reverse proxy configuration for port 3000 and internal backend proxy. |
| `templates/nginx-backend.conf` | Internal Nginx reverse proxy with rate limiting and CORS controls. |
| `environments/dev.tfvars` | Low-cost dev parameters (`t3.micro` / `t3.small`). |
| `environments/prod.tfvars` | Production parameters (`t3.small` / `t3.medium`, Route 53 zone). |

---

## 🚀 Step-by-Step Deployment Instructions

### Prerequisites
1. Install [Terraform](https://developer.hashicorp.com/terraform/downloads) (>= 1.5.0).
2. Install the [AWS CLI](https://aws.amazon.com/cli/) and authenticate:
   ```bash
   aws configure
   ```

### 1. Initialize Terraform
Navigate to the `terraform/` directory and install the providers:
```bash
cd terraform
terraform init
```

### 2. Validate the Configuration
Run syntax and structure verification:
```bash
terraform validate
```

### 3. Review the Execution Plan
Inspect all resources that will be provisioned in your AWS account:
```bash
# For Development
terraform plan -var-file="environments/dev.tfvars"

# For Production (halabs.in)
terraform plan -var-file="environments/prod.tfvars"
```

### 4. Deploy the Infrastructure
Apply the configuration to create the VPC, 2 EC2 instances, S3 buckets, and security groups:
```bash
terraform apply -var-file="environments/prod.tfvars"
```
Type `yes` when prompted to confirm.

### 5. Access and Verify
Once Terraform finishes, it will print outputs like:
```bash
Outputs:
frontend_public_ip          = "13.235.xxx.xxx"
backend_private_ip          = "10.0.2.xxx"
s3_deliverables_bucket      = "ha-labs-deliverables-prod-a8f7"
s3_backups_bucket           = "ha-labs-db-backups-prod-a8f7"
website_url                 = "http://halabs.in"
ssh_frontend_command        = "ssh -i Brawl_Star.pem ubuntu@13.235.xxx.xxx"
ssm_backend_session_command = "aws ssm start-session --target i-0abcd1234efgh5678 --region ap-south-1"
```

---

## 🛠️ Management & Operations

### Connecting to EC2 #1 (Frontend)
Using your `Brawl_Star.pem` key pair:
```bash
ssh -i Brawl_Star.pem ubuntu@<frontend_public_ip>
```

### Connecting to EC2 #2 (Backend) via AWS Systems Manager (Recommended)
You do not need to open any SSH port to connect to EC2 #2:
```bash
aws ssm start-session --target <backend_instance_id> --region ap-south-1
```

### Continuous Deployments
We have provided zero-downtime deployment scripts inside `scripts/`:
- **Frontend**:
  ```bash
  ./scripts/deploy-frontend.sh main
  ```
- **Backend**:
  ```bash
  ./scripts/deploy-backend.sh main
  ```
- **Manual Database Backup to S3**:
  ```bash
  ./scripts/backup-db.sh
  ```

---

## 💡 Cost Optimization Notes

- **NAT Gateway**: The NAT Gateway in `networking.tf` allows EC2 #2 to pull packages and send backups to S3. To minimize development costs, you can set `enable_nat_gateway = false` in `dev.tfvars`.
- **Instance Sizing**:
  - Dev: `t3.micro` for frontend and `t3.small` for backend (Eligible for AWS Free Tier in first year).
  - Prod: `t3.small` for frontend and `t3.medium` for backend.
- **Future Growth**: When scale increases, PostgreSQL can be seamlessly migrated from EC2 #2 to **Amazon RDS Multi-AZ** by simply updating `DATABASE_URL` in the SSM Parameter Store.
