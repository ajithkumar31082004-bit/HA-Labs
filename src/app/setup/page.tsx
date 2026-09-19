'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { PROJECTS_DATA, Project } from '@/data/projects';
import { useProjectStore } from '@/context/ProjectStoreContext';
import {
  Wrench,
  Users,
  CheckCircle2,
  Layers,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Award,
  Sparkles,
  Download,
  BookOpen
} from 'lucide-react';

function ProjectSetupContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectSlug = searchParams.get('project');
  const { startProject } = useProjectStore();

  const selectedProject = PROJECTS_DATA.find((p) => p.slug === projectSlug) || PROJECTS_DATA[0];

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [teamName, setTeamName] = useState('Team Nova Tech');
  const [selectedProjectId, setSelectedProjectId] = useState(selectedProject.id);
  const [myRole, setMyRole] = useState('Hardware Lead');
  const [targetDate, setTargetDate] = useState('2026-11-20');
  const [collegeName, setCollegeName] = useState('PSG College of Technology');
  const [members, setMembers] = useState([
    { name: 'Ajithkumar', role: 'Hardware Lead' },
    { name: 'Harish R.', role: 'Firmware Dev' },
    { name: 'Kavitha S.', role: 'Fullstack / UI' },
    { name: 'Dinesh K.', role: 'Documentation & Viva' },
  ]);

  const currentProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId) || selectedProject;

  const handleCompleteSetup = () => {
    startProject(currentProject.id, teamName, myRole);
    setStep(3);
  };

  return (
    <div className="min-h-screen tech-grid-bg py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#087443]/10 text-[#087443] uppercase tracking-wider">
            Replaces Checkout · Engineering Workflow
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#17211B] mt-2 tracking-tight">
            Project Setup & Team Launch
          </h1>
          <p className="text-sm text-[#647067] mt-1">
            Configure your team members, allocate roles, and generate your custom starter repository & BOM.
          </p>

          {/* Stepper */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className={`flex items-center gap-1.5 text-xs font-bold ${step >= 1 ? 'text-[#087443]' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs ${step >= 1 ? 'bg-[#087443] text-white' : 'bg-slate-200'}`}>1</span>
              <span>Project & Team</span>
            </div>
            <span className="w-8 h-px bg-[#E2E8E4]" />
            <div className={`flex items-center gap-1.5 text-xs font-bold ${step >= 2 ? 'text-[#087443]' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs ${step >= 2 ? 'bg-[#087443] text-white' : 'bg-slate-200'}`}>2</span>
              <span>Role Allocation</span>
            </div>
            <span className="w-8 h-px bg-[#E2E8E4]" />
            <div className={`flex items-center gap-1.5 text-xs font-bold ${step >= 3 ? 'text-[#087443]' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs ${step >= 3 ? 'bg-[#087443] text-white' : 'bg-slate-200'}`}>3</span>
              <span>Launch Kit</span>
            </div>
          </div>
        </div>

        {/* Step 1: Project & Team details */}
        {step === 1 && (
          <div className="ha-card p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8E4] space-y-6 shadow-sm">
            <div>
              <h2 className="text-lg font-bold text-[#17211B]">Step 1: Select Project & Set Milestones</h2>
              <p className="text-xs text-[#647067] mt-0.5">Choose the engineering blueprint your team is building this semester.</p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#17211B] mb-1.5">Selected Engineering Project</label>
                <select
                  value={selectedProjectId}
                  onChange={(e) => setSelectedProjectId(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#E2E8E4] font-medium text-[#17211B] bg-white outline-none focus:border-[#087443]"
                >
                  {PROJECTS_DATA.map((p) => (
                    <option key={p.id} value={p.id}>
                      [{p.branch[0]}] {p.title} — {p.difficulty}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#17211B] mb-1.5">Team Name</label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#E2E8E4] font-medium text-[#17211B] outline-none focus:border-[#087443]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#17211B] mb-1.5">College / Institution</label>
                  <input
                    type="text"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#E2E8E4] font-medium text-[#17211B] outline-none focus:border-[#087443]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#17211B] mb-1.5">Target Capstone Submission Date</label>
                <input
                  type="date"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#E2E8E4] font-medium text-[#17211B] outline-none focus:border-[#087443]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8E4] flex items-center justify-between">
              <Link href="/projects" className="text-xs font-bold text-[#647067] hover:text-[#17211B]">
                ← Back to Projects
              </Link>
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5"
              >
                <span>Continue to Role Allocation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Role Allocation */}
        {step === 2 && (
          <div className="ha-card p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8E4] space-y-6 shadow-sm">
            <div>
              <h2 className="text-lg font-bold text-[#17211B]">Step 2: Assign Team Responsibilities</h2>
              <p className="text-xs text-[#647067] mt-0.5">Define which member owns hardware soldering, firmware, and documentation.</p>
            </div>

            <div className="space-y-3">
              {members.map((member, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#087443]/10 text-[#087443] font-mono font-bold flex items-center justify-center shrink-0">
                      M{idx + 1}
                    </span>
                    <div>
                      <div className="font-bold text-[#17211B]">{member.name}</div>
                      <div className="text-[11px] text-[#647067]">Member #{idx + 1}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#647067] font-medium">Role:</span>
                    <select
                      value={member.role}
                      onChange={(e) => {
                        const newMembers = [...members];
                        newMembers[idx].role = e.target.value;
                        setMembers(newMembers);
                      }}
                      className="p-2 rounded-lg border border-[#E2E8E4] font-medium text-[#17211B] bg-white outline-none"
                    >
                      <option value="Hardware Lead">Hardware Lead</option>
                      <option value="Firmware Dev">Firmware Dev</option>
                      <option value="Fullstack / UI">Fullstack / UI</option>
                      <option value="Documentation & Viva">Documentation & Viva</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E2E8E4] flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-bold text-[#647067] hover:text-[#17211B]"
              >
                ← Back
              </button>
              <button
                onClick={handleCompleteSetup}
                className="px-6 py-3 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>Launch Workspace & Starter Kit</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Success / Launch Kit */}
        {step === 3 && (
          <div className="ha-card p-8 sm:p-12 rounded-3xl bg-white border border-[#E2E8E4] text-center space-y-6 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#087443] flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8 text-[#087443]" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#087443]/10 text-[#087443]">
                PROJECT WORKSPACE CREATED
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#17211B]">
                {teamName} is Ready to Build!
              </h2>
              <p className="text-xs sm:text-sm text-[#647067] max-w-lg mx-auto leading-relaxed">
                Your project <strong>{currentProject.title}</strong> has been added to your Active Projects in the Student Dashboard.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#647067]">Project:</span>
                <span className="font-bold text-[#17211B]">{currentProject.title}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#647067]">Team Lead:</span>
                <span className="font-bold text-[#17211B]">Ajithkumar ({myRole})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#647067]">Target Completion:</span>
                <span className="font-mono text-[#087443] font-bold">{targetDate}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/dashboard"
                className="px-6 py-3 rounded-xl bg-[#087443] text-white font-bold text-xs shadow-xs hover:bg-[#065331] transition-all"
              >
                Go to Student Dashboard →
              </Link>
              <Link
                href={`/projects/${currentProject.slug}`}
                className="px-6 py-3 rounded-xl border border-[#E2E8E4] text-[#17211B] font-bold text-xs hover:bg-[#F8FAF9] transition-all"
              >
                View Project Blueprint
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default function ProjectSetupPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-emerald-400">Loading Project Setup...</div>}>
      <ProjectSetupContent />
    </React.Suspense>
  );
}
