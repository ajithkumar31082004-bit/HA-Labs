'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useProjectStore } from '@/context/ProjectStoreContext';
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp,
  DollarSign,
  Eye,
  ArrowRight,
  Save,
  ExternalLink,
  Upload,
  Layers,
  MessageSquare
} from 'lucide-react';

export default function BuilderProjectManagePage() {
  const params = useParams();
  const projectId = (params?.id as string) || 'proj-b-1';
  const router = useRouter();

  const { builderProjects, currentUser } = useProjectStore();

  const project = builderProjects.find((p) => p.id === projectId) || builderProjects[0] || {
    id: projectId,
    title: 'Autonomous Solar Tracking Dual-Axis Inverter',
    slug: 'autonomous-solar-tracking-dual-axis-inverter',
    department: 'EEE',
    category: 'Embedded',
    difficulty: 'Advanced',
    price: 5499,
    status: 'published',
    views: 1420,
    salesCount: 18,
    submittedAt: '2026-08-10',
    adminNotes: 'Hardware bench test passed. KiCad Gerber netlists verified clean.',
  };

  const [title, setTitle] = useState(project.title);
  const [price, setPrice] = useState(project.price);
  const [difficulty, setDifficulty] = useState(project.difficulty);
  const [isSaved, setIsSaved] = useState(false);

  const builderShare = Math.round(price * 0.85);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="min-h-screen tech-grid-bg py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#647067]">
          <Link href="/builder" className="hover:text-[#087443]">Builder Studio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-[#17211B] truncate">{project.title}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#087443] font-bold">Manage & Edit</span>
        </div>

        {/* Header Hero */}
        <div className="ha-card p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8E4] shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E2E8E4] pb-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                  project.status === 'published'
                    ? 'bg-emerald-50 text-[#087443] border border-emerald-200'
                    : project.status === 'pending'
                    ? 'bg-amber-50 text-amber-800 border border-amber-200 animate-pulse'
                    : project.status === 'rejected'
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  Status: {project.status}
                </span>
                <span className="text-xs font-mono text-[#647067]">ID: {project.id}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-[#17211B] tracking-tight">
                {project.title}
              </h1>
              <p className="text-xs text-[#647067]">
                Department: <strong>{project.department}</strong> · Submitted on {project.submittedAt}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {project.status === 'published' && (
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] hover:border-[#087443] text-xs font-bold text-[#17211B] transition-all"
                >
                  <span>View Public Listing</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#087443]" />
                </Link>
              )}
            </div>
          </div>

          {/* Admin Feedback Box if applicable */}
          {project.adminNotes && (
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] text-xs space-y-1">
              <span className="font-bold text-[#087443] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Admin Review Notes</span>
              </span>
              <p className="text-[#17211B] text-[11px] leading-relaxed">
                {project.adminNotes}
              </p>
            </div>
          )}

          {/* Performance KPIs */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#647067] block">Student Views</span>
              <div className="text-2xl font-black text-[#17211B] font-mono mt-1">{project.views || 0}</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#647067] block">Total Sales</span>
              <div className="text-2xl font-black text-[#087443] font-mono mt-1">{project.salesCount || 0}</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#647067] block">Builder Earnings (85%)</span>
              <div className="text-2xl font-black text-[#087443] font-mono mt-1">
                ₹{((project.salesCount || 0) * builderShare).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSave} className="ha-card p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8E4] shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#E2E8E4] pb-4">
            <h2 className="text-base font-bold text-[#17211B]">Edit Project Specifications</h2>
            {isSaved && (
              <span className="text-xs font-bold text-[#087443] flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Changes saved successfully!</span>
              </span>
            )}
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-[#17211B] mb-1">Project Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none text-[#17211B]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#17211B] mb-1">Base Deliverables Price (INR)</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none font-mono font-bold"
                />
                <span className="text-[10px] text-[#647067] mt-1 block">
                  You earn 85% = <strong className="text-[#087443] font-mono">₹{builderShare.toLocaleString()}</strong> per sale.
                </span>
              </div>

              <div>
                <label className="block font-bold text-[#17211B] mb-1">Difficulty</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none bg-white"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8E4] flex items-center justify-between">
              <Link
                href="/builder"
                className="px-4 py-2.5 rounded-xl border border-[#E2E8E4] text-xs font-bold hover:bg-[#F8FAF9]"
              >
                ← Back to Builder Studio
              </Link>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5"
              >
                <Save className="w-4 h-4 text-[#84CC16]" />
                <span>Save Project Updates</span>
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}
