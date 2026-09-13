import React from 'react';
import Link from 'next/link';
import { GitBranch, ArrowRight, CheckCircle2, Lightbulb, Compass, MapPin, Cpu, Cloud, FileText, Award } from 'lucide-react';

export default function HowItWorksPage() {
  const steps = [
    {
      num: '01',
      title: 'Choose',
      badge: 'Academic Scope & Branch',
      icon: Lightbulb,
      desc: 'Tell us your branch (ECE, EEE, CSE, IT, AI & DS), budget range, hardware preferences, and academic level (Mini, Major, or Final Year Capstone).',
      details: [
        'Curated branch-specific topics avoiding saturated generic ideas',
        'Transparent budget estimation before spending on sensors',
        'Team size calibration and syllabus compliance check'
      ]
    },
    {
      num: '02',
      title: 'Discover',
      badge: 'Algorithmic Matching',
      icon: Compass,
      desc: 'Our recommendation engine calculates compatibility scores across 20+ verified real-world engineering project systems.',
      details: [
        'Live percentage compatibility rating based on your known tools',
        'Alternative suggestions with comparable hardware foundations',
        'Full transparency into complexity and time commitments'
      ]
    },
    {
      num: '03',
      title: 'Plan',
      badge: 'System Architecture & BOM',
      icon: MapPin,
      desc: 'Inspect high-level block diagrams, dataflow sequences, verified component Bill of Materials (BOM), and weekly milestones.',
      details: [
        'Complete supplier component links and current market rates',
        'Power budget and voltage regulator calculations (3.3V vs 5V logic)',
        '3-phase development schedule from breadboard to enclosure'
      ]
    },
    {
      num: '04',
      title: 'Build',
      badge: 'Firmware & Circuit Wiring',
      icon: Cpu,
      desc: 'Follow modular wiring schematics and clean, commented source code for microcontrollers (ESP32/Arduino/Pi) and backend APIs.',
      details: [
        'Pinout charts and breadboard wiring layout diagrams',
        'Clean non-blocking firmware using FreeRTOS tasks and timers',
        'Modular REST and MQTT communication handlers'
      ]
    },
    {
      num: '05',
      title: 'Deploy',
      badge: 'Cloud & Telemetry Ingestion',
      icon: Cloud,
      desc: 'Deploy live telemetry pipelines to AWS EC2, Docker containers, and live web dashboards for examiner demonstrations.',
      details: [
        'Containerized multi-service deployment with Docker-compose',
        'Cloud MQTT broker setup and secure TLS certificate configuration',
        'Dynamic web dashboards featuring real-time telemetry graphs'
      ]
    },
    {
      num: '06',
      title: 'Document',
      badge: 'Reports & Presentations',
      icon: FileText,
      desc: 'Generate IEEE-formatted project reports, circuit schematics, block diagrams, and presentation PPT slides.',
      details: [
        'Standard university chapter structure: Abstract to Conclusion',
        'Editable Word DOCX and LaTeX thesis templates',
        'Slide decks designed specifically for 15-minute committee reviews'
      ]
    },
    {
      num: '07',
      title: 'Present',
      badge: 'Viva Defense Mastery',
      icon: Award,
      desc: 'Prepare for critical external examiner evaluations with verified question banks, architecture defenses, and live demo practice.',
      details: [
        'Top 50 examiner trap questions and model technical answers',
        'Working principle explanations down to ADC sampling and bit manipulation',
        'Confidence-building mock defense checklists'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>THE 7-STAGE BLUEPRINT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            How HA Labs Works
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            One platform that guides engineering students from raw idea to working hardware, cloud deployment, and viva excellence.
          </p>
        </div>

        {/* Vertical Stepper Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-400 via-sky-500 to-indigo-600 hidden sm:block" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-8 rounded-3xl bg-[#090f20] border border-white/10 hover:border-brand-cyan/40 transition-all shadow-xl group"
              >
                {/* Step indicator node */}
                <div className="w-12 h-12 rounded-2xl bg-[#0e172e] border-2 border-brand-cyan flex items-center justify-center flex-shrink-0 text-brand-cyan font-mono font-bold text-base shadow-glow-cyan relative z-10">
                  {step.num}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {step.title}
                    </h3>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-brand-cyan">
                      {step.badge}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>

                  <ul className="space-y-1.5 pt-2">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-cyan-500/25 transition-all"
          >
            <span>Start Phase 01: Choose Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
