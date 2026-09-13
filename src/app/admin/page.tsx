'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROJECTS_DATA, Project } from '@/data/projects';
import {
  Users,
  FolderKanban,
  FileCheck,
  Activity,
  AlertCircle,
  Plus,
  Trash2,
  Edit,
  ShieldCheck,
  Search,
  CheckCircle,
  Clock,
  ArrowRight,
  TrendingUp,
  Download
} from 'lucide-react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'analytics' | 'projects' | 'requests' | 'tickets'>('analytics');
  const [projectsList, setProjectsList] = useState<Project[]>(PROJECTS_DATA);
  const [newProjectModalOpen, setNewProjectModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newBranch, setNewBranch] = useState('ECE');
  const [newBudget, setNewBudget] = useState('₹3,000–₹5,000');
  const [newTech, setNewTech] = useState('ESP32, AWS');

  const analytics = {
    totalStudents: '1,420',
    totalProjects: projectsList.length,
    activeRequests: '38',
    activeProjects: '312',
    supportTickets: '4',
  };

  const sampleRequests = [
    { id: 'REQ-501', student: 'Kavitha S.', college: 'CIT Coimbatore', project: 'Smart Parking System', date: '2 hours ago', status: 'Pending Review' },
    { id: 'REQ-500', student: 'Rohan Mehta', college: 'MIT Chennai', project: 'EV Charging Monitor', date: '5 hours ago', status: 'Approved' },
    { id: 'REQ-499', student: 'Dinesh Kumar', college: 'GCT Coimbatore', project: 'Autonomous Mobile Robot SLAM', date: '1 day ago', status: 'Approved' },
  ];

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newProj: Project = {
      id: `proj-${Date.now()}`,
      title: newTitle,
      slug: newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      tagline: `${newTitle} implementation package for engineering students.`,
      description: 'Production-ready prototype with circuit schematics, source code, and viva question bank.',
      branch: [newBranch as any],
      category: 'IoT',
      projectType: 'Major Project',
      technologies: newTech.split(',').map((t) => t.trim()),
      difficulty: 'Intermediate',
      budgetDisplay: newBudget,
      budgetMin: 3000,
      budgetMax: 5000,
      duration: '4–6 weeks',
      teamSize: '2–4',
      hardware: ['ESP32', 'Sensors', 'Relay'],
      software: ['C++', 'Node.js', 'AWS'],
      features: ['Real-time telemetry', 'Cloud integration'],
      architectureSteps: ['Sensors', 'Microcontroller', 'Cloud', 'Dashboard'],
      requirements: ['Basic electronics'],
      learningOutcomes: ['Embedded firmware', 'Cloud APIs'],
      tags: ['New', 'Engineering'],
      defaultMatch: 90,
      problem: 'Manual process causing delays and inefficiency.',
      solution: 'Automated IoT telemetry with cloud tracking.',
      howItWorks: 'Sensors acquire data and stream via MQTT to cloud dashboard.',
      visualSummary: `${newTitle} + ESP32 + cloud dashboard`,
      galleryVisuals: [
        { title: 'Hardware Node', subtitle: 'Sensor interface & ESP32 controller', type: 'hardware', accentColor: '#00d2ff' }
      ],
      vivaQuestions: [
        { question: 'Why choose this architecture?', answer: 'Provides low-latency and high reliability.' }
      ],
      bom: [{ component: 'ESP32 Controller', specs: '240MHz Wi-Fi', qty: 1, estCost: 450 }],
      roadmap: [{ step: '01', title: 'Hardware Setup', desc: 'Breadboard testing and sensor calibration' }]
    };

    setProjectsList([newProj, ...projectsList]);
    setNewTitle('');
    setNewProjectModalOpen(false);
  };

  const handleDeleteProject = (id: string) => {
    setProjectsList(projectsList.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen py-8 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-red-500/10 border border-red-500/30 text-red-400 font-bold">
                ADMIN CONSOLE
              </span>
              <span className="text-xs font-mono text-slate-400">HA Labs Operations</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Platform Administration
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setNewProjectModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-brand-cyan text-black font-bold text-xs flex items-center gap-1.5 hover:bg-cyan-300 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create New Project</span>
            </button>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 transition-colors"
            >
              Switch to Student View
            </Link>
          </div>
        </div>

        {/* KPI Analytics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-[#090f20] border border-white/10">
            <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Total Students</span>
            <span className="text-2xl font-black text-white font-mono">{analytics.totalStudents}</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#090f20] border border-white/10">
            <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Catalog Projects</span>
            <span className="text-2xl font-black text-brand-cyan font-mono">{analytics.totalProjects}</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#090f20] border border-white/10">
            <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Build Requests</span>
            <span className="text-2xl font-black text-amber-400 font-mono">{analytics.activeRequests}</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#090f20] border border-white/10">
            <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Active Projects</span>
            <span className="text-2xl font-black text-emerald-400 font-mono">{analytics.activeProjects}</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#090f20] border border-white/10 col-span-2 sm:col-span-1">
            <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Open Tickets</span>
            <span className="text-2xl font-black text-indigo-400 font-mono">{analytics.supportTickets}</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'analytics', label: 'Operations & Requests' },
            { id: 'projects', label: `Projects Catalog (${projectsList.length})` },
            { id: 'requests', label: 'Student Inquiries' },
            { id: 'tickets', label: 'Support Queue' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-brand-cyan text-black font-bold'
                  : 'bg-[#090f20] border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab: Operations & Requests */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Recent Requests Table */}
            <div className="lg:col-span-8 rounded-3xl bg-[#090f20] border border-white/10 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">Recent Project Build Requests</h3>
                <span className="text-xs font-mono text-brand-cyan">Live Stream</span>
              </div>

              <div className="divide-y divide-white/5 text-xs">
                {sampleRequests.map((req) => (
                  <div key={req.id} className="py-3 flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-white">{req.student}</span>
                        <span className="text-slate-500 font-mono text-[11px]">{req.college}</span>
                      </div>
                      <span className="text-slate-400 text-xs mt-0.5 block">{req.project}</span>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                        req.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                      }`}>
                        {req.status}
                      </span>
                      <span className="text-[10px] text-slate-500 block mt-1 font-mono">{req.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="lg:col-span-4 rounded-3xl bg-[#090f20] border border-white/10 p-6 space-y-4">
              <h3 className="text-base font-bold text-white">System Health & DevOps</h3>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">API Health</span>
                  <span className="text-emerald-400">200 OK</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Uptime</span>
                  <span className="text-white">99.98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Docker Cluster</span>
                  <span className="text-white">3 Pods Active</span>
                </div>
              </div>
              <Link
                href="/api/health"
                target="_blank"
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
              >
                <span>Inspect /api/health</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Tab: Projects Catalog Management */}
        {activeTab === 'projects' && (
          <div className="rounded-3xl bg-[#090f20] border border-white/10 p-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-white">Manage Platform Projects</h3>
              <span className="text-xs font-mono text-slate-400">{projectsList.length} Total</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 font-mono">
                    <th className="py-3 px-3">Title</th>
                    <th className="py-3 px-3">Branch</th>
                    <th className="py-3 px-3">Category</th>
                    <th className="py-3 px-3">Budget</th>
                    <th className="py-3 px-3">Difficulty</th>
                    <th className="py-3 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {projectsList.map((p) => (
                    <tr key={p.id} className="hover:bg-white/5">
                      <td className="py-3 px-3 font-semibold text-white">
                        <Link href={`/projects/${p.slug}`} className="hover:text-brand-cyan">
                          {p.title}
                        </Link>
                      </td>
                      <td className="py-3 px-3 text-slate-300">{p.branch.join(', ')}</td>
                      <td className="py-3 px-3 text-slate-400">{p.category}</td>
                      <td className="py-3 px-3 font-mono text-slate-300">{p.budgetDisplay}</td>
                      <td className="py-3 px-3 font-mono text-sky-400">{p.difficulty}</td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => handleDeleteProject(p.id)}
                          className="p-1 text-slate-400 hover:text-red-400 transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Modal: Create Project */}
        {newProjectModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-lg rounded-3xl bg-[#090f20] border border-white/15 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-1">Create Engineering Project</h3>
              <p className="text-xs text-slate-400 mb-6">
                Add a new project to the live HA Labs catalog with specifications.
              </p>

              <form onSubmit={handleAddProject} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Smart Drone Altitude Logger"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                      Branch
                    </label>
                    <select
                      value={newBranch}
                      onChange={(e) => setNewBranch(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-brand-cyan"
                    >
                      <option value="ECE">ECE</option>
                      <option value="EEE">EEE</option>
                      <option value="CSE">CSE</option>
                      <option value="IT">IT</option>
                      <option value="AI & DS">AI & DS</option>
                      <option value="Mechanical">Mechanical</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                      Budget Range
                    </label>
                    <input
                      type="text"
                      value={newBudget}
                      onChange={(e) => setNewBudget(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-brand-cyan"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Technologies (comma separated)
                  </label>
                  <input
                    type="text"
                    value={newTech}
                    onChange={(e) => setNewTech(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-brand-cyan"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setNewProjectModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-brand-cyan text-black font-bold text-xs hover:bg-cyan-300"
                  >
                    Publish Project
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
