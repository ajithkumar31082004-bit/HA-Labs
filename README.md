# HA Labs — Engineering Projects Platform

> **Engineering Projects. Built for Reality.**  
> Find it. Build it. Deploy it.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-Ready-0db7ed?logo=docker)](https://docker.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

## About HA Labs

HA Labs is an engineering project ecosystem founded by **Harish** and **Ajithkumar** to help engineering students go from:

**Idea → Plan → Build → Test → Deploy → Document → Present**

The platform covers 20+ verified, reproducible engineering projects spanning IoT, Embedded Systems, AI/ML, Cloud, DevOps, Robotics, and Cybersecurity — each with:

- ✅ Full source code (firmware + backend + frontend)
- ✅ Verified circuit schematics + BOM
- ✅ Step-by-step architecture diagrams
- ✅ AWS + Docker deployment configs
- ✅ IEEE project report templates
- ✅ Viva Q&A defense bank

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 (App Router + SSG) |
| Styling | Tailwind CSS v3 |
| Language | TypeScript 5 |
| Data | Static (`src/data/projects.ts`) |
| Deployment | Docker + Nginx + AWS EC2 |
| CI/CD | GitHub Actions (`.github/workflows/deploy.yml`) |

---

## Local Development

### Prerequisites

- Node.js 20+
- npm 10+
- (Optional) Docker Desktop

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/ajithkumar31082004-bit/HA-Labs.git
cd HA-Labs

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 4. Start dev server
npm run dev
```

Visit **http://localhost:3000**

### Available Scripts

```bash
npm run dev       # Start development server (with HMR)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
npx tsc --noEmit  # TypeScript check
```

---

## Docker Deployment

### Production Build (Single Container)

```bash
# Build the image
docker build -t halabs-web:latest .

# Run
docker run -p 3000:3000 --env-file .env halabs-web:latest
```

### Full Stack with Nginx (Recommended)

```bash
# Start web + nginx
docker-compose up -d

# View logs
docker-compose logs -f web

# Stop
docker-compose down
```

### AWS EC2 Deployment

```bash
# SSH into EC2 instance
ssh -i your-key.pem ec2-user@YOUR_EC2_IP

# Pull latest code
git pull origin main

# Rebuild and restart
docker-compose down && docker-compose up -d --build

# Verify health
curl http://localhost:3000/api/health
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage (Landing Page)
│   ├── projects/
│   │   ├── page.tsx        # Project Marketplace (catalog)
│   │   └── [slug]/page.tsx # Dynamic project detail (SSG)
│   ├── dashboard/page.tsx  # Student Workspace
│   ├── admin/page.tsx      # Admin Console
│   ├── about/page.tsx      # About HA Labs
│   ├── colleges/page.tsx   # College Portal
│   ├── resources/page.tsx  # Learning Resources
│   └── api/                # API Routes
│       └── health/route.ts # Health check endpoint
│
├── components/             # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectGalleryViewer.tsx
│   ├── AiAssistantModal.tsx
│   ├── HeroPipeline.tsx
│   ├── RecommendationEngine.tsx
│   └── ProjectBuilder.tsx
│
├── data/
│   └── projects.ts         # All 20 project records + Project interface
│
└── lib/                    # Utility functions
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="HA Labs"

# Optional: API keys for future integrations
# OPENAI_API_KEY=
# DATABASE_URL=
# AWS_REGION=
# AWS_S3_BUCKET=
```

---

## Project Catalog (20 Projects)

| # | Project | Category | Budget | Difficulty |
|---|---|---|---|---|
| 1 | Smart Parking System | IoT | ₹3,500–₹5,000 | Intermediate |
| 2 | Smart Agriculture | IoT | ₹2,000–₹4,000 | Intermediate |
| 3 | Smart Energy Monitoring | IoT | ₹2,500–₹4,500 | Intermediate |
| 4 | EV Charging Monitor | IoT | ₹3,000–₹6,000 | Advanced |
| 5 | IoT Smart Home | IoT | ₹1,500–₹3,000 | Beginner |
| 6 | Fire & Gas Detection | IoT | ₹1,500–₹3,000 | Beginner |
| 7 | Smart Street Light | Embedded | ₹800–₹2,000 | Beginner |
| 8 | Smart Waste Management | IoT | ₹2,000–₹4,000 | Intermediate |
| 9 | RFID Attendance System | Embedded | ₹1,500–₹3,000 | Beginner |
| 10 | IoT Environment Monitor | IoT | ₹1,200–₹2,500 | Beginner |
| 11 | AI CCTV Surveillance | AI/ML | ₹4,000–₹8,000 | Advanced |
| 12 | Driver Drowsiness Alert | AI/ML | ₹3,000–₹6,000 | Advanced |
| 13 | Demand Forecasting | AI/ML | ₹500–₹1,000 | Intermediate |
| 14 | Autonomous Line Follower | Robotics | ₹2,000–₹4,000 | Intermediate |
| 15 | Quadruped Spider Bot | Robotics | ₹5,000–₹10,000 | Advanced |
| 16 | DevOps CI/CD Pipeline | DevOps | ₹0–₹500 | Intermediate |
| 17 | Kubernetes Monitoring | Cloud | ₹0–₹1,000 | Advanced |
| 18 | Network Security Scanner | Cybersecurity | ₹0–₹500 | Intermediate |
| 19 | E-Commerce Microservices | Web | ₹0–₹500 | Advanced |
| 20 | Blockchain Certificate | Web3 | ₹0–₹1,000 | Advanced |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit with descriptive messages: `git commit -m "feat: add project X"`
4. Push and open a Pull Request

---

## Founders

| | Name | Role |
|---|---|---|
| **A** | Ajithkumar | Technical Architecture, Cloud, DevOps, AI, Platform |
| **H** | Harish | Project Research, Hardware, Student Ops, Relationships |

---

## License

MIT License — © 2026 HA Labs. All rights reserved.

---

*Built with ❤️ for engineering students across Tamil Nadu and beyond.*
