'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ECE_SKILL_PROGRESSION, EEE_SKILL_PROGRESSION } from '@/data/projects';
import {
  Zap,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Radio,
  Gauge,
  Activity,
  BatteryCharging,
  Sun,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export function SkillProgressionRoadmap() {
  const [selectedDept, setSelectedDept] = useState<'ECE' | 'EEE'>('ECE');

  const currentProgression = selectedDept === 'ECE' ? ECE_SKILL_PROGRESSION : EEE_SKILL_PROGRESSION;

  return (
    <div className="ha-card p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8E4] shadow-sm my-8">
      {/* Top Header Row with Department Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E2E8E4]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#087443] animate-pulse" />
            <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
              Curriculum Roadmap
            </span>
          </div>
          <h2 className="text-2xl font-black text-[#17211B] mt-1 tracking-tight">
            {selectedDept} Skill Progression Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-[#647067] mt-0.5">
            Step-by-step engineering competencies from semester fundamentals to industry prototypes.
          </p>
        </div>

        {/* Switcher Tabs */}
        <div className="flex items-center p-1 bg-[#F1F5F3] rounded-2xl border border-[#E2E8E4] self-start sm:self-auto">
          <button
            onClick={() => setSelectedDept('ECE')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedDept === 'ECE'
                ? 'bg-[#087443] text-white shadow-xs'
                : 'text-[#647067] hover:text-[#17211B]'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>🔵 ECE (20 Projects)</span>
          </button>
          <button
            onClick={() => setSelectedDept('EEE')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedDept === 'EEE'
                ? 'bg-[#ea580c] text-white shadow-xs'
                : 'text-[#647067] hover:text-[#17211B]'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>🟠 EEE (20 Projects)</span>
          </button>
        </div>
      </div>

      {/* 3-Stage Visual Progression Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {currentProgression.stages.map((stage, idx) => (
          <div
            key={stage.level}
            className="rounded-2xl p-5 border border-[#E2E8E4] bg-[#F8FAF9] flex flex-col justify-between space-y-4 hover:border-[#087443] transition-all group"
          >
            <div>
              {/* Stage Header */}
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold border ${stage.color}`}>
                  STAGE {idx + 1}: {stage.level.toUpperCase()}
                </span>
                <span className="text-[11px] font-mono text-[#647067] font-semibold">
                  Sem {idx === 0 ? '3–4' : idx === 1 ? '5–6' : '7–8'}
                </span>
              </div>

              {/* Tagline */}
              <h3 className="text-sm font-bold text-[#17211B] leading-snug group-hover:text-[#087443] transition-colors">
                {stage.tagline}
              </h3>

              {/* Skills Checklist */}
              <div className="mt-4 space-y-2">
                {stage.skills.map((sk) => (
                  <div key={sk} className="flex items-center gap-2 text-xs text-[#17211B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                    <span>{sk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Filter Action */}
            <div className="pt-3 border-t border-[#E2E8E4]/80">
              <Link
                href={`/projects?department=${selectedDept}&difficulty=${stage.level === 'Core' || stage.level === 'Beginner' ? 'Beginner' : stage.level === 'Intermediate' ? 'Intermediate' : 'Advanced'}`}
                className="w-full text-center py-2 px-3 rounded-xl bg-white border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] hover:text-[#087443] font-semibold text-xs transition-all flex items-center justify-center gap-1"
              >
                <span>View Stage {idx + 1} Projects</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-6 pt-4 border-t border-[#E2E8E4] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#647067]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#087443]" />
          <span>Aligned with NBA & Anna University / Autonomous Syllabus Guidelines</span>
        </div>
        <Link
          href={`/projects?department=${selectedDept}`}
          className="font-bold text-[#087443] hover:underline flex items-center gap-1"
        >
          <span>Explore all 20 {selectedDept} Engineering Projects</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default SkillProgressionRoadmap;
