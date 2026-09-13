import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS_DATA, Project } from '@/data/projects';
import { ProjectGalleryViewer } from '@/components/ProjectGalleryViewer';
import {
  Sparkles,
  ArrowLeft,
  Cpu,
  Layers,
  Clock,
  Users,
  DollarSign,
  CheckCircle2,
  Download,
  BookOpen,
  Server,
  Code2,
  Terminal,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Check,
  Lightbulb,
  AlertTriangle,
  Zap,
  Image as ImageIcon,
  Monitor,
  Cloud,
  ChevronRight,
  ExternalLink,
  Box
} from 'lucide-react';

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Use dynamic package contents from project data or fallback
  const deliverables = project.packageContents && project.packageContents.length > 0 
    ? project.packageContents 
    : [
        'Full Commented Source Code (Firmware, APIs & Frontend)',
        'Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring',
        'System Architecture & Dataflow Sequence Diagrams',
        'Relational Database Schema & Data Migration Files',
        'Interactive REST & MQTT API Documentation',
        'Hardware Component Bill of Materials & Datasheets',
        'Docker Container Configurations & AWS Cloud Deployment Guide',
        'University-Standard IEEE Format Project Report (DOCX & LaTeX)',
        '15-Minute Review Slide Deck Presentation (PPT)',
        'External Examiner Viva Defense Question Bank with Verified Answers',
        'Live Demonstration Walkthrough & Video Presentation Script'
      ];

  const quickNav = [
    { label: 'Overview', href: '#overview', icon: BookOpen },
    { label: 'Gallery', href: '#gallery', icon: ImageIcon },
    { label: 'Hardware', href: '#hardware', icon: Cpu },
    { label: 'Software', href: '#software', icon: Terminal },
    { label: 'Architecture', href: '#architecture', icon: Layers },
    { label: 'Dashboard', href: '#dashboard', icon: Monitor },
    { label: 'Cost & BOM', href: '#cost', icon: DollarSign },
    { label: 'Deployment', href: '#deployment', icon: Cloud },
    { label: 'Roadmap', href: '#roadmap', icon: Clock },
    { label: 'Prototype & Viva', href: '#prototype', icon: Sparkles },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 tech-grid-bg scroll-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/projects" className="hover:text-brand-cyan transition-colors">Projects</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-brand-cyan truncate max-w-[200px] sm:max-w-none">{project.title}</span>
        </div>

        {/* 1. HERO SECTION */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0e172e] to-[#080d1c] border border-white/15 p-6 sm:p-10 mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Hero Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                {project.isFlagship && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    ★ FLAGSHIP PROJECT
                  </span>
                )}
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                  {project.defaultMatch}% Match
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                  {project.branch.join(' • ')}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                  {project.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {project.tagline}
              </p>

              {/* Specs Metric Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">💰 Budget</span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">{project.budget}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">📈 Difficulty</span>
                  <span className="text-sm sm:text-base font-bold text-sky-400 font-mono">{project.difficulty}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">⏱️ Duration</span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">{project.duration}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">👥 Team Size</span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">{project.teamSize}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href={`/signup?project=${project.slug}`}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center gap-2 transition-all"
                >
                  <span>Build This Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#gallery"
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-sm font-semibold flex items-center gap-2 transition-colors"
                >
                  <ImageIcon className="w-4 h-4 text-brand-cyan" />
                  <span>View 6 Blueprints</span>
                </a>
              </div>
            </div>

            {/* Right Hero Overview Preview */}
            <div className="lg:col-span-5 relative group rounded-2xl overflow-hidden border border-brand-cyan/40 bg-slate-950 shadow-glow-cyan">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={project.gallery.overview}
                  alt={`${project.title} Overview Visual`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-black/80 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider block">
                    SYSTEM OVERVIEW BLUEPRINT
                  </span>
                  <span className="text-xs font-semibold text-white truncate block">
                    {project.visualSummary}
                  </span>
                </div>
                <a
                  href="#gallery"
                  className="px-3 py-1 rounded-lg bg-brand-cyan/15 text-brand-cyan text-xs font-mono border border-brand-cyan/30 hover:bg-brand-cyan/25 transition-colors"
                >
                  Explore All
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Sticky Sub-Navigation Bar */}
        <div className="sticky top-20 z-30 mb-10 p-2 rounded-2xl bg-[#090f20]/90 backdrop-blur-lg border border-white/10 shadow-xl overflow-x-auto">
          <div className="flex items-center gap-1.5 min-w-max">
            {quickNav.map((nav) => {
              const Icon = nav.icon;
              return (
                <a
                  key={nav.href}
                  href={nav.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-brand-cyan hover:bg-white/5 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                  <span>{nav.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* 2. GALLERY SECTION (Dedicated 6 Visual Artifacts) */}
        <section id="gallery" className="mb-14 scroll-mt-36">
          <ProjectGalleryViewer projectTitle={project.title} gallery={project.gallery} />
        </section>

        {/* 3. OVERVIEW SECTION (Problem, Solution, How It Works, Learning Outcomes) */}
        <section id="overview" className="mb-14 scroll-mt-36 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-8">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-brand-cyan" />
              <span>Project Overview & Engineering Principles</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Academic problem definition, engineering solution, and physical operating mechanisms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Problem */}
            <div className="p-6 rounded-2xl bg-black/40 border border-red-500/20 space-y-2.5">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Proposed Solution */}
            <div className="p-6 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Proposed Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* How It Works */}
            <div className="p-6 rounded-2xl bg-black/40 border border-brand-cyan/20 space-y-2.5">
              <div className="flex items-center gap-2 text-brand-cyan font-mono text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>How It Works</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.howItWorks}
              </p>
            </div>
          </div>

          {/* Learning Outcomes & Engineering Competencies */}
          <div className="p-6 rounded-2xl bg-[#0d162d] border border-white/5 space-y-4">
            <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-brand-cyan flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              <span>Key Learning Outcomes & Engineering Competencies</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HARDWARE SECTION */}
        <section id="hardware" className="mb-14 scroll-mt-36 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-8">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Cpu className="w-6 h-6 text-brand-cyan" />
                <span>Hardware Components & Circuit Schematic</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Microcontroller pinout connections, sensors, regulated power supply, and module specs
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 self-start sm:self-auto">
              {project.hardware.length} Core Modules
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-sm font-bold uppercase font-mono text-slate-300">
                Required Physical Components:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.hardware.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-lg bg-brand-cyan/15 text-brand-cyan font-mono text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs text-slate-200 leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Requirements */}
              <div className="p-4 rounded-xl bg-[#0d162d] border border-white/5 mt-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-bold block mb-2">
                  Prerequisites & Lab Setup:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.requirements.map((req, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-black/40 border border-white/10 text-slate-300">
                      • {req}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hardware Blueprint Visual Preview */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-xl group">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={project.gallery.hardware}
                  alt={`${project.title} Hardware Blueprint`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3.5 bg-black/80 backdrop-blur-sm border-t border-white/10">
                <span className="text-[10px] font-mono text-brand-cyan uppercase font-bold block">
                  CIRCUIT BLUEPRINT ARTIFACT
                </span>
                <p className="text-xs text-slate-300 truncate mt-0.5">
                  Pinout schematic, pull-up resistors & logic-level converters
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SOFTWARE & TECH STACK SECTION */}
        <section id="software" className="mb-14 scroll-mt-36 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-6 h-6 text-brand-cyan" />
              <span>Software Stack, Libraries & Frameworks</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Programming languages, embedded firmware, backend REST/MQTT services, and UI tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-4">
              <h3 className="text-sm font-bold font-mono text-white flex items-center gap-2">
                <Code2 className="w-4 h-4 text-brand-cyan" />
                <span>Primary Technologies</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-white/5 border border-white/10 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-4">
              <h3 className="text-sm font-bold font-mono text-white flex items-center gap-2">
                <Server className="w-4 h-4 text-brand-cyan" />
                <span>Software Tools & Dependencies</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.software.map((sw, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    <span>{sw}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. ARCHITECTURE SECTION */}
        <section id="architecture" className="mb-14 scroll-mt-36 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-8">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-6 h-6 text-brand-cyan" />
              <span>System Architecture & Dataflow Pipeline</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              End-to-end signal propagation from embedded sensors through cloud brokers to client interfaces
            </p>
          </div>

          {/* Architecture flow summary banner */}
          <div className="p-4 rounded-2xl bg-[#0d162d] border border-brand-cyan/30 text-xs font-mono text-slate-200 flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-brand-cyan/20 text-brand-cyan font-bold flex-shrink-0">
              DATAFLOW
            </span>
            <span className="truncate">{project.architecture}</span>
          </div>

          {/* Multi-stage pipeline boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
            {project.architectureSteps.map((step, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-center space-y-1">
                <span className="text-[10px] uppercase font-mono text-brand-cyan font-bold block">
                  Stage 0{idx + 1}
                </span>
                <span className="text-xs font-semibold text-white block">
                  {step}
                </span>
              </div>
            ))}
          </div>

          {/* Architecture Visual Preview */}
          <div className="rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-xl group">
            <div className="aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden">
              <img
                src={project.gallery.architecture}
                alt={`${project.title} Architecture Blueprint`}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-black/80 backdrop-blur-sm border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                Verified Cloud & Broker Architecture Schema
              </span>
              <a
                href="#gallery"
                className="text-xs font-mono text-brand-cyan hover:underline"
              >
                Inspect in Gallery Viewer →
              </a>
            </div>
          </div>
        </section>

        {/* 7. DASHBOARD & TELEMETRY SECTION */}
        <section id="dashboard" className="mb-14 scroll-mt-36 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-6">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Monitor className="w-6 h-6 text-brand-cyan" />
                <span>Real-Time Monitoring Dashboard & Telemetry UI</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Live sensor graphs, threshold triggers, remote control toggles, and status diagnostics
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-auto flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live WebSocket Stream
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-xl group">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={project.gallery.dashboard}
                  alt={`${project.title} Dashboard UI`}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-sm font-bold uppercase font-mono text-brand-cyan">
                Dashboard Capabilities:
              </h3>
              <div className="space-y-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. COST & BILL OF MATERIALS (BOM) */}
        <section id="cost" className="mb-14 scroll-mt-36 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-brand-cyan" />
                <span>Estimated Cost & Bill of Materials (BOM)</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Itemized parts list with verified market unit pricing for student laboratory budgeting
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/25 self-start sm:self-auto">
              Total Est: {project.budget}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono">
                  <th className="py-3 px-4">Component</th>
                  <th className="py-3 px-4">Technical Specification</th>
                  <th className="py-3 px-4 text-center">Quantity</th>
                  <th className="py-3 px-4 text-right">Estimated Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {project.bom.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/5">
                    <td className="py-3 px-4 font-semibold text-white">{item.component}</td>
                    <td className="py-3 px-4 text-slate-400">{item.specs}</td>
                    <td className="py-3 px-4 text-center font-mono text-slate-300">{item.qty}</td>
                    <td className="py-3 px-4 text-right font-mono text-brand-cyan font-bold">
                      ₹{item.estCost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 9. DEPLOYMENT & CLOUD SECTION */}
        <section id="deployment" className="mb-14 scroll-mt-36 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-6">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Cloud className="w-6 h-6 text-brand-cyan" />
                <span>Deployment & Production Cloud Infrastructure</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Containerization with Docker, Nginx reverse proxy, and AWS EC2 / ECS hosting pipeline
              </p>
            </div>
            <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 self-start sm:self-auto">
              Docker + AWS Ready
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-sm font-bold uppercase font-mono text-slate-300">
                Deployment Architecture:
              </h3>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                  <Box className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-white block font-mono">1. Microservice Dockerfile</strong>
                    <span className="text-slate-400">Multi-stage alpine build for minimal container footprint.</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                  <Server className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-white block font-mono">2. Docker Compose Orchestration</strong>
                    <span className="text-slate-400">Ties API, database, and telemetry brokers in an internal bridge network.</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                  <Cloud className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-white block font-mono">3. AWS Cloud Hosting</strong>
                    <span className="text-slate-400">Deployed on AWS EC2 with systemd process supervision and TLS certificates.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-xl group">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={project.gallery.deployment}
                  alt={`${project.title} Deployment Architecture`}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 10. DEVELOPMENT ROADMAP */}
        <section id="roadmap" className="mb-14 scroll-mt-36 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Clock className="w-6 h-6 text-brand-cyan" />
              <span>10-Stage Development Roadmap</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              From requirement definition to university external review viva presentation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {project.roadmap.map((step) => (
              <div key={step.step} className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5 hover:border-brand-cyan/40 transition-colors">
                <span className="text-xs font-mono font-bold text-brand-cyan">
                  {step.step}
                </span>
                <h4 className="text-xs font-bold text-white truncate">{step.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 11. FINAL PROTOTYPE, DELIVERABLES & VIVA DEFENSE */}
        <section id="prototype" className="mb-14 scroll-mt-36 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-8">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-brand-cyan" />
                <span>Final Working Prototype & University Evaluation Package</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Demonstration blueprint, university deliverables, and external examiner viva voce defenses
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-500/30 self-start sm:self-auto">
              Evaluation Ready
            </span>
          </div>

          {/* Prototype Image Callout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-xl group">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={project.gallery.prototype}
                  alt={`${project.title} Final Working Prototype`}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-3 bg-black/80 backdrop-blur-sm border-t border-white/10">
                <span className="text-[10px] font-mono text-brand-cyan uppercase font-bold block">
                  PHYSICAL DEMONSTRATION UNIT
                </span>
                <p className="text-xs text-slate-300 truncate mt-0.5">
                  Pre-wired breadboard/PCB chassis ready for examiner evaluation
                </p>
              </div>
            </div>

            {/* Package deliverables list */}
            <div className="lg:col-span-6 space-y-3">
              <h3 className="text-sm font-bold uppercase font-mono text-slate-300">
                Included Student Package Contents ({deliverables.length} Items):
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {deliverables.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                    <span className="text-xs text-slate-200 truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Viva Defense Bank */}
          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <HelpCircle className="w-5 h-5 text-brand-cyan" />
              <span>External Examiner Viva Voce Defense Bank</span>
            </div>
            <div className="space-y-4">
              {project.vivaQuestions.map((qa, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#0d162d] border border-white/10 space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-start gap-2">
                    <span className="text-brand-cyan font-mono">Q{idx + 1}:</span>
                    <span>{qa.question}</span>
                  </h4>
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6 pt-2 border-l-2 border-brand-cyan/40">
                    <strong className="text-brand-cyan font-mono block mb-1">Model Defense Answer:</strong>
                    {qa.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900/30 via-[#0a1226] to-cyan-900/30 border border-brand-cyan/40 text-center space-y-4 shadow-glow-cyan">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Ready to build the {project.title}?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get instant access to verified source code, schematics, Bill of Materials, 6 visual blueprints, and external examiner viva defense questions.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/signup?project=${project.slug}`}
              className="px-8 py-4 rounded-xl bg-brand-cyan hover:bg-cyan-300 text-black font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2"
            >
              <span>Build This Project Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-xs border border-white/10 transition-colors"
            >
              Browse Other Projects
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
