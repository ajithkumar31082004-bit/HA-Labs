'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { PROJECTS_DATA, CATEGORIES_LIST, BRANCHES_LIST, BUDGET_RANGES, DIFFICULTY_LEVELS } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { Search, Filter, Sparkles, X, ArrowUpDown, SlidersHorizontal, AlertCircle, LayoutGrid, List, Star, ChevronRight, ArrowRight } from 'lucide-react';

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner:     'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  Intermediate: 'bg-amber-500/15 text-amber-400 border-amber-500/25',
  Advanced:     'bg-red-500/15 text-red-400 border-red-500/25',
};

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBranch, setSelectedBranch] = useState('All Branches');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');
  const [sortBy, setSortBy] = useState<'match' | 'budget-asc' | 'budget-desc'>('match');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [featuredIdx, setFeaturedIdx] = useState(0);

  const flagshipProjects = useMemo(() => PROJECTS_DATA.filter(p => p.isFlagship), []);

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        if (!p.title.toLowerCase().includes(q) && !p.technologies.some(t => t.toLowerCase().includes(q)) && !p.tagline.toLowerCase().includes(q) && !p.hardware.some(h => h.toLowerCase().includes(q))) return false;
      }
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'flagship') { if (!p.isFlagship) return false; }
        else if (selectedCategory === 'IoT') { if (p.category !== 'IoT' && !p.technologies.includes('IoT')) return false; }
        else if (selectedCategory === 'Embedded') { if (p.category !== 'Embedded' && !p.technologies.some(t => t.includes('Arduino') || t.includes('RFID'))) return false; }
        else if (selectedCategory === 'AI/ML') { if (p.category !== 'AI/ML' && !p.technologies.some(t => t.includes('OpenCV') || t.includes('YOLO') || t.includes('ML'))) return false; }
        else if (selectedCategory === 'Cloud') { if (p.category !== 'Cloud' && !p.technologies.includes('AWS') && !p.technologies.includes('Cloud')) return false; }
        else if (selectedCategory === 'DevOps') { if (p.category !== 'DevOps' && !p.technologies.includes('Docker') && !p.technologies.includes('Jenkins')) return false; }
        else if (selectedCategory === 'Web') { if (p.category !== 'Web' && !p.technologies.includes('React') && !p.technologies.includes('Node.js')) return false; }
        else if (p.category !== selectedCategory) return false;
      }
      if (selectedBranch !== 'All Branches') { if (!p.branch.includes(selectedBranch as any)) return false; }
      if (selectedBudget !== 'all') {
        const budgetObj = BUDGET_RANGES.find(b => b.id === selectedBudget);
        if (budgetObj && budgetObj.min !== undefined && budgetObj.max !== undefined) {
          if (p.budgetMax < budgetObj.min || p.budgetMin > budgetObj.max) return false;
        }
      }
      if (selectedDifficulty !== 'All Levels') { if (p.difficulty !== selectedDifficulty) return false; }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'budget-asc') return a.budgetMin - b.budgetMin;
      if (sortBy === 'budget-desc') return b.budgetMax - a.budgetMax;
      return b.defaultMatch - a.defaultMatch;
    });
  }, [searchQuery, selectedCategory, selectedBranch, selectedBudget, selectedDifficulty, sortBy]);

  const clearFilters = () => {
    setSearchQuery(''); setSelectedCategory('all'); setSelectedBranch('All Branches');
    setSelectedBudget('all'); setSelectedDifficulty('All Levels');
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all' || selectedBranch !== 'All Branches' || selectedBudget !== 'all' || selectedDifficulty !== 'All Levels';
  const activeFilterCount = [searchQuery !== '', selectedCategory !== 'all', selectedBranch !== 'All Branches', selectedBudget !== 'all', selectedDifficulty !== 'All Levels'].filter(Boolean).length;

  return (
    <div className="min-h-screen tech-grid-bg">
      {/* ── Hero Header ── */}
      <div className="border-b border-white/5 bg-gradient-to-b from-[#070b16] to-[#060913] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-4">
            <Sparkles className="w-3 h-3" />
            <span>20 VERIFIED ENGINEERING PROJECTS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl">
            Engineering Projects Catalog
          </h1>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Reproducible hardware, cloud, AI/ML, and DevOps systems — each with complete BOM, source code, architecture diagrams, and viva Q&amp;A bank.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ── Featured Flagship Strip ── */}
        {selectedCategory === 'all' && !searchQuery && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-bold text-white">Flagship Projects</span>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">⭐ EDITOR'S PICK</span>
              </div>
              <div className="flex items-center gap-1">
                {flagshipProjects.map((_, i) => (
                  <button key={i} onClick={() => setFeaturedIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === featuredIdx ? 'bg-brand-cyan scale-125' : 'bg-white/20 hover:bg-white/40'}`} />
                ))}
              </div>
            </div>

            {/* Scrollable Horizontal Flagship Strip */}
            <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none snap-x snap-mandatory">
              {flagshipProjects.map((project, i) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  onClick={() => setFeaturedIdx(i)}
                  className={`flex-shrink-0 w-72 sm:w-80 rounded-2xl border overflow-hidden transition-all group snap-start ${i === featuredIdx ? 'border-brand-cyan/50 shadow-glow-cyan' : 'border-white/10 hover:border-white/25'}`}
                >
                  {/* Thumbnail */}
                  <div className="h-40 bg-slate-950 overflow-hidden relative">
                    <img src={project.gallery.overview} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${DIFFICULTY_COLORS[project.difficulty] || 'text-slate-400 bg-white/5 border-white/10'}`}>
                        {project.difficulty}
                      </span>
                      <span className="text-[10px] font-mono text-white/70 bg-black/50 px-2 py-0.5 rounded">
                        ₹{project.budgetMin.toLocaleString()}–{project.budgetMax.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#090f20]">
                    <h3 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">{project.title}</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{project.tagline}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/5 border border-white/10 text-slate-400">{tech}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── Search & Filters ── */}
        <div className="space-y-3 mb-8">
          {/* Search Row */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                id="project-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, ESP32, AWS, Python, Arduino, MQTT..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a1020] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="px-3 py-3 rounded-xl bg-[#0a1020] border border-white/10 text-xs font-mono text-slate-300 focus:outline-none focus:border-brand-cyan">
                <option value="match">Highest Match</option>
                <option value="budget-asc">Budget: Low → High</option>
                <option value="budget-desc">Budget: High → Low</option>
              </select>

              {/* View Toggle */}
              <div className="flex items-center bg-[#0a1020] border border-white/10 rounded-xl p-1">
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-brand-cyan text-black' : 'text-slate-400 hover:text-white'}`} aria-label="Grid view">
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-brand-cyan text-black' : 'text-slate-400 hover:text-white'}`} aria-label="List view">
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Pill Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES_LIST.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-brand-cyan text-black font-bold shadow-sm'
                    : 'bg-[#0a1020] border border-white/10 text-slate-400 hover:text-white hover:border-white/25'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${selectedCategory === cat.id ? 'bg-black/20 text-black font-bold' : 'bg-white/5 text-slate-500'}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Secondary Filters Row */}
          <div className="flex flex-wrap items-center gap-2">
            <select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)} className="px-3 py-1.5 rounded-lg bg-[#0a1020] border border-white/10 text-xs text-slate-300 focus:outline-none focus:border-brand-cyan">
              {BRANCHES_LIST.map(b => <option key={b} value={b}>Branch: {b}</option>)}
            </select>
            <select value={selectedBudget} onChange={(e) => setSelectedBudget(e.target.value)} className="px-3 py-1.5 rounded-lg bg-[#0a1020] border border-white/10 text-xs text-slate-300 focus:outline-none focus:border-brand-cyan">
              {BUDGET_RANGES.map(b => <option key={b.id} value={b.id}>Budget: {b.label}</option>)}
            </select>
            <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)} className="px-3 py-1.5 rounded-lg bg-[#0a1020] border border-white/10 text-xs text-slate-300 focus:outline-none focus:border-brand-cyan">
              {DIFFICULTY_LEVELS.map(d => <option key={d} value={d}>Difficulty: {d}</option>)}
            </select>

            {hasActiveFilters && (
              <button onClick={clearFilters} className="px-2.5 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 text-xs font-mono flex items-center gap-1 transition-colors">
                <X className="w-3.5 h-3.5" />
                <span>Clear ({activeFilterCount})</span>
              </button>
            )}

            <div className="ml-auto flex items-center gap-2">
              {hasActiveFilters && <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan">{filteredProjects.length} results</span>}
              <span className="text-xs font-mono text-slate-500">
                Showing {filteredProjects.length} / {PROJECTS_DATA.length}
              </span>
            </div>
          </div>
        </div>

        {/* ── Results ── */}
        {filteredProjects.length === 0 ? (
          <div className="my-16 p-14 rounded-3xl bg-[#090f20] border border-white/10 text-center max-w-lg mx-auto space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8 text-slate-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">No projects found</h3>
              <p className="text-sm text-slate-400 mt-2">No projects match your current filters. Try broadening your search or selecting a different category.</p>
            </div>
            <button onClick={clearFilters} className="px-6 py-2.5 rounded-xl bg-brand-cyan text-black font-bold text-xs hover:bg-cyan-300 transition-colors">
              Reset All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-3">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="flex items-center gap-5 p-4 rounded-2xl bg-[#090f20] border border-white/10 hover:border-brand-cyan/40 transition-all group"
              >
                {/* Thumbnail */}
                <div className="w-20 h-16 sm:w-28 sm:h-20 flex-shrink-0 rounded-xl overflow-hidden bg-slate-950 border border-white/5">
                  <img src={project.gallery.overview} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">{project.title}</h3>
                    {project.isFlagship && <span className="text-[9px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded">FLAGSHIP</span>}
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-1">{project.tagline}</p>
                  <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold border ${DIFFICULTY_COLORS[project.difficulty] || 'text-slate-400 bg-white/5 border-white/10'}`}>{project.difficulty}</span>
                    <span className="text-[10px] font-mono text-slate-400">₹{project.budgetMin.toLocaleString()}–{project.budgetMax.toLocaleString()}</span>
                    {project.technologies.slice(0, 3).map(tech => <span key={tech} className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/5 border border-white/5 text-slate-500 hidden sm:inline">{tech}</span>)}
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-brand-cyan">{project.defaultMatch}% Match</span>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
