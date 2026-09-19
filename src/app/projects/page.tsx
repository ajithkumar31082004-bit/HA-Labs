'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { PROJECTS_DATA, Project } from '@/data/projects';
import { DEPARTMENTS } from '@/components/Navbar';
import { ProjectCard } from '@/components/ProjectCard';
import { SkillProgressionRoadmap } from '@/components/SkillProgressionRoadmap';
import {
  Search,
  Filter,
  Sparkles,
  X,
  SlidersHorizontal,
  Layers,
  ChevronRight,
  Cpu,
  Star,
  CheckCircle2,
  ArrowUpDown
} from 'lucide-react';

export default function ProjectsCatalogPage() {
  const searchParams = useSearchParams();
  const initialDept = searchParams.get('department') || 'All';
  const initialFilter = searchParams.get('filter') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState<string>(initialDept);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'match' | 'rating' | 'duration'>('match');

  const allTechs = useMemo(() => {
    const set = new Set<string>();
    PROJECTS_DATA.forEach((p) => p.technologies.forEach((t) => set.add(t)));
    return Array.from(set).slice(0, 10);
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesTech = p.technologies.some((t) => t.toLowerCase().includes(q));
        const matchesDesc = p.description.toLowerCase().includes(q);
        if (!matchesTitle && !matchesTech && !matchesDesc) return false;
      }

      // Department filter
      if (selectedDept !== 'All') {
        const matchesBranch = p.branch.some((b) => b.toLowerCase() === selectedDept.toLowerCase());
        if (!matchesBranch) return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'All') {
        if (p.difficulty !== selectedDifficulty) return false;
      }

      // Tech filter
      if (selectedTech !== 'All') {
        if (!p.technologies.some((t) => t.toLowerCase() === selectedTech.toLowerCase())) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return (b.title.length % 5) - (a.title.length % 5);
      return b.defaultMatch - a.defaultMatch;
    });
  }, [searchQuery, selectedDept, selectedDifficulty, selectedTech, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDept('All');
    setSelectedDifficulty('All');
    setSelectedTech('All');
  };

  const hasActiveFilters = searchQuery || selectedDept !== 'All' || selectedDifficulty !== 'All' || selectedTech !== 'All';

  return (
    <div className="min-h-screen tech-grid-bg py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8E4] shadow-xs text-xs font-semibold text-[#087443]">
            <Layers className="w-3.5 h-3.5 text-[#087443]" />
            <span>Academic Engineering Repository</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#17211B] tracking-tight">
            Explore Engineering Projects
          </h1>

          <p className="text-sm sm:text-base text-[#647067] leading-relaxed">
            Filter reproducible hardware, cloud, IoT, and AI systems across 8 departments. Every project includes circuit schematics, source code, and viva defense Q&A.
          </p>
        </div>

        {/* ── Skill Progression Roadmap for ECE & EEE ── */}
        <SkillProgressionRoadmap />

        {/* Filter Bar & Search Bar */}
        <div className="ha-card p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8E4] mb-8 space-y-4 shadow-xs">
          
          {/* Top Row: Omnisearch + Sort */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-[#647067] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project name, ESP32, Python, sensors, robotics..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E2E8E4] bg-[#F8FAF9] text-xs sm:text-sm font-medium text-[#17211B] outline-none focus:border-[#087443] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#17211B]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-bold text-[#647067] whitespace-nowrap hidden sm:inline">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full sm:w-auto px-3 py-2.5 rounded-xl border border-[#E2E8E4] bg-[#F8FAF9] text-xs font-semibold text-[#17211B] outline-none focus:border-[#087443]"
              >
                <option value="match">Best Match</option>
                <option value="rating">Top Rated ⭐</option>
                <option value="duration">Estimated Timeline</option>
              </select>
            </div>
          </div>

          {/* Department Pills */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#647067] mb-2 flex items-center justify-between">
              <span>Department Filter</span>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-[#087443] hover:underline normal-case font-semibold text-xs"
                >
                  Reset all filters
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none">
              <button
                onClick={() => setSelectedDept('All')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  selectedDept === 'All'
                    ? 'bg-[#087443] text-white border-[#087443]'
                    : 'bg-[#F8FAF9] text-[#17211B] border-[#E2E8E4] hover:border-[#087443]'
                }`}
              >
                All Departments
              </button>
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept.code}
                  onClick={() => setSelectedDept(dept.code)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    selectedDept === dept.code
                      ? 'bg-[#087443] text-white border-[#087443]'
                      : 'bg-[#F8FAF9] text-[#17211B] border-[#E2E8E4] hover:border-[#087443]'
                  }`}
                >
                  {dept.code}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty & Top Tech Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E2E8E4]">
            {/* Difficulty Tabs */}
            <div className="flex items-center gap-1">
              <span className="text-xs text-[#647067] mr-1.5 font-medium">Difficulty:</span>
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    selectedDifficulty === diff
                      ? 'bg-[#087443] text-white'
                      : 'text-[#647067] hover:text-[#17211B] bg-[#F1F5F3]'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-xs font-mono font-bold text-[#087443]">
              Showing {filteredProjects.length} Verified Projects
            </div>
          </div>

        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="ha-card p-12 rounded-3xl bg-white border border-[#E2E8E4] text-center space-y-3 my-8">
            <Layers className="w-12 h-12 text-[#647067] mx-auto opacity-50" />
            <h3 className="text-lg font-bold text-[#17211B]">No engineering projects match your criteria</h3>
            <p className="text-xs sm:text-sm text-[#647067] max-w-sm mx-auto">
              Try resetting your department or search query to view other verified systems.
            </p>
            <button
              onClick={clearFilters}
              className="mt-2 px-4 py-2 rounded-xl bg-[#087443] text-white font-semibold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
