# ── Route 53 DNS Configuration ──────────────────────────────────────────────

# Look up existing hosted zone if create_route53_zone is false
data "aws_route53_zone" "existing" {
  count        = var.create_route53_zone ? 0 : 1
  name         = var.domain_name
  private_zone = false
}

# Or create a new Route 53 zone if enabled
resource "aws_route53_zone" "new" {
  count = var.create_route53_zone ? 1 : 0
  name  = var.domain_name

  tags = {
    Name = "${var.project_name}-dns-zone"
  }
}

locals {
  zone_id = var.create_route53_zone ? aws_route53_zone.new[0].zone_id : data.aws_route53_zone.existing[0].zone_id
}

# Apex domain A Record (e.g. halabs.in -> EC2 #1 Elastic IP)
resource "aws_route53_record" "apex" {
  zone_id = local.zone_id
  name    = var.domain_name
  type    = "A"
  ttl     = 300
  records = [aws_eip.frontend.public_ip]
}

# WWW Subdomain A Record (e.g. www.halabs.in -> EC2 #1 Elastic IP)
resource "aws_route53_record" "www" {
  zone_id = local.zone_id
  name    = "www.${var.domain_name}"
  type    = "A"
  ttl     = 300
  records = [aws_eip.frontend.public_ip]
}
