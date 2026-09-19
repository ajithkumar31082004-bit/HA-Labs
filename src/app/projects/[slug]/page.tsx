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
  GitBranch,
  FolderGit2
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
  const { isProjectSaved, toggleSaveProject, startProject } = useProjectStore();

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
  const deptCode = project.branch?.[0] || 'ECE';
  const rating = 4.9;
  const reviewsCount = 34;

  const skillsList = project.learningOutcomes?.length
    ? project.learningOutcomes
    : [
        'Embedded Systems Architecture & Pin Mapping',
        'IoT Telemetry & MQTT/HTTP Cloud Streaming',
        'Relational Database Schema Design',
        'Interactive Responsive Web Dashboards',
        'Hardware Debugging & Signal Noise Filtering'
      ];

  const bomItems = project.bom && project.bom.length > 0 ? project.bom : [
    { component: 'ESP32 NodeMCU DevKit v1', specs: '38-pin Dual Core Wi-Fi + BLE', qty: 1, estCost: 450 },
    { component: 'HC-SR04 Ultrasonic Sensor Array', specs: '5V sonar 2cm–400cm precision', qty: 4, estCost: 320 },
    { component: 'RC522 13.56MHz RFID Reader', specs: 'SPI protocol with 2 keycards', qty: 1, estCost: 180 },
    { component: 'I2C 16x2 LCD Display Module', specs: 'PCF8574 Backpack 5V', qty: 1, estCost: 220 },
    { component: 'SG90 Micro Servo Motor 9g', specs: '4.8V–6V 180 degree rotation', qty: 1, estCost: 130 },
    { component: '5V 2A Regulated DC Power Adapter', specs: 'SMPS regulated with DC jack', qty: 1, estCost: 250 },
  ];

  const totalCost = bomItems.reduce((acc, curr) => acc + (curr.estCost * curr.qty), 0);

  const roadmapMilestones = project.roadmap && project.roadmap.length > 0 ? project.roadmap : [
    { step: '01', title: 'Component Sourcing & Breadboard Bench Test', desc: 'Verify all pin connections and power supply stability before soldering.' },
    { step: '02', title: 'Firmware Implementation & Sensor Calibration', desc: 'Code debounce logic and stream real-time JSON packets over Wi-Fi.' },
    { step: '03', title: 'Backend REST API & Cloud Database Ingestion', desc: 'Setup database schema and test endpoints with Postman.' },
    { step: '04', title: 'Web Dashboard & Real-Time Visualization', desc: 'Connect frontend websockets or polling to display live sensor telemetry.' },
    { step: '05', title: 'System Enclosure & 3D Prototyping', desc: 'Assemble the physical demo chassis with acrylic or 3D printed brackets.' },
    { step: '06', title: 'IEEE Project Report & Viva Question Defense', desc: 'Finalize document chapters, block diagrams, and presentation slides.' },
  ];

  const teamRoles = [
    { role: 'Hardware & Circuit Lead', tasks: 'Breadboard wiring, power distribution, component soldering, signal validation.' },
    { role: 'Firmware & Embedded Lead', tasks: 'ESP32 C++ code, sensor calibration, MQTT telemetry, serial debugging.' },
    { role: 'Cloud & Fullstack Lead', tasks: 'REST APIs, database migrations, real-time web UI, Docker deployment.' },
    { role: 'Documentation & Viva Lead', tasks: 'IEEE report preparation, CAD/circuit diagrams, slide deck, presentation.' },
  ];

  const relatedProjects = PROJECTS_DATA.filter((p) => p.id !== project.id && p.branch.some((b) => project.branch.includes(b))).slice(0, 3);

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

        {/* ── 1. HERO SECTION ──────────────────────────────────────────────────────── */}
        <div className="ha-card rounded-3xl bg-white border border-[#E2E8E4] p-6 sm:p-10 mb-8 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Project Metadata & Overview */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#087443]/10 text-[#087443] border border-[#087443]/20">
                  {deptCode} DEPARTMENT
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                  {project.difficulty} Level
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{rating} Rating</span>
                  <span className="text-[#647067]">({reviewsCount} Reviews)</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#17211B] tracking-tight leading-tight">
                {project.title}
              </h1>

              <p className="text-sm sm:text-base text-[#647067] leading-relaxed">
                {project.description || project.tagline}
              </p>

              {/* Technologies Stack */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#647067] mb-2">
                  Technologies & Tools
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

              {/* Meta pills: Team Size & Duration */}
              <div className="flex items-center gap-6 pt-2 text-xs font-medium text-[#647067]">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#087443]" />
                  <span>Recommended: <strong>{project.teamSize || '2–4 Members'}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#087443]" />
                  <span>Timeline: <strong>{project.duration || '4–6 Weeks'}</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href={`/setup?project=${encodeURIComponent(project.slug)}`}
                  onClick={() => startProject(project.id, `Team ${project.title.slice(0, 12)}`, 'Project Lead')}
                  className="px-6 py-3 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <Wrench className="w-4 h-4 text-[#84CC16]" />
                  <span>Start Building Project</span>
                </Link>

                <button
                  onClick={() => toggleSaveProject(project.id)}
                  className={`px-4 py-3 rounded-xl border font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                    saved
                      ? 'bg-[#087443]/10 border-[#087443] text-[#087443]'
                      : 'bg-white border-[#E2E8E4] text-[#17211B] hover:border-[#087443]'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${saved ? 'fill-[#087443]' : ''}`} />
                  <span>{saved ? 'Saved in Workspace' : 'Save Project'}</span>
                </button>

                <a
                  href="#documentation"
                  className="px-4 py-3 rounded-xl border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 bg-white"
                >
                  <Download className="w-4 h-4 text-[#087443]" />
                  <span>Starter Kit (ZIP)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Image Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E2E8E4] bg-[#F1F5F3] aspect-[4/3] shadow-inner relative group">
                <img
                  src={project.gallery?.overview || `/projects/${project.slug}/overview.webp`}
                  alt={`${project.title} Blueprint Overview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-[#E2E8E4] flex items-center justify-between text-xs">
                  <span className="font-mono font-semibold text-[#17211B]">Hardware + Firmware + UI</span>
                  <span className="text-[#087443] font-bold">Verified Build ✓</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── 2. TABBED INTERFACE ─────────────────────────────────────────────────── */}
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
                      {project.architecture || 'Sensors → Microcontroller (ESP32) → MQTT / REST Gateway → Node.js Cloud API → Relational DB → Next.js / Tailwind CSS Web Portal'}
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
                  <span>Real-World Challenge</span>
                </div>
                <h3 className="text-xl font-bold text-[#17211B]">The Engineering Problem</h3>
                <p className="text-sm sm:text-base text-[#647067] leading-relaxed bg-[#F8FAF9] p-5 rounded-2xl border border-[#E2E8E4]">
                  {project.problem || 'Traditional systems rely on manual monitoring and delayed human inspection, causing resource wastage, prolonged down-times, safety hazards, and inability to detect localized anomalies before catastrophic failure.'}
                </p>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-[#087443] text-xs sm:text-sm font-medium">
                  <strong>Why it matters for Academic Viva:</strong> External evaluators look for the specific pain points your prototype addresses, backed by quantifiable efficiency metrics.
                </div>
              </div>
            )}

            {/* Objectives */}
            {activeTab === 'Objectives' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17211B]">Design & Technical Objectives</h3>
                <div className="space-y-3">
                  {[
                    'Design an energy-efficient sensor edge node capable of continuous operation.',
                    'Implement low-latency telemetry transmission over MQTT with sub-second response times.',
                    'Develop a resilient fail-safe mechanism that maintains local logging during Wi-Fi outages.',
                    'Build a cloud-synced dashboard with real-time alerting and historical analytics.',
                    'Keep total bill-of-materials cost under the target student project budget.',
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
                <h3 className="text-xl font-bold text-[#17211B]">Multi-Tier System Architecture</h3>
                <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] font-mono text-xs text-[#087443] overflow-x-auto">
                  {project.architecture || 'Sensors (Hardware Layer) ──> ESP32 Edge Controller (Firmware) ──> MQTT Broker ──> Node.js Backend ──> MySQL Database ──> Web Dashboard (Presentation Layer)'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-[#E2E8E4] bg-white space-y-1.5">
                    <span className="font-bold text-[#087443] block">Tier 1: Edge Sensing</span>
                    <p className="text-[#647067]">Ultrasonic, DHT22, RFID scanners interfacing directly with microcontroller GPIO/I2C buses.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#E2E8E4] bg-white space-y-1.5">
                    <span className="font-bold text-[#087443] block">Tier 2: Ingestion & API</span>
                    <p className="text-[#647067]">Node.js Express gateway sanitizing incoming telemetry payloads and managing auth tokens.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#E2E8E4] bg-white space-y-1.5">
                    <span className="font-bold text-[#087443] block">Tier 3: UI & Analytics</span>
                    <p className="text-[#647067]">Next.js frontend rendering live heatmaps, charts, and administrative controls.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Hardware & BOM */}
            {activeTab === 'Hardware' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#17211B]">Bill of Materials & Component Specs</h3>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#087443] font-bold text-xs">
                    Est. Total: ₹{totalCost.toLocaleString('en-IN')}
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

            {/* Software Requirements */}
            {activeTab === 'Software' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17211B]">Software Toolchains & Libraries</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-2">
                    <span className="text-xs font-bold text-[#087443] uppercase tracking-wider block">Embedded Toolchain</span>
                    <ul className="text-xs text-[#647067] space-y-1.5 list-disc list-inside">
                      <li>Arduino IDE 2.x or VS Code + PlatformIO</li>
                      <li>ESP32 Board Support Package (Espressif v2.0.14)</li>
                      <li>PubSubClient MQTT library</li>
                      <li>ArduinoJson v6.21+ serialization</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-2">
                    <span className="text-xs font-bold text-[#087443] uppercase tracking-wider block">Cloud & Web Stack</span>
                    <ul className="text-xs text-[#647067] space-y-1.5 list-disc list-inside">
                      <li>Node.js LTS (v18 or v20)</li>
                      <li>Express REST Framework & CORS</li>
                      <li>PostgreSQL / MySQL Relational Database</li>
                      <li>Tailwind CSS & Chart.js for data visualization</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Circuit Diagram */}
            {activeTab === 'Circuit Diagram' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17211B]">Schematic & Pin-to-Pin Interconnects</h3>
                <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-3">
                  <div className="text-xs font-mono font-bold text-[#087443]">ESP32 DevKit Pin Assignments:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#17211B]">
                    <div className="p-2.5 rounded bg-white border border-[#E2E8E4]">GPIO 5 → HC-SR04 Trigger Pin</div>
                    <div className="p-2.5 rounded bg-white border border-[#E2E8E4]">GPIO 18 → HC-SR04 Echo (via voltage divider)</div>
                    <div className="p-2.5 rounded bg-white border border-[#E2E8E4]">GPIO 21 (SDA) → I2C LCD Display SDA</div>
                    <div className="p-2.5 rounded bg-white border border-[#E2E8E4]">GPIO 22 (SCL) → I2C LCD Display SCL</div>
                    <div className="p-2.5 rounded bg-white border border-[#E2E8E4]">GPIO 13 → SG90 Servo PWM Signal</div>
                    <div className="p-2.5 rounded bg-white border border-[#E2E8E4]">VIN (5V) → Common 5V DC Bus (2A supply)</div>
                  </div>
                </div>
                <p className="text-xs text-[#647067]">
                  * Note: Complete Fritzing breadboard layout (.fzz) and KiCad PCB schematics are included in the downloadable starter kit.
                </p>
              </div>
            )}

            {/* Implementation */}
            {activeTab === 'Implementation' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17211B]">Step-by-Step Implementation Guide</h3>
                <div className="space-y-3">
                  {roadmapMilestones.map((m, idx) => (
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
                  <h3 className="text-xl font-bold text-[#17211B]">Firmware Snippet (ESP32 C++)</h3>
                  <span className="text-xs font-mono text-[#087443]">firmware_main.ino</span>
                </div>
                <pre className="p-4 rounded-xl bg-[#17211B] text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed">
{`#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>

const char* ssid = "CAMPUS_WIFI";
const char* password = "SECRET_PASSWORD";
const char* mqtt_server = "broker.hivemq.com";

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  client.setServer(mqtt_server, 1883);
  Serial.println("\\nConnected to WiFi! Telemetry ready.");
}

void loop() {
  if (!client.connected()) reconnect();
  client.loop();
  // Read sensor telemetry and publish JSON packet
  StaticJsonDocument<200> doc;
  doc["node_id"] = "HA-ESP32-01";
  doc["status"] = "ACTIVE";
  char buffer[256];
  serializeJson(doc, buffer);
  client.publish("halabs/telemetry", buffer);
  delay(3000);
}`}
                </pre>
                <p className="text-xs text-[#647067]">
                  Full commented code with error handling, watchdog timers, and API keys is in the repository.
                </p>
              </div>
            )}

            {/* Documentation & Viva */}
            {activeTab === 'Documentation' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#17211B] mb-2">Viva Defense Question Bank</h3>
                  <p className="text-xs text-[#647067] mb-4">
                    Common questions asked by external university examiners during 8th semester project viva.
                  </p>
                  <div className="space-y-3">
                    {(project.vivaQuestions && project.vivaQuestions.length > 0 ? project.vivaQuestions : [
                      {
                        question: 'Why choose ESP32 over traditional Arduino Uno for this project?',
                        answer: 'ESP32 offers dual 240MHz Tensilica cores, native Wi-Fi/Bluetooth stack, 520KB SRAM for handling JSON and cryptography, and lower overall BOM cost compared to Arduino with an external Wi-Fi shield.'
                      },
                      {
                        question: 'How do you handle sensor reading jitter or false triggers?',
                        answer: 'We implement software median filtering across 5 consecutive ultrasonic sonar pings to discard outliers before transmitting state changes.'
                      },
                      {
                        question: 'What happens if the local Wi-Fi router loses connection?',
                        answer: 'The firmware initiates an exponential backoff reconnection loop while caching sensor events in local SPIFFS flash memory to prevent telemetry loss.'
                      }
                    ]).map((vq, idx) => (
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
                            <strong>Answer:</strong> {vq.answer}
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
                <h3 className="text-xl font-bold text-[#17211B]">Validation & Bench Test Matrix</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2E8E4] space-y-1">
                    <span className="font-bold text-[#087443]">1. Power Rail Stability Test</span>
                    <p className="text-[#647067]">Tested under full Wi-Fi TX burst load; 5V rail maintained 4.92V with zero brownouts.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2E8E4] space-y-1">
                    <span className="font-bold text-[#087443]">2. Packet Latency Bench</span>
                    <p className="text-[#647067]">Round-trip latency from sensor detection to dashboard update measured at 240ms.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2E8E4] space-y-1">
                    <span className="font-bold text-[#087443]">3. 48-Hour Continuous Stress Test</span>
                    <p className="text-[#647067]">Zero memory leaks detected; ESP32 heap remained stable at 182KB free memory.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2E8E4] space-y-1">
                    <span className="font-bold text-[#087443]">4. Environmental Variance</span>
                    <p className="text-[#647067]">Calibrated across ambient temperatures 20°C to 42°C with precision drift within ±1.5%.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Results */}
            {activeTab === 'Results' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17211B]">Experimental Results & Impact</h3>
                <p className="text-xs sm:text-sm text-[#647067] leading-relaxed">
                  During live testing, the automated system reduced search latency by 72% and decreased manual tracking overhead to zero. The modular architecture enables rapid adaptation to other IoT telemetry applications.
                </p>
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] text-center font-mono">
                  <div>
                    <div className="text-xl font-bold text-[#087443]">72%</div>
                    <div className="text-[10px] text-[#647067] uppercase mt-0.5">Time Saved</div>
                  </div>
                  <div className="border-x border-[#E2E8E4]">
                    <div className="text-xl font-bold text-[#087443]">99.4%</div>
                    <div className="text-[10px] text-[#647067] uppercase mt-0.5">Uptime</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#087443]">₹3.8k</div>
                    <div className="text-[10px] text-[#647067] uppercase mt-0.5">Total BOM</div>
                  </div>
                </div>
              </div>
            )}

            {/* Gallery */}
            {activeTab === 'Gallery' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17211B]">Prototype Visual Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {['overview', 'hardware', 'dashboard'].map((item) => (
                    <div key={item} className="rounded-xl overflow-hidden border border-[#E2E8E4] bg-[#F8FAF9] aspect-[4/3]">
                      <img
                        src={`/projects/${project.slug}/${item}.webp`}
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

        {/* ── 3. SKILLS YOU'LL LEARN & TEAM ROLES ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* What you'll learn */}
          <div className="ha-card p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8E4] space-y-4">
            <div className="flex items-center gap-2 text-[#087443] font-mono text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#84CC16]" />
              <span>Skills Matrix</span>
            </div>
            <h3 className="text-lg font-bold text-[#17211B]">What You'll Learn</h3>
            <div className="space-y-2.5">
              {skillsList.map((skill, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17211B]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Roles */}
          <div className="ha-card p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8E4] space-y-4">
            <div className="flex items-center gap-2 text-[#087443] font-mono text-xs font-bold uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Collaborative Allocation</span>
            </div>
            <h3 className="text-lg font-bold text-[#17211B]">Team Member Responsibilities</h3>
            <div className="space-y-2.5">
              {teamRoles.map((tr, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] text-xs">
                  <span className="font-bold text-[#087443] block">{tr.role}</span>
                  <span className="text-[#647067] mt-0.5 block">{tr.tasks}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 4. RELATED / RECOMMENDED PROJECTS ───────────────────────────────────── */}
        <div className="pt-8 border-t border-[#E2E8E4]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#17211B]">Recommended Projects</h3>
              <p className="text-xs text-[#647067] mt-0.5">Similar engineering systems in {deptCode} and related disciplines.</p>
            </div>
            <Link href="/projects" className="text-xs font-bold text-[#087443] hover:underline flex items-center gap-1">
              <span>View all projects</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((p) => (
              <div key={p.id} className="ha-card p-4 rounded-2xl bg-white border border-[#E2E8E4] flex flex-col justify-between">
                <div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                    {p.branch[0]}
                  </span>
                  <h4 className="text-sm font-bold text-[#17211B] mt-2 line-clamp-1">{p.title}</h4>
                  <p className="text-xs text-[#647067] mt-1 line-clamp-2">{p.tagline}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2E8E4] flex items-center justify-between text-xs">
                  <span className="font-mono text-[#647067]">{p.duration}</span>
                  <Link href={`/projects/${p.slug}`} className="font-bold text-[#087443] hover:underline flex items-center gap-1">
                    <span>View Project</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
