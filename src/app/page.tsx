'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProjectCard } from '@/components/ProjectCard';
import { PROJECTS_DATA, Project } from '@/data/projects';
import { DEPARTMENTS } from '@/components/Navbar';
import {
  Wrench,
  Search,
  Sparkles,
  ArrowRight,
  Layers,
  Cpu,
  CheckCircle2,
  TrendingUp,
  Award,
  Users,
  ShieldCheck,
  Zap,
  Code2,
  BookOpen,
  Terminal,
  Activity,
  Star,
  ExternalLink,
  ChevronRight,
  GitBranch,
  FolderGit2
} from 'lucide-react';

const TECH_TAGS = [
  'ESP32', 'Python', 'React', 'IoT', 'TensorFlow', 'Arduino', 'AWS',
  'Docker', 'Node.js', 'ROS', 'OpenCV', 'STM32', 'PostgreSQL', 'Flutter'
];

export default function HomePage() {
  const [activeDifficulty, setActiveDifficulty] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Filtered lists
  const featuredProjects = PROJECTS_DATA.filter((p) => p.isFlagship || p.defaultMatch >= 95).slice(0, 3);
  const trendingProjects = PROJECTS_DATA.slice(2, 5);
  const realWorldProjects = PROJECTS_DATA.filter((p) => p.category === 'IoT' || p.branch.includes('ECE') || p.branch.includes('Mechanical')).slice(0, 3);
  const teamProjects = PROJECTS_DATA.slice(1, 4);
  const recentlyAdded = [...PROJECTS_DATA].reverse().slice(0, 3);

  const difficultyProjects = PROJECTS_DATA.filter((p) => {
    if (activeDifficulty === 'All') return true;
    return p.difficulty === activeDifficulty;
  }).slice(0, 6);

  const techFilteredProjects = selectedTech
    ? PROJECTS_DATA.filter((p) => p.technologies.some((t) => t.toLowerCase().includes(selectedTech.toLowerCase()))).slice(0, 3)
    : PROJECTS_DATA.slice(0, 3);

  return (
    <div className="min-h-screen tech-grid-bg">
      
      {/* ── 1. HERO SECTION ──────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#E2E8E4]">
        {/* Soft background aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#087443]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8E4] shadow-xs text-xs font-semibold text-[#087443] mb-6 animate-fade-slide-down">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span>Next-Gen Engineering Project Workspace</span>
            <span className="px-1.5 py-0.2 rounded bg-[#087443]/10 text-[#087443] text-[10px] font-mono">
              2026 Ready
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#17211B] tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Build. Learn. Create. <br />
            <span className="text-gradient-emerald">Innovate.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#647067] max-w-2xl mx-auto font-normal leading-relaxed">
            Discover verified engineering projects, build with your friends, develop real-world skills, and turn ideas into working prototypes.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <Search className="w-4 h-4" />
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/setup"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F8FAF9] text-[#17211B] border border-[#E2E8E4] hover:border-[#087443] font-bold text-sm sm:text-base shadow-xs hover:shadow-sm transition-all hover:-translate-y-0.5"
            >
              <Wrench className="w-4 h-4 text-[#16A34A]" />
              <span>Start Building</span>
            </Link>
          </div>

          {/* Live Trust Metrics Bar */}
          <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs">
            <div className="p-3 text-center border-r border-[#E2E8E4] last:border-0 sm:last:border-r">
              <div className="text-2xl sm:text-3xl font-black text-[#087443] font-mono">140+</div>
              <div className="text-xs text-[#647067] font-medium mt-0.5">Verified Projects</div>
            </div>
            <div className="p-3 text-center border-r border-[#E2E8E4] sm:border-r">
              <div className="text-2xl sm:text-3xl font-black text-[#087443] font-mono">8</div>
              <div className="text-xs text-[#647067] font-medium mt-0.5">Engineering Branches</div>
            </div>
            <div className="p-3 text-center border-r border-[#E2E8E4] last:border-0">
              <div className="text-2xl sm:text-3xl font-black text-[#087443] font-mono">4,800+</div>
              <div className="text-xs text-[#647067] font-medium mt-0.5">Active Students</div>
            </div>
            <div className="p-3 text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#087443] font-mono">98.4%</div>
              <div className="text-xs text-[#647067] font-medium mt-0.5">Viva Success Rate</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. EXPLORE BY DEPARTMENT ────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#087443] mb-1.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#087443]" />
              <span>Academic Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#17211B] tracking-tight">
              Explore by Department
            </h2>
            <p className="text-sm text-[#647067] mt-1">
              Find curated hardware, software, and AI systems specifically for your branch syllabus.
            </p>
          </div>

          <Link
            href="/projects"
            className="text-xs sm:text-sm font-bold text-[#087443] hover:underline flex items-center gap-1 self-start md:self-end"
          >
            <span>View all engineering branches</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DEPARTMENTS.map((dept) => {
            const count = 12 + ((dept.code.length * 7) % 18);
            return (
              <Link
                key={dept.code}
                href={`/projects?department=${encodeURIComponent(dept.code)}`}
                className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4] hover:border-[#087443] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border ${dept.color}`}>
                      {dept.code}
                    </span>
                    <span className="text-[11px] font-mono text-[#647067] font-medium">
                      {count} Projects
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#17211B] group-hover:text-[#087443] transition-colors leading-snug">
                    {dept.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E2E8E4]/60 flex items-center justify-between text-xs text-[#087443] font-semibold">
                  <span>Explore branch</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── 3. FEATURED PROJECTS ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-white border-y border-[#E2E8E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#087443] mb-1.5 flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Curated Flagships</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#17211B] tracking-tight">
                Featured Projects
              </h2>
              <p className="text-sm text-[#647067] mt-1">
                Highest-rated engineering blueprints with verified schematics, complete code, and viva question banks.
              </p>
            </div>

            <Link
              href="/projects?filter=featured"
              className="text-xs sm:text-sm font-bold text-[#087443] hover:underline flex items-center gap-1"
            >
              <span>Browse all featured</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TRENDING PROJECTS ─────────────────────────────────────────────────── */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#087443] mb-1.5 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#16A34A]" />
              <span>Most Active This Month</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#17211B] tracking-tight">
              Trending Projects
            </h2>
            <p className="text-sm text-[#647067] mt-1">
              Popular builds being prototyped right now by engineering student teams across India.
            </p>
          </div>

          <Link
            href="/projects?sort=trending"
            className="text-xs sm:text-sm font-bold text-[#087443] hover:underline flex items-center gap-1"
          >
            <span>See trending rankings</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ── 5. BEGINNER → ADVANCED PROJECTS ───────────────────────────────────────── */}
      <section className="py-14 bg-white border-y border-[#E2E8E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#087443] mb-1.5 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#087443]" />
                <span>Skill Progression</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#17211B] tracking-tight">
                Beginner → Advanced Projects
              </h2>
              <p className="text-sm text-[#647067] mt-1">
                Choose a project scaled exactly to your semester experience and team expertise level.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center p-1 bg-[#F1F5F3] rounded-xl border border-[#E2E8E4] self-start">
              {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((diff) => (
                <button
                  key={diff}
                  onClick={() => setActiveDifficulty(diff)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeDifficulty === diff
                      ? 'bg-[#087443] text-white shadow-xs'
                      : 'text-[#647067] hover:text-[#17211B]'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {difficultyProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PROJECTS BY TECHNOLOGY ───────────────────────────────────────────── */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#087443] mb-1.5 inline-flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-[#087443]" />
            <span>Tech Stack Filters</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#17211B] tracking-tight">
            Projects by Technology
          </h2>
          <p className="text-sm text-[#647067] mt-1">
            Looking to gain hands-on experience in a specific toolchain? Filter by your favorite stack.
          </p>

          {/* Technology Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            {TECH_TAGS.map((tech) => {
              const isSelected = selectedTech === tech;
              return (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(isSelected ? null : tech)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all border ${
                    isSelected
                      ? 'bg-[#087443] text-white border-[#087443] shadow-xs'
                      : 'bg-white text-[#17211B] border-[#E2E8E4] hover:border-[#087443] hover:bg-[#F8FAF9]'
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techFilteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ── 7. REAL-WORLD PROJECTS ──────────────────────────────────────────────── */}
      <section className="py-14 bg-white border-y border-[#E2E8E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#087443] mb-1.5 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#84CC16]" />
                <span>Industry Relevance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#17211B] tracking-tight">
                Real-World Projects
              </h2>
              <p className="text-sm text-[#647067] mt-1">
                Prototypes solving actual municipal, agricultural, healthcare, and industrial challenges.
              </p>
            </div>

            <Link
              href="/projects?category=real-world"
              className="text-xs sm:text-sm font-bold text-[#087443] hover:underline flex items-center gap-1"
            >
              <span>Explore all real-world</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realWorldProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TEAM PROJECTS ────────────────────────────────────────────────────── */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#087443] mb-1.5 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#087443]" />
              <span>Collaborative Builds</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#17211B] tracking-tight">
              Team Projects
            </h2>
            <p className="text-sm text-[#647067] mt-1">
              Multi-disciplinary projects with defined roles for 2 to 4 students (Hardware, Firmware, UI, & Report).
            </p>
          </div>

          <Link
            href="/setup"
            className="text-xs sm:text-sm font-bold text-[#087443] hover:underline flex items-center gap-1"
          >
            <span>Launch a team workspace</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ── 9. RECENTLY ADDED ───────────────────────────────────────────────────── */}
      <section className="py-14 bg-white border-y border-[#E2E8E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#087443] mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#16A34A]" />
                <span>New Releases</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#17211B] tracking-tight">
                Recently Added
              </h2>
              <p className="text-sm text-[#647067] mt-1">
                Freshly verified designs added by mentors and engineering researchers this semester.
              </p>
            </div>

            <Link
              href="/projects?sort=newest"
              className="text-xs sm:text-sm font-bold text-[#087443] hover:underline flex items-center gap-1"
            >
              <span>View newest additions</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentlyAdded.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. WHY HA LABS? ─────────────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#087443] mb-1.5 inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#087443]" />
            <span>Academic Excellence Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#17211B] tracking-tight">
            Why HA Labs?
          </h2>
          <p className="text-base text-[#647067] mt-2">
            We bridge the gap between theoretical engineering lectures and physical, functioning hardware & code.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="ha-card p-6 rounded-2xl bg-white border border-[#E2E8E4] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#087443]/10 text-[#087443] flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#17211B]">Verified Schematics & Code</h3>
            <p className="text-xs sm:text-sm text-[#647067] leading-relaxed">
              Every circuit pinout, PCB layout, and firmware code is bench-tested on real hardware to eliminate compile errors.
            </p>
          </div>

          <div className="ha-card p-6 rounded-2xl bg-white border border-[#E2E8E4] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#17211B]">Exact BOM & Budgeting</h3>
            <p className="text-xs sm:text-sm text-[#647067] leading-relaxed">
              Transparent component lists with Indian market component pricing, Amazon/Robu links, and low-cost alternatives.
            </p>
          </div>

          <div className="ha-card p-6 rounded-2xl bg-white border border-[#E2E8E4] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#84CC16]/20 text-[#087443] flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#17211B]">External Viva Defense Q&A</h3>
            <p className="text-xs sm:text-sm text-[#647067] leading-relaxed">
              Curated question banks answering the exact tough questions asked by university external examiners and HODs.
            </p>
          </div>

          <div className="ha-card p-6 rounded-2xl bg-white border border-[#E2E8E4] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#17211B]">IEEE Report & Slide Deck</h3>
            <p className="text-xs sm:text-sm text-[#647067] leading-relaxed">
              Download editable DOCX IEEE standard project documentation, block flowcharts, and 15-minute review slides.
            </p>
          </div>
        </div>
      </section>

      {/* ── 11. CTA BANNER — BUILD YOUR FIRST PROJECT ────────────────────────────── */}
      <section className="py-16 bg-[#087443] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-mono font-bold tracking-wider uppercase border border-white/20">
            Start Your Engineering Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Build Your First Project Today
          </h2>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto font-normal">
            Form your team, pick a department project, access full schematics, and complete your semester project with complete confidence.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/setup"
              className="px-7 py-3.5 rounded-xl bg-white text-[#087443] hover:bg-emerald-50 font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-[1.02]"
            >
              Start Building Now
            </Link>
            <Link
              href="/projects"
              className="px-7 py-3.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base border border-emerald-600 transition-all"
            >
              Browse All Projects
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
