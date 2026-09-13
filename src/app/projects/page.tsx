'use client';

import React, { useState, useMemo } from 'react';
import { PROJECTS_DATA, CATEGORIES_LIST, BRANCHES_LIST, BUDGET_RANGES, DIFFICULTY_LEVELS, Project } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { Search, Filter, Sparkles, X, ArrowUpDown, SlidersHorizontal, AlertCircle } from 'lucide-react';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBranch, setSelectedBranch] = useState('All Branches');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');
  const [sortBy, setSortBy] = useState<'match' | 'budget-asc' | 'budget-desc'>('match');

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      // Search
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchTech = p.technologies.some((t) => t.toLowerCase().includes(q));
        const matchTagline = p.tagline.toLowerCase().includes(q);
        const matchHw = p.hardware.some((h) => h.toLowerCase().includes(q));
        if (!matchTitle && !matchTech && !matchTagline && !matchHw) return false;
      }

      // Category
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'flagship') {
          if (!p.isFlagship) return false;
        } else if (selectedCategory === 'IoT') {
          if (p.category !== 'IoT' && !p.technologies.includes('IoT')) return false;
        } else if (selectedCategory === 'Embedded') {
          if (p.category !== 'Embedded' && !p.technologies.some(t => t.includes('Arduino') || t.includes('RFID'))) return false;
        } else if (selectedCategory === 'AI/ML') {
          if (p.category !== 'AI/ML' && !p.technologies.some(t => t.includes('OpenCV') || t.includes('YOLO') || t.includes('ML'))) return false;
        } else if (selectedCategory === 'Cloud') {
          if (p.category !== 'Cloud' && !p.technologies.includes('AWS') && !p.technologies.includes('Cloud')) return false;
        } else if (selectedCategory === 'DevOps') {
          if (p.category !== 'DevOps' && !p.technologies.includes('Docker') && !p.technologies.includes('Jenkins')) return false;
        } else if (selectedCategory === 'Web') {
          if (p.category !== 'Web' && !p.technologies.includes('React') && !p.technologies.includes('Node.js')) return false;
        } else if (selectedCategory === 'Cybersecurity') {
          if (p.category !== 'Cybersecurity') return false;
        } else if (selectedCategory === 'Robotics') {
          if (p.category !== 'Robotics') return false;
        } else if (p.category !== selectedCategory) {
          return false;
        }
      }

      // Branch
      if (selectedBranch !== 'All Branches') {
        if (!p.branch.includes(selectedBranch as any)) return false;
      }

      // Budget
      if (selectedBudget !== 'all') {
        const budgetObj = BUDGET_RANGES.find((b) => b.id === selectedBudget);
        if (budgetObj && budgetObj.min !== undefined && budgetObj.max !== undefined) {
          if (p.budgetMax < budgetObj.min || p.budgetMin > budgetObj.max) return false;
        }
      }

      // Difficulty
      if (selectedDifficulty !== 'All Levels') {
        if (p.difficulty !== selectedDifficulty) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'budget-asc') return a.budgetMin - b.budgetMin;
      if (sortBy === 'budget-desc') return b.budgetMax - a.budgetMax;
      return b.defaultMatch - a.defaultMatch;
    });
  }, [searchQuery, selectedCategory, selectedBranch, selectedBudget, selectedDifficulty, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBranch('All Branches');
    setSelectedBudget('all');
    setSelectedDifficulty('All Levels');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'all' ||
    selectedBranch !== 'All Branches' ||
    selectedBudget !== 'all' ||
    selectedDifficulty !== 'All Levels';

  return (
    <div className="min-h-screen py-12 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-3">
            <Sparkles className="w-3 h-3" />
            <span>PROJECT REPOSITORY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineering Projects Catalog
          </h1>
          <p className="mt-3 text-base text-slate-400">
            Explore 20+ verified, reproducible hardware, cloud, robotics, and full-stack software systems with complete BOMs and viva defenses.
          </p>
        </div>

        {/* Search & Main Filter Controls */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Box */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project name, ESP32, AWS, Python, Arduino, Sensors..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a1020] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 rounded-xl bg-[#0a1020] border border-white/10 text-xs font-mono text-slate-300 focus:outline-none focus:border-brand-cyan"
              >
                <option value="match">Sort: Highest Match Score</option>
                <option value="budget-asc">Sort: Budget (Low to High)</option>
                <option value="budget-desc">Sort: Budget (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Quick Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES_LIST.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-brand-cyan text-black font-bold'
                    : 'bg-[#0a1020] border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.id ? 'bg-black/20 text-black' : 'bg-white/5 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Secondary Filter Row: Branch, Budget, Difficulty */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Branch Filter */}
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-surface-50 border border-white/10 text-xs text-slate-300 focus:outline-none focus:border-brand-cyan"
            >
              {BRANCHES_LIST.map((b) => (
                <option key={b} value={b}>
                  Branch: {b}
                </option>
              ))}
            </select>

            {/* Budget Range Filter */}
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-surface-50 border border-white/10 text-xs text-slate-300 focus:outline-none focus:border-brand-cyan"
            >
              {BUDGET_RANGES.map((b) => (
                <option key={b.id} value={b.id}>
                  Budget: {b.label}
                </option>
              ))}
            </select>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-surface-50 border border-white/10 text-xs text-slate-300 focus:outline-none focus:border-brand-cyan"
            >
              {DIFFICULTY_LEVELS.map((d) => (
                <option key={d} value={d}>
                  Difficulty: {d}
                </option>
              ))}
            </select>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-2.5 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 text-xs font-mono flex items-center gap-1 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}

            <span className="ml-auto text-xs font-mono text-slate-400">
              Showing {filteredProjects.length} of {PROJECTS_DATA.length} projects
            </span>
          </div>
        </div>

        {/* Results Grid / Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="my-16 p-12 rounded-3xl bg-[#090f20] border border-white/10 text-center max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-400">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">No matching projects found</h3>
            <p className="text-xs text-slate-400">
              We couldn't find any projects matching your exact combination of search terms and filters.
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-xl bg-brand-cyan text-black font-bold text-xs hover:bg-cyan-300 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
