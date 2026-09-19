-- =============================================================================
-- HA LABS — PRODUCTION POSTGRESQL DATABASE SCHEMA (EC2 #2)
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── 1. Users Table (Students, Builders, Admins) ──────────────────────────────
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'buyer' CHECK (role IN ('buyer', 'builder', 'admin', 'staff')),
    college VARCHAR(255),
    department VARCHAR(50) DEFAULT 'ECE',
    phone VARCHAR(50),
    avatar_initials VARCHAR(10),
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ── 2. Projects Table (120 Engineering Projects & Builder Submissions) ───────
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    tagline TEXT,
    description TEXT,
    department VARCHAR(50) NOT NULL CHECK (department IN ('ECE', 'EEE', 'CSE', 'IT', 'AI & DS', 'MECH', 'CIVIL', 'AIDS / AIML')),
    category VARCHAR(100) NOT NULL,
    difficulty VARCHAR(50) NOT NULL CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced')),
    price NUMERIC(10, 2) NOT NULL DEFAULT 4999.00,
    status VARCHAR(50) NOT NULL DEFAULT 'pending' CHECK (status IN ('draft', 'pending', 'published', 'rejected')),
    builder_id UUID REFERENCES users(id) ON DELETE SET NULL,
    s3_code_key VARCHAR(500),
    s3_pcb_key VARCHAR(500),
    s3_report_key VARCHAR(500),
    s3_viva_key VARCHAR(500),
    s3_bom_key VARCHAR(500),
    technologies TEXT[],
    hardware TEXT[],
    features TEXT[],
    views_count INTEGER DEFAULT 0,
    sales_count INTEGER DEFAULT 0,
    admin_review_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ── 3. Orders Table (Purchases, Add-ons, GST) ────────────────────────────────
CREATE TABLE IF NOT EXISTS orders (
    id VARCHAR(100) PRIMARY KEY,
    buyer_id UUID REFERENCES users(id) ON DELETE SET NULL,
    project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
    amount NUMERIC(10, 2) NOT NULL,
    base_price NUMERIC(10, 2) NOT NULL DEFAULT 4999.00,
    addons JSONB DEFAULT '[]'::jsonb,
    gst_amount NUMERIC(10, 2) NOT NULL,
    payment_method VARCHAR(50) DEFAULT 'UPI',
    payment_status VARCHAR(50) NOT NULL DEFAULT 'Processing' CHECK (payment_status IN ('Processing', 'Completed', 'Failed', 'Refunded')),
    transaction_reference VARCHAR(255),
    invoice_number VARCHAR(100) UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ── 4. Licenses Table (Authorized Project Ownership for Protected Downloads) ─
CREATE TABLE IF NOT EXISTS licenses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id VARCHAR(100) REFERENCES orders(id) ON DELETE CASCADE,
    buyer_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    license_key VARCHAR(255) UNIQUE NOT NULL,
    license_type VARCHAR(100) DEFAULT 'Single-Team Academic Capstone License',
    version VARCHAR(20) DEFAULT 'v1.2',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ── 5. Protected Downloads Audit Log (Tracks S3 Access) ──────────────────────
CREATE TABLE IF NOT EXISTS download_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    license_id UUID REFERENCES licenses(id) ON DELETE SET NULL,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
    file_type VARCHAR(50) NOT NULL, -- 'code', 'pcb', 'report', 'viva', 'bom'
    ip_address VARCHAR(100),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ── 6. Builder Payouts & Royalty Ledger (85% Creator Model) ──────────────────
CREATE TABLE IF NOT EXISTS builder_payouts (
    id VARCHAR(100) PRIMARY KEY,
    builder_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    order_id VARCHAR(100) REFERENCES orders(id) ON DELETE CASCADE,
    gross_amount NUMERIC(10, 2) NOT NULL,
    creator_share_percentage NUMERIC(5, 2) DEFAULT 85.00,
    net_payout NUMERIC(10, 2) NOT NULL,
    platform_commission NUMERIC(10, 2) NOT NULL,
    bank_account VARCHAR(100),
    ifsc_code VARCHAR(50),
    payout_status VARCHAR(50) NOT NULL DEFAULT 'Pending' CHECK (payout_status IN ('Pending', 'Processing', 'Disbursed')),
    disbursed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ── 7. Seed Initial Verified Users ───────────────────────────────────────────
INSERT INTO users (id, name, email, password_hash, role, college, department, phone, avatar_initials, is_verified)
VALUES
    ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Ajith Kumar', 'ajith@student.halabs.tech', '$2b$10$3zRjK9aK8g3n...dummyhash', 'buyer', 'Anna University (CEG)', 'ECE', '+91 8778954899', 'AK', TRUE),
    ('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22', 'Harish Kumar', 'harish@builder.halabs.tech', '$2b$10$3zRjK9aK8g3n...dummyhash', 'builder', 'PSG College of Technology', 'EEE', '+91 9342540464', 'HK', TRUE),
    ('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a33', 'HA Labs Core Admin', 'admin@halabs.tech', '$2b$10$3zRjK9aK8g3n...dummyhash', 'admin', 'HA Labs HQ', 'All', '+91 8778954899', 'HA', TRUE)
ON CONFLICT (email) DO NOTHING;

-- ── 8. Indexes for High Performance ──────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_dept ON projects(department);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_orders_buyer ON orders(buyer_id);
CREATE INDEX IF NOT EXISTS idx_licenses_buyer_project ON licenses(buyer_id, project_id);
CREATE INDEX IF NOT EXISTS idx_payouts_builder ON builder_payouts(builder_id);
