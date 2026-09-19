# ── EC2 #1: Frontend Server (Public Subnet) ─────────────────────────────────
resource "aws_instance" "frontend" {
  ami                  = local.ami_id
  instance_type        = var.frontend_instance_type
  subnet_id            = aws_subnet.public.id
  vpc_security_group_ids = [aws_security_group.frontend.id]
  key_name             = local.key_name
  iam_instance_profile = aws_iam_instance_profile.frontend_profile.name

  # Root block device with GP3 encryption
  root_block_device {
    volume_type           = "gp3"
    volume_size           = 30
    encrypted             = true
    delete_on_termination = true

    tags = {
      Name = "${var.project_name}-${var.environment}-frontend-ebs"
    }
  }

  user_data = templatefile("${path.module}/user-data/frontend.sh", {
    project_name       = var.project_name
    environment        = var.environment
    domain_name        = var.domain_name
    backend_private_ip = aws_instance.backend.private_ip
    git_repo_url       = var.git_repo_url
    nginx_config       = templatefile("${path.module}/templates/nginx-frontend.conf", {
      domain_name        = var.domain_name
      backend_private_ip = aws_instance.backend.private_ip
    })
  })

  tags = {
    Name = "${var.project_name}-${var.environment}-frontend-server"
    Role = "Frontend"
    Tier = "Public"
  }

  depends_on = [aws_instance.backend]
}

# ── Elastic IP for Static Public Access to EC2 #1 Frontend ──────────────────
resource "aws_eip" "frontend" {
  instance = aws_instance.frontend.id
  domain   = "vpc"

  tags = {
    Name = "${var.project_name}-${var.environment}-frontend-eip"
  }

  depends_on = [aws_internet_gateway.igw]
}
