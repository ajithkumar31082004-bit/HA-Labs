'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { Bookmark, ArrowRight, Check, Sparkles, Star } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  customMatch?: number;
  featured?: boolean;
}

export function ProjectCard({ project, customMatch, featured }: ProjectCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const match = customMatch ?? project.defaultMatch;

  const difficultyColors = {
    Beginner: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    Intermediate: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    Advanced: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  };

  const packageIncludes = [
    'Source Code',
    'Circuit Diagram',
    'Architecture',
    'Hardware Guide',
    'Documentation',
    'Deployment Guide',
    'Viva Questions'
  ];

  return (
    <div className={`group relative rounded-3xl bg-[#0a1020]/90 border ${
      project.isFlagship ? 'border-brand-cyan/40 shadow-glow-cyan' : 'border-white/10'
    } hover:border-brand-cyan/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-glow-cyan hover:-translate-y-1`}>
      {/* Top ambient glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-brand-cyan/5 rounded-full blur-2xl group-hover:bg-brand-cyan/15 transition-all pointer-events-none" />

      <div>
        {/* Flagship Badge & Bookmark Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            {project.isFlagship && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-300" />
                FLAGSHIP
              </span>
            )}
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,210,255,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              {match}% Match
            </span>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              setIsSaved(!isSaved);
            }}
            className={`p-1.5 rounded-lg border transition-colors ${
              isSaved
                ? 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan'
                : 'border-white/10 text-slate-400 hover:text-white hover:border-white/30'
            }`}
            aria-label={isSaved ? 'Remove from saved' : 'Save project'}
            title={isSaved ? 'Saved to workspace' : 'Save project'}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-brand-cyan' : ''}`} />
          </button>
        </div>

        {/* Project Title & Tagline */}
        <Link href={`/projects/${project.slug}`} className="block group-hover:text-brand-cyan transition-colors">
          <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-cyan-300">
            {project.title}
          </h3>
        </Link>
        <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 mb-4 leading-relaxed">
          {project.tagline}
        </p>

        {/* Visual Concept Pill */}
        <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 mb-4 text-[11px] font-mono text-slate-300 flex items-center gap-2">
          <span className="text-brand-cyan text-xs">🖼️</span>
          <span className="truncate">{project.visualSummary}</span>
        </div>

        {/* Technology Pills: ECE IoT ESP32 AWS */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan">
            {project.branch[0]}
          </span>
          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300">
            {project.category}
          </span>
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics Row: 💰 Budget, ⏱️ Duration, 📈 Difficulty */}
        <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-2xl bg-black/40 border border-white/5 mb-5 text-center text-xs">
          <div>
            <span className="block text-[10px] uppercase font-mono text-slate-400">💰 Budget</span>
            <span className="font-bold text-white font-mono text-[11px] sm:text-xs truncate block mt-0.5">
              {project.budgetDisplay}
            </span>
          </div>
          <div className="border-x border-white/10 px-1">
            <span className="block text-[10px] uppercase font-mono text-slate-400">⏱️ Duration</span>
            <span className="font-bold text-white font-mono text-[11px] sm:text-xs truncate block mt-0.5">
              {project.duration}
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase font-mono text-slate-400">📈 Level</span>
            <span className="font-bold text-sky-400 font-mono text-[11px] sm:text-xs truncate block mt-0.5">
              {project.difficulty}
            </span>
          </div>
        </div>

        {/* "Includes" Checklist */}
        <div className="pb-5 pt-1 space-y-2 border-t border-white/5">
          <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
            Includes
          </span>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[11px] text-slate-300">
            {packageIncludes.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0 stroke-[2.5]" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-4 border-t border-white/5">
        <Link
          href={`/projects/${project.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-brand-cyan hover:text-black text-slate-200 font-bold text-xs border border-white/10 hover:border-brand-cyan transition-all duration-200 group/btn"
        >
          <span>View Project</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
export default ProjectCard;
