# ── EC2 #2: Backend Server + PostgreSQL Database (Private Subnet) ───────────
resource "aws_instance" "backend" {
  ami                  = local.ami_id
  instance_type        = var.backend_instance_type
  subnet_id            = aws_subnet.private.id
  vpc_security_group_ids = [aws_security_group.backend.id]
  key_name             = local.key_name
  iam_instance_profile = aws_iam_instance_profile.backend_profile.name

  # Root block device with GP3 encryption
  root_block_device {
    volume_type           = "gp3"
    volume_size           = 40
    encrypted             = true
    delete_on_termination = false

    tags = {
      Name = "${var.project_name}-${var.environment}-backend-ebs"
    }
  }

  user_data = templatefile("${path.module}/user-data/backend.sh", {
    project_name           = var.project_name
    environment            = var.environment
    aws_region             = var.aws_region
    db_name                = var.db_name
    db_user                = var.db_user
    db_password            = var.db_password != "" ? var.db_password : random_password.db_password.result
    jwt_secret             = var.jwt_secret != "" ? var.jwt_secret : random_password.jwt_secret.result
    s3_deliverables_bucket = aws_s3_bucket.deliverables.id
    s3_backups_bucket      = aws_s3_bucket.backups.id
    frontend_private_ip    = aws_subnet.public.cidr_block
    git_repo_url           = var.git_repo_url
  })

  tags = {
    Name = "${var.project_name}-${var.environment}-backend-server"
    Role = "Backend & Database"
    Tier = "Private"
  }
}
