import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS_DATA, Project } from '@/data/projects';
import {
  Sparkles,
  ArrowLeft,
  Cpu,
  Layers,
  Clock,
  Users,
  DollarSign,
  CheckCircle2,
  Download,
  BookOpen,
  Server,
  Code2,
  Terminal,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Check,
  Lightbulb,
  AlertTriangle,
  Zap,
  Image as ImageIcon,
  Monitor,
  Cloud,
  CheckSquare
} from 'lucide-react';

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const packageChecklist = [
    { title: 'Source Code', desc: 'Fully commented firmware, backend REST/MQTT APIs, and responsive dashboard codebase.' },
    { title: 'Circuit Diagram', desc: 'High-resolution schematic and Fritzing pin-to-pin breadboard wiring diagram.' },
    { title: 'Architecture Diagram', desc: 'System dataflow diagram from sensor acquisition to cloud analytics.' },
    { title: 'Database Schema', desc: 'SQL / NoSQL relational schemas, table relationships, and initial seed files.' },
    { title: 'API Documentation', desc: 'Interactive Swagger / Postman documentation for all telemetry endpoints.' },
    { title: 'Hardware Guide', desc: 'Component datasheets, pinout cheat sheets, and safe voltage regulation instructions.' },
    { title: 'Deployment Guide', desc: 'Step-by-step local Docker containerization and AWS cloud hosting walk-through.' },
    { title: 'Report Template', desc: 'Standard IEEE university format (editable Word DOCX & LaTeX) from Abstract to Conclusion.' },
    { title: 'PPT Presentation', desc: 'Editable slide deck structured specifically for 15-minute committee project reviews.' },
    { title: 'Viva Questions', desc: 'Curated bank of 20+ examiner trap questions with model technical defenses.' },
    { title: 'Demo Guide', desc: 'Video demonstration script, examiner demonstration checklist, and fallback procedures.' },
  ];

  return (
    <div className="min-h-screen py-10 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-brand-cyan transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* 1. HERO SECTION */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0e172e] to-[#080d1c] border border-white/15 p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Hero Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                {project.isFlagship && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    ★ FLAGSHIP PROJECT
                  </span>
                )}
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                  {project.defaultMatch}% Match
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                  {project.branch.join(' • ')}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                  {project.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {project.tagline}
              </p>

              {/* Specs Metric Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">💰 Budget</span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">{project.budgetDisplay}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">📈 Difficulty</span>
                  <span className="text-sm sm:text-base font-bold text-sky-400 font-mono">{project.difficulty}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">⏱️ Duration</span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">{project.duration}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">👥 Team Size</span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">{project.teamSize}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/signup?project=${project.slug}`}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center gap-2 transition-all"
                >
                  <span>Start This Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#package"
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-sm font-semibold transition-colors"
                >
                  View Package Checklist
                </a>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#090f20]/95 border border-brand-cyan/30 shadow-glow-cyan text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-cyan/15 border border-brand-cyan/40 flex items-center justify-center mx-auto text-brand-cyan">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider block">
                  SYSTEM PROTOTYPE CONCEPT
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  {project.visualSummary}
                </h3>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-400 leading-relaxed text-left space-y-1">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  <span>Verified Pin-to-Pin Schematics</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  <span>Clean Modular Codebase</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  <span>Cloud Ready Telemetry</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. OVERVIEW: Problem, Proposed Solution, How It Works */}
        <section className="mb-12 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-8">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-brand-cyan" />
              <span>Project Overview & Engineering Rationale</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Academic problem definition, engineering solution, and physical working principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Problem */}
            <div className="p-6 rounded-2xl bg-black/40 border border-red-500/20 space-y-2.5">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Proposed Solution */}
            <div className="p-6 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Proposed Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* How It Works */}
            <div className="p-6 rounded-2xl bg-black/40 border border-brand-cyan/20 space-y-2.5">
              <div className="flex items-center gap-2 text-brand-cyan font-mono text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>How It Works</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.howItWorks}
              </p>
            </div>
          </div>
        </section>

        {/* 3. ARCHITECTURE PIPELINE */}
        <section className="mb-12 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-6 h-6 text-brand-cyan" />
              <span>System Architecture Dataflow</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              End-to-end signal and data propagation from physical sensors to cloud presentation
            </p>
          </div>

          <div className="py-2">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              {project.architectureSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="w-full sm:w-auto flex-1 p-3.5 rounded-xl bg-[#0d162d] border border-white/10 text-center">
                    <span className="text-[10px] uppercase font-mono text-brand-cyan font-bold block">
                      Stage 0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-white mt-1 block">
                      {step}
                    </span>
                  </div>
                  {idx < project.architectureSteps.length - 1 && (
                    <div className="text-brand-cyan font-mono font-bold text-sm hidden sm:block">
                      →
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* 4. TECH STACK & HARDWARE LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Technology Stack */}
          <div className="p-7 rounded-3xl bg-[#0a1020] border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-brand-cyan" />
              <span>Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-white/5 border border-white/10 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-400 block mb-2 font-bold uppercase">
                Software & Frameworks:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {project.software.map((sw, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    <span>{sw}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hardware List */}
          <div className="p-7 rounded-3xl bg-[#0a1020] border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-brand-cyan" />
              <span>Hardware & Sensors Required</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {project.hardware.map((hw, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <span>{hw}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5. SYSTEM FEATURES */}
        <section className="mb-12 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-brand-cyan" />
            <span>Key Engineering Features</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. ESTIMATED COST: Component-by-Component BOM Breakdown */}
        <section className="mb-12 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-brand-cyan" />
                <span>Estimated Cost & Component BOM Breakdown</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Itemized parts list with verified market unit pricing for student laboratory budgeting
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/25 self-start sm:self-auto">
              Total Est: {project.budgetDisplay}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono">
                  <th className="py-3 px-4">Component</th>
                  <th className="py-3 px-4">Technical Specification</th>
                  <th className="py-3 px-4 text-center">Quantity</th>
                  <th className="py-3 px-4 text-right">Estimated Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {project.bom.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/5">
                    <td className="py-3 px-4 font-semibold text-white">{item.component}</td>
                    <td className="py-3 px-4 text-slate-400">{item.specs}</td>
                    <td className="py-3 px-4 text-center font-mono text-slate-300">{item.qty}</td>
                    <td className="py-3 px-4 text-right font-mono text-brand-cyan font-bold">
                      ₹{item.estCost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 7. 10-STEP DEVELOPMENT ROADMAP */}
        <section className="mb-12 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Clock className="w-6 h-6 text-brand-cyan" />
              <span>10-Stage Development Roadmap</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              From initial requirements to external examiner viva defense
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {project.roadmap.map((step) => (
              <div key={step.step} className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                <span className="text-xs font-mono font-bold text-brand-cyan">
                  {step.step}
                </span>
                <h4 className="text-xs font-bold text-white truncate">{step.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. PROJECT PACKAGE CONTENTS */}
        <section id="package" className="mb-12 p-8 rounded-3xl bg-gradient-to-b from-[#101b33] to-[#0a1020] border-2 border-brand-cyan/40 shadow-glow-cyan space-y-6">
          <div className="border-b border-white/10 pb-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Download className="w-6 h-6 text-brand-cyan" />
                <span>Complete Project Package Contents</span>
              </h2>
              <p className="text-xs text-slate-300 mt-1 font-mono">
                Everything required to build, demonstrate, and defend before university review panels
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-500/30">
              11 Deliverables
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packageChecklist.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 stroke-[3]" />
                  <span>{item.title}</span>
                </div>
                <p className="text-[11px] text-slate-400 pl-6 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <Link
              href={`/signup?project=${project.slug}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all"
            >
              <span>Get Full Student Package for {project.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 9. VISUAL GALLERY CARDS */}
        <section className="mb-12 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-brand-cyan" />
              <span>Project Visual Blueprint Gallery</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Hardware assembly, dataflow architecture, dashboard UI, and cloud container deployment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.galleryVisuals.map((vis, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-brand-cyan/40 transition-all space-y-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs"
                  style={{ backgroundColor: `${vis.accentColor}20`, color: vis.accentColor, border: `1px solid ${vis.accentColor}40` }}
                >
                  0{idx + 1}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">
                    {vis.type}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-0.5">{vis.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{vis.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. VIVA EXAMINATION DEFENSE QUESTIONS */}
        <section className="mb-12 p-8 rounded-3xl bg-[#0a1020] border border-white/10 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-brand-cyan" />
              <span>Viva Examination Defense Questions & Verified Answers</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Master the technical justifications external university examiners look for during viva voce
            </p>
          </div>

          <div className="space-y-4">
            {project.vivaQuestions.map((qa, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0d162d] border border-white/10 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-start gap-2">
                  <span className="text-brand-cyan font-mono">Q{idx + 1}:</span>
                  <span>{qa.question}</span>
                </h3>
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6 pt-2 border-l-2 border-brand-cyan/40">
                  <strong className="text-brand-cyan font-mono block mb-1">Model Defense Answer:</strong>
                  {qa.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final Start Project Footer Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/30 via-[#0a1226] to-cyan-900/30 border border-brand-cyan/40 text-center space-y-4 shadow-glow-cyan">
          <h3 className="text-2xl font-bold text-white">Ready to build the {project.title}?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Get instant access to verified source code, schematics, Bill of Materials, and examiner viva questions.
          </p>
          <div className="pt-2">
            <Link
              href={`/signup?project=${project.slug}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-cyan hover:bg-cyan-300 text-black font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all"
            >
              <span>Build This Project Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
