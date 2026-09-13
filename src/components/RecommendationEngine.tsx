'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { PROJECTS_DATA, Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { Sparkles, Filter, RefreshCw, ArrowRight, Check, SlidersHorizontal, Cpu, DollarSign, Users, Award } from 'lucide-react';

const BRANCH_OPTIONS = ['ECE', 'EEE', 'CSE', 'IT', 'AI & DS', 'Mechanical', 'Other'];
const PROJECT_TYPES = ['Mini Project', 'Major Project', 'Final Year Project', 'Research Project', 'Software Project'];
const TECH_OPTIONS = ['IoT', 'Embedded', 'AI/ML', 'Web', 'Mobile', 'Cloud', 'DevOps', 'Cybersecurity', 'Robotics'];
const HARDWARE_OPTIONS = ['ESP32', 'Arduino', 'Raspberry Pi', 'Sensors', 'No Hardware'];
const BUDGET_OPTIONS = [
  { label: '₹500–₹2,000', min: 500, max: 2000 },
  { label: '₹2,000–₹5,000', min: 2000, max: 5000 },
  { label: '₹5,000–₹10,000', min: 5000, max: 10000 },
  { label: '₹10,000+', min: 10000, max: 50000 },
];
const DIFFICULTY_OPTIONS = ['Beginner', 'Intermediate', 'Advanced'];
const TEAM_SIZES = ['1', '2', '3', '4', '5+'];

export function RecommendationEngine() {
  const [selectedBranch, setSelectedBranch] = useState('ECE');
  const [selectedType, setSelectedType] = useState('Major Project');
  const [selectedTech, setSelectedTech] = useState('IoT');
  const [selectedHardware, setSelectedHardware] = useState('ESP32');
  const [selectedBudget, setSelectedBudget] = useState('₹2,000–₹5,000');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Intermediate');
  const [selectedTeamSize, setSelectedTeamSize] = useState('3');
  const [isSearching, setIsSearching] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(true);

  // Dynamic ranking algorithm
  const rankedProjects = useMemo(() => {
    const budgetObj = BUDGET_OPTIONS.find(b => b.label === selectedBudget) || BUDGET_OPTIONS[1];

    const scored = PROJECTS_DATA.map((proj) => {
      let score = 70; // baseline

      // Branch match
      if (proj.branch.includes(selectedBranch as any)) {
        score += 10;
      }
      // Tech category match
      if (
        proj.category.toLowerCase().includes(selectedTech.toLowerCase()) ||
        proj.technologies.some(t => t.toLowerCase().includes(selectedTech.toLowerCase()))
      ) {
        score += 8;
      }
      // Hardware match
      if (
        selectedHardware === 'No Hardware' && proj.hardware.length === 0
      ) {
        score += 6;
      } else if (
        proj.hardware.some(h => h.toLowerCase().includes(selectedHardware.toLowerCase()))
      ) {
        score += 6;
      }
      // Difficulty match
      if (proj.difficulty === selectedDifficulty) {
        score += 4;
      }
      // Budget overlap
      if (proj.budgetMin <= budgetObj.max && proj.budgetMax >= budgetObj.min) {
        score += 5;
      }

      // Cap at 98%
      const finalScore = Math.min(98, Math.max(76, score));
      return { project: proj, score: finalScore };
    });

    return scored.sort((a, b) => b.score - a.score);
  }, [selectedBranch, selectedType, selectedTech, selectedHardware, selectedBudget, selectedDifficulty, selectedTeamSize]);

  const topMatch = rankedProjects[0];
  const secondaryMatches = rankedProjects.slice(1, 4);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setHasCalculated(true);
    }, 400);
  };

  return (
    <section id="recommendation-engine" className="py-20 relative tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ALGORITHMIC MATCHING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Find a project that actually fits you.
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Tell us what you know, what you want to build, and what you can spend. HA Labs finds the closest engineering project matches with live telemetry and source code packages.
          </p>
        </div>

        {/* Form & Results Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Form Panel */}
          <div className="lg:col-span-5 rounded-3xl bg-[#090f20]/90 border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2.5">
                <SlidersHorizontal className="w-5 h-5 text-brand-cyan" />
                <h3 className="text-lg font-bold text-white">Project Parameters</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">7 Parameters</span>
            </div>

            <form onSubmit={handleCalculate} className="space-y-5">
              {/* Branch */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Engineering Branch
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                  {BRANCH_OPTIONS.map((branch) => (
                    <button
                      type="button"
                      key={branch}
                      onClick={() => setSelectedBranch(branch)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        selectedBranch === branch
                          ? 'bg-brand-cyan text-black font-bold border-brand-cyan shadow-sm'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/25'
                      }`}
                    >
                      {branch}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Project Type
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs text-left font-medium border truncate transition-all ${
                        selectedType === type
                          ? 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan font-semibold'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/25'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Technology */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Target Technology
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {TECH_OPTIONS.map((tech) => (
                    <button
                      type="button"
                      key={tech}
                      onClick={() => setSelectedTech(tech)}
                      className={`px-2.5 py-1 rounded-md text-xs border transition-all ${
                        selectedTech === tech
                          ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300 font-semibold'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hardware Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Hardware Platform
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {HARDWARE_OPTIONS.map((hw) => (
                    <button
                      type="button"
                      key={hw}
                      onClick={() => setSelectedHardware(hw)}
                      className={`px-2 py-1.5 rounded-lg text-xs border truncate text-center transition-all ${
                        selectedHardware === hw
                          ? 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan font-bold'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {hw}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Budget Constraint
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {BUDGET_OPTIONS.map((b) => (
                    <button
                      type="button"
                      key={b.label}
                      onClick={() => setSelectedBudget(b.label)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs border transition-all ${
                        selectedBudget === b.label
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-semibold'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty & Team Size */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Difficulty
                  </label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-lg bg-surface-50 border border-white/15 text-xs text-white focus:outline-none focus:border-brand-cyan"
                  >
                    {DIFFICULTY_OPTIONS.map((d) => (
                      <option key={d} value={d} className="bg-slate-900 text-white">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Team Size
                  </label>
                  <div className="flex gap-1">
                    {TEAM_SIZES.map((size) => (
                      <button
                        type="button"
                        key={size}
                        onClick={() => setSelectedTeamSize(size)}
                        className={`flex-1 py-1.5 rounded text-xs border font-mono transition-all ${
                          selectedTeamSize === size
                            ? 'bg-brand-cyan text-black font-bold border-brand-cyan'
                            : 'bg-white/5 border-white/10 text-slate-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSearching}
                className="w-full mt-4 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all"
              >
                {isSearching ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Matching Algorithms Running...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Find My Projects</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Matches Output Showcase */}
          <div className="lg:col-span-7 space-y-6">
            {topMatch && (
              <div className="relative rounded-3xl bg-gradient-to-b from-[#111c34] to-[#0a1020] border-2 border-brand-cyan/50 p-6 sm:p-8 shadow-glow-cyan overflow-hidden">
                {/* Best Match Header Ribbon */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan text-brand-cyan text-xs font-mono font-bold">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span>BEST MATCH</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-300">
                      {topMatch.score}%
                    </span>
                    <span className="text-xs font-mono text-slate-400">Match</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {topMatch.project.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {topMatch.project.tagline}
                </p>

                {/* Tags & Tech summary */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="px-2.5 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-mono text-brand-cyan">
                    {topMatch.project.branch.join(' • ')}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                    {topMatch.project.category}
                  </span>
                  {topMatch.project.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/40 border border-white/5 mb-6 text-center">
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-slate-400">Budget</span>
                    <span className="text-sm font-semibold text-white">{topMatch.project.budgetDisplay}</span>
                  </div>
                  <div className="border-x border-white/10">
                    <span className="block text-[10px] uppercase font-mono text-slate-400">Difficulty</span>
                    <span className="text-sm font-semibold text-sky-400">{topMatch.project.difficulty}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-slate-400">Duration</span>
                    <span className="text-sm font-semibold text-white">{topMatch.project.duration}</span>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/projects/${topMatch.project.slug}`}
                    className="flex-1 min-w-[160px] py-3 px-5 rounded-xl bg-brand-cyan hover:bg-cyan-300 text-black font-bold text-sm text-center shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/projects/${topMatch.project.slug}#roadmap`}
                    className="py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-sm font-medium transition-colors"
                  >
                    View Architecture
                  </Link>
                </div>
              </div>
            )}

            {/* Other high-percentage matches */}
            <div>
              <div className="flex items-center justify-between mb-3 px-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Alternative High Matches
                </h4>
                <Link href="/projects" className="text-xs font-mono text-brand-cyan hover:underline flex items-center gap-1">
                  <span>View full catalog</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {secondaryMatches.map(({ project, score }) => (
                  <div
                    key={project.id}
                    className="p-4 rounded-2xl bg-[#090f20]/70 border border-white/10 hover:border-brand-cyan/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-bold text-sky-400">
                          {score}% Match
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {project.duration}
                        </span>
                      </div>
                      <h5 className="font-bold text-white text-sm line-clamp-1 mb-1">
                        {project.title}
                      </h5>
                      <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                      <span className="text-slate-300 font-semibold">{project.budgetDisplay}</span>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-brand-cyan hover:underline flex items-center gap-1 font-mono text-[11px]"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default RecommendationEngine;
