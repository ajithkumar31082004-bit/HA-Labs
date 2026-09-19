'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useProjectStore, BuilderProjectItem } from '@/context/ProjectStoreContext';
import {
  FolderGit2,
  ShieldCheck,
  CheckCircle2,
  Plus,
  ClipboardCheck,
  Search,
  ExternalLink,
  Lock,
  ArrowRight,
  Filter
} from 'lucide-react';

export default function AdminProjectsPage() {
  const { currentUser, builderProjects, reviewProject } = useProjectStore();

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

  // Access Guard
  if (currentUser?.role !== 'admin') {
    return (
      <div className="min-h-screen tech-grid-bg py-20 flex items-center justify-center px-4">
        <div className="ha-card p-8 rounded-3xl bg-white border border-red-200 shadow-xl max-w-md w-full text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-red-100 text-red-700 flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="text-xl font-bold text-[#17211B]">403 — Admin Access Required</h1>
          <p className="text-xs text-[#647067]">
            This verification queue is restricted to authorized HA Labs engineering mentors.
          </p>
          <Link
            href="/login"
            className="inline-block py-2.5 px-5 rounded-xl bg-[#087443] text-white font-bold text-xs"
          >
            Sign In as Admin
          </Link>
        </div>
      </div>
    );
  }

  const pendingCount = builderProjects.filter((p) => p.status === 'pending').length;

  return (
    <div className="min-h-screen tech-grid-bg py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#647067]">
          <Link href="/admin" className="hover:text-[#087443]">Admin Console</Link>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-[#17211B]">Project Verification Queue</span>
        </div>

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8E4] pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#087443] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
                Platform Administration
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#17211B] mt-1 tracking-tight">
              Project Technical Verification Queue
            </h1>
            <p className="text-xs sm:text-sm text-[#647067] mt-0.5">
              Review student & builder project submissions, execute 8-point technical bench checks, and manage catalog publication.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-mono font-bold">
              {pendingCount} Pending Reviews
            </span>
          </div>
        </div>

        {/* Projects Table */}
        <div className="ha-card rounded-3xl bg-white border border-[#E2E8E4] p-6 space-y-4 shadow-xs">
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
                  <th className="pb-3 text-right">Verification Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8E4]">
                {builderProjects.map((proj) => (
                  <tr key={proj.id} className="hover:bg-[#F8FAF9] transition-colors">
                    <td className="py-4 pr-2">
                      <div className="font-bold text-[#17211B]">{proj.title}</div>
                      <div className="text-[11px] font-mono text-[#647067]">ID: {proj.id}</div>
                    </td>
                    <td className="py-4 font-mono">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                        {proj.department}
                      </span>
                    </td>
                    <td className="py-4 text-[#647067] font-medium">{proj.difficulty}</td>
                    <td className="py-4 font-mono font-bold text-[#17211B]">₹{proj.price.toLocaleString()}</td>
                    <td className="py-4 text-[#647067]">{proj.submittedAt}</td>
                    <td className="py-4">
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
                    <td className="py-4 text-right">
                      <button
                        onClick={() => openReviewModal(proj)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16]" />
                        <span>8-Point Check</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* 8-Point Verification Modal */}
      {selectedReviewProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-[#E2E8E4] max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl animate-fade-slide-up my-8 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between border-b border-[#E2E8E4] pb-4">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  {selectedReviewProject.status.toUpperCase()}
                </span>
                <h3 className="text-xl font-black text-[#17211B] mt-1">
                  {selectedReviewProject.title}
                </h3>
                <div className="text-xs text-[#647067] mt-1">
                  Dept: <strong>{selectedReviewProject.department}</strong> · Price: <strong>₹{selectedReviewProject.price.toLocaleString()}</strong>
                </div>
              </div>

              <button
                onClick={() => setSelectedReviewProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#17211B]"
              >
                ✕
              </button>
            </div>

            {/* Checklist */}
            <div className="space-y-2 bg-[#F8FAF9] p-4 rounded-2xl border border-[#E2E8E4] text-xs">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.hardwareTest}
                  onChange={() => handleCheckbox('hardwareTest')}
                  className="mt-0.5 rounded text-[#087443]"
                />
                <div>
                  <strong className="text-[#17211B]">1. Working Prototype Bench Test Passed</strong>
                  <p className="text-[11px] text-[#647067]">Signal waveforms and voltage rail limits verified.</p>
                </div>
              </label>

              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.docsComplete}
                  onChange={() => handleCheckbox('docsComplete')}
                  className="mt-0.5 rounded text-[#087443]"
                />
                <div>
                  <strong className="text-[#17211B]">2. Documentation & IEEE Report Complete</strong>
                  <p className="text-[11px] text-[#647067]">Pin configuration table and methodology included.</p>
                </div>
              </label>

              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.codeMatch}
                  onChange={() => handleCheckbox('codeMatch')}
                  className="mt-0.5 rounded text-[#087443]"
                />
                <div>
                  <strong className="text-[#17211B]">3. Firmware Builds Cleanly (0 Errors)</strong>
                  <p className="text-[11px] text-[#647067]">PlatformIO / Arduino IDE compiles cleanly.</p>
                </div>
              </label>

              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.mediaGenuine}
                  onChange={() => handleCheckbox('mediaGenuine')}
                  className="mt-0.5 rounded text-[#087443]"
                />
                <div>
                  <strong className="text-[#17211B]">4. Genuine Bench Media & Photos</strong>
                  <p className="text-[11px] text-[#647067]">Confirmed actual physical hardware operating.</p>
                </div>
              </label>

              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.securityCheck}
                  onChange={() => handleCheckbox('securityCheck')}
                  className="mt-0.5 rounded text-[#087443]"
                />
                <div>
                  <strong className="text-[#17211B]">5. Security & Safety Compliance</strong>
                  <p className="text-[11px] text-[#647067]">No malicious scripts or exposed credentials.</p>
                </div>
              </label>

              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.licensing}
                  onChange={() => handleCheckbox('licensing')}
                  className="mt-0.5 rounded text-[#087443]"
                />
                <div>
                  <strong className="text-[#17211B]">6. Open-Source Licensing & Attribution</strong>
                  <p className="text-[11px] text-[#647067]">Licenses attributed without copyright infringement.</p>
                </div>
              </label>

              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.deliverablesBundle}
                  onChange={() => handleCheckbox('deliverablesBundle')}
                  className="mt-0.5 rounded text-[#087443]"
                />
                <div>
                  <strong className="text-[#17211B]">7. Complete Deliverables Bundle Present</strong>
                  <p className="text-[11px] text-[#647067]">Source ZIP, KiCad schematics, DOCX report, PPT deck.</p>
                </div>
              </label>

              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.vivaReadiness}
                  onChange={() => handleCheckbox('vivaReadiness')}
                  className="mt-0.5 rounded text-[#087443]"
                />
                <div>
                  <strong className="text-[#17211B]">8. Student Viva Defense Questions Validated</strong>
                  <p className="text-[11px] text-[#647067]">High-yield model questions & answers provided.</p>
                </div>
              </label>
            </div>

            <div className="space-y-1 text-xs">
              <label className="font-bold text-[#17211B]">Admin Review Notes</label>
              <textarea
                value={reviewNotes}
                onChange={(e) => setReviewNotes(e.target.value)}
                placeholder="e.g. Verified on bench test. Approved for catalog publication."
                className="w-full h-20 p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none text-xs"
              />
            </div>

            <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#E2E8E4]">
              <button
                type="button"
                onClick={() => executeReview('reject')}
                className="px-4 py-2 rounded-xl border border-red-200 text-red-700 text-xs font-bold"
              >
                Reject
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => executeReview('request_changes')}
                  className="px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 text-xs font-bold"
                >
                  Request Changes
                </button>
                <button
                  type="button"
                  disabled={!allChecklistPassed}
                  onClick={() => executeReview('approve')}
                  className={`px-5 py-2 rounded-xl text-white font-bold text-xs ${
                    allChecklistPassed ? 'bg-[#087443] hover:bg-[#065331]' : 'bg-slate-300'
                  }`}
                >
                  Approve & Publish
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
