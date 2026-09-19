'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROJECTS_DATA, Project } from '@/data/projects';
import { DEPARTMENTS } from '@/components/Navbar';
import { useProjectStore, BuilderProjectItem } from '@/context/ProjectStoreContext';
import {
  FolderGit2,
  Layers,
  Users,
  Cpu,
  BookOpen,
  FileCheck,
  Star,
  BarChart3,
  FileText,
  Settings,
  Plus,
  Search,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  Download,
  AlertCircle,
  ShieldCheck,
  Trash2,
  Edit,
  XCircle,
  HelpCircle,
  ExternalLink,
  ClipboardCheck,
  Filter
} from 'lucide-react';

type AdminTab =
  | 'analytics'
  | 'submissions'
  | 'projects'
  | 'departments'
  | 'students'
  | 'orders'
  | 'technologies'
  | 'resources'
  | 'settings';

export default function AdminDashboardPage() {
  const { builderProjects, reviewProject, orders } = useProjectStore();
  const [activeTab, setActiveTab] = useState<AdminTab>('submissions');
  const [projectsList, setProjectsList] = useState<Project[]>(PROJECTS_DATA);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newBranch, setNewBranch] = useState('ECE');
  const [newDifficulty, setNewDifficulty] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');

  // Verification modal state
  const [selectedReviewProject, setSelectedReviewProject] = useState<BuilderProjectItem | null>(null);
  const [reviewNotes, setReviewNotes] = useState('');
  const [checklist, setChecklist] = useState({
    hardwareTest: true,
    docsComplete: true,
    codeMatch: true,
    mediaGenuine: true,
    securityCheck: true,
    licensing: true,
    deliverablesBundle: true,
    vivaReadiness: true,
  });

  const handleCheckbox = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const openReviewModal = (proj: BuilderProjectItem) => {
    setSelectedReviewProject(proj);
    setReviewNotes('');
    setChecklist({
      hardwareTest: true,
      docsComplete: true,
      codeMatch: true,
      mediaGenuine: true,
      securityCheck: true,
      licensing: true,
      deliverablesBundle: true,
      vivaReadiness: true,
    });
  };

  const executeReview = (decision: 'approve' | 'request_changes' | 'reject') => {
    if (!selectedReviewProject) return;
    reviewProject(selectedReviewProject.id, decision, reviewNotes);
    setSelectedReviewProject(null);
  };

  const allChecklistPassed = Object.values(checklist).every(Boolean);

  const analytics = {
    totalProjects: 142 + builderProjects.filter(p => p.status === 'published').length,
    activeStudents: '3,840',
    teamsCreated: 920,
    projectsCompleted: 615,
    totalSales: orders.reduce((sum, o) => sum + o.amount, 0) + 128450,
  };

  const popularDepartments = [
    { code: 'ECE', name: 'Electronics & Communication', share: 28, count: 40 },
    { code: 'CSE', name: 'Computer Science', share: 26, count: 37 },
    { code: 'AI & DS', name: 'Artificial Intelligence & Data Science', share: 18, count: 26 },
    { code: 'MECH', name: 'Mechanical Engineering', share: 12, count: 17 },
    { code: 'EEE', name: 'Electrical & Electronics', share: 9, count: 13 },
    { code: 'IT / CIVIL', name: 'IT & Civil Engineering', share: 7, count: 9 },
  ];

  const topTechnologies = [
    { name: 'ESP32 & Embedded C++', usage: '74%', count: 105 },
    { name: 'Python & FastAPI', usage: '68%', count: 96 },
    { name: 'React / Next.js & Tailwind', usage: '62%', count: 88 },
    { name: 'TensorFlow / PyTorch', usage: '44%', count: 62 },
    { name: 'ROS / Robotics Firmware', usage: '28%', count: 40 },
  ];

  const pendingSubmissionsCount = builderProjects.filter((p) => p.status === 'pending').length;

  const sidebarTabs = [
    { id: 'submissions', label: 'Project Verification', icon: ClipboardCheck, badge: pendingSubmissionsCount },
    { id: 'analytics', label: 'Analytics & Sales', icon: BarChart3 },
    { id: 'projects', label: 'Projects Inventory', icon: FolderGit2, badge: projectsList.length },
    { id: 'orders', label: 'Buyer Orders', icon: FileCheck, badge: orders.length },
    { id: 'departments', label: 'Departments', icon: Layers, badge: 8 },
    { id: 'students', label: 'Students & Teams', icon: Users, badge: '3.8k' },
    { id: 'technologies', label: 'Technologies', icon: Cpu, badge: 24 },
    { id: 'resources', label: 'Resources & BOM', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newProject: Project = {
      id: `proj-${Date.now()}`,
      title: newTitle,
      slug: newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      tagline: `${newTitle} engineering prototype and complete documentation package.`,
      description: 'Fully verified hardware schematics, firmware code, cloud ingestion pipeline, and viva Q&A.',
      branch: [newBranch as any],
      category: 'IoT',
      projectType: 'Major Project',
      technologies: ['ESP32', 'Python', 'AWS', 'Next.js'],
      difficulty: newDifficulty,
      budget: '₹4,000–₹6,000',
      budgetDisplay: '₹4,000–₹6,000',
      budgetMin: 4000,
      budgetMax: 6000,
      duration: '4–6 weeks',
      teamSize: '2–4',
      hardware: ['ESP32 NodeMCU', 'Sensor Array', '5V Power Supply'],
      software: ['C++', 'Python', 'Docker'],
      features: ['Real-time telemetry', 'Cloud synchronization'],
      architecture: 'Sensors → ESP32 → API → Cloud Dashboard',
      architectureSteps: ['Sensors', 'ESP32', 'API', 'Dashboard'],
      requirements: ['Basic electronics wiring'],
      learningOutcomes: ['Embedded firmware', 'REST APIs'],
      tags: ['Verified', 'Engineering'],
      defaultMatch: 95,
      problem: 'Manual inspection latency and human error.',
      solution: 'Automated sensor telemetry and continuous cloud logging.',
      howItWorks: 'Sensors detect state changes and push packets to cloud via Wi-Fi.',
      visualSummary: `${newTitle} + ESP32 + cloud dashboard`,
      gallery: {
        overview: '/projects/smart-parking-system/overview.webp',
        hardware: '/projects/smart-parking-system/hardware.webp',
        architecture: '/projects/smart-parking-system/architecture.webp',
        dashboard: '/projects/smart-parking-system/dashboard.webp',
        deployment: '/projects/smart-parking-system/deployment.webp',
        prototype: '/projects/smart-parking-system/prototype.webp',
      },
      galleryVisuals: [],
      packageContents: ['Full Source Code', 'Circuit Schematics', 'IEEE Report Template', 'Viva Question Bank'],
      vivaQuestions: [],
      bom: [],
      roadmap: [],
    };

    setProjectsList([newProject, ...projectsList]);
    setNewTitle('');
    setAddModalOpen(false);
  };

  return (
    <div className="min-h-screen tech-grid-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E8E4]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#087443] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
                Platform Administration & Technical Verification
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#17211B] mt-1 tracking-tight">
              HA Labs Admin Console
            </h1>
            <p className="text-xs sm:text-sm text-[#647067] mt-0.5">
              Review student & builder project submissions, execute 8-point technical bench checks, and manage platform orders.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/builder"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E2E8E4] hover:border-[#087443] text-xs font-bold text-[#17211B] transition-all"
            >
              <span>Go to Builder Studio</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#087443]" />
            </Link>
            <button
              onClick={() => setAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all"
            >
              <Plus className="w-4 h-4 text-[#84CC16]" />
              <span>Add Catalog Project</span>
            </button>
          </div>
        </div>

        {/* Layout Grid: Sidebar + Admin Views */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ── LEFT SIDEBAR ──────────────────────────────────────────────────────── */}
          <div className="lg:col-span-3 space-y-3">
            <div className="ha-card p-3 rounded-2xl bg-white border border-[#E2E8E4] space-y-1">
              {sidebarTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as AdminTab)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-[#087443] text-white shadow-xs'
                        : 'text-[#17211B] hover:bg-[#F8FAF9] hover:text-[#087443]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#647067]'}`} />
                      <span>{tab.label}</span>
                    </div>
                    {tab.badge !== undefined && (
                      <span
                        className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : tab.id === 'submissions' && pendingSubmissionsCount > 0
                            ? 'bg-amber-100 text-amber-900 font-black'
                            : 'bg-[#F1F5F3] text-[#087443] font-bold'
                        }`}
                      >
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Admin Health Card */}
            <div className="p-4 rounded-2xl bg-white border border-[#E2E8E4] space-y-2 text-xs">
              <span className="font-bold text-[#087443] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verification Engine Active</span>
              </span>
              <p className="text-[#647067] text-[11px] leading-relaxed">
                All uploaded firmware builds are sandboxed and scanned for hardware pin conflicts.
              </p>
              <div className="pt-2 border-t border-[#E2E8E4] flex items-center justify-between text-[11px]">
                <span className="text-[#647067]">Platform Commission:</span>
                <span className="font-mono font-bold text-[#087443]">15% Platform / 85% Builder</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT MAIN ADMIN AREA ─────────────────────────────────────────────── */}
          <div className="lg:col-span-9 space-y-8">
            
            {/* OVERVIEW ANALYTICS KPIS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#647067] block">Pending Reviews</span>
                <div className="text-3xl font-black text-amber-600 font-mono mt-1">{pendingSubmissionsCount}</div>
                <span className="text-[11px] text-amber-700 font-medium">Requires technical check</span>
              </div>
              <div className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#647067] block">Live Catalog</span>
                <div className="text-3xl font-black text-[#087443] font-mono mt-1">{analytics.totalProjects}</div>
                <span className="text-[11px] text-[#16A34A] font-medium">+14 this semester</span>
              </div>
              <div className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#647067] block">Total Orders</span>
                <div className="text-3xl font-black text-[#17211B] font-mono mt-1">{orders.length + 38}</div>
                <span className="text-[11px] text-[#087443] font-medium">₹{analytics.totalSales.toLocaleString()} Vol</span>
              </div>
              <div className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#647067] block">Viva Pass Rate</span>
                <div className="text-3xl font-black text-[#16A34A] font-mono mt-1">98.4%</div>
                <span className="text-[11px] text-[#087443] font-bold">University verified</span>
              </div>
            </div>

            {/* ── 1. SUBMISSIONS & VERIFICATION QUEUE TAB ──────────────────────────────── */}
            {activeTab === 'submissions' && (
              <div className="space-y-6">
                <div className="ha-card rounded-2xl bg-white border border-[#E2E8E4] p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8E4] pb-4">
                    <div>
                      <h3 className="text-base font-bold text-[#17211B] flex items-center gap-2">
                        <ClipboardCheck className="w-5 h-5 text-[#087443]" />
                        <span>Project Technical Verification Queue</span>
                      </h3>
                      <p className="text-xs text-[#647067] mt-0.5">
                        Projects submitted by engineering builders. Admins must execute the 8-point checklist before releasing to the public catalog.
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-mono font-bold self-start">
                      {pendingSubmissionsCount} Pending Action
                    </span>
                  </div>

                  {builderProjects.length === 0 ? (
                    <div className="text-center py-12 text-[#647067] text-xs">
                      No builder submissions in queue.
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="border-b border-[#E2E8E4] text-[#647067] uppercase font-bold">
                          <tr>
                            <th className="pb-3">Project Title</th>
                            <th className="pb-3">Dept</th>
                            <th className="pb-3">Difficulty</th>
                            <th className="pb-3">Price</th>
                            <th className="pb-3">Submitted</th>
                            <th className="pb-3">Status</th>
                            <th className="pb-3 text-right">Verification</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E2E8E4]">
                          {builderProjects.map((proj) => (
                            <tr key={proj.id} className="hover:bg-[#F8FAF9] transition-colors">
                              <td className="py-3.5 pr-2">
                                <div className="font-bold text-[#17211B]">{proj.title}</div>
                                <div className="text-[11px] font-mono text-[#647067]">ID: {proj.id}</div>
                              </td>
                              <td className="py-3.5 font-mono">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                                  {proj.department}
                                </span>
                              </td>
                              <td className="py-3.5 text-[#647067] font-medium">{proj.difficulty}</td>
                              <td className="py-3.5 font-mono font-bold text-[#17211B]">₹{proj.price.toLocaleString()}</td>
                              <td className="py-3.5 text-[#647067]">{proj.submittedAt}</td>
                              <td className="py-3.5">
                                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                  proj.status === 'published'
                                    ? 'bg-emerald-50 text-[#087443] border border-emerald-200'
                                    : proj.status === 'pending'
                                    ? 'bg-amber-50 text-amber-800 border border-amber-200 animate-pulse'
                                    : proj.status === 'rejected'
                                    ? 'bg-red-50 text-red-700 border border-red-200'
                                    : 'bg-slate-100 text-slate-700'
                                }`}>
                                  {proj.status}
                                </span>
                              </td>
                              <td className="py-3.5 text-right">
                                <button
                                  onClick={() => openReviewModal(proj)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all"
                                >
                                  <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16]" />
                                  <span>Review & Verify</span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                {/* Verification Criteria Info Box */}
                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2 text-xs">
                  <h4 className="font-bold text-[#087443] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#087443]" />
                    <span>HA Labs Quality Standard for Verified Engineering Projects</span>
                  </h4>
                  <p className="text-[#17211B] leading-relaxed">
                    Only projects that meet the strict 8-point criteria are published to students. This ensures zero compilation errors during lab defense, genuine BOM pin mappings, original CAD/Fritzing circuit layouts, and fully formatted IEEE project reports.
                  </p>
                </div>
              </div>
            )}

            {/* ── 2. ANALYTICS TAB ─────────────────────────────────────────────────── */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Most Popular Departments */}
                  <div className="ha-card p-6 rounded-2xl bg-white border border-[#E2E8E4] space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-[#17211B]">Most Popular Departments</h3>
                      <span className="text-xs font-mono text-[#087443] font-bold">Academic Distribution</span>
                    </div>

                    <div className="space-y-3">
                      {popularDepartments.map((dept) => (
                        <div key={dept.code} className="space-y-1">
                          <div className="flex items-center justify-between text-xs font-medium">
                            <span className="text-[#17211B] font-bold">{dept.code} — {dept.name}</span>
                            <span className="font-mono text-[#087443]">{dept.share}% ({dept.count})</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-[#F1F5F3] overflow-hidden">
                            <div
                              className="h-full bg-[#087443] rounded-full"
                              style={{ width: `${dept.share * 3}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Most-Used Technologies */}
                  <div className="ha-card p-6 rounded-2xl bg-white border border-[#E2E8E4] space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-[#17211B]">Most-Used Technologies</h3>
                      <span className="text-xs font-mono text-[#16A34A] font-bold">Industry Stacks</span>
                    </div>

                    <div className="space-y-3">
                      {topTechnologies.map((tech) => (
                        <div key={tech.name} className="space-y-1">
                          <div className="flex items-center justify-between text-xs font-medium">
                            <span className="text-[#17211B] font-bold">{tech.name}</span>
                            <span className="font-mono text-[#16A34A]">{tech.usage} ({tech.count})</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-[#F1F5F3] overflow-hidden">
                            <div
                              className="h-full bg-[#16A34A] rounded-full"
                              style={{ width: tech.usage }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Monthly Platform Activity */}
                <div className="ha-card p-6 rounded-2xl bg-white border border-[#E2E8E4] space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#17211B]">Monthly Platform Activity</h3>
                    <span className="text-xs font-mono text-[#087443] font-bold">2026 Academic Year</span>
                  </div>

                  <div className="flex items-end justify-between h-36 pt-4 gap-2">
                    {[
                      { month: 'Jun', value: 45 },
                      { month: 'Jul', value: 65 },
                      { month: 'Aug', value: 88 },
                      { month: 'Sep', value: 115 },
                      { month: 'Oct', value: 140 },
                      { month: 'Nov', value: 95 },
                    ].map((bar) => (
                      <div key={bar.month} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <div
                          className="w-full rounded-t-lg bg-gradient-to-t from-[#087443] to-[#16A34A] hover:opacity-90 transition-opacity"
                          style={{ height: `${(bar.value / 140) * 100}%` }}
                        />
                        <span className="text-[11px] font-mono text-[#647067]">{bar.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── 3. PROJECTS CATALOG TAB ─────────────────────────────────────────── */}
            {activeTab === 'projects' && (
              <div className="ha-card rounded-2xl bg-white border border-[#E2E8E4] p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#17211B]">Engineering Projects Inventory</h3>
                  <span className="text-xs font-mono text-[#087443] font-bold">{projectsList.length} Catalog Items</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-[#E2E8E4] text-[#647067] uppercase font-bold">
                      <tr>
                        <th className="pb-2.5">Title</th>
                        <th className="pb-2.5">Department</th>
                        <th className="pb-2.5">Difficulty</th>
                        <th className="pb-2.5">Budget</th>
                        <th className="pb-2.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8E4]">
                      {projectsList.map((p) => (
                        <tr key={p.id} className="hover:bg-[#F8FAF9]">
                          <td className="py-3 font-semibold text-[#17211B]">
                            <Link href={`/projects/${p.slug}`} className="hover:text-[#087443]">
                              {p.title}
                            </Link>
                          </td>
                          <td className="py-3">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-[#087443]">
                              {p.branch[0]}
                            </span>
                          </td>
                          <td className="py-3 font-medium text-[#647067]">{p.difficulty}</td>
                          <td className="py-3 font-mono text-[#17211B]">{p.budgetDisplay}</td>
                          <td className="py-3 text-right space-x-2">
                            <Link href={`/projects/${p.slug}`} className="text-[#087443] hover:underline font-bold">
                              View
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ── 4. BUYER ORDERS TAB ─────────────────────────────────────────────── */}
            {activeTab === 'orders' && (
              <div className="ha-card rounded-2xl bg-white border border-[#E2E8E4] p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#17211B]">Student Buyer Orders & Payments</h3>
                  <span className="text-xs font-mono text-[#087443] font-bold">{orders.length} Verified Orders</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-[#E2E8E4] text-[#647067] uppercase font-bold">
                      <tr>
                        <th className="pb-3">Order ID</th>
                        <th className="pb-3">Project Title</th>
                        <th className="pb-3">Amount</th>
                        <th className="pb-3">Date</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3">Add-on Services</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8E4]">
                      {orders.map((o) => (
                        <tr key={o.id} className="hover:bg-[#F8FAF9]">
                          <td className="py-3 font-mono font-bold text-[#087443]">{o.id}</td>
                          <td className="py-3 font-bold text-[#17211B]">{o.projectTitle}</td>
                          <td className="py-3 font-mono font-bold text-[#17211B]">₹{o.amount.toLocaleString()}</td>
                          <td className="py-3 text-[#647067]">{o.date}</td>
                          <td className="py-3">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                              {o.status}
                            </span>
                          </td>
                          <td className="py-3 text-[#647067]">
                            {o.addons && o.addons.length > 0 ? o.addons.join(', ') : 'Base Deliverables'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ── 5. DEPARTMENTS TAB ──────────────────────────────────────────────── */}
            {activeTab === 'departments' && (
              <div className="ha-card rounded-2xl bg-white border border-[#E2E8E4] p-6 space-y-4">
                <h3 className="text-base font-bold text-[#17211B]">Engineering Departments</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {DEPARTMENTS.map((dept) => (
                    <div key={dept.code} className="p-4 rounded-xl border border-[#E2E8E4] bg-[#F8FAF9] flex items-center justify-between">
                      <div>
                        <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold border ${dept.color}`}>
                          {dept.code}
                        </span>
                        <h4 className="text-sm font-bold text-[#17211B] mt-1">{dept.name}</h4>
                      </div>
                      <Link href={`/projects?department=${encodeURIComponent(dept.code)}`} className="text-xs font-bold text-[#087443] hover:underline">
                        Filter →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* OTHER TABS FALLBACK */}
            {activeTab !== 'submissions' && activeTab !== 'analytics' && activeTab !== 'projects' && activeTab !== 'orders' && activeTab !== 'departments' && (
              <div className="ha-card rounded-2xl bg-white border border-[#E2E8E4] p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#087443]/10 text-[#087443] flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#17211B] capitalize">{activeTab} Management</h3>
                <p className="text-xs text-[#647067] max-w-md mx-auto">
                  Administrative control module for academic mentors and HA Labs system operators.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* ── 8-POINT TECHNICAL VERIFICATION MODAL ────────────────────────────────────── */}
      {selectedReviewProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-[#E2E8E4] max-w-2xl w-full p-6 space-y-5 shadow-2xl animate-fade-slide-up my-8 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#E2E8E4] pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    PENDING VERIFICATION
                  </span>
                  <span className="text-xs font-mono text-[#647067]">ID: {selectedReviewProject.id}</span>
                </div>
                <h3 className="text-lg font-black text-[#17211B] mt-1">
                  {selectedReviewProject.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-[#647067] mt-1">
                  <span>Dept: <strong>{selectedReviewProject.department}</strong></span>
                  <span>Difficulty: <strong>{selectedReviewProject.difficulty}</strong></span>
                  <span>Base Price: <strong>₹{selectedReviewProject.price.toLocaleString()}</strong></span>
                </div>
              </div>

              <button
                onClick={() => setSelectedReviewProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#17211B] hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            {/* 8-Point Verification Checklist */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#17211B] flex items-center gap-1.5">
                  <ClipboardCheck className="w-4 h-4 text-[#087443]" />
                  <span>8-Point Technical Verification Checklist</span>
                </h4>
                <span className={`text-[11px] font-bold ${allChecklistPassed ? 'text-[#087443]' : 'text-amber-700'}`}>
                  {Object.values(checklist).filter(Boolean).length} / 8 Passed
                </span>
              </div>

              <div className="space-y-2 bg-[#F8FAF9] p-4 rounded-xl border border-[#E2E8E4] text-xs">
                
                <label className="flex items-start gap-3 cursor-pointer p-1.5 rounded hover:bg-white transition-colors">
                  <input
                    type="checkbox"
                    checked={checklist.hardwareTest}
                    onChange={() => handleCheckbox('hardwareTest')}
                    className="mt-0.5 rounded border-[#E2E8E4] text-[#087443] focus:ring-[#087443]"
                  />
                  <div>
                    <strong className="text-[#17211B]">1. Working Prototype Bench Test Passed</strong>
                    <p className="text-[#647067] text-[11px]">Signal waveforms, voltage rail limits (3.3V/5V), and sensor communication bus verified.</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer p-1.5 rounded hover:bg-white transition-colors">
                  <input
                    type="checkbox"
                    checked={checklist.docsComplete}
                    onChange={() => handleCheckbox('docsComplete')}
                    className="mt-0.5 rounded border-[#E2E8E4] text-[#087443] focus:ring-[#087443]"
                  />
                  <div>
                    <strong className="text-[#17211B]">2. Documentation & IEEE Report Complete</strong>
                    <p className="text-[#647067] text-[11px]">Abstract, methodology, block diagram, pin configuration table, and references included.</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer p-1.5 rounded hover:bg-white transition-colors">
                  <input
                    type="checkbox"
                    checked={checklist.codeMatch}
                    onChange={() => handleCheckbox('codeMatch')}
                    className="mt-0.5 rounded border-[#E2E8E4] text-[#087443] focus:ring-[#087443]"
                  />
                  <div>
                    <strong className="text-[#17211B]">3. Firmware & Software Builds Cleanly</strong>
                    <p className="text-[#647067] text-[11px]">PlatformIO / Arduino IDE / Python requirements.txt install and compile with 0 fatal errors.</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer p-1.5 rounded hover:bg-white transition-colors">
                  <input
                    type="checkbox"
                    checked={checklist.mediaGenuine}
                    onChange={() => handleCheckbox('mediaGenuine')}
                    className="mt-0.5 rounded border-[#E2E8E4] text-[#087443] focus:ring-[#087443]"
                  />
                  <div>
                    <strong className="text-[#17211B]">4. Genuine Bench Media & Prototype Video</strong>
                    <p className="text-[#647067] text-[11px]">Demonstration video confirms actual physical hardware operating in real-time.</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer p-1.5 rounded hover:bg-white transition-colors">
                  <input
                    type="checkbox"
                    checked={checklist.securityCheck}
                    onChange={() => handleCheckbox('securityCheck')}
                    className="mt-0.5 rounded border-[#E2E8E4] text-[#087443] focus:ring-[#087443]"
                  />
                  <div>
                    <strong className="text-[#17211B]">5. Security & Safety Compliance</strong>
                    <p className="text-[#647067] text-[11px]">No hardcoded confidential credentials; high voltage isolation relays properly placed.</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer p-1.5 rounded hover:bg-white transition-colors">
                  <input
                    type="checkbox"
                    checked={checklist.licensing}
                    onChange={() => handleCheckbox('licensing')}
                    className="mt-0.5 rounded border-[#E2E8E4] text-[#087443] focus:ring-[#087443]"
                  />
                  <div>
                    <strong className="text-[#17211B]">6. Open-Source Licensing & Attribution</strong>
                    <p className="text-[#647067] text-[11px]">MIT / Apache 2.0 / CERN-OHL licenses credited without IP infringement.</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer p-1.5 rounded hover:bg-white transition-colors">
                  <input
                    type="checkbox"
                    checked={checklist.deliverablesBundle}
                    onChange={() => handleCheckbox('deliverablesBundle')}
                    className="mt-0.5 rounded border-[#E2E8E4] text-[#087443] focus:ring-[#087443]"
                  />
                  <div>
                    <strong className="text-[#17211B]">7. Complete Deliverables Bundle Included</strong>
                    <p className="text-[#647067] text-[11px]">Source ZIP, KiCad schematic, SQL schema, DOCX report, PPT presentation deck.</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer p-1.5 rounded hover:bg-white transition-colors">
                  <input
                    type="checkbox"
                    checked={checklist.vivaReadiness}
                    onChange={() => handleCheckbox('vivaReadiness')}
                    className="mt-0.5 rounded border-[#E2E8E4] text-[#087443] focus:ring-[#087443]"
                  />
                  <div>
                    <strong className="text-[#17211B]">8. Student Viva Defense Questions Validated</strong>
                    <p className="text-[#647067] text-[11px]">At least 10 high-yield examiner viva questions with comprehensive academic answers.</p>
                  </div>
                </label>

              </div>
            </div>

            {/* Admin Review Notes Input */}
            <div className="space-y-1 text-xs">
              <label className="font-bold text-[#17211B]">Admin Review Feedback / Instructions to Builder</label>
              <textarea
                value={reviewNotes}
                onChange={(e) => setReviewNotes(e.target.value)}
                placeholder="e.g. Schematics verified on bench test. Component BOM values match KiCad netlist. Approved for platform publication."
                className="w-full h-20 p-3 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none text-xs"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#E2E8E4]">
              <button
                type="button"
                onClick={() => executeReview('reject')}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-red-200 text-red-700 hover:bg-red-50 text-xs font-bold transition-all"
              >
                Reject Project
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => executeReview('request_changes')}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 text-xs font-bold transition-all"
                >
                  Request Changes
                </button>
                <button
                  type="button"
                  disabled={!allChecklistPassed}
                  onClick={() => executeReview('approve')}
                  className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 ${
                    allChecklistPassed
                      ? 'bg-[#087443] hover:bg-[#065331]'
                      : 'bg-slate-300 cursor-not-allowed'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 text-[#84CC16]" />
                  <span>Approve & Publish Project</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ADD NEW PROJECT MODAL */}
      {addModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-[#E2E8E4] max-w-lg w-full p-6 space-y-4 shadow-xl animate-fade-slide-up">
            <div className="flex items-center justify-between border-b border-[#E2E8E4] pb-3">
              <h3 className="text-lg font-bold text-[#17211B]">Add New Engineering Project</h3>
              <button onClick={() => setAddModalOpen(false)} className="text-slate-400 hover:text-[#17211B]">
                ✕
              </button>
            </div>

            <form onSubmit={handleAddProject} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#17211B] mb-1">Project Title</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Autonomous Solar Tracking Grid"
                  className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Department</label>
                  <select
                    value={newBranch}
                    onChange={(e) => setNewBranch(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none bg-white"
                  >
                    <option value="ECE">ECE</option>
                    <option value="CSE">CSE</option>
                    <option value="AI & DS">AI & DS</option>
                    <option value="MECH">MECH</option>
                    <option value="EEE">EEE</option>
                    <option value="CIVIL">CIVIL</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Difficulty</label>
                  <select
                    value={newDifficulty}
                    onChange={(e) => setNewDifficulty(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none bg-white"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-[#E2E8E4] font-semibold text-[#17211B]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#087443] text-white font-bold"
                >
                  Save & Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
