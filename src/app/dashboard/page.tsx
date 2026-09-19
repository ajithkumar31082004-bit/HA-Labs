'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useProjectStore } from '@/context/ProjectStoreContext';
import { PROJECTS_DATA, Project } from '@/data/projects';
import {
  LayoutDashboard,
  FolderGit2,
  Bookmark,
  Users,
  Award,
  Settings,
  Cpu,
  BookOpen,
  ArrowRight,
  Clock,
  CheckCircle2,
  TrendingUp,
  Activity,
  Sparkles,
  Download,
  Search,
  Wrench,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  User,
  Bell,
  Mail
} from 'lucide-react';

type SidebarTab = 
  | 'dashboard'
  | 'explore'
  | 'my-projects'
  | 'my-teams'
  | 'saved'
  | 'technologies'
  | 'resources'
  | 'certificates'
  | 'profile'
  | 'settings';

export default function StudentDashboardPage() {
  const [activeTab, setActiveTab] = useState<SidebarTab>('dashboard');
  const { savedProjectIds, activeProjects, toggleSaveProject } = useProjectStore();

  // Find saved projects objects
  const savedProjectsList = PROJECTS_DATA.filter((p) => savedProjectIds.includes(p.id));

  // Primary active project (for "Continue Building")
  const primaryActive = activeProjects[0] || {
    projectId: 'proj-1',
    progress: 68,
    teamName: 'Team Nova ECE',
    role: 'Hardware Lead',
    startDate: '2026-08-15',
  };
  const primaryProjectData = PROJECTS_DATA.find((p) => p.id === primaryActive.projectId) || PROJECTS_DATA[0];

  const upcomingMilestones = [
    { title: 'ESP32 Breadboard Bench Validation', project: primaryProjectData.title, dueDate: 'Oct 02, 2026', status: 'In Progress', tag: 'Hardware' },
    { title: 'MQTT Telemetry Packet Formatting', project: primaryProjectData.title, dueDate: 'Oct 08, 2026', status: 'Pending', tag: 'Firmware' },
    { title: 'Relational DB Schema Migration', project: primaryProjectData.title, dueDate: 'Oct 14, 2026', status: 'Pending', tag: 'Database' },
    { title: 'Interim Viva PPT Review', project: primaryProjectData.title, dueDate: 'Oct 22, 2026', status: 'Upcoming', tag: 'Academic' },
  ];

  const teamActivityFeed = [
    { user: 'Ajithkumar (You)', action: 'Committed', target: 'esp32_sonar_debounce.ino', time: '2 hours ago', icon: FolderGit2 },
    { user: 'Harish R.', action: 'Updated BOM', target: 'Added HC-SR04 sonar sensor pricing', time: '5 hours ago', icon: Wrench },
    { user: 'Kavitha S.', action: 'Uploaded', target: 'IEEE Project Report Chapter 2.docx', time: '1 day ago', icon: BookOpen },
    { user: 'Dr. S. Ramanathan (Mentor)', action: 'Reviewed', target: 'Circuit schematic approved with feedback', time: '2 days ago', icon: ShieldCheck },
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'explore', label: 'Explore Projects', icon: Search, href: '/projects' },
    { id: 'my-projects', label: 'My Projects', icon: FolderGit2, badge: activeProjects.length },
    { id: 'my-teams', label: 'My Teams', icon: Users, badge: 2 },
    { id: 'saved', label: 'Saved Projects', icon: Bookmark, badge: savedProjectIds.length },
    { id: 'technologies', label: 'Technologies', icon: Cpu, href: '/projects?filter=tech' },
    { id: 'resources', label: 'Resources', icon: BookOpen, href: '/resources' },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen tech-grid-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E8E4]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
                Student Workspace
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#17211B] mt-1 tracking-tight">
              Welcome back, Ajithkumar
            </h1>
            <p className="text-xs sm:text-sm text-[#647067] mt-0.5">
              ECE 7th Sem · PSG College of Technology · Team Nova Lead
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/setup"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all"
            >
              <Wrench className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>Configure New Project</span>
            </Link>
            <div className="w-9 h-9 rounded-xl bg-white border border-[#E2E8E4] flex items-center justify-center text-[#17211B]">
              <Bell className="w-4 h-4 text-[#647067]" />
            </div>
          </div>
        </div>

        {/* Layout Grid: Sidebar + Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ── LEFT SIDEBAR ──────────────────────────────────────────────────────── */}
          <div className="lg:col-span-3 space-y-2">
            <div className="ha-card p-3 rounded-2xl bg-white border border-[#E2E8E4] space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                if (item.href) {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#17211B] hover:bg-[#F8FAF9] hover:text-[#087443] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[#647067]" />
                        <span>{item.label}</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </Link>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as SidebarTab)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-[#087443] text-white shadow-xs'
                        : 'text-[#17211B] hover:bg-[#F8FAF9] hover:text-[#087443]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#647067]'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge !== undefined && (
                      <span
                        className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-[#F1F5F3] text-[#087443] font-bold'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Support & Founder Hotline Badge */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3 text-xs">
              <span className="font-bold text-[#087443] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Founder Mentorship Hotline</span>
              </span>
              <p className="text-[#647067] text-[11px] leading-relaxed">
                Stuck on circuit wiring or viva questions? Reach out directly:
              </p>
              <div className="space-y-1 text-[11px] font-mono">
                <a href="tel:+918778954899" className="flex items-center justify-between text-[#17211B] hover:text-[#087443] font-semibold">
                  <span>Ajithkumar:</span>
                  <span className="text-[#087443]">8778954899</span>
                </a>
                <a href="tel:+919342540464" className="flex items-center justify-between text-[#17211B] hover:text-[#087443] font-semibold">
                  <span>Harishkumar:</span>
                  <span className="text-[#087443]">9342540464</span>
                </a>
                <a href="mailto:halabs.project@gmail.com" className="flex items-center gap-1.5 pt-1 text-[#087443] hover:underline font-semibold text-[10px] break-all">
                  <Mail className="w-3 h-3 shrink-0" />
                  <span>halabs.project@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT MAIN DASHBOARD CONTENT ──────────────────────────────────────── */}
          <div className="lg:col-span-9 space-y-8">
            
            {/* OVERVIEW STATS ROW */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="ha-card p-4 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#647067] block">Active Projects</span>
                <div className="text-2xl font-black text-[#087443] font-mono mt-1">{activeProjects.length}</div>
                <span className="text-[10px] text-[#16A34A] font-medium">In sprint</span>
              </div>
              <div className="ha-card p-4 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#647067] block">Completed</span>
                <div className="text-2xl font-black text-[#17211B] font-mono mt-1">2</div>
                <span className="text-[10px] text-[#647067] font-medium">Archived builds</span>
              </div>
              <div className="ha-card p-4 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#647067] block">Saved Projects</span>
                <div className="text-2xl font-black text-[#087443] font-mono mt-1">{savedProjectIds.length}</div>
                <span className="text-[10px] text-[#647067] font-medium">In bookmarks</span>
              </div>
              <div className="ha-card p-4 rounded-2xl bg-white border border-[#E2E8E4]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#647067] block">Team Projects</span>
                <div className="text-2xl font-black text-[#17211B] font-mono mt-1">2</div>
                <span className="text-[10px] text-[#647067] font-medium">Collab teams</span>
              </div>
              <div className="ha-card p-4 rounded-2xl bg-white border border-[#E2E8E4] col-span-2 sm:col-span-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#647067] block">Skills Developed</span>
                <div className="text-2xl font-black text-[#16A34A] font-mono mt-1">14</div>
                <span className="text-[10px] text-[#087443] font-bold">Verified</span>
              </div>
            </div>

            {/* CONTINUE BUILDING HERO CARD */}
            <div className="ha-card rounded-2xl bg-white border border-[#087443]/30 p-6 shadow-sm relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                      CURRENT SPRINT
                    </span>
                    <span className="text-xs text-[#647067] font-mono">{primaryActive.teamName}</span>
                  </div>
                  <h2 className="text-xl font-black text-[#17211B]">
                    {primaryProjectData.title}
                  </h2>
                  <p className="text-xs text-[#647067]">
                    Role: <strong>{primaryActive.role}</strong> · Next milestone: <strong>Circuit Breadboard Validation</strong>
                  </p>
                </div>

                <Link
                  href={`/projects/${primaryProjectData.slug}`}
                  className="px-5 py-2.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all shrink-0 text-center flex items-center justify-center gap-1.5"
                >
                  <span>Continue Building</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Progress bar */}
              <div className="mt-5 pt-4 border-t border-[#E2E8E4]">
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="text-[#647067]">Overall Build Progress</span>
                  <span className="font-bold text-[#087443]">{primaryActive.progress}% Complete</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-[#F1F5F3] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#087443] to-[#16A34A] rounded-full transition-all duration-500"
                    style={{ width: `${primaryActive.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* MY ACTIVE PROJECTS LIST */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#17211B]">My Active Projects</h3>
                <Link href="/projects" className="text-xs font-bold text-[#087443] hover:underline">
                  + Add Another Project
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeProjects.map((act) => {
                  const pData = PROJECTS_DATA.find((p) => p.id === act.projectId) || PROJECTS_DATA[0];
                  return (
                    <div key={act.projectId} className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4] space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                            {pData.branch[0]}
                          </span>
                          <h4 className="text-sm font-bold text-[#17211B] mt-1.5 line-clamp-1">{pData.title}</h4>
                          <span className="text-[11px] text-[#647067] font-medium">{act.teamName} · {act.role}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#087443]">{act.progress}%</span>
                      </div>

                      <div className="w-full h-2 rounded-full bg-[#F1F5F3] overflow-hidden">
                        <div
                          className="h-full bg-[#087443] rounded-full"
                          style={{ width: `${act.progress}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-[#E2E8E4] text-xs">
                        <span className="text-[#647067]">Started: {act.startDate}</span>
                        <Link href={`/projects/${pData.slug}`} className="font-bold text-[#087443] hover:underline flex items-center gap-1">
                          <span>Workspace</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* UPCOMING MILESTONES & TEAM ACTIVITY (2 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Upcoming Milestones */}
              <div className="ha-card p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8E4] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#17211B] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#087443]" />
                    <span>Upcoming Milestones</span>
                  </h3>
                  <span className="text-xs font-mono text-[#647067]">Semester Track</span>
                </div>

                <div className="space-y-2.5">
                  {upcomingMilestones.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] flex items-center justify-between text-xs">
                      <div className="space-y-0.5">
                        <span className="font-bold text-[#17211B] block">{m.title}</span>
                        <span className="text-[11px] text-[#647067]">Due: {m.dueDate}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-50 text-[#087443] border border-emerald-200">
                        {m.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Activity Feed */}
              <div className="ha-card p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8E4] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#17211B] flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#16A34A]" />
                    <span>Recent Team Activity</span>
                  </h3>
                  <span className="text-xs font-mono text-[#647067]">Live Feed</span>
                </div>

                <div className="space-y-3">
                  {teamActivityFeed.map((act, idx) => {
                    const Icon = act.icon;
                    return (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        <div className="w-7 h-7 rounded-lg bg-[#087443]/10 text-[#087443] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="space-y-0.5">
                          <div>
                            <strong className="text-[#17211B]">{act.user}</strong> <span className="text-[#647067]">{act.action}</span> <span className="text-[#087443] font-medium">{act.target}</span>
                          </div>
                          <div className="text-[10px] text-slate-400">{act.time}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* SAVED PROJECTS QUICK SECTION */}
            {savedProjectsList.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-[#E2E8E4]">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#17211B] flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-[#087443]" />
                    <span>Saved Projects ({savedProjectsList.length})</span>
                  </h3>
                  <Link href="/projects" className="text-xs font-bold text-[#087443] hover:underline">
                    Explore More
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {savedProjectsList.map((p) => (
                    <div key={p.id} className="ha-card p-4 rounded-xl bg-white border border-[#E2E8E4] flex flex-col justify-between space-y-2">
                      <div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                          {p.branch[0]}
                        </span>
                        <h4 className="text-xs font-bold text-[#17211B] mt-1.5 line-clamp-1">{p.title}</h4>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-[#E2E8E4] text-xs">
                        <button
                          onClick={() => toggleSaveProject(p.id)}
                          className="text-slate-400 hover:text-red-500 text-[11px]"
                        >
                          Remove
                        </button>
                        <Link href={`/projects/${p.slug}`} className="font-bold text-[#087443] hover:underline flex items-center gap-1">
                          <span>View</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
