'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROJECTS_DATA, Project } from '@/data/projects';
import { DEPARTMENTS } from '@/components/Navbar';
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
  Edit
} from 'lucide-react';

type AdminTab =
  | 'analytics'
  | 'projects'
  | 'departments'
  | 'students'
  | 'teams'
  | 'technologies'
  | 'resources'
  | 'submissions'
  | 'reviews'
  | 'reports'
  | 'settings';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>('analytics');
  const [projectsList, setProjectsList] = useState<Project[]>(PROJECTS_DATA);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newBranch, setNewBranch] = useState('ECE');
  const [newDifficulty, setNewDifficulty] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');

  const analytics = {
    totalProjects: 142,
    activeStudents: '3,840',
    teamsCreated: 920,
    projectsCompleted: 615,
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

  const submissions = [
    { id: 'SUB-840', project: 'Smart IoT Agriculture Monitoring', team: 'AgriTech Builders', dept: 'ECE', submitted: '10 mins ago', status: 'Pending Review' },
    { id: 'SUB-839', project: 'Autonomous Mobile Robot with SLAM', team: 'RoboKnights', dept: 'ECE/MECH', submitted: '2 hours ago', status: 'Approved' },
    { id: 'SUB-838', project: 'EV Battery Management with CAN Bus', team: 'ElectroCharge', dept: 'EEE', submitted: '5 hours ago', status: 'Approved' },
    { id: 'SUB-837', project: 'Real-Time Edge AI Defect Detection', team: 'VisionCraft', dept: 'AI & DS', submitted: '1 day ago', status: 'Approved' },
  ];

  const sidebarTabs = [
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'projects', label: 'Projects', icon: FolderGit2, badge: projectsList.length },
    { id: 'departments', label: 'Departments', icon: Layers, badge: 8 },
    { id: 'students', label: 'Students', icon: Users, badge: '3.8k' },
    { id: 'teams', label: 'Teams', icon: Users, badge: 920 },
    { id: 'technologies', label: 'Technologies', icon: Cpu, badge: 24 },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'submissions', label: 'Submissions', icon: FileCheck, badge: 4 },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'reports', label: 'Reports', icon: FileText },
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
                Platform Administration
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#17211B] mt-1 tracking-tight">
              HA Labs Admin Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-[#647067] mt-0.5">
              Manage academic engineering projects, branch departments, student teams, and reviews.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all"
            >
              <Plus className="w-4 h-4 text-[#84CC16]" />
              <span>Add New Project</span>
            </button>
          </div>
        </div>

        {/* Layout Grid: Sidebar + Admin Views */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ── LEFT SIDEBAR ──────────────────────────────────────────────────────── */}
          <div className="lg:col-span-3 space-y-2">
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
                <span>Verification Engine Online</span>
              </span>
              <p className="text-[#647067] text-[11px] leading-relaxed">
                All 142 project circuits and firmware compile passes are currently green.
              </p>
            </div>
          </div>

          {/* ── RIGHT MAIN ADMIN AREA ─────────────────────────────────────────────── */}
          <div className="lg:col-span-9 space-y-8">
            
            {/* OVERVIEW ANALYTICS KPIS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#647067] block">Total Projects</span>
                <div className="text-3xl font-black text-[#087443] font-mono mt-1">{analytics.totalProjects}</div>
                <span className="text-[11px] text-[#16A34A] font-medium">+14 this semester</span>
              </div>
              <div className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#647067] block">Active Students</span>
                <div className="text-3xl font-black text-[#17211B] font-mono mt-1">{analytics.activeStudents}</div>
                <span className="text-[11px] text-[#16A34A] font-medium">+320 this month</span>
              </div>
              <div className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#647067] block">Teams Created</span>
                <div className="text-3xl font-black text-[#087443] font-mono mt-1">{analytics.teamsCreated}</div>
                <span className="text-[11px] text-[#647067] font-medium">Avg 3.2 students/team</span>
              </div>
              <div className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#647067] block">Projects Completed</span>
                <div className="text-3xl font-black text-[#16A34A] font-mono mt-1">{analytics.projectsCompleted}</div>
                <span className="text-[11px] text-[#087443] font-bold">98.4% Viva Pass</span>
              </div>
            </div>

            {/* ANALYTICS SECTION: CHARTS & DISTRIBUTIONS */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                
                {/* 2 Column breakdown: Most Popular Departments & Most Used Tech */}
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

                {/* Project Difficulty Distribution & Monthly Activity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Difficulty Distribution */}
                  <div className="ha-card p-6 rounded-2xl bg-white border border-[#E2E8E4] space-y-4">
                    <h3 className="text-base font-bold text-[#17211B]">Project Difficulty Distribution</h3>
                    
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                        <span className="text-[11px] font-bold text-[#087443] uppercase block">Beginner</span>
                        <div className="text-2xl font-black text-[#087443] font-mono mt-1">35%</div>
                        <span className="text-[10px] text-[#647067]">50 Projects</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                        <span className="text-[11px] font-bold text-blue-700 uppercase block">Intermediate</span>
                        <div className="text-2xl font-black text-blue-800 font-mono mt-1">45%</div>
                        <span className="text-[10px] text-[#647067]">64 Projects</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200">
                        <span className="text-[11px] font-bold text-purple-700 uppercase block">Advanced</span>
                        <div className="text-2xl font-black text-purple-800 font-mono mt-1">20%</div>
                        <span className="text-[10px] text-[#647067]">28 Projects</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#647067] leading-relaxed">
                      Intermediate projects are preferred for final-year capstone submissions by 7th & 8th semester teams.
                    </p>
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

                {/* Recent Submissions Queue */}
                <div className="ha-card rounded-2xl bg-white border border-[#E2E8E4] p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-[#17211B]">Student Project Submissions Queue</h3>
                      <p className="text-xs text-[#647067] mt-0.5">Projects submitted by student teams awaiting mentor approval.</p>
                    </div>
                    <span className="text-xs font-mono text-[#087443] font-bold">4 Pending</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="border-b border-[#E2E8E4] text-[#647067] uppercase font-bold">
                        <tr>
                          <th className="pb-2.5">ID</th>
                          <th className="pb-2.5">Project Title</th>
                          <th className="pb-2.5">Team</th>
                          <th className="pb-2.5">Dept</th>
                          <th className="pb-2.5">Submitted</th>
                          <th className="pb-2.5">Status</th>
                          <th className="pb-2.5 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E2E8E4]">
                        {submissions.map((sub) => (
                          <tr key={sub.id} className="hover:bg-[#F8FAF9]">
                            <td className="py-3 font-mono font-bold text-[#087443]">{sub.id}</td>
                            <td className="py-3 font-semibold text-[#17211B]">{sub.project}</td>
                            <td className="py-3 text-[#647067]">{sub.team}</td>
                            <td className="py-3 font-mono">{sub.dept}</td>
                            <td className="py-3 text-[#647067]">{sub.submitted}</td>
                            <td className="py-3">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                sub.status === 'Pending Review'
                                  ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                  : 'bg-emerald-50 text-[#087443] border border-emerald-200'
                              }`}>
                                {sub.status}
                              </span>
                            </td>
                            <td className="py-3 text-right">
                              <button className="text-xs font-bold text-[#087443] hover:underline">
                                Review
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* PROJECTS MANAGEMENT TAB */}
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

            {/* DEPARTMENTS TAB */}
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
            {activeTab !== 'analytics' && activeTab !== 'projects' && activeTab !== 'departments' && (
              <div className="ha-card rounded-2xl bg-white border border-[#E2E8E4] p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#087443]/10 text-[#087443] flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#17211B] capitalize">{activeTab} Management</h3>
                <p className="text-xs text-[#647067] max-w-md mx-auto">
                  Module configured for university partner admins and senior lab mentors.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

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
