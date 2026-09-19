'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useProjectStore } from '@/context/ProjectStoreContext';
import { DEPARTMENTS } from '@/components/Navbar';
import {
  Wrench,
  FolderGit2,
  TrendingUp,
  DollarSign,
  Users,
  Eye,
  Plus,
  CheckCircle2,
  Clock,
  AlertCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Upload,
  FileCode,
  FileText,
  Zap,
  Layers,
  ChevronRight,
  ExternalLink,
  Edit,
  Trash2
} from 'lucide-react';

type BuilderTab = 'projects' | 'sales' | 'team' | 'analytics' | 'create';

export default function BuilderDashboardPage() {
  const { builderProjects, submitBuilderProject } = useProjectStore();
  const [activeTab, setActiveTab] = useState<BuilderTab>('projects');
  const [projectFilter, setProjectFilter] = useState<'all' | 'published' | 'pending' | 'draft' | 'rejected'>('all');

  // 7-step wizard state
  const [wizardStep, setWizardStep] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(1);
  const [formData, setFormData] = useState({
    title: '',
    department: 'ECE',
    category: 'IoT',
    shortDesc: '',
    detailedDesc: '',
    technologies: 'ESP32, MQTT, C++',
    hardware: 'ESP32 DevKit, Sensors, Relays',
    software: 'PlatformIO, Node.js',
    languages: 'C++, TypeScript',
    frameworks: 'Express, React',
    database: 'PostgreSQL / InfluxDB',
    apis: 'REST API, WebSockets',
    skillLevel: 'Intermediate' as 'Beginner' | 'Intermediate' | 'Advanced',
    buildTime: '3–4 Weeks',
    teamSize: '3–4',
    hardwareCost: '₹3,500',
    softwareRequirements: 'VS Code, Arduino IDE 2.0',
    price: 4999,
    installationPrice: 999,
    customizationPrice: 1999,
    mentorshipPrice: 999,
  });

  const filteredBuilderProjects = builderProjects.filter((p) => {
    if (projectFilter === 'all') return true;
    return p.status === projectFilter;
  });

  const totalRevenue = builderProjects
    .filter((p) => p.status === 'published')
    .reduce((sum, p) => sum + (p.price * (p.salesCount || 1)), 0);

  const builderShare = Math.round(totalRevenue * 0.85); // 85% builder payout
  const platformFee = totalRevenue - builderShare;

  const handleWizardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitBuilderProject({
      title: formData.title,
      department: formData.department,
      category: formData.category,
      difficulty: formData.skillLevel,
      price: Number(formData.price),
    });
    setWizardStep(1);
    setActiveTab('projects');
  };

  return (
    <div className="min-h-screen tech-grid-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E8E4]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
                HA Labs Builder Studio
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#17211B] mt-1 tracking-tight">
              Project Creator & Seller Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-[#647067] mt-0.5">
              Publish your verified engineering projects, set pricing, and manage team earnings.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setActiveTab('create');
                setWizardStep(1);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all"
            >
              <Plus className="w-4 h-4 text-[#84CC16]" />
              <span>Create New Project</span>
            </button>
          </div>
        </div>

        {/* Studio Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-[#E2E8E4] mb-8 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'projects', label: 'Projects Inventory', icon: FolderGit2, badge: builderProjects.length },
            { id: 'sales', label: 'Sales & Revenue', icon: DollarSign },
            { id: 'team', label: 'Team Collaborators', icon: Users, badge: 3 },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'create', label: 'Create Project (7 Steps)', icon: Wrench },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as BuilderTab)}
                className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all border-b-2 -mb-px flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'border-[#087443] text-[#087443] bg-white'
                    : 'border-transparent text-[#647067] hover:text-[#17211B]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.badge !== undefined && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${isActive ? 'bg-[#087443] text-white' : 'bg-[#F1F5F3] text-[#647067]'}`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ── TAB 1: PROJECTS INVENTORY (DRAFTS / PENDING / PUBLISHED / REJECTED) ── */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            
            {/* Status Filter Sub-bar */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#E2E8E4]">
                {(['all', 'published', 'pending', 'draft', 'rejected'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setProjectFilter(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                      projectFilter === st
                        ? 'bg-[#087443] text-white'
                        : 'text-[#647067] hover:text-[#17211B]'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <div className="text-xs font-mono text-[#647067]">
                Showing {filteredBuilderProjects.length} Builder Projects
              </div>
            </div>

            {/* Projects Table */}
            <div className="ha-card rounded-2xl bg-white border border-[#E2E8E4] p-6 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-[#E2E8E4] text-[#647067] uppercase font-bold">
                    <tr>
                      <th className="pb-3">Project Title</th>
                      <th className="pb-3">Dept</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3">Price</th>
                      <th className="pb-3">Views</th>
                      <th className="pb-3">Sales</th>
                      <th className="pb-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8E4]">
                    {filteredBuilderProjects.map((p) => {
                      const statusStyles = {
                        published: 'bg-emerald-50 text-[#087443] border-emerald-200',
                        pending: 'bg-amber-50 text-amber-800 border-amber-200',
                        draft: 'bg-slate-100 text-slate-700 border-slate-200',
                        rejected: 'bg-red-50 text-red-700 border-red-200',
                      };

                      return (
                        <tr key={p.id} className="hover:bg-[#F8FAF9]">
                          <td className="py-3.5 font-semibold text-[#17211B]">
                            <div>{p.title}</div>
                            <span className="text-[10px] text-[#647067] font-mono">Submitted: {p.submittedAt}</span>
                          </td>
                          <td className="py-3.5">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-[#087443]">
                              {p.department}
                            </span>
                          </td>
                          <td className="py-3.5">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border capitalize ${statusStyles[p.status]}`}>
                              {p.status === 'pending' ? 'Pending Review' : p.status}
                            </span>
                          </td>
                          <td className="py-3.5 font-mono font-bold text-[#17211B]">
                            ₹{p.price.toLocaleString('en-IN')}
                          </td>
                          <td className="py-3.5 font-mono text-[#647067]">
                            <div className="flex items-center gap-1">
                              <Eye className="w-3.5 h-3.5" />
                              <span>{p.views}</span>
                            </div>
                          </td>
                          <td className="py-3.5 font-mono text-[#087443] font-bold">
                            {p.salesCount} sold
                          </td>
                          <td className="py-3.5 text-right space-x-2">
                            <button className="text-xs font-bold text-[#087443] hover:underline">
                              Edit
                            </button>
                            <span className="text-slate-300">·</span>
                            <Link href="/projects" className="text-xs font-bold text-[#647067] hover:underline">
                              Preview
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ── TAB 2: SALES & REVENUE ────────────────────────────────────────────── */}
        {activeTab === 'sales' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#647067] block">Total Gross Sales</span>
                <div className="text-3xl font-black text-[#17211B] font-mono mt-1">₹{totalRevenue.toLocaleString('en-IN')}</div>
                <span className="text-[11px] text-[#16A34A] font-medium">18 student team purchases</span>
              </div>
              <div className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#647067] block">Builder Share (85%)</span>
                <div className="text-3xl font-black text-[#087443] font-mono mt-1">₹{builderShare.toLocaleString('en-IN')}</div>
                <span className="text-[11px] text-[#087443] font-bold">Eligible for instant payout</span>
              </div>
              <div className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#647067] block">Platform Fee (15%)</span>
                <div className="text-3xl font-black text-[#647067] font-mono mt-1">₹{platformFee.toLocaleString('en-IN')}</div>
                <span className="text-[11px] text-[#647067]">Includes verification & hosting</span>
              </div>
            </div>

            <div className="ha-card rounded-2xl bg-white border border-[#E2E8E4] p-6 space-y-4">
              <h3 className="text-base font-bold text-[#17211B]">Recent Student Orders</h3>
              <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] flex items-center justify-between text-xs">
                <div>
                  <strong className="text-[#17211B] block">ORD-9428 · Smart Parking Occupancy & Guidance System</strong>
                  <span className="text-[#647067] text-[11px]">Buyer: PSG Tech ECE Team 4 · Net: ₹4,249</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#087443] font-bold">Paid</span>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 3: TEAM COLLABORATORS ─────────────────────────────────────────── */}
        {activeTab === 'team' && (
          <div className="ha-card rounded-2xl bg-white border border-[#E2E8E4] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[#17211B]">Project Team Collaborators</h3>
                <p className="text-xs text-[#647067] mt-0.5">Manage permissions for co-builders working on your project blueprints.</p>
              </div>
              <button className="px-3 py-1.5 rounded-xl bg-[#087443] text-white font-bold text-xs">
                + Invite Co-Builder
              </button>
            </div>

            <div className="space-y-3">
              {[
                { name: 'Ajithkumar (Owner)', role: 'Firmware & Cloud Architecture', access: 'Full Access' },
                { name: 'Harishkumar', role: 'Hardware Testing & Schematics', access: 'Editor' },
                { name: 'Kavitha S.', role: 'Documentation & PPT', access: 'Viewer' },
              ].map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-[#17211B] block">{m.name}</strong>
                    <span className="text-[#647067] text-[11px]">{m.role}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-[#E2E8E4] font-mono font-bold text-[#087443]">
                    {m.access}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 4: ANALYTICS ──────────────────────────────────────────────────── */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="ha-card p-6 rounded-2xl bg-white border border-[#E2E8E4] space-y-4">
              <h3 className="text-base font-bold text-[#17211B]">Monthly Views & Engagement</h3>
              <div className="flex items-end justify-between h-40 pt-4 gap-2">
                {[
                  { m: 'Jun', v: 240 },
                  { m: 'Jul', v: 480 },
                  { m: 'Aug', v: 920 },
                  { m: 'Sep', v: 1420 },
                ].map((b) => (
                  <div key={b.m} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <div className="w-full bg-[#087443] rounded-t-lg" style={{ height: `${(b.v / 1420) * 100}%` }} />
                    <span className="text-[10px] font-mono text-[#647067]">{b.m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ha-card p-6 rounded-2xl bg-white border border-[#E2E8E4] space-y-4">
              <h3 className="text-base font-bold text-[#17211B]">Purchase Conversion Rate</h3>
              <div className="text-4xl font-black text-[#087443] font-mono">1.26%</div>
              <p className="text-xs text-[#647067]">
                Average for verified engineering projects with working demo videos and complete PCB schematics.
              </p>
            </div>
          </div>
        )}

        {/* ── TAB 5: 7-STEP PROJECT SUBMISSION WIZARD ───────────────────────────── */}
        {activeTab === 'create' && (
          <div className="ha-card p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8E4] shadow-sm space-y-6">
            
            {/* Wizard Header & Stepper */}
            <div className="border-b border-[#E2E8E4] pb-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
                  Step {wizardStep} of 7: Project Submission
                </span>
                <span className="text-xs text-[#647067]">Ready for Admin Technical Verification</span>
              </div>

              {/* 7-Step Navigation Indicator */}
              <div className="grid grid-cols-7 gap-1.5 pt-2">
                {['Basic', 'Tech', 'Requirements', 'Gallery', 'Deliverables', 'Pricing', 'Review'].map((stepName, i) => (
                  <div
                    key={stepName}
                    className={`h-2 rounded-full transition-all ${
                      i + 1 <= wizardStep ? 'bg-[#087443]' : 'bg-[#E2E8E4]'
                    }`}
                    title={`Step ${i + 1}: ${stepName}`}
                  />
                ))}
              </div>
            </div>

            <form onSubmit={handleWizardSubmit} className="space-y-6">
              
              {/* STEP 1: Basic Information */}
              {wizardStep === 1 && (
                <div className="space-y-4 text-xs">
                  <h3 className="text-base font-bold text-[#17211B]">1. Basic Project Information</h3>
                  
                  <div>
                    <label className="block font-bold text-[#17211B] mb-1">Project Name</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. Smart IoT Precision Agriculture Node"
                      className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none focus:border-[#087443]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">Department</label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none focus:border-[#087443] bg-white"
                      >
                        {DEPARTMENTS.map((d) => (
                          <option key={d.code} value={d.code}>{d.code} — {d.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none focus:border-[#087443] bg-white"
                      >
                        <option value="IoT">IoT</option>
                        <option value="Embedded">Embedded Systems</option>
                        <option value="AI/ML">AI & Machine Learning</option>
                        <option value="Power Systems">Power Electronics</option>
                        <option value="Robotics">Robotics & Automation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#17211B] mb-1">Short Tagline (1 sentence)</label>
                    <input
                      type="text"
                      value={formData.shortDesc}
                      onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                      placeholder="Brief one-line summary for project cards"
                      className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none focus:border-[#087443]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#17211B] mb-1">Detailed Technical Description</label>
                    <textarea
                      rows={3}
                      value={formData.detailedDesc}
                      onChange={(e) => setFormData({ ...formData, detailedDesc: e.target.value })}
                      placeholder="Describe the system problem statement, methodology, and functional block diagram"
                      className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none focus:border-[#087443]"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Technical Information */}
              {wizardStep === 2 && (
                <div className="space-y-4 text-xs">
                  <h3 className="text-base font-bold text-[#17211B]">2. Technical Stack & Hardware Toolchain</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">Key Technologies</label>
                      <input
                        type="text"
                        value={formData.technologies}
                        onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">Hardware Components</label>
                      <input
                        type="text"
                        value={formData.hardware}
                        onChange={(e) => setFormData({ ...formData, hardware: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">Programming Languages</label>
                      <input
                        type="text"
                        value={formData.languages}
                        onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">Frameworks & Libraries</label>
                      <input
                        type="text"
                        value={formData.frameworks}
                        onChange={(e) => setFormData({ ...formData, frameworks: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">Database</label>
                      <input
                        type="text"
                        value={formData.database}
                        onChange={(e) => setFormData({ ...formData, database: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">APIs / Protocols</label>
                      <input
                        type="text"
                        value={formData.apis}
                        onChange={(e) => setFormData({ ...formData, apis: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Project Requirements */}
              {wizardStep === 3 && (
                <div className="space-y-4 text-xs">
                  <h3 className="text-base font-bold text-[#17211B]">3. Project Requirements & Student Scope</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">Skill Difficulty Level</label>
                      <select
                        value={formData.skillLevel}
                        onChange={(e) => setFormData({ ...formData, skillLevel: e.target.value as any })}
                        className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none bg-white"
                      >
                        <option value="Beginner">Beginner (Sem 3–4)</option>
                        <option value="Intermediate">Intermediate (Sem 5–6)</option>
                        <option value="Advanced">Advanced (Sem 7–8 Capstone)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">Estimated Build Time</label>
                      <input
                        type="text"
                        value={formData.buildTime}
                        onChange={(e) => setFormData({ ...formData, buildTime: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">Recommended Team Size</label>
                      <input
                        type="text"
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">Estimated Hardware BOM Cost</label>
                      <input
                        type="text"
                        value={formData.hardwareCost}
                        onChange={(e) => setFormData({ ...formData, hardwareCost: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Visual Gallery Uploads */}
              {wizardStep === 4 && (
                <div className="space-y-4 text-xs">
                  <h3 className="text-base font-bold text-[#17211B]">4. Visual Presentation & Proof of Concept</h3>
                  <div className="p-6 rounded-2xl border-2 border-dashed border-[#E2E8E4] text-center space-y-2 bg-[#F8FAF9]">
                    <Upload className="w-8 h-8 text-[#087443] mx-auto" />
                    <div className="font-bold text-[#17211B]">Upload Hardware & Prototype Images</div>
                    <p className="text-[11px] text-[#647067]">
                      PNG, JPG, or WEBP. Upload clear photos of your breadboard wiring, PCB trace, architecture diagram, and dashboard.
                    </p>
                  </div>
                  <div>
                    <label className="block font-bold text-[#17211B] mb-1">YouTube Demo Video Link</label>
                    <input
                      type="text"
                      placeholder="https://youtube.com/watch?v=..."
                      className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 5: Deliverables Checklist */}
              {wizardStep === 5 && (
                <div className="space-y-4 text-xs">
                  <h3 className="text-base font-bold text-[#17211B]">5. Package Deliverables Checklist</h3>
                  <p className="text-[#647067]">Confirm that your project submission contains all standard university deliverables:</p>
                  <div className="space-y-2">
                    {[
                      'Complete, commented source code firmware files',
                      'Pin-to-pin wiring schematic and KiCad PCB Gerber files',
                      'University IEEE standard project report (.docx)',
                      '15-minute viva review presentation slides (.pptx)',
                      'External examiner viva defense question bank with answers',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 rounded-xl border border-[#E2E8E4] bg-white">
                        <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#087443]" />
                        <span className="font-medium text-[#17211B]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 6: Pricing & Add-on Services */}
              {wizardStep === 6 && (
                <div className="space-y-4 text-xs">
                  <h3 className="text-base font-bold text-[#17211B]">6. Marketplace Pricing & Add-on Services</h3>
                  
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="font-bold text-[#087443] block">Builder Revenue Share</span>
                    <p className="text-[#647067] text-[11px] mt-0.5">
                      You receive <strong>85%</strong> of every project sale directly to your bank account / UPI.
                    </p>
                  </div>

                  <div>
                    <label className="block font-bold text-[#17211B] mb-1">Base Project Price (₹)</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                      className="w-full p-3 rounded-xl border border-[#E2E8E4] outline-none font-mono text-sm font-bold"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">Installation Add-on (₹)</label>
                      <input
                        type="number"
                        value={formData.installationPrice}
                        onChange={(e) => setFormData({ ...formData, installationPrice: Number(e.target.value) })}
                        className="w-full p-2.5 rounded-xl border border-[#E2E8E4] outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">Customization Add-on (₹)</label>
                      <input
                        type="number"
                        value={formData.customizationPrice}
                        onChange={(e) => setFormData({ ...formData, customizationPrice: Number(e.target.value) })}
                        className="w-full p-2.5 rounded-xl border border-[#E2E8E4] outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#17211B] mb-1">Mentoring Add-on (₹)</label>
                      <input
                        type="number"
                        value={formData.mentorshipPrice}
                        onChange={(e) => setFormData({ ...formData, mentorshipPrice: Number(e.target.value) })}
                        className="w-full p-2.5 rounded-xl border border-[#E2E8E4] outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 7: Review & Submit */}
              {wizardStep === 7 && (
                <div className="space-y-4 text-xs">
                  <h3 className="text-base font-bold text-[#17211B]">7. Review & Submit for Admin Verification</h3>
                  <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#647067]">Project:</span>
                      <strong className="text-[#17211B]">{formData.title || 'Untitled Project'}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#647067]">Department & Level:</span>
                      <strong className="text-[#087443]">{formData.department} · {formData.skillLevel}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#647067]">Marketplace Price:</span>
                      <strong className="font-mono text-[#087443] font-bold">₹{formData.price}</strong>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-[11px] leading-relaxed">
                    <strong>🛡️ Verification Note:</strong> HA Labs Admins will review your source code, circuit breadboard wiring, and IEEE report within 24 hours to ensure 100% lab correctness before publishing.
                  </div>
                </div>
              )}

              {/* Wizard Action Buttons */}
              <div className="pt-4 border-t border-[#E2E8E4] flex items-center justify-between">
                {wizardStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setWizardStep((prev) => (prev - 1) as any)}
                    className="px-4 py-2 rounded-xl border border-[#E2E8E4] font-bold text-xs text-[#17211B]"
                  >
                    ← Back
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveTab('projects')}
                    className="text-xs font-bold text-[#647067]"
                  >
                    Cancel
                  </button>
                )}

                {wizardStep < 7 ? (
                  <button
                    type="button"
                    onClick={() => setWizardStep((prev) => (prev + 1) as any)}
                    className="px-5 py-2.5 rounded-xl bg-[#087443] text-white font-bold text-xs flex items-center gap-1.5"
                  >
                    <span>Continue to Step {wizardStep + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#087443] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm hover:bg-[#065331]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                    <span>Submit Project for Admin Review</span>
                  </button>
                )}
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
