output "frontend_public_ip" {
  description = "Public Elastic IP address of EC2 #1 Frontend Server"
  value       = aws_eip.frontend.public_ip
}

output "frontend_public_dns" {
  description = "Public DNS hostname of EC2 #1 Frontend Server"
  value       = aws_instance.frontend.public_dns
}

output "backend_private_ip" {
  description = "Private IP address of EC2 #2 Backend Server (Isolated, no public IP)"
  value       = aws_instance.backend.private_ip
}

output "s3_deliverables_bucket" {
  description = "Private S3 Bucket for Protected Project ZIPs, CAD, and Reports"
  value       = aws_s3_bucket.deliverables.id
}

output "s3_backups_bucket" {
  description = "Private S3 Bucket for Automated Daily PostgreSQL Database Dumps"
  value       = aws_s3_bucket.backups.id
}

output "website_url" {
  description = "HA Labs primary platform website URL"
  value       = "http://${var.domain_name}"
}

output "ssh_frontend_command" {
  description = "Command to SSH into EC2 #1 Frontend Server"
  value       = "ssh -i ${local.key_pem_file} ubuntu@${aws_eip.frontend.public_ip}"
}

output "ssm_backend_session_command" {
  description = "Command to securely open an interactive shell on EC2 #2 via AWS Systems Manager without SSH"
  value       = "aws ssm start-session --target ${aws_instance.backend.id} --region ${var.aws_region}"
}

output "ssm_parameters_path" {
  description = "AWS SSM Parameter Store root path where database & JWT secrets are encrypted"
  value       = "/${var.project_name}/${var.environment}/"
}
