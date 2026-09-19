'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS_DATA, Project } from '@/data/projects';
import { useProjectStore } from '@/context/ProjectStoreContext';
import {
  Sparkles,
  ArrowLeft,
  Cpu,
  Layers,
  Clock,
  Users,
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
  Zap,
  Image as ImageIcon,
  Monitor,
  ChevronRight,
  ExternalLink,
  Bookmark,
  Wrench,
  Star,
  FileText,
  DollarSign,
  AlertCircle,
  Play,
  FileCode,
  Lock,
  Unlock,
  CreditCard,
  MessageSquare,
  PackageCheck,
  Headphones
} from 'lucide-react';

const TAB_LIST = [
  'Overview',
  'Problem Statement',
  'Objectives',
  'Architecture',
  'Hardware',
  'Software',
  'Circuit Diagram',
  'Implementation',
  'Code',
  'Documentation',
  'Testing',
  'Results',
  'Gallery'
] as const;

type TabType = typeof TAB_LIST[number];

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);
  const [activeTab, setActiveTab] = useState<TabType>('Overview');
  const [expandedViva, setExpandedViva] = useState<number | null>(0);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const { isProjectSaved, toggleSaveProject, startProject, isProjectPurchased, purchaseProject } = useProjectStore();

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold text-[#17211B]">Project Not Found</h1>
        <p className="text-sm text-[#647067] mt-2">The engineering project blueprint you are looking for does not exist.</p>
        <Link href="/projects" className="mt-4 px-4 py-2 rounded-xl bg-[#087443] text-white font-semibold text-xs">
          Browse All Projects
        </Link>
      </div>
    );
  }

  const saved = isProjectSaved(project.id);
  const purchased = isProjectPurchased(project.id);
  const deptCode = project.branch?.[0] || 'ECE';
  const rating = 4.9;
  const reviewsCount = 38;
  const basePrice = 4999;

  const addonOptions = [
    { id: 'install', label: '1-on-1 Hardware & Toolchain Setup Support', price: 999 },
    { id: 'custom', label: 'Customization to College / Guide Syllabus', price: 1999 },
    { id: 'mentor', label: '2-Hour External Examiner Viva Defense Coaching', price: 999 },
  ];

  const totalCheckoutPrice = basePrice + selectedAddons.reduce((sum, id) => {
    const found = addonOptions.find((a) => a.id === id);
    return sum + (found ? found.price : 0);
  }, 0);

  const handleCompletePurchase = () => {
    const addonsLabels = selectedAddons.map((id) => addonOptions.find((a) => a.id === id)?.label || id);
    purchaseProject(project.id, project.title, totalCheckoutPrice, addonsLabels);
    setCheckoutModalOpen(false);
  };

  const packageDeliverables = [
    'Complete Commented Source Code (Firmware C++ & Node.js/Python)',
    'Pin-to-Pin Circuit Diagram & Fritzing Wiring Schematics',
    'Industrial PCB Layout (Gerber & KiCad project files)',
    'Full University Project Documentation & Abstract (IEEE DOCX)',
    'Hardware Bill of Materials (BOM) with Indian component pricing',
    'Relational Database Schema (.sql) & Ingestion Endpoints',
    'Responsive Web Dashboard & Mobile Application Code',
    'Step-by-Step Toolchain & Flashing Setup Instructions',
    '1080p Working Prototype Video Demonstration',
    'Docker Container Configurations & AWS Cloud Deployment Guide',
    '15-Minute Review Slide Deck Presentation (PPTX)',
    'External Examiner Viva Defense Question Bank with Verified Answers'
  ];

  const bomItems = project.bom && project.bom.length > 0 ? project.bom : [
    { component: 'ESP32 NodeMCU DevKit v1', specs: '38-pin Dual Core Wi-Fi + BLE', qty: 1, estCost: 450 },
    { component: 'Precision Sensor Matrix', specs: 'Factory calibrated analog/digital probes', qty: 2, estCost: 650 },
    { component: 'Solid State Relay / Driver IC', specs: 'Optocoupler isolated switching', qty: 1, estCost: 280 },
    { component: 'I2C 16x2 Diagnostic LCD Display', specs: 'PCF8574 backpack 5V', qty: 1, estCost: 220 },
    { component: 'Regulated DC Power Adapter 5V/12V', specs: 'Low-ripple SMPS lab supply', qty: 1, estCost: 350 },
  ];

  const totalHardwareCost = bomItems.reduce((acc, curr) => acc + (curr.estCost * curr.qty), 0);

  return (
    <div className="min-h-screen tech-grid-bg py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#647067]">
          <Link href="/" className="hover:text-[#087443] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/projects" className="hover:text-[#087443] transition-colors">Engineering Projects</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#087443] font-bold">{deptCode}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#17211B] font-semibold truncate max-w-[240px] sm:max-w-none">{project.title}</span>
        </div>

        {/* ── 1. PRODUCT MARKETPLACE HERO ──────────────────────────────────────────── */}
        <div className="ha-card rounded-3xl bg-white border border-[#E2E8E4] p-6 sm:p-10 mb-8 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Project Overview & Marketplace Specs */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#087443] text-white flex items-center gap-1 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16]" />
                  <span>✅ Verified by HA Labs</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#087443]/10 text-[#087443] border border-[#087443]/20">
                  {deptCode}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                  {project.difficulty} Level
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{rating}</span>
                  <span className="text-[#647067]">({reviewsCount} Reviews)</span>
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#17211B] tracking-tight leading-tight">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-base text-[#647067] leading-relaxed mt-2">
                  {project.description || project.tagline}
                </p>
              </div>

              {/* Quick Specs Matrix */}
              <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] text-xs">
                <div>
                  <span className="text-[10px] text-[#647067] uppercase font-mono block">Estimated Build</span>
                  <strong className="text-[#17211B] font-mono mt-0.5 block">{project.duration || '3–4 Weeks'}</strong>
                </div>
                <div className="border-x border-[#E2E8E4] px-3">
                  <span className="text-[10px] text-[#647067] uppercase font-mono block">Team Allocation</span>
                  <strong className="text-[#17211B] font-mono mt-0.5 block">{project.teamSize || '3–4 Members'}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#647067] uppercase font-mono block">Lab Hardware Cost</span>
                  <strong className="text-[#087443] font-mono mt-0.5 block">~₹{totalHardwareCost.toLocaleString('en-IN')}</strong>
                </div>
              </div>

              {/* Technologies Pills */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#647067] mb-2 font-mono">
                  Stack & Toolchains:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#F1F5F3] text-[#17211B] border border-[#E2E8E4]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Package Deliverables Checklist */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#087443] mb-2 flex items-center gap-1.5">
                  <PackageCheck className="w-4 h-4 text-[#16A34A]" />
                  <span>Complete Package Includes (12 Items):</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#17211B]">
                  {packageDeliverables.slice(0, 8).map((del, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Pricing Box & Purchase / Unlocked Action */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Product Visual Thumbnail */}
              <div className="rounded-2xl overflow-hidden border border-[#E2E8E4] bg-[#F1F5F3] aspect-[16/10] shadow-inner relative group">
                <img
                  src={project.gallery?.overview || `/projects/${project.slug}/overview.webp`}
                  alt={`${project.title} Preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors flex items-center justify-center gap-2 text-white font-bold text-xs backdrop-blur-xs"
                >
                  <div className="w-10 h-10 rounded-full bg-[#087443] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                  <span>Watch Working Demo Video</span>
                </button>
              </div>

              {/* Purchase Card / Unlocked State */}
              <div className="ha-card p-6 rounded-2xl bg-white border border-[#E2E8E4] space-y-4">
                {purchased ? (
                  // ALREADY PURCHASED UNLOCKED STATE
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2E8E4]">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center">
                          <Unlock className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#087443]">Project Unlocked</div>
                          <span className="text-[10px] text-[#647067] font-mono">Full Deliverables Access</span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#087443] font-mono text-[10px] font-bold">
                        v1.2 (2026 Ready)
                      </span>
                    </div>

                    <p className="text-xs text-[#647067] leading-relaxed">
                      You own this verified project package. All source code, circuit files, database schemas, and documentation are ready for download below.
                    </p>

                    <div className="pt-2 flex flex-col gap-2">
                      <Link
                        href={`/account/projects/${project.id}`}
                        className="w-full py-3 px-4 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs text-center shadow-xs transition-all flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4 text-[#84CC16]" />
                        <span>Access Protected Deliverables Hub</span>
                      </Link>
                      <Link
                        href="/setup"
                        className="w-full py-2.5 px-4 rounded-xl border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] font-semibold text-xs text-center hover:bg-[#F8FAF9] transition-all"
                      >
                        Setup Team Workspace →
                      </Link>
                    </div>
                  </div>
                ) : (
                  // MARKETPLACE PURCHASE BUY BOX
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="text-xs font-bold text-[#647067] uppercase font-mono">Academic License</div>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-3xl font-black text-[#17211B] font-mono">
                            ₹{basePrice.toLocaleString('en-IN')}
                          </span>
                          <span className="text-sm text-slate-400 line-through font-mono">₹8,999</span>
                          <span className="px-2 py-0.5 rounded bg-[#16A34A]/10 text-[#087443] text-[10px] font-bold">
                            45% OFF
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-[#087443] font-bold">Instant Unlock</span>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#E2E8E4] text-xs">
                      <Link
                        href={`/checkout?projectId=${project.id}`}
                        className="w-full py-3.5 px-4 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 text-center"
                      >
                        <CreditCard className="w-4 h-4 text-[#84CC16]" />
                        <span>Buy Project (₹{basePrice.toLocaleString('en-IN')})</span>
                      </Link>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          onClick={() => setDemoModalOpen(true)}
                          className="py-2 px-2.5 rounded-xl border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] font-semibold text-xs transition-all flex items-center justify-center gap-1"
                        >
                          <Play className="w-3 h-3 text-[#087443]" />
                          <span>View Demo</span>
                        </button>

                        <a
                          href="#documentation"
                          className="py-2 px-2.5 rounded-xl border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] font-semibold text-xs transition-all flex items-center justify-center gap-1"
                        >
                          <FileText className="w-3 h-3 text-[#087443]" />
                          <span>Preview Docs</span>
                        </a>
                      </div>
                    </div>

                    {/* Guarantee */}
                    <div className="pt-2 border-t border-[#E2E8E4] flex items-center justify-between text-[11px] text-[#647067]">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#087443]" />
                        <span>100% Compile Guarantee</span>
                      </span>
                      <button
                        onClick={() => toggleSaveProject(project.id)}
                        className="text-[#087443] hover:underline font-bold"
                      >
                        {saved ? 'Saved ★' : 'Save for later'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* ── 2. UNLOCKED DELIVERABLES WORKSPACE (AFTER PURCHASE) ────────────────────── */}
        {purchased && (
          <div id="unlocked-downloads" className="ha-card rounded-3xl bg-white border border-[#087443]/40 p-6 sm:p-8 mb-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8E4]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
                    My Purchased Project Files · Version 1.2
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#17211B] mt-1">
                  Download Project Deliverables Package
                </h2>
                <p className="text-xs text-[#647067] mt-0.5">
                  Full verified assets for lab submission, circuit manufacturing, and viva defense.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/resources"
                  className="px-3.5 py-2 rounded-xl border border-[#E2E8E4] hover:border-[#087443] text-xs font-semibold text-[#17211B] flex items-center gap-1.5"
                >
                  <Headphones className="w-3.5 h-3.5 text-[#087443]" />
                  <span>Request Customization</span>
                </a>
              </div>
            </div>

            {/* Unlocked Deliverables Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* 1. Source Code */}
              <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="w-9 h-9 rounded-xl bg-[#087443]/10 text-[#087443] flex items-center justify-center">
                    <FileCode className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-[#17211B] mt-2">Firmware & Source Code</h3>
                  <p className="text-[11px] text-[#647067]">ESP32 C++ .ino, REST APIs, and web UI bundle (1.4 MB)</p>
                </div>
                <button
                  onClick={() => alert('Downloading source code archive: ' + project.slug + '_code_v1.2.zip')}
                  className="w-full py-2 rounded-xl bg-[#087443] text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#065331]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Code (ZIP)</span>
                </button>
              </div>

              {/* 2. Circuit & PCB */}
              <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-[#17211B] mt-2">Circuit & PCB Files</h3>
                  <p className="text-[11px] text-[#647067]">Fritzing (.fzz), KiCad schematic, and Gerber layout</p>
                </div>
                <button
                  onClick={() => alert('Downloading PCB schematics: ' + project.slug + '_pcb_schematics.zip')}
                  className="w-full py-2 rounded-xl bg-white border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#087443]" />
                  <span>Download PCB Pack</span>
                </button>
              </div>

              {/* 3. Documentation & Report */}
              <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-[#17211B] mt-2">IEEE Report & Slides</h3>
                  <p className="text-[11px] text-[#647067]">60-page editable DOCX report and 15-minute PPT deck</p>
                </div>
                <button
                  onClick={() => alert('Downloading IEEE documentation: ' + project.slug + '_ieee_report.docx')}
                  className="w-full py-2 rounded-xl bg-white border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#087443]" />
                  <span>Download DOCX & PPT</span>
                </button>
              </div>

              {/* 4. Database & Deployment */}
              <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                    <Server className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-[#17211B] mt-2">Database & Deployment</h3>
                  <p className="text-[11px] text-[#647067]">SQL migration schema and Docker Compose configurations</p>
                </div>
                <button
                  onClick={() => alert('Downloading database and deployment files: ' + project.slug + '_deployment.zip')}
                  className="w-full py-2 rounded-xl bg-white border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#087443]" />
                  <span>Download SQL & Docker</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ── 3. 13-TAB TECHNICAL SPECIFICATION INTERFACE ─────────────────────────── */}
        <div className="mb-8">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-[#E2E8E4]">
            {TAB_LIST.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border-b-2 -mb-px ${
                    isActive
                      ? 'border-[#087443] text-[#087443] bg-white'
                      : 'border-transparent text-[#647067] hover:text-[#17211B] hover:bg-white/50'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* TAB CONTENT PANELS */}
          <div className="ha-card rounded-2xl bg-white border border-[#E2E8E4] p-6 sm:p-8 mt-4 shadow-xs min-h-[300px]">
            
            {/* Overview */}
            {activeTab === 'Overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#17211B] mb-2">Project Executive Summary</h3>
                  <p className="text-sm text-[#647067] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E2E8E4]">
                  <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-2">
                    <div className="text-xs font-bold text-[#087443] uppercase tracking-wider font-mono">
                      Working Mechanism
                    </div>
                    <p className="text-xs sm:text-sm text-[#17211B] leading-relaxed">
                      {project.howItWorks || 'Sensors acquire physical parameters, convert them to digital signals via ESP32 ADC/I2C, filter environmental noise, and push state changes over Wi-Fi MQTT broker to cloud dashboard.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-2">
                    <div className="text-xs font-bold text-[#087443] uppercase tracking-wider font-mono">
                      System Architecture Flow
                    </div>
                    <p className="text-xs sm:text-sm text-[#17211B] leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8E4]">
                  <h4 className="text-sm font-bold text-[#17211B] mb-3">Key Features & Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features?.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#17211B]">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Problem Statement */}
            {activeTab === 'Problem Statement' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#087443] font-mono text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>Real-World Engineering Challenge</span>
                </div>
                <h3 className="text-xl font-bold text-[#17211B]">The Problem Solved</h3>
                <p className="text-sm sm:text-base text-[#647067] leading-relaxed bg-[#F8FAF9] p-5 rounded-2xl border border-[#E2E8E4]">
                  {project.problem}
                </p>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-[#087443] text-xs sm:text-sm font-medium">
                  <strong>Academic Evaluation Value:</strong> Examiners look for quantifiable problem formulations, identifying why existing manual or low-frequency monitoring systems fail under scale.
                </div>
              </div>
            )}

            {/* Objectives */}
            {activeTab === 'Objectives' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17211B]">Engineering Design Objectives</h3>
                <div className="space-y-3">
                  {[
                    `Develop an edge telemetry node utilizing ${project.technologies[0]} with sub-second sample rates.`,
                    'Implement low-power sleep modes and fail-safe watchdog timer resets.',
                    'Build an interactive telemetry dashboard with live indicator cards and CSV log downloads.',
                    'Keep total bill-of-materials cost within accessible student project budgets.',
                    'Prepare verified academic deliverables adhering strictly to university capstone review formats.'
                  ].map((obj, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] flex items-center gap-3 text-xs sm:text-sm text-[#17211B]">
                      <span className="w-6 h-6 rounded-full bg-[#087443] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture */}
            {activeTab === 'Architecture' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#17211B]">End-to-End System Architecture</h3>
                <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] font-mono text-xs text-[#087443] overflow-x-auto">
                  {project.architecture}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-[#E2E8E4] bg-white space-y-1.5">
                    <span className="font-bold text-[#087443] block">1. Edge Sensing Tier</span>
                    <p className="text-[#647067]">{project.hardware.slice(0, 3).join(', ')}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#E2E8E4] bg-white space-y-1.5">
                    <span className="font-bold text-[#087443] block">2. Ingestion & Storage</span>
                    <p className="text-[#647067]">MQTT Broker + Node.js REST API + Relational Database.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#E2E8E4] bg-white space-y-1.5">
                    <span className="font-bold text-[#087443] block">3. Presentation Tier</span>
                    <p className="text-[#647067]">Tailwind CSS dashboard with real-time analytics and alerts.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Hardware & BOM */}
            {activeTab === 'Hardware' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#17211B]">Bill of Materials (BOM) & Specs</h3>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#087443] font-bold text-xs">
                    Est. Total: ₹{totalHardwareCost.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-[#E2E8E4] rounded-xl overflow-hidden">
                    <thead className="bg-[#F1F5F3] text-[#17211B] font-bold">
                      <tr>
                        <th className="p-3">Component</th>
                        <th className="p-3">Specification</th>
                        <th className="p-3 text-center">Qty</th>
                        <th className="p-3 text-right">Est. Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8E4]">
                      {bomItems.map((item, idx) => (
                        <tr key={idx} className="hover:bg-[#F8FAF9]">
                          <td className="p-3 font-semibold text-[#17211B]">{item.component}</td>
                          <td className="p-3 text-[#647067]">{item.specs}</td>
                          <td className="p-3 text-center font-mono">{item.qty}</td>
                          <td className="p-3 text-right font-mono text-[#087443] font-bold">₹{item.estCost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Software */}
            {activeTab === 'Software' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17211B]">Software Toolchains & Libraries</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-2">
                    <span className="text-xs font-bold text-[#087443] uppercase tracking-wider block">Embedded Firmware</span>
                    <ul className="text-xs text-[#647067] space-y-1.5 list-disc list-inside">
                      <li>Arduino IDE 2.x or VS Code with PlatformIO</li>
                      <li>Espressif ESP32 Core Library (v2.0.14+)</li>
                      <li>PubSubClient MQTT protocol driver</li>
                      <li>ArduinoJson v6.x for serialization</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-2">
                    <span className="text-xs font-bold text-[#087443] uppercase tracking-wider block">Backend & Web Stack</span>
                    <ul className="text-xs text-[#647067] space-y-1.5 list-disc list-inside">
                      <li>Node.js LTS (v18 or v20) / Python 3.10+</li>
                      <li>Express REST API Gateway & WebSockets</li>
                      <li>MySQL / PostgreSQL database schema</li>
                      <li>Next.js & Tailwind CSS dashboard components</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Circuit Diagram */}
            {activeTab === 'Circuit Diagram' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17211B]">Pin-to-Pin Interconnects & Schematics</h3>
                <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-3">
                  <div className="text-xs font-mono font-bold text-[#087443]">GPIO Pin Mapping:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#17211B]">
                    <div className="p-2.5 rounded bg-white border border-[#E2E8E4]">GPIO 21 (SDA) → I2C Sensor Bus SDA</div>
                    <div className="p-2.5 rounded bg-white border border-[#E2E8E4]">GPIO 22 (SCL) → I2C Sensor Bus SCL</div>
                    <div className="p-2.5 rounded bg-white border border-[#E2E8E4]">GPIO 4 (ADC) → Analog Sensor Probe Pin</div>
                    <div className="p-2.5 rounded bg-white border border-[#E2E8E4]">GPIO 18 / 19 → SPI Chip Select & Clock</div>
                    <div className="p-2.5 rounded bg-white border border-[#E2E8E4]">GPIO 5 → Optocoupler Relay Trigger</div>
                    <div className="p-2.5 rounded bg-white border border-[#E2E8E4]">VIN / GND → 5V 2A Regulated Power Bus</div>
                  </div>
                </div>
                <p className="text-xs text-[#647067]">
                  * Full KiCad PCB schematics and Fritzing breadboard layouts are included in the downloadable project zip.
                </p>
              </div>
            )}

            {/* Implementation */}
            {activeTab === 'Implementation' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17211B]">Implementation Roadmap</h3>
                <div className="space-y-3">
                  {project.roadmap.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#087443] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {m.step}
                      </span>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-[#17211B]">{m.title}</div>
                        <p className="text-xs text-[#647067] mt-0.5">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Code */}
            {activeTab === 'Code' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#17211B]">Firmware Preview</h3>
                  <span className="text-xs font-mono text-[#087443]">main_firmware.ino</span>
                </div>
                <pre className="p-4 rounded-xl bg-[#17211B] text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed">
{`#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>

// HA Labs Verified Firmware v1.2
const char* ssid = "CAMPUS_WIFI";
const char* password = "PASSWORD";
const char* mqtt_server = "broker.hivemq.com";

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
  client.setServer(mqtt_server, 1883);
  Serial.println("\\nHA Labs Edge Node Connected!");
}

void loop() {
  if (!client.connected()) reconnect();
  client.loop();
  
  StaticJsonDocument<256> doc;
  doc["project"] = "${project.slug}";
  doc["status"] = "OK";
  doc["timestamp"] = millis();
  
  char buffer[256];
  serializeJson(doc, buffer);
  client.publish("halabs/telemetry", buffer);
  delay(3000);
}`}
                </pre>
                {purchased ? (
                  <div className="p-3 rounded-xl bg-emerald-50 text-[#087443] text-xs flex items-center justify-between">
                    <span>You own this project. Download the entire multi-file firmware code in the downloads hub above.</span>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] flex items-center justify-between text-xs">
                    <span className="text-[#647067]">Full source code with drivers and database migrations unlocked upon purchase.</span>
                    <button onClick={() => setCheckoutModalOpen(true)} className="text-[#087443] font-bold hover:underline">
                      Buy Project (₹{basePrice.toLocaleString('en-IN')}) →
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Documentation & Viva */}
            {activeTab === 'Documentation' && (
              <div id="documentation" className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#17211B] mb-2">External Examiner Viva Defense Questions</h3>
                  <p className="text-xs text-[#647067] mb-4">
                    Sample questions external university evaluators ask during 8th-semester project viva examinations.
                  </p>
                  <div className="space-y-3">
                    {project.vivaQuestions.map((vq, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-[#E2E8E4] bg-[#F8FAF9]">
                        <div
                          onClick={() => setExpandedViva(expandedViva === idx ? null : idx)}
                          className="flex items-center justify-between cursor-pointer font-bold text-xs sm:text-sm text-[#17211B]"
                        >
                          <span className="text-[#087443]">Q{idx + 1}: {vq.question}</span>
                          <span className="text-slate-400 font-mono text-xs">{expandedViva === idx ? '▲' : '▼'}</span>
                        </div>
                        {expandedViva === idx && (
                          <div className="mt-2.5 pt-2.5 border-t border-[#E2E8E4] text-xs text-[#647067] leading-relaxed">
                            <strong>Verified Answer:</strong> {vq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Testing */}
            {activeTab === 'Testing' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17211B]">Laboratory Bench Test Matrix</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2E8E4] space-y-1">
                    <span className="font-bold text-[#087443]">1. Power Rail Ripple & Stability</span>
                    <p className="text-[#647067]">Tested under continuous Wi-Fi transmission bursts with zero microcontroller brownouts.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2E8E4] space-y-1">
                    <span className="font-bold text-[#087443]">2. Packet Latency Bench</span>
                    <p className="text-[#647067]">End-to-end round trip from physical trigger to dashboard notification measured at 260ms.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2E8E4] space-y-1">
                    <span className="font-bold text-[#087443]">3. 48-Hour Continuous Soak Test</span>
                    <p className="text-[#647067]">Zero memory leaks detected; internal heap memory maintained stability.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2E8E4] space-y-1">
                    <span className="font-bold text-[#087443]">4. Fail-Safe Auto Recovery</span>
                    <p className="text-[#647067]">Simulated Wi-Fi router drop; node cached packets locally and flushed once connection re-established.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Results */}
            {activeTab === 'Results' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17211B]">Experimental Performance & Impact</h3>
                <p className="text-xs sm:text-sm text-[#647067] leading-relaxed">
                  During live testing, the automated prototype eliminated human response delay by 74% and logged 100% of anomalous state fluctuations.
                </p>
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] text-center font-mono">
                  <div>
                    <div className="text-xl font-bold text-[#087443]">74%</div>
                    <div className="text-[10px] text-[#647067] uppercase mt-0.5">Latency Reduction</div>
                  </div>
                  <div className="border-x border-[#E2E8E4]">
                    <div className="text-xl font-bold text-[#087443]">99.8%</div>
                    <div className="text-[10px] text-[#647067] uppercase mt-0.5">Uptime</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#087443]">100%</div>
                    <div className="text-[10px] text-[#647067] uppercase mt-0.5">Verified Schematics</div>
                  </div>
                </div>
              </div>
            )}

            {/* Gallery */}
            {activeTab === 'Gallery' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17211B]">Visual Product & Architecture Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {['overview', 'hardware', 'dashboard'].map((item) => (
                    <div key={item} className="rounded-xl overflow-hidden border border-[#E2E8E4] bg-[#F8FAF9] aspect-[4/3]">
                      <img
                        src={`/projects/smart-parking-system/${item}.webp`}
                        alt={`${item} preview`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

      {/* ── CHECKOUT & PURCHASE MODAL ────────────────────────────────────────────── */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#E2E8E4] max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl animate-fade-slide-up">
            <div className="flex items-center justify-between border-b border-[#E2E8E4] pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#087443] uppercase tracking-wider">
                  Secure Academic Checkout
                </span>
                <h3 className="text-lg font-bold text-[#17211B] mt-0.5">{project.title}</h3>
              </div>
              <button
                onClick={() => setCheckoutModalOpen(false)}
                className="text-slate-400 hover:text-[#17211B] p-1"
              >
                ✕
              </button>
            </div>

            {/* Base item */}
            <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] flex items-center justify-between text-xs">
              <div>
                <strong className="text-[#17211B] block">Complete Project Blueprint & Source Code Pack</strong>
                <span className="text-[#647067] text-[11px]">Full code, PCB, IEEE DOCX report, PPT, and viva bank</span>
              </div>
              <span className="font-mono font-bold text-[#087443] text-sm">₹{basePrice.toLocaleString('en-IN')}</span>
            </div>

            {/* Optional Add-ons */}
            <div>
              <label className="block text-xs font-bold text-[#17211B] mb-2 font-mono uppercase">
                Optional Support Add-ons:
              </label>
              <div className="space-y-2">
                {addonOptions.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => {
                        setSelectedAddons((prev) =>
                          isSelected ? prev.filter((id) => id !== addon.id) : [...prev, addon.id]
                        );
                      }}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-[#087443] bg-emerald-50/50'
                          : 'border-[#E2E8E4] bg-white hover:border-[#087443]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          readOnly
                          className="w-4 h-4 text-[#087443] rounded accent-[#087443]"
                        />
                        <span className="font-medium text-[#17211B]">{addon.label}</span>
                      </div>
                      <span className="font-mono font-bold text-[#087443]">+₹{addon.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Total & Complete Action */}
            <div className="pt-3 border-t border-[#E2E8E4] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#647067]">Total Amount:</span>
                <span className="text-2xl font-black text-[#087443] font-mono">
                  ₹{totalCheckoutPrice.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                onClick={handleCompletePurchase}
                className="w-full py-3.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4 text-[#84CC16]" />
                <span>Verify Payment & Unlock Project Now</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#647067]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#087443]" />
                <span>Instant digital access + simulated GST tax receipt generated</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── VIDEO DEMO MODAL ────────────────────────────────────────────────────── */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#E2E8E4] max-w-2xl w-full p-6 space-y-4 shadow-2xl animate-fade-slide-up">
            <div className="flex items-center justify-between border-b border-[#E2E8E4] pb-3">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-[#087443] fill-[#087443]" />
                <h3 className="text-base font-bold text-[#17211B]">{project.title} — Working Prototype Demo</h3>
              </div>
              <button onClick={() => setDemoModalOpen(false)} className="text-slate-400 hover:text-[#17211B]">
                ✕
              </button>
            </div>

            <div className="aspect-video bg-[#17211B] rounded-2xl flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#087443] text-white flex items-center justify-center shadow-xl animate-pulse">
                <Play className="w-6 h-6 fill-white ml-1" />
              </div>
              <div className="text-white font-bold text-sm">Working Prototype Hardware Telemetry Walkthrough</div>
              <p className="text-xs text-slate-400 max-w-md">
                Demonstrates real-time sensor triggering, ESP32 packet transmission, and cloud dashboard heatmap synchronization.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-end">
              <button
                onClick={() => setDemoModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-[#F1F5F3] text-xs font-bold text-[#17211B]"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
