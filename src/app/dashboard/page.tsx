'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard, FolderGit2, Download, Bot, HelpCircle, User,
  CheckCircle2, Clock, ArrowRight, ExternalLink, Sparkles, FileText,
  FileCode, Layers, Send, Plus, Star, Bookmark, Activity, Zap,
  Target, Calendar, ChevronRight, Circle, Grip, TrendingUp, Bell
} from 'lucide-react';
import { PROJECTS_DATA } from '@/data/projects';
import { AiAssistant } from '@/components/AiAssistantModal';

// ─── Types ────────────────────────────────────────────────────────────────────
type TabId = 'overview' | 'projects' | 'downloads' | 'ai' | 'support';

interface KanbanTask {
  id: string;
  title: string;
  phase: 'planned' | 'building' | 'testing' | 'done';
  priority: 'high' | 'medium' | 'low';
}

interface ActivityItem {
  id: string;
  action: string;
  target: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const KANBAN_TASKS: KanbanTask[] = [
  { id: 't1', title: 'ESP32 Ultrasonic sensor calibration', phase: 'done', priority: 'high' },
  { id: 't2', title: 'Node.js Express REST API endpoints', phase: 'done', priority: 'high' },
  { id: 't3', title: 'MySQL slot reservation schema', phase: 'done', priority: 'medium' },
  { id: 't4', title: 'Tailwind CSS parking heatmap UI', phase: 'done', priority: 'medium' },
  { id: 't5', title: 'AWS EC2 Docker deployment', phase: 'building', priority: 'high' },
  { id: 't6', title: 'MQTT broker Mosquitto setup', phase: 'building', priority: 'high' },
  { id: 't7', title: 'Nginx reverse proxy + SSL config', phase: 'testing', priority: 'medium' },
  { id: 't8', title: 'IEEE project report — Chapter 3', phase: 'planned', priority: 'medium' },
  { id: 't9', title: 'Review presentation slides PPT', phase: 'planned', priority: 'low' },
  { id: 't10', title: 'Viva mock examination practice', phase: 'planned', priority: 'low' },
];

const PHASE_CONFIG = {
  planned:  { label: 'Planned', color: 'text-slate-400 border-slate-600/40 bg-slate-800/30', dot: 'bg-slate-500' },
  building: { label: 'Building', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10', dot: 'bg-amber-400' },
  testing:  { label: 'Testing', color: 'text-sky-400 border-sky-500/30 bg-sky-500/10', dot: 'bg-sky-400' },
  done:     { label: 'Done ✓', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10', dot: 'bg-emerald-400' },
};

const PRIORITY_COLORS = {
  high:   'bg-red-500/20 text-red-400 border-red-500/20',
  medium: 'bg-amber-500/20 text-amber-400 border-amber-500/20',
  low:    'bg-slate-500/20 text-slate-400 border-slate-500/20',
};

const ACTIVITY_FEED: ActivityItem[] = [
  { id: 'a1', action: 'Downloaded', target: 'firmware_esp32_smart_parking.ino', time: '2h ago', icon: Download, color: 'text-brand-cyan' },
  { id: 'a2', action: 'Viewed blueprint', target: 'Hardware Circuit Schematic', time: '4h ago', icon: Layers, color: 'text-purple-400' },
  { id: 'a3', action: 'Asked AI Copilot', target: 'ESP32 I2C bus debugging', time: '6h ago', icon: Bot, color: 'text-emerald-400' },
  { id: 'a4', action: 'Saved project', target: 'EV Charging Monitoring System', time: '1d ago', icon: Bookmark, color: 'text-amber-400' },
  { id: 'a5', action: 'Downloaded', target: 'ieee_project_report_template.docx', time: '2d ago', icon: FileText, color: 'text-sky-400' },
];

const DOWNLOADABLE_ASSETS = [
  { name: 'firmware_esp32_smart_parking.ino', size: '24 KB', type: 'Firmware C++', icon: FileCode, project: 'Smart Parking' },
  { name: 'backend_nodejs_rest_api.zip', size: '1.4 MB', type: 'Backend Code', icon: FileCode, project: 'Smart Parking' },
  { name: 'dashboard_frontend_web.zip', size: '2.8 MB', type: 'Frontend UI', icon: FileCode, project: 'Smart Parking' },
  { name: 'circuit_schematic_fritzing.pdf', size: '640 KB', type: 'Circuit Schematic', icon: Layers, project: 'Smart Parking' },
  { name: 'system_architecture_dataflow.pdf', size: '320 KB', type: 'Architecture Diagram', icon: Layers, project: 'Smart Parking' },
  { name: 'ieee_project_report_template.docx', size: '820 KB', type: 'IEEE Report', icon: FileText, project: 'Smart Parking' },
  { name: 'review_presentation_slides.pptx', size: '4.2 MB', type: 'PPT Slides', icon: FileText, project: 'Smart Parking' },
  { name: 'viva_question_bank_answers.pdf', size: '310 KB', type: 'Viva Guide', icon: FileText, project: 'Smart Parking' },
  { name: 'docker_compose_deployment.yml', size: '6 KB', type: 'DevOps Config', icon: FileCode, project: 'Smart Parking' },
];

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, sub, color }: { icon: any; label: string; value: string; sub?: string; color: string }) {
  return (
    <div className="p-5 rounded-2xl bg-[#090f20] border border-white/10 hover:border-white/20 transition-all space-y-3">
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <div className="text-2xl font-black text-white font-mono">{value}</div>
        <div className="text-xs font-bold text-slate-300 mt-0.5">{label}</div>
        {sub && <div className="text-[10px] font-mono text-slate-500 mt-0.5">{sub}</div>}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function StudentDashboardPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketCategory, setTicketCategory] = useState('Hardware Debugging');
  const [ticketDetails, setTicketDetails] = useState('');
  const [savedProjects, setSavedProjects] = useState<Set<string>>(new Set(['smart-parking-system', 'ev-charging-monitoring']));
  const [ticketsList, setTicketsList] = useState([
    { id: 'TKT-1042', subject: 'ESP32 I2C 1602 LCD bus address conflict (0x27 vs 0x3F)', status: 'In Review', category: 'Hardware', created: '2h ago' },
    { id: 'TKT-1039', subject: 'Docker container port 5000 not reachable on AWS EC2 public IP', status: 'Resolved', category: 'Cloud', created: '2d ago' },
  ]);

  const activeProject = PROJECTS_DATA[0]; // Smart Parking System
  const doneCount = KANBAN_TASKS.filter(t => t.phase === 'done').length;
  const totalTasks = KANBAN_TASKS.length;
  const progressPct = Math.round((doneCount / totalTasks) * 100);

  const tabs = [
    { id: 'overview' as TabId, label: 'Overview', icon: LayoutDashboard },
    { id: 'projects' as TabId, label: 'My Projects', icon: FolderGit2 },
    { id: 'downloads' as TabId, label: `Downloads (${DOWNLOADABLE_ASSETS.length})`, icon: Download },
    { id: 'ai' as TabId, label: 'AI Copilot', icon: Bot },
    { id: 'support' as TabId, label: `Support (${ticketsList.length})`, icon: HelpCircle },
  ];

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject.trim()) return;
    setTicketsList([{ id: `TKT-${Math.floor(1000 + Math.random() * 9000)}`, subject: ticketSubject, status: 'Open', category: ticketCategory, created: 'Just now' }, ...ticketsList]);
    setTicketSubject('');
    setTicketDetails('');
    setTicketModalOpen(false);
  };

  const toggleSave = (slug: string) => {
    setSavedProjects(prev => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  };

  return (
    <div className="min-h-screen py-8 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 mb-8 gap-4">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-brand-cyan/40 flex items-center justify-center font-black text-brand-cyan text-xl shadow-glow-cyan">
                AK
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#060913]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold text-white">Ajithkumar's Workspace</h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-bold">
                  STUDENT PRO
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                GCT Coimbatore • ECE Dept • Batch 2026 • <span className="text-emerald-400">Active</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { setActiveTab('ai'); }}
              className="px-3.5 py-2 rounded-xl bg-[#090f20] border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors hover:border-brand-cyan/40"
            >
              <Bot className="w-3.5 h-3.5 text-brand-cyan" />
              <span>AI Copilot</span>
            </button>
            <button
              onClick={() => setTicketModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-brand-cyan text-black font-bold text-xs flex items-center gap-1.5 hover:bg-cyan-300 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Ticket</span>
            </button>
          </div>
        </div>

        {/* ── Tab Nav ── */}
        <div className="flex items-center gap-1.5 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-brand-cyan text-black font-bold shadow-glow-cyan'
                    : 'bg-[#090f20] border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* TAB 1: OVERVIEW                                */}
        {/* ═══════════════════════════════════════════════ */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* 4 Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard icon={FolderGit2} label="Active Projects" value="2" sub="1 primary + 1 saved" color="bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan" />
              <StatCard icon={CheckCircle2} label="Tasks Completed" value={`${doneCount}/${totalTasks}`} sub={`${progressPct}% overall`} color="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400" />
              <StatCard icon={Download} label="Downloads Available" value={String(DOWNLOADABLE_ASSETS.length)} sub="Verified packages" color="bg-sky-500/15 border border-sky-500/30 text-sky-400" />
              <StatCard icon={Calendar} label="Days to Viva" value="38" sub="Nov 21, 2026" color="bg-purple-500/15 border border-purple-500/30 text-purple-400" />
            </div>

            {/* Active Project Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0e1933] to-[#0a1020] border-2 border-brand-cyan/40 shadow-glow-cyan relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-brand-cyan/20 text-brand-cyan font-bold">ACTIVE PRIMARY</span>
                      <span className="text-xs text-slate-400 font-mono">Final Year Project • ECE</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{activeProject.title}</h2>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">{activeProject.tagline}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <Link href={`/projects/${activeProject.slug}`} className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-xs font-medium transition-colors flex items-center gap-1.5">
                      <span>View Details</span><ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                    <button onClick={() => setActiveTab('downloads')} className="px-4 py-2.5 rounded-xl bg-brand-cyan text-black font-bold text-xs hover:bg-cyan-300 transition-colors flex items-center gap-1.5">
                      <Download className="w-3.5 h-3.5" /><span>Downloads</span>
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">Overall Build Progress</span>
                    <span className="font-extrabold text-brand-cyan text-sm">{progressPct}% Completed</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Done: Hardware + Backend + DB + Dashboard UI</span>
                    <span className="text-cyan-300">Next: AWS Deployment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kanban Board + Activity Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Kanban Board */}
              <div className="lg:col-span-8 p-6 rounded-3xl bg-[#090f20] border border-white/10 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Grip className="w-4 h-4 text-brand-cyan" />
                  <span>Project Kanban Board</span>
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {(['planned', 'building', 'testing', 'done'] as const).map((phase) => {
                    const tasks = KANBAN_TASKS.filter(t => t.phase === phase);
                    const cfg = PHASE_CONFIG[phase];
                    return (
                      <div key={phase} className="space-y-2">
                        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold border ${cfg.color}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                          <span>{cfg.label}</span>
                          <span className="ml-auto opacity-60">{tasks.length}</span>
                        </div>
                        {tasks.map(task => (
                          <div key={task.id} className="p-2.5 rounded-xl bg-black/40 border border-white/5 hover:border-white/15 transition-colors">
                            <p className="text-[11px] text-slate-200 leading-snug">{task.title}</p>
                            <span className={`mt-1.5 px-2 py-0.5 rounded text-[9px] font-mono font-bold border inline-block ${PRIORITY_COLORS[task.priority]}`}>
                              {task.priority}
                            </span>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Activity Feed */}
              <div className="lg:col-span-4 p-6 rounded-3xl bg-[#090f20] border border-white/10 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-cyan" />
                  <span>Recent Activity</span>
                </h3>
                <div className="space-y-3">
                  {ACTIVITY_FEED.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.id} className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center flex-shrink-0 ${item.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-slate-200 font-medium">{item.action}</p>
                          <p className="text-[11px] text-slate-400 truncate">{item.target}</p>
                          <span className="text-[10px] font-mono text-slate-600">{item.time}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button onClick={() => setActiveTab('ai')} className="w-full py-2.5 rounded-xl bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/25 text-xs font-mono text-brand-cyan transition-colors flex items-center justify-center gap-2">
                  <Bot className="w-3.5 h-3.5" />
                  <span>Open AI Copilot</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════ */}
        {/* TAB 2: MY PROJECTS                             */}
        {/* ═══════════════════════════════════════════════ */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">My Projects & Saved</h2>
              <Link href="/projects" className="text-xs font-mono text-brand-cyan hover:underline flex items-center gap-1">
                Browse all 20 projects <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {PROJECTS_DATA.slice(0, 6).map((project) => {
                const isSaved = savedProjects.has(project.slug);
                const isActive = project.slug === 'smart-parking-system';
                return (
                  <div key={project.id} className={`rounded-2xl border p-5 space-y-4 transition-all ${isActive ? 'border-brand-cyan/50 bg-[#0d1628] shadow-glow-cyan' : 'border-white/10 bg-[#090f20] hover:border-white/20'}`}>
                    {/* Card Header */}
                    <div className="flex items-center justify-between">
                      {isActive ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-cyan/20 text-brand-cyan">ACTIVE</span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-white/5 border border-white/5">{project.category}</span>
                      )}
                      <button onClick={() => toggleSave(project.slug)} className={`p-1.5 rounded-lg border transition-colors ${isSaved ? 'bg-amber-500/20 border-amber-500/30 text-amber-400' : 'border-white/10 text-slate-500 hover:text-slate-200'}`}>
                        <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-400' : ''}`} />
                      </button>
                    </div>

                    {/* Thumbnail */}
                    <div className="aspect-video rounded-xl overflow-hidden bg-slate-950 border border-white/5">
                      <img src={project.gallery.overview} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-white">{project.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{project.tagline}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link href={`/projects/${project.slug}`} className={`flex-1 py-2 rounded-xl text-xs font-bold text-center transition-all ${isActive ? 'bg-brand-cyan text-black hover:bg-cyan-300' : 'bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200'}`}>
                        View Details
                      </Link>
                      {isActive && (
                        <button onClick={() => setActiveTab('downloads')} className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 transition-colors">
                          Files
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════ */}
        {/* TAB 3: DOWNLOADS                               */}
        {/* ═══════════════════════════════════════════════ */}
        {activeTab === 'downloads' && (
          <div className="rounded-3xl bg-[#090f20] border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <h3 className="text-lg font-bold text-white">Verified Package Files</h3>
                <p className="text-xs text-slate-400 mt-1">Source code, schematics, IEEE templates, and deployment configs for Smart Parking System.</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan">
                {DOWNLOADABLE_ASSETS.length} files
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {DOWNLOADABLE_ASSETS.map((asset, i) => {
                const Icon = asset.icon;
                return (
                  <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 transition-all flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center text-brand-cyan flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-mono font-bold text-white truncate">{asset.name}</h4>
                        <span className="text-[10px] font-mono text-slate-400">{asset.type} • {asset.size}</span>
                      </div>
                    </div>
                    <a href="#" onClick={(e) => { e.preventDefault(); alert(`Downloading: ${asset.name}`); }}
                      className="px-3 py-1.5 rounded-lg bg-brand-cyan/15 hover:bg-brand-cyan text-brand-cyan hover:text-black font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors flex-shrink-0">
                      <Download className="w-3.5 h-3.5" />
                      <span>Get</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════ */}
        {/* TAB 4: AI COPILOT (inline)                     */}
        {/* ═══════════════════════════════════════════════ */}
        {activeTab === 'ai' && (
          <div className="rounded-3xl bg-[#090f20] border border-white/10 overflow-hidden">
            <AiAssistant projectContext="Smart Parking System" />
          </div>
        )}

        {/* ═══════════════════════════════════════════════ */}
        {/* TAB 5: SUPPORT                                 */}
        {/* ═══════════════════════════════════════════════ */}
        {activeTab === 'support' && (
          <div className="rounded-3xl bg-[#090f20] border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Engineering Support & Debugging</h3>
                <p className="text-xs text-slate-400 mt-0.5">Get direct assistance from HA Labs engineers on circuit pins, code syntax, cloud setup, or viva defenses.</p>
              </div>
              <button onClick={() => setTicketModalOpen(true)} className="px-4 py-2 rounded-xl bg-brand-cyan text-black font-bold text-xs hover:bg-cyan-300 transition-colors flex items-center gap-1.5">
                <Plus className="w-3.5 h-3.5" /><span>Open Ticket</span>
              </button>
            </div>

            <div className="space-y-3">
              {ticketsList.map((t) => (
                <div key={t.id} className="p-4 rounded-xl bg-black/30 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono font-bold text-brand-cyan">{t.id}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">{t.category}</span>
                      <span className="text-[10px] font-mono text-slate-500">{t.created}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white mt-1">{t.subject}</h4>
                  </div>
                  <span className={`px-2.5 py-1 rounded text-xs font-mono font-semibold flex-shrink-0 ${
                    t.status === 'Resolved' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : t.status === 'Open' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-3xl bg-[#090f20] border border-white/15 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-1">Open Engineering Support Ticket</h3>
              <p className="text-xs text-slate-400 mb-6">Describe your specific hardware bug, exception stack trace, or viva question.</p>
              <form onSubmit={handleCreateTicket} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">Category</label>
                  <select value={ticketCategory} onChange={(e) => setTicketCategory(e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-brand-cyan">
                    <option>Hardware Debugging</option>
                    <option>Firmware / C++</option>
                    <option>Cloud &amp; AWS Deployment</option>
                    <option>Database &amp; Backend API</option>
                    <option>Viva Preparation</option>
                    <option>Documentation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">Subject *</label>
                  <input type="text" required placeholder="e.g. ESP32 brownout detector triggered on Wi-Fi transmit" value={ticketSubject} onChange={(e) => setTicketSubject(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">Details / Serial Logs</label>
                  <textarea rows={4} placeholder="Paste error messages, wiring configuration, or questions..." value={ticketDetails} onChange={(e) => setTicketDetails(e.target.value)} className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan resize-none" />
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button type="button" onClick={() => setTicketModalOpen(false)} className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300">Cancel</button>
                  <button type="submit" className="px-5 py-2 rounded-xl bg-brand-cyan text-black font-bold text-xs hover:bg-cyan-300">Submit Ticket</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
