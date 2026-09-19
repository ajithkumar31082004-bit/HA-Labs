# ── Frontend Security Group (EC2 #1) ────────────────────────────────────────
resource "aws_security_group" "frontend" {
  name        = "${var.project_name}-${var.environment}-frontend-sg"
  description = "Security group for HA Labs public frontend server"
  vpc_id      = aws_vpc.main.id

  # Allow HTTP
  ingress {
    description = "HTTP web traffic from internet"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow HTTPS
  ingress {
    description = "HTTPS secure web traffic from internet"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow SSH from authorized IP
  ingress {
    description = "SSH administrative access from allowed CIDRs"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = var.allowed_ssh_cidr
  }

  # Outbound rules: all allowed
  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_name}-${var.environment}-frontend-sg"
    Role = "Frontend"
  }
}

# ── Backend Security Group (EC2 #2) ─────────────────────────────────────────
resource "aws_security_group" "backend" {
  name        = "${var.project_name}-${var.environment}-backend-sg"
  description = "Security group for HA Labs private backend API and database server"
  vpc_id      = aws_vpc.main.id

  # Allow API access (Port 4000) ONLY from Frontend Security Group
  ingress {
    description     = "Node.js REST API port from EC2 #1 Frontend ONLY"
    from_port       = 4000
    to_port         = 4000
    protocol        = "tcp"
    security_groups = [aws_security_group.frontend.id]
  }

  # Allow PostgreSQL access (Port 5432) from localhost and internal backend only
  ingress {
    description = "PostgreSQL internal database access from instance itself"
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    self        = true
  }

  # Allow SSH from Frontend SG (acting as bastion) and allowed CIDRs
  ingress {
    description     = "SSH access via Frontend bastion"
    from_port       = 22
    to_port         = 22
    protocol        = "tcp"
    security_groups = [aws_security_group.frontend.id]
  }

  ingress {
    description = "SSH administrative access from allowed CIDRs"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = var.allowed_ssh_cidr
  }

  # Outbound rules: all allowed (for npm, apt, and S3 pre-signed downloads)
  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_name}-${var.environment}-backend-sg"
    Role = "Backend"
  }
}
