import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Terminal, ShieldCheck, Heart, Award, ArrowRight, Layers, Users2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>ABOUT HA LABS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Built by engineers. For engineers.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            HA Labs was created to replace the broken culture of selling copied project CDs with a transparent, hands-on engineering ecosystem where students genuinely understand what they build.
          </p>
        </div>

        {/* Brand Meaning Banner */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#090f20] border border-brand-cyan/20 shadow-glow-cyan mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <Logo size="lg" showText={false} />
              <div>
                <h3 className="text-xl font-bold text-white">The HA Labs Monogram</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  H = Harish • A = Ajithkumar
                </p>
              </div>
            </div>
            <div className="text-right sm:text-right">
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider block">
                Brand Principle
              </span>
              <span className="text-sm font-bold text-white font-mono">
                "Find it. Build it. Deploy it."
              </span>
            </div>
          </div>
        </div>

        {/* Founding Team Cards */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">The Founding Team</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              A two-person founding team committed to practical engineering education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ajithkumar */}
            <div className="p-8 rounded-3xl bg-[#0a1020] border border-brand-cyan/30 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-bold">
                    TECHNICAL / PRODUCT
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">Ajithkumar</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan/15 border border-brand-cyan/40 flex items-center justify-center font-mono font-bold text-brand-cyan text-lg">
                  A
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Leads system architecture, cloud deployment pipelines, developer tools, AI integrations, and infrastructure security for the platform.
              </p>

              <div>
                <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider block mb-2 font-bold">
                  Core Focus Areas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Cloud', 'DevOps', 'AWS', 'AI', 'Backend', 'Infrastructure', 'Deployment', 'Security'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Harish */}
            <div className="p-8 rounded-3xl bg-[#0a1020] border border-white/15 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
                    BUSINESS / PROJECT / OPERATIONS
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">Harish</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center font-mono font-bold text-white text-lg">
                  H
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Leads project research, hardware circuit validation, student requirements, testing protocols, and academic institution relationships.
              </p>

              <div>
                <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider block mb-2 font-bold">
                  Core Focus Areas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Project Research',
                    'Hardware',
                    'Student Requirements',
                    'Documentation',
                    'Testing',
                    'Operations',
                    'Customer Support',
                    'College Relationships'
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div id="mission" className="max-w-4xl mx-auto text-center space-y-6 py-12 border-t border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>OUR MISSION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            "Make engineering projects more practical, accessible, and real-world focused."
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We believe students shouldn't spend their final year searching for disconnected project resources. They should have a clear path to build something meaningful.
          </p>

          <div className="pt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan text-black font-bold text-xs hover:bg-cyan-300 transition-colors"
            >
              <span>Explore Projects in the Lab</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
