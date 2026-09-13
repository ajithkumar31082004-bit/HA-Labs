import React from 'react';
import Link from 'next/link';
import { HeroPipeline } from '@/components/HeroPipeline';
import { RecommendationEngine } from '@/components/RecommendationEngine';
import { ProjectBuilder } from '@/components/ProjectBuilder';
import { AiAssistant } from '@/components/AiAssistantModal';
import { ProjectCard } from '@/components/ProjectCard';
import { PROJECTS_DATA } from '@/data/projects';
import {
  Search,
  Brain,
  Wrench,
  Code2,
  Cloud,
  Mic,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Check,
  Building2,
  Users2,
  BookOpen,
  Laptop,
  Terminal,
  Server,
  Activity,
  Award,
  GitBranch,
  HelpCircle,
  Clock,
  Zap
} from 'lucide-react';

export default function HomePage() {
  const flagshipProjects = PROJECTS_DATA.filter((p) => p.isFlagship);

  const coreFeatures = [
    {
      icon: Search,
      title: 'Find the Right Project',
      desc: 'Filter verified engineering systems by your branch, budget constraints, timeline, and lab requirements.',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      icon: Brain,
      title: 'Smart Recommendations',
      desc: 'Our matching engine pairs your existing programming and hardware skill set to high-probability success builds.',
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    },
    {
      icon: Wrench,
      title: 'Hardware Guidance',
      desc: 'Verified pinout diagrams, Bill of Materials (BOM), safe voltage regulation, and debounce filtering circuits.',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: Code2,
      title: 'Real Source Code',
      desc: 'Production-structured microcontrollers (C++/FreeRTOS) and full-stack cloud codebases. Clean, commented, and modular.',
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      icon: Cloud,
      title: 'Cloud Deployment',
      desc: 'Deploy live telemetry to AWS EC2, IoT Core, Docker containers, and live web dashboards for examiner demos.',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: Mic,
      title: 'Viva Preparation',
      desc: 'Curated technical question banks, examiner trap questions, architecture defenses, and formatted project reports.',
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
  ];

  const projectCategories = [
    {
      title: 'Mini Projects',
      budget: '₹500–₹2,000',
      examples: ['Smart Street Light', 'Automatic Door', 'Temperature Monitoring', 'Smart Dustbin', 'Fire Detection'],
      href: '/projects?type=mini',
      badge: 'Rapid Build',
    },
    {
      title: 'Major Projects',
      budget: '₹2,000–₹10,000+',
      examples: ['Smart Parking System', 'Smart Agriculture', 'Industrial IoT', 'EV Monitoring'],
      href: '/projects?type=major',
      badge: 'Capstone Grade',
    },
    {
      title: 'IoT & Embedded',
      budget: 'ESP32 • Arduino • Pi',
      examples: ['MQTT Telemetry', 'AWS IoT Core', 'Sensor Calibration', 'LoRa Mesh'],
      href: '/projects?category=IoT',
      badge: 'Hardware + Cloud',
    },
    {
      title: 'Software Systems',
      budget: 'Web • Mobile • DevOps',
      examples: ['Web Applications', 'Mobile Telemetry', 'Docker Containers', 'Microservices'],
      href: '/projects?category=Web',
      badge: 'Full Stack',
    },
    {
      title: 'AI & ML Systems',
      budget: 'Computer Vision • NLP',
      examples: ['YOLO Object Detection', 'MediaPipe Driver Alert', 'Demand Prediction', 'Edge ONNX'],
      href: '/projects?category=AI/ML',
      badge: 'Edge Neural Nets',
    },
    {
      title: 'Cloud & DevOps',
      budget: 'AWS • K8s • CI/CD',
      examples: ['Terraform IaC', 'Kubernetes Clusters', 'Kafka Streaming', 'Prometheus & Grafana'],
      href: '/projects?category=Cloud',
      badge: 'Enterprise Grade',
    },
  ];

  const howItWorksSteps = [
    { num: '01', title: 'Choose', desc: 'Tell us your branch, budget, hardware preferences, and academic difficulty level.' },
    { num: '02', title: 'Discover', desc: 'Get algorithmic project recommendations tailored to your syllabus and lab constraints.' },
    { num: '03', title: 'Plan', desc: 'Inspect circuit block diagrams, BOM cost estimations, and week-by-week roadmaps.' },
    { num: '04', title: 'Build', desc: 'Follow step-by-step firmware tutorials, breadboard wiring guides, and code setups.' },
    { num: '05', title: 'Deploy', desc: 'Host real-time telemetry on AWS, configure Docker containers, and test live webhooks.' },
    { num: '06', title: 'Document', desc: 'Generate standardized IEEE project reports, block diagrams, and presentation PPT slides.' },
    { num: '07', title: 'Present', desc: 'Practice with specialized viva question banks and defend your architecture with confidence.' },
  ];

  const supportCategories = [
    'Hardware Debugging',
    'Software Debugging',
    'Cloud Deployment',
    'Database Issues',
    'Docker Setup',
    'AWS Cloud',
    'Git & GitHub',
    'Documentation',
    'Project Review',
    'Viva Preparation',
  ];

  const sampleMentors = [
    {
      name: 'K. R. Vignesh',
      specialization: 'Embedded Systems & IoT',
      focus: 'ESP32, FreeRTOS, LoRa & PCB Design',
      experience: 'Senior Firmware Engineer (Ex-Bosch)',
      availability: 'Weekends • Project Reviews',
    },
    {
      name: 'Naveen Rajan',
      specialization: 'Cloud & DevOps Infrastructure',
      focus: 'AWS EKS, Terraform, Docker & CI/CD',
      experience: 'Cloud Platform Architect',
      availability: 'Evenings • Architecture Review',
    },
    {
      name: 'Divya Sundaram',
      specialization: 'Edge AI & Computer Vision',
      focus: 'PyTorch, YOLOv8, Jetson & OpenCV',
      experience: 'Computer Vision Research Specialist',
      availability: 'Flexible • ML Pipeline Debugging',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* ============================================================ */}
      {/* 3. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        {/* Ambient Top Lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-hero-glow pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 left-10 w-80 h-80 bg-brand-indigo/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-50 border border-brand-cyan/30 text-xs font-mono text-brand-cyan mb-6 shadow-glow-cyan animate-in fade-in duration-500">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="font-semibold tracking-wider uppercase">ENGINEERING PROJECT PLATFORM</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
            From Project Idea to <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Working Prototype.</span>
          </h1>

          {/* Highlight Phrase */}
          <p className="mt-4 text-xl sm:text-2xl font-bold text-slate-300 font-mono tracking-wide">
            Build. Deploy. Learn.
          </p>

          {/* Supporting Statement */}
          <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            HA Labs helps engineering students discover the right project, plan the implementation, build the prototype, deploy real applications, and prepare for documentation, reviews, and viva.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 group transition-all duration-200"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#recommendation-engine"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-surface-50 hover:bg-surface-100 border border-white/15 text-slate-200 hover:text-white font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Build With HA Labs</span>
              <Sparkles className="w-4 h-4 text-brand-cyan" />
            </Link>
          </div>

          {/* Hero Visual Pipeline with Floating Cards */}
          <HeroPipeline />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CORE VALUE PROPOSITION                                    */}
      {/* ============================================================ */}
      <section className="py-20 relative bg-[#070b16] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering projects shouldn't stop at an idea.
            </h2>
            <p className="mt-4 text-base text-slate-400 leading-relaxed">
              Students don't just need project topics. They need a clear path from choosing the right project to building, testing, deploying, documenting, and presenting it.
            </p>
          </div>

          {/* 6 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0a1020]/90 border border-white/10 hover:border-brand-cyan/40 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-cyan group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${feat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. RECOMMENDATION ENGINE                                     */}
      {/* ============================================================ */}
      <RecommendationEngine />

      {/* ============================================================ */}
      {/* 6. PROJECT CATEGORIES                                        */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#060913]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-mono mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>TAXONOMY & HARDWARE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Explore Engineering Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-brand-cyan hover:underline font-mono text-sm"
            >
              <span>View full 20+ catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectCategories.map((cat, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#090f20] border border-white/10 p-6 flex flex-col justify-between hover:border-brand-cyan/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded border border-brand-cyan/20">
                      {cat.budget}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {cat.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {cat.title}
                  </h3>
                  <div className="space-y-1.5 mb-6">
                    {cat.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={cat.href}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-brand-cyan hover:text-black text-slate-300 font-medium text-xs border border-white/10 hover:border-brand-cyan transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore {cat.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. FEATURED PROJECTS                                         */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#070c18] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>⭐ 5 FLAGSHIP DEMONSTRATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Projects Built for Real-World Learning
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore the five flagship engineering builds showcasing IoT, Cloud, Edge AI, and DevOps: <strong className="text-white">Smart Parking System</strong>, <strong className="text-white">Smart Agriculture</strong>, <strong className="text-white">Smart Energy Monitoring</strong>, <strong className="text-white">AI CCTV Surveillance</strong>, and <strong className="text-white">DevOps CI/CD Web Application</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flagshipProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-sm transition-all"
            >
              <span>View All Projects in Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. HOW IT WORKS TIMELINE                                     */}
      {/* ============================================================ */}
      <section id="how-it-works" className="py-20 bg-[#050814] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-mono mb-3">
              <GitBranch className="w-3.5 h-3.5" />
              <span>THE 7-PHASE FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              One platform. Your entire project journey.
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              From day one of ideation to final viva presentation, HA Labs gives you an uninterrupted roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {howItWorksSteps.map((step, i) => (
              <div
                key={i}
                className="relative rounded-2xl bg-[#090f20]/70 border border-white/10 p-5 flex flex-col justify-between hover:border-brand-cyan/40 transition-all group"
              >
                <div>
                  <span className="text-2xl font-black font-mono text-brand-cyan/40 group-hover:text-brand-cyan transition-colors">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5">
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-cyan rounded-full"
                      style={{ width: `${((i + 1) / 7) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. PROJECT BUILDER (MODULAR CUSTOMIZER)                      */}
      {/* ============================================================ */}
      <ProjectBuilder />

      {/* ============================================================ */}
      {/* 10. SPECIALIZED AI ASSISTANT                                 */}
      {/* ============================================================ */}
      <AiAssistant />

      {/* ============================================================ */}
      {/* 11. STUDENT DASHBOARD PREVIEW                                */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#060913] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-3">
              <Laptop className="w-3.5 h-3.5" />
              <span>STUDENT WORKSPACE PREVIEW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Everything your project needs, in one workspace.
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Track your build progress, download circuit schematics, simulate viva examinations, and request mentor debugging assistance in a unified SaaS interface.
            </p>
          </div>

          {/* Interactive Workspace Window */}
          <div className="max-w-5xl mx-auto rounded-3xl bg-[#090f20] border border-white/15 shadow-2xl overflow-hidden">
            {/* Top Bar */}
            <div className="px-6 py-3.5 bg-[#0d162d] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-300 font-semibold pl-2">
                  HA Labs Student Workspace — portal.halabs.tech
                </span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                Pro Student
              </span>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Main Active Project Card */}
              <div className="p-6 rounded-2xl bg-[#0c152a] border border-brand-cyan/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-glow-cyan">
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-brand-cyan/20 text-brand-cyan font-bold">
                      ACTIVE PROJECT
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Final Year • ECE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Smart Parking System</h3>
                  <p className="text-xs text-slate-400">
                    ESP32 + Ultrasonic Sonar Array + AWS EC2 Telemetry Pipeline
                  </p>

                  {/* Progress Bar */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1.5">
                      <span>Build Milestone Completion</span>
                      <span className="font-bold text-brand-cyan">75%</span>
                    </div>
                    <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden border border-white/10">
                      <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-3/4" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full lg:w-auto">
                  <Link
                    href="/dashboard"
                    className="px-5 py-2.5 rounded-xl bg-brand-cyan hover:bg-cyan-300 text-black font-bold text-xs text-center transition-all"
                  >
                    Open Active Workspace
                  </Link>
                  <Link
                    href="/projects/smart-parking-system"
                    className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs text-center transition-colors"
                  >
                    View Project Details
                  </Link>
                </div>
              </div>

              {/* Checklist & Micro-Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Checklist column */}
                <div className="md:col-span-2 p-5 rounded-2xl bg-black/30 border border-white/10 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    Milestone Checklist
                  </span>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span className="line-through text-slate-400">Requirements & Scope Analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span className="line-through text-slate-400">Hardware Setup & Breadboard Calibration</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span className="line-through text-slate-400">Backend API & Database Schemas</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span className="line-through text-slate-400">Frontend Dashboard Heatmap</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                      <ArrowRight className="w-4 h-4 flex-shrink-0 text-cyan-400 animate-pulse" />
                      <span>AWS Cloud Deployment (In Progress)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>Documentation & Viva Preparation</span>
                    </div>
                  </div>
                </div>

                {/* Micro Card 1: Next Task */}
                <div className="p-4 rounded-2xl bg-black/30 border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">
                      Next Step
                    </span>
                    <h4 className="text-sm font-bold text-white">Cloud Deployment</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Run Docker container on EC2 instance and bind DNS.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-brand-cyan mt-3 block">
                    Estimated 2 hours
                  </span>
                </div>

                {/* Micro Card 2: Downloads & Support */}
                <div className="p-4 rounded-2xl bg-black/30 border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">
                      Package Assets
                    </span>
                    <h4 className="text-sm font-bold text-white">8 Files Available</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Source code, circuit schematic, IEEE report template, PPT slides.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 mt-3 block">
                    All assets verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. STUDENT SUPPORT                                          */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#070b16] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Stuck? Don't stop building.
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Real engineering involves debugging. Whether it is a frozen I2C bus, a Docker container crashing on AWS, or preparing tough answers for external examiners, we provide direct engineering support.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto mb-10">
            {supportCategories.map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-surface-50 border border-white/10 text-xs font-mono text-slate-300 hover:border-brand-cyan/40 hover:text-white transition-colors"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/signup?ref=support"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all"
            >
              <span>Get Project Support</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 13. FOR COLLEGES                                             */}
      {/* ============================================================ */}
      <section id="colleges" className="py-20 bg-[#060913] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-indigo-300 text-xs font-mono">
                <Building2 className="w-3.5 h-3.5" />
                <span>INSTITUTIONAL PARTNERSHIPS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                A project ecosystem for colleges, too.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Give faculty a better way to manage student projects, teams, reviews, progress, and documentation. Eliminate fake copy-pasted projects with verified milestone repositories and reproducible live demonstrations.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Department Dashboard:</strong> Track all batch projects across ECE, EEE, CSE, IT, and AI & DS in one screen.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Plagiarism Elimination:</strong> Verified GitHub commit histories and hardware build logs.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Review Milestone Automation:</strong> Standardized PPT rubrics, thesis formats, and evaluation metrics.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/colleges"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all"
                >
                  <span>Explore College Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Mock Faculty Review Dashboard */}
            <div className="lg:col-span-6 rounded-3xl bg-[#0b1326] border border-white/15 p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Users2 className="w-4 h-4 text-brand-cyan" />
                  <span className="text-sm font-bold text-white">Faculty Project Review Panel</span>
                </div>
                <span className="text-xs font-mono text-slate-400">Department: ECE / CSE</span>
              </div>

              {/* Team Progress Rows */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold">Team 01 — Smart Parking System</span>
                    <span className="text-emerald-400 font-bold">80% On Track</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-4/5" />
                  </div>
                  <span className="text-[11px] text-slate-400 block">Milestone: AWS Cloud Telemetry Verified</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold">Team 02 — Smart Agriculture & Soil IoT</span>
                    <span className="text-sky-400 font-bold">65% Progress</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-400 rounded-full w-2/3" />
                  </div>
                  <span className="text-[11px] text-slate-400 block">Milestone: Relay Valve & MQTT Integration</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold">Team 03 — EV Charging Load Balancer</span>
                    <span className="text-emerald-400 font-bold">92% Ready</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[92%]" />
                  </div>
                  <span className="text-[11px] text-slate-400 block">Milestone: Pre-Viva Mock Scheduled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 14. PRICING                                                  */}
      {/* ============================================================ */}
      <section id="pricing" className="py-20 bg-[#070b16] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSPARENT PRICING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Start free. Build when you're ready.
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              No hidden fees. Honest engineering pricing designed for student budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Plan 1: FREE */}
            <div className="rounded-3xl bg-[#090f20] border border-white/10 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
                  FREE
                </span>
                <div className="mt-3 mb-6">
                  <span className="text-4xl font-extrabold text-white font-mono">₹0</span>
                  <span className="text-xs text-slate-400 ml-2">Forever free</span>
                </div>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Discover topics, check architecture diagrams, and plan your semester roadmap.
                </p>

                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>Project ideas & problem statements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>Technology & component specifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>Estimated budgets and difficulty levels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>System architecture flowcharts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>Basic algorithmic recommendations</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/projects"
                className="mt-8 w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs text-center transition-colors"
              >
                Explore Free Projects
              </Link>
            </div>

            {/* Plan 2: STUDENT (HIGHLIGHTED) */}
            <div className="rounded-3xl bg-gradient-to-b from-[#111c34] to-[#0a1020] border-2 border-brand-cyan p-8 flex flex-col justify-between shadow-glow-cyan relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-cyan text-black font-mono font-bold text-xs">
                MOST POPULAR FOR STUDENTS
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-bold">
                  STUDENT PACKAGE
                </span>
                <div className="mt-3 mb-6">
                  <span className="text-4xl font-extrabold text-white font-mono">₹499–₹999</span>
                  <span className="text-xs text-slate-400 ml-2">Per project package</span>
                </div>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  The complete production starter pack to build, debug, and document your semester project.
                </p>

                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>Full verified source code repositories</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>High-res circuit diagrams & pinout sheets</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>IEEE standard project report template (DOCX)</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>Review presentation PPT templates</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>Setup & driver installation guides</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>Curated viva defense questions & answers</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/projects"
                className="mt-8 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs text-center shadow-lg shadow-cyan-500/25 transition-all"
              >
                Get Student Package
              </Link>
            </div>

            {/* Plan 3: PREMIUM */}
            <div className="rounded-3xl bg-[#090f20] border border-white/10 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
                  PREMIUM
                </span>
                <div className="mt-3 mb-6">
                  <span className="text-4xl font-extrabold text-white font-mono">₹1,999–₹5,000+</span>
                  <span className="text-xs text-slate-400 ml-2">With engineer mentorship</span>
                </div>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  For advanced final year capstones requiring customized hardware, AWS deployments, and 1-on-1 debugging.
                </p>

                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>Everything in Student package</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>Custom sensor & hardware adaptation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>Live 1-on-1 engineer debugging sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>Live cloud deployment assistance (AWS/Docker)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-cyan" />
                    <span>Pre-viva mock review & defense coaching</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/signup?ref=premium"
                className="mt-8 w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs text-center transition-colors"
              >
                Talk to HA Labs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 15. MENTORS                                                  */}
      {/* ============================================================ */}
      <section id="mentors" className="py-20 bg-[#060913] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-mono mb-3">
              <Users2 className="w-3.5 h-3.5" />
              <span>PRACTITIONER NETWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Connect with people who build.
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Learn from engineers working across IoT, Embedded systems, Cloud, DevOps, AI, and Robotics. (Sample demo profiles below)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sampleMentors.map((mentor, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0a1020] border border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-surface-100 border border-brand-cyan/30 flex items-center justify-center font-bold text-brand-cyan font-mono">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-[10px] font-mono bg-white/5 px-2 py-0.5 rounded text-slate-400">
                      Sample Profile
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{mentor.name}</h3>
                  <p className="text-xs font-semibold text-brand-cyan mt-0.5">{mentor.specialization}</p>
                  <p className="text-xs text-slate-400 mt-2">{mentor.experience}</p>
                  <div className="mt-4 p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] font-mono text-slate-300">
                    Focus: {mentor.focus}
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 text-[11px] text-slate-400 font-mono">
                  {mentor.availability}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/signup?ref=mentorship"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold transition-all"
            >
              <span>Explore Mentorship Network</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 16. RESOURCES PREVIEW                                        */}
      {/* ============================================================ */}
      <section id="resources" className="py-20 bg-[#070c18] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>KNOWLEDGE BASE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Developer & Engineering Resources
              </h2>
            </div>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-brand-cyan hover:underline font-mono text-sm"
            >
              <span>View all guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { title: 'ESP32 Wi-Fi & BLE Guide', desc: 'ADC calibration, deep sleep, and FreeRTOS tasks.' },
              { title: 'AWS Cloud Deployment', desc: 'EC2 setup, security groups, and Docker swarm.' },
              { title: 'Docker for Students', desc: 'Containerizing Node.js, Python, and MySQL.' },
              { title: 'Viva Defense Handbook', desc: 'Top 50 examiner traps and model answers.' },
              { title: 'Git & GitHub Workflows', desc: 'Branches, pull requests, and commit discipline.' },
              { title: 'Arduino Sensor Basics', desc: 'Debounce timers, analog sampling, and I2C.' },
              { title: 'IEEE Project Report Kit', desc: 'Abstract, literature survey, and bibtex formatting.' },
              { title: 'Linux Server Cheat Sheet', desc: 'SSH keys, systemd services, and journalctl logs.' },
            ].map((res, i) => (
              <Link
                key={i}
                href="/resources"
                className="p-4 rounded-xl bg-[#0a1020] border border-white/10 hover:border-brand-cyan/40 transition-all group"
              >
                <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors mb-1">
                  {res.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {res.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 17. ABOUT HA LABS & FOUNDERS                                 */}
      {/* ============================================================ */}
      <section id="about" className="py-20 bg-[#050814] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>THE FOUNDING TEAM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Built by engineers. For engineers.
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              HA Labs was founded by Harish and Ajithkumar to bridge the gap between abstract textbook theory and real, working, deployable technology systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder 1: Ajithkumar */}
            <div className="p-8 rounded-3xl bg-[#090f20] border border-brand-cyan/30 shadow-glow-cyan space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-bold">
                    TECHNICAL / PRODUCT
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">Ajithkumar</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center font-bold text-brand-cyan font-mono text-lg">
                  A
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Leads technical architecture, cloud deployments, developer infrastructure, and platform systems.
              </p>

              <div className="pt-2">
                <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider block mb-2">
                  Areas of Focus:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Cloud', 'DevOps', 'AWS', 'AI', 'Backend', 'Infrastructure', 'Deployment', 'Security'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Founder 2: Harish */}
            <div className="p-8 rounded-3xl bg-[#090f20] border border-white/15 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
                    BUSINESS / PROJECT / OPERATIONS
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">Harish</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center font-bold text-white font-mono text-lg">
                  H
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Leads project research, hardware engineering validation, student requirements, testing protocols, and college relationships.
              </p>

              <div className="pt-2">
                <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider block mb-2">
                  Areas of Focus:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Project Research',
                    'Hardware',
                    'Student Requirements',
                    'Documentation',
                    'Testing',
                    'Operations',
                    'Customer Support',
                    'College Relationships'
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 18. MISSION & FUTURE VISION                                  */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#070b16] border-t border-white/5 relative tech-grid-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>OUR MISSION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            "Make engineering projects more practical, accessible, and real-world focused."
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We believe students shouldn't spend their final year searching for disconnected, broken project files. They should have a clear path to build something meaningful that they understand down to the transistor and API call.
          </p>

          {/* Future Ecosystem Pipeline */}
          <div className="pt-10">
            <div className="p-6 rounded-3xl bg-[#090f20]/90 border border-white/10 max-w-3xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                We're building more than a project marketplace.
              </span>
              <p className="text-xs text-slate-300 mb-6">
                HA Labs aims to become an engineering project ecosystem connecting students, projects, hardware, mentors, colleges, and technology.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
                {['Students', 'Projects', 'Hardware', 'Software', 'Cloud', 'Mentors', 'Colleges', 'AI'].map((node, i, arr) => (
                  <React.Fragment key={node}>
                    <span className="px-3 py-1 rounded-lg bg-surface-50 border border-white/10 text-white font-semibold">
                      {node}
                    </span>
                    {i < arr.length - 1 && <span className="text-brand-cyan font-bold">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 19. FINAL CTA                                                */}
      {/* ============================================================ */}
      <section className="py-24 bg-gradient-to-b from-[#070b16] to-[#04060d] border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Your next project starts here.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-xl mx-auto leading-relaxed">
            Don't just submit a project. Build something you understand.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2 transition-all"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-surface-50 hover:bg-surface-100 border border-white/20 text-white font-semibold text-base transition-all"
            >
              Start Building
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span>✓ Verified Schematics</span>
            <span>✓ Real Source Code</span>
            <span>✓ Viva Defense Ready</span>
          </div>
        </div>
      </section>
    </div>
  );
}
