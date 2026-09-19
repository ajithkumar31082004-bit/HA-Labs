import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Terminal, ShieldCheck, Heart, Award, ArrowRight, Layers, Users2, Phone, MessageSquare, Mail, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8E4] shadow-xs text-xs font-semibold text-[#087443]">
            <Terminal className="w-3.5 h-3.5 text-[#087443]" />
            <span>ABOUT HA LABS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#17211B] tracking-tight">
            Built by engineers. For engineers.
          </h1>
          <p className="text-base sm:text-lg text-[#647067] leading-relaxed">
            HA Labs was created to replace the broken culture of selling copied project CDs with a transparent, hands-on engineering ecosystem where students genuinely understand what they build.
          </p>
        </div>

        {/* Brand Meaning Banner */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white border border-[#E2E8E4] shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <Logo size="lg" showText={false} />
              <div>
                <h3 className="text-xl font-bold text-[#17211B]">The HA Labs Monogram</h3>
                <p className="text-xs text-[#647067] font-mono mt-0.5">
                  H = Harishkumar • A = Ajithkumar
                </p>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <span className="text-xs font-mono text-[#087443] uppercase tracking-wider block font-bold">
                Platform Principle
              </span>
              <span className="text-sm font-bold text-[#17211B] font-mono">
                "Build. Learn. Create. Innovate."
              </span>
            </div>
          </div>
        </div>

        {/* Founding Team Cards */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
              Leadership & Mentorship
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#17211B]">The Founding Team</h2>
            <p className="text-xs sm:text-sm text-[#647067]">
              Feel free to call or WhatsApp us directly for any academic project guidance or component assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Ajithkumar */}
            <div className="ha-card p-8 rounded-3xl bg-white border border-[#E2E8E4] space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#087443] uppercase tracking-wider font-bold">
                    TECHNICAL & ARCHITECTURE LEAD
                  </span>
                  <h3 className="text-2xl font-bold text-[#17211B] mt-1">Ajithkumar</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center font-mono font-bold text-[#087443] text-lg">
                  A
                </div>
              </div>

              <p className="text-sm text-[#647067] leading-relaxed">
                Leads system architecture, cloud deployment pipelines, developer tools, AI integrations, microcontroller firmware testing, and platform infrastructure.
              </p>

              {/* Direct Contact Phone & WhatsApp */}
              <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-3">
                <div className="text-xs font-bold text-[#17211B] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#087443]" />
                  <span>Direct Contact:</span>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="tel:+918778954899"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] font-mono font-bold text-xs shadow-xs hover:text-[#087443] transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#087443]" />
                    <span>+91 8778954899</span>
                  </a>
                  <a
                    href="https://wa.me/918778954899?text=Hi%20Ajithkumar,%20I%20need%20assistance%20with%20an%20engineering%20project%20on%20HA%20Labs"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs transition-all shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#84CC16]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono text-[#647067] tracking-wider block mb-2 font-bold">
                  Core Focus Areas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Cloud', 'DevOps', 'AWS', 'AI Systems', 'Backend APIs', 'Next.js', 'Infrastructure', 'Security'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#F1F5F3] border border-[#E2E8E4] text-[#17211B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Harishkumar */}
            <div className="ha-card p-8 rounded-3xl bg-white border border-[#E2E8E4] space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#087443] uppercase tracking-wider font-bold">
                    RESEARCH & HARDWARE LEAD
                  </span>
                  <h3 className="text-2xl font-bold text-[#17211B] mt-1">Harishkumar</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center font-mono font-bold text-[#087443] text-lg">
                  H
                </div>
              </div>

              <p className="text-sm text-[#647067] leading-relaxed">
                Leads project research, hardware circuit validation, BOM sourcing, student requirements, testing protocols, and academic institution relationships across colleges.
              </p>

              {/* Direct Contact Phone & WhatsApp */}
              <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-3">
                <div className="text-xs font-bold text-[#17211B] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#087443]" />
                  <span>Direct Contact:</span>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="tel:+919342540464"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] font-mono font-bold text-xs shadow-xs hover:text-[#087443] transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#087443]" />
                    <span>+91 9342540464</span>
                  </a>
                  <a
                    href="https://wa.me/919342540464?text=Hi%20Harishkumar,%20I%20need%20guidance%20with%20an%20engineering%20project%20on%20HA%20Labs"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs transition-all shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#84CC16]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono text-[#647067] tracking-wider block mb-2 font-bold">
                  Core Focus Areas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Project Research',
                    'Hardware & BOM',
                    'Circuit Schematics',
                    'Student Requirements',
                    'Testing Protocols',
                    'Viva Preparation',
                    'Academic Outreach'
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#F1F5F3] border border-[#E2E8E4] text-[#17211B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Official Contact & Email Card */}
        <div className="max-w-xl mx-auto p-6 rounded-3xl bg-white border border-[#E2E8E4] shadow-xs text-center space-y-3 mb-16">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#087443] flex items-center justify-center mx-auto">
            <Mail className="w-5 h-5 text-[#087443]" />
          </div>
          <h3 className="text-base font-bold text-[#17211B]">Official Support & Inquiries</h3>
          <p className="text-xs text-[#647067]">
            For college partnerships, customized project requests, or starter kit questions:
          </p>
          <a
            href="mailto:halabs.project@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-[#087443] border border-emerald-200 font-mono font-bold text-xs hover:bg-emerald-100 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>halabs.project@gmail.com</span>
          </a>
        </div>

        {/* Mission CTA */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-[#17211B]">
            Have an innovative project idea in mind?
          </h3>
          <p className="text-xs text-[#647067]">
            Let's turn your idea into a working prototype. Explore our projects or reach out for custom project consultation.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-xl bg-[#087443] text-white font-bold text-xs shadow-xs hover:bg-[#065331] transition-all"
            >
              Explore Projects
            </Link>
            <Link
              href="/setup"
              className="px-5 py-2.5 rounded-xl border border-[#E2E8E4] text-[#17211B] font-bold text-xs hover:bg-[#F8FAF9] transition-all"
            >
              Start Building
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
