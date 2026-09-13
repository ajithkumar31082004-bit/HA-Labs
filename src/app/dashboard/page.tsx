'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  FolderGit2,
  Bookmark,
  TrendingUp,
  Download,
  Bot,
  HelpCircle,
  User,
  CheckCircle2,
  Clock,
  ArrowRight,
  ExternalLink,
  Sparkles,
  FileText,
  FileCode,
  Layers,
  Send,
  Plus
} from 'lucide-react';
import { PROJECTS_DATA } from '@/data/projects';

export default function StudentDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'downloads' | 'support'>('overview');
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketCategory, setTicketCategory] = useState('Hardware Debugging');
  const [ticketDetails, setTicketDetails] = useState('');
  const [ticketsList, setTicketsList] = useState([
    { id: 'TKT-1042', subject: 'ESP32 I2C 1602 LCD bus address conflict (0x27 vs 0x3F)', status: 'In Review', category: 'Hardware' },
    { id: 'TKT-1039', subject: 'Docker container port 5000 not reachable on AWS EC2 public IP', status: 'Resolved', category: 'Cloud' }
  ]);

  const activeProject = PROJECTS_DATA[0]; // Smart Parking System

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject.trim()) return;
    setTicketsList([
      {
        id: `TKT-${Math.floor(1000 + Math.random() * 9000)}`,
        subject: ticketSubject,
        status: 'Open',
        category: ticketCategory,
      },
      ...ticketsList,
    ]);
    setTicketSubject('');
    setTicketDetails('');
    setTicketModalOpen(false);
  };

  const downloadableAssets = [
    { name: 'firmware_esp32_smart_parking.ino', size: '24 KB', type: 'Firmware C++', icon: FileCode },
    { name: 'backend_nodejs_rest_api.zip', size: '1.4 MB', type: 'Backend Code', icon: FileCode },
    { name: 'dashboard_frontend_web.zip', size: '2.8 MB', type: 'UI Dashboard', icon: FileCode },
    { name: 'circuit_schematic_fritzing.pdf', size: '640 KB', type: 'Schematic', icon: Layers },
    { name: 'ieee_project_report_template.docx', size: '820 KB', type: 'Report Doc', icon: FileText },
    { name: 'review_presentation_slides.pptx', size: '4.2 MB', type: 'Presentation PPT', icon: FileText },
    { name: 'viva_question_bank_answers.pdf', size: '310 KB', type: 'Viva Guide', icon: FileText },
    { name: 'docker_compose_deployment.yml', size: '6 KB', type: 'DevOps Config', icon: FileCode },
  ];

  return (
    <div className="min-h-screen py-8 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dashboard Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/15 border border-brand-cyan/40 flex items-center justify-center font-mono font-bold text-brand-cyan text-lg shadow-glow-cyan">
              AR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold text-white">Ajithkumar's Workspace</h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-bold">
                  STUDENT PRO
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                GCT Coimbatore • ECE Dept • Batch 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/#ai-assistant"
              className="px-3.5 py-2 rounded-xl bg-surface-50 border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Bot className="w-3.5 h-3.5 text-brand-cyan" />
              <span>AI Copilot</span>
            </Link>
            <button
              onClick={() => setTicketModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-brand-cyan text-black font-bold text-xs flex items-center gap-1.5 hover:bg-cyan-300 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Support Ticket</span>
            </button>
          </div>
        </div>

        {/* Dashboard Navigation Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'overview', label: 'Workspace Overview', icon: LayoutDashboard },
            { id: 'projects', label: 'My Projects (2)', icon: FolderGit2 },
            { id: 'downloads', label: 'Package Downloads (8)', icon: Download },
            { id: 'support', label: 'Support & Mentors (2)', icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-brand-cyan text-black font-bold shadow-sm'
                    : 'bg-[#090f20] border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Active Project Big Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0e1933] to-[#0a1020] border-2 border-brand-cyan/40 shadow-glow-cyan">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-brand-cyan/20 text-brand-cyan font-bold">
                      ACTIVE MILESTONE
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Final Year Project</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeProject.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                    {activeProject.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/projects/${activeProject.slug}`}
                    className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-xs font-medium transition-colors flex items-center gap-1.5"
                  >
                    <span>View Specifications</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => setActiveTab('downloads')}
                    className="px-4 py-2.5 rounded-xl bg-brand-cyan text-black font-bold text-xs hover:bg-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Files</span>
                  </button>
                </div>
              </div>

              {/* Progress Bar Component */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">Overall Build Progress</span>
                  <span className="font-extrabold text-brand-cyan text-sm">75% Completed</span>
                </div>
                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-full w-3/4 animate-pulse" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Completed: Hardware + Backend + DB + UI</span>
                  <span className="text-cyan-300">Next: AWS Cloud Deployment</span>
                </div>
              </div>
            </div>

            {/* Checklist & Micro-Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Checklist Column */}
              <div className="md:col-span-7 p-6 rounded-3xl bg-[#090f20] border border-white/10 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                  <span>Phase Milestones & Deliverables</span>
                </h3>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-emerald-500/20 text-emerald-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-slate-200">Problem Statement & Scope Approval</span>
                    </div>
                    <span className="font-mono text-[10px]">VERIFIED</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-emerald-500/20 text-emerald-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-slate-200">Hardware Interfacing (ESP32 + Sonar)</span>
                    </div>
                    <span className="font-mono text-[10px]">VERIFIED</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-emerald-500/20 text-emerald-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-slate-200">Node.js Express & MySQL Schema</span>
                    </div>
                    <span className="font-mono text-[10px]">VERIFIED</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-emerald-500/20 text-emerald-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-slate-200">Slot Occupancy Dashboard UI</span>
                    </div>
                    <span className="font-mono text-[10px]">VERIFIED</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/40 text-brand-cyan">
                    <div className="flex items-center gap-2 font-bold">
                      <Clock className="w-4 h-4 animate-spin" />
                      <span>AWS Cloud Telemetry & Docker Swarm</span>
                    </div>
                    <span className="font-mono text-[10px]">IN PROGRESS</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-black/20 border border-white/5 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Documentation (Report & PPT Slides)</span>
                    </div>
                    <span className="font-mono text-[10px]">PENDING</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-black/20 border border-white/5 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Viva Defense Mock Examination</span>
                    </div>
                    <span className="font-mono text-[10px]">PENDING</span>
                  </div>
                </div>
              </div>

              {/* Quick Status Cards Column */}
              <div className="md:col-span-5 space-y-5">
                {/* Micro Card 1: Next Task */}
                <div className="p-5 rounded-2xl bg-[#090f20] border border-white/10 space-y-2">
                  <span className="text-[10px] uppercase font-mono text-slate-400">Next Action Item</span>
                  <h4 className="text-sm font-bold text-white">Deploy Docker Container to AWS EC2</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Bind port 5000 to public security group and verify serial HTTP push from ESP32.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/resources"
                      className="inline-flex items-center gap-1 text-xs font-mono text-brand-cyan hover:underline"
                    >
                      <span>Read AWS EC2 Docker Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Micro Card 2: Support Ticket preview */}
                <div className="p-5 rounded-2xl bg-[#090f20] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono text-slate-400">Engineer Support</span>
                    <span className="text-[11px] font-mono text-emerald-400">1 Open Ticket</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs">
                    <span className="font-mono text-brand-cyan block text-[10px]">TKT-1042</span>
                    <p className="text-slate-300 line-clamp-1 mt-0.5">ESP32 I2C 1602 LCD bus address conflict</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('support')}
                    className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 transition-colors"
                  >
                    View Support Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: MY PROJECTS */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-[#090f20] border border-brand-cyan/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-brand-cyan/20 text-brand-cyan font-bold">
                  ACTIVE PRIMARY
                </span>
                <span className="text-xs font-mono text-slate-400">75% Progress</span>
              </div>
              <h3 className="text-xl font-bold text-white">Smart Parking System</h3>
              <p className="text-xs text-slate-400">
                AI + IoT based smart parking platform with ESP32 and AWS EC2.
              </p>
              <div className="pt-2 flex items-center gap-2">
                <Link
                  href={`/projects/smart-parking-system`}
                  className="px-4 py-2 rounded-xl bg-brand-cyan text-black font-bold text-xs"
                >
                  Project Details
                </Link>
                <button
                  onClick={() => setActiveTab('downloads')}
                  className="px-4 py-2 rounded-xl bg-white/5 text-slate-200 border border-white/10 text-xs"
                >
                  Downloads (8)
                </button>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#090f20] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400">
                  BOOKMARKED / SAVED
                </span>
                <span className="text-xs font-mono text-slate-400">Idea Stage</span>
              </div>
              <h3 className="text-xl font-bold text-white">EV Charging Monitor & Load Balancer</h3>
              <p className="text-xs text-slate-400">
                Smart grid energy monitor, EV charging station billing and dynamic throttle.
              </p>
              <div className="pt-2 flex items-center gap-2">
                <Link
                  href={`/projects/ev-charging-monitor`}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: DOWNLOADS */}
        {activeTab === 'downloads' && (
          <div className="rounded-3xl bg-[#090f20] border border-white/10 p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white">Verified Package Files</h3>
              <p className="text-xs text-slate-400 mt-1">
                Source code, circuit schematics, Word DOCX IEEE templates, and presentation decks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {downloadableAssets.map((asset, i) => {
                const Icon = asset.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 transition-all flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-50 border border-white/10 flex items-center justify-center text-brand-cyan">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-white truncate max-w-[220px]">
                          {asset.name}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-400">
                          {asset.type} • {asset.size}
                        </span>
                      </div>
                    </div>

                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Downloading asset: ${asset.name}`);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-brand-cyan/15 hover:bg-brand-cyan text-brand-cyan hover:text-black font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: SUPPORT & TICKETS */}
        {activeTab === 'support' && (
          <div className="rounded-3xl bg-[#090f20] border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Engineering Support & Debugging</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Get direct assistance from our engineering mentors on circuit pins, code syntax, or viva defenses.
                </p>
              </div>
              <button
                onClick={() => setTicketModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-brand-cyan text-black font-bold text-xs hover:bg-cyan-300 transition-colors flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Open New Ticket</span>
              </button>
            </div>

            <div className="space-y-3">
              {ticketsList.map((t) => (
                <div
                  key={t.id}
                  className="p-4 rounded-xl bg-black/30 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-brand-cyan">{t.id}</span>
                      <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-white/5 border border-white/10 text-slate-300">
                        {t.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-white mt-1">{t.subject}</h4>
                  </div>
                  <span className={`px-2.5 py-1 rounded text-xs font-mono font-semibold ${
                    t.status === 'Resolved' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                  }`}>
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Support Ticket Modal */}
        {ticketModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-lg rounded-3xl bg-[#090f20] border border-white/15 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-1">Open Engineering Support Ticket</h3>
              <p className="text-xs text-slate-400 mb-6">
                Describe the specific hardware bug, exception stack trace, or viva question you need help with.
              </p>

              <form onSubmit={handleCreateTicket} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Problem Category
                  </label>
                  <select
                    value={ticketCategory}
                    onChange={(e) => setTicketCategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-brand-cyan"
                  >
                    <option value="Hardware Debugging">Hardware Debugging</option>
                    <option value="Firmware / C++">Firmware / C++</option>
                    <option value="Cloud & AWS Deployment">Cloud & AWS Deployment</option>
                    <option value="Database & Backend API">Database & Backend API</option>
                    <option value="Viva Preparation">Viva Preparation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Ticket Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ESP32 serial output says 'Brownout detector was triggered'"
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Detailed Description / Serial Logs
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Paste error messages, wiring configuration, or questions..."
                    value={ticketDetails}
                    onChange={(e) => setTicketDetails(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setTicketModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-brand-cyan text-black font-bold text-xs hover:bg-cyan-300"
                  >
                    Submit Ticket
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
