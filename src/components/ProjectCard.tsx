'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { useProjectStore } from '@/context/ProjectStoreContext';
import {
  Bookmark,
  ArrowRight,
  Star,
  Users,
  Clock,
  Wrench,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle2
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  customMatch?: number;
  featured?: boolean;
}

export function ProjectCard({ project, customMatch, featured }: ProjectCardProps) {
  const { isProjectSaved, toggleSaveProject, startProject } = useProjectStore();
  const saved = isProjectSaved(project.id);

  // Department code fallback
  const deptCode = project.branch?.[0] || 'ECE';

  // Department pill styling
  const deptColors: Record<string, string> = {
    ECE: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    CSE: 'bg-sky-50 text-sky-800 border-sky-200',
    'AI & DS': 'bg-purple-50 text-purple-800 border-purple-200',
    'AIDS / AIML': 'bg-indigo-50 text-indigo-800 border-indigo-200',
    IT: 'bg-blue-50 text-blue-800 border-blue-200',
    EEE: 'bg-amber-50 text-amber-800 border-amber-200',
    MECH: 'bg-orange-50 text-orange-800 border-orange-200',
    CIVIL: 'bg-teal-50 text-teal-800 border-teal-200',
  };

  const difficultyColors = {
    Beginner: 'bg-emerald-50 text-[#087443] border-emerald-200',
    Intermediate: 'bg-blue-50 text-blue-700 border-blue-200',
    Advanced: 'bg-purple-50 text-purple-700 border-purple-200',
  };

  // Extract or synthesize skills if not directly present
  const skillsList = project.learningOutcomes?.length
    ? project.learningOutcomes.slice(0, 3).map((s) => s.split(' ')[0] + ' ' + (s.split(' ')[1] || ''))
    : ['Embedded Systems', 'IoT Architecture', 'Cloud Dashboard'];

  const rating = 4.8 + ((project.title.length % 3) * 0.1);
  const reviewsCount = 18 + (project.title.length % 25);

  return (
    <div className="ha-card rounded-2xl overflow-hidden flex flex-col justify-between group relative bg-white border border-[#E2E8E4]">
      
      {/* Top Banner Image with Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F1F5F3]">
        <Link href={`/projects/${project.slug}`} className="block w-full h-full">
          <img
            src={project.gallery?.overview || `/projects/${project.slug}/overview.webp`}
            alt={`${project.title} Preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // fallback visual pattern if image not found
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80';
            }}
          />
        </Link>
        
        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

        {/* Top Badges Row */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Department Badge */}
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border backdrop-blur-md shadow-xs ${
                deptColors[deptCode] || 'bg-white/90 text-[#087443] border-[#E2E8E4]'
              }`}
            >
              {deptCode}
            </span>

            {/* Difficulty Badge */}
            <span
              className={`px-2 py-0.5 rounded-full text-[11px] font-medium border backdrop-blur-md ${
                difficultyColors[project.difficulty] || 'bg-white/90 text-slate-700 border-[#E2E8E4]'
              }`}
            >
              {project.difficulty}
            </span>
          </div>

          {/* Save / Bookmark Button (replaces Wishlist) */}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleSaveProject(project.id);
            }}
            className={`p-1.5 rounded-xl backdrop-blur-md transition-all shadow-xs ${
              saved
                ? 'bg-[#087443] text-white border border-[#087443]'
                : 'bg-white/90 text-[#647067] hover:text-[#087443] hover:bg-white border border-[#E2E8E4]'
            }`}
            title={saved ? 'Remove from Saved' : 'Save Project'}
            aria-label="Save project"
          >
            <Bookmark className={`w-4 h-4 ${saved ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Rating overlay badge at bottom of thumbnail */}
        <div className="absolute bottom-2.5 left-3 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>{rating.toFixed(1)}</span>
          <span className="text-white/70 font-normal">({reviewsCount})</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          {/* Title */}
          <Link href={`/projects/${project.slug}`} className="block group-hover:text-[#087443] transition-colors">
            <h3 className="text-base sm:text-lg font-bold text-[#17211B] leading-snug line-clamp-1 group-hover:text-[#087443]">
              {project.title}
            </h3>
          </Link>

          {/* Tagline / Short Description */}
          <p className="text-xs text-[#647067] line-clamp-2 mt-1.5 leading-relaxed font-normal">
            {project.description || project.tagline}
          </p>

          {/* Technologies Chips */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[#F1F5F3] text-[#17211B] border border-[#E2E8E4]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-[#647067] bg-[#F8FAF9]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Skills You'll Learn (Highlighted with #84CC16 accent) */}
          <div className="mt-3.5 pt-3 border-t border-[#E2E8E4]/80">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#087443] flex items-center gap-1 mb-1.5">
              <Sparkles className="w-3 h-3 text-[#84CC16]" />
              <span>Skills You'll Learn:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skillsList.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#84CC16]/15 text-[#17211B] border border-[#84CC16]/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Meta Bar: Team Size & Duration */}
        <div className="pt-3 border-t border-[#E2E8E4]/80 space-y-3">
          <div className="flex items-center justify-between text-xs text-[#647067] font-medium">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#087443]" />
              <span>{project.teamSize || '2–4 Members'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#087443]" />
              <span>{project.duration || '4–6 Weeks'}</span>
            </div>
          </div>

          {/* Actions: View Project & Start Building */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              href={`/projects/${project.slug}`}
              className="w-full text-center py-2 px-2.5 rounded-xl border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] hover:text-[#087443] hover:bg-[#F8FAF9] font-semibold text-xs transition-all flex items-center justify-center gap-1"
            >
              <span>View Project</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <button
              onClick={() => startProject(project.id, `Team ${project.title.slice(0, 12)}`, 'Project Lead')}
              className="w-full py-2 px-2.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-semibold text-xs transition-all shadow-xs hover:shadow-sm flex items-center justify-center gap-1.5 group/btn"
            >
              <Wrench className="w-3 h-3 text-[#84CC16]" />
              <span>Start Building</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;
