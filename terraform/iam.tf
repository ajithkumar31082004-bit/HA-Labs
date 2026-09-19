# ── IAM Role for EC2 Instances ──────────────────────────────────────────────
resource "aws_iam_role" "ec2_role" {
  name = "${var.project_name}-${var.environment}-ec2-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      }
    ]
  })

  tags = {
    Name = "${var.project_name}-${var.environment}-ec2-role"
  }
}

# ── Attach AWS Systems Manager (SSM) Policy for secure terminal session ─────
resource "aws_iam_role_policy_attachment" "ssm_policy" {
  role       = aws_iam_role.ec2_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

# ── S3 & SSM Custom Policy for HA Labs ──────────────────────────────────────
resource "aws_iam_policy" "ec2_custom_policy" {
  name        = "${var.project_name}-${var.environment}-custom-policy"
  description = "Allows HA Labs instances to read/write deliverables in S3 and fetch secrets from SSM"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "S3DeliverablesAccess"
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:ListBucket",
          "s3:DeleteObject"
        ]
        Resource = [
          aws_s3_bucket.deliverables.arn,
          "${aws_s3_bucket.deliverables.arn}/*",
          aws_s3_bucket.backups.arn,
          "${aws_s3_bucket.backups.arn}/*"
        ]
      },
      {
        Sid    = "SSMParametersAccess"
        Effect = "Allow"
        Action = [
          "ssm:GetParameter",
          "ssm:GetParameters",
          "ssm:GetParametersByPath"
        ]
        Resource = "arn:aws:ssm:${var.aws_region}:*:parameter/${var.project_name}/${var.environment}/*"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "custom_policy_attach" {
  role       = aws_iam_role.ec2_role.name
  policy_arn = aws_iam_policy.ec2_custom_policy.arn
}

# ── EC2 Instance Profiles ───────────────────────────────────────────────────
resource "aws_iam_instance_profile" "frontend_profile" {
  name = "${var.project_name}-${var.environment}-frontend-profile"
  role = aws_iam_role.ec2_role.name
}

resource "aws_iam_instance_profile" "backend_profile" {
  name = "${var.project_name}-${var.environment}-backend-profile"
  role = aws_iam_role.ec2_role.name
}
