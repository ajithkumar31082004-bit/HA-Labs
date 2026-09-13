'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, BookOpen, ExternalLink, Terminal, Cpu, Cloud, GitBranch, HelpCircle, FileText, ArrowRight } from 'lucide-react';

interface ResourceItem {
  id: string;
  category: 'IoT' | 'Cloud' | 'DevOps' | 'Linux' | 'Viva' | 'Docs';
  title: string;
  summary: string;
  readTime: string;
  tags: string[];
}

const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'res-1',
    category: 'IoT',
    title: 'ESP32 Wi-Fi & Deep Sleep Power Optimization',
    summary: 'Master the Tensilica LX6 ULP coprocessor, RTC memory state persistence, and milliamp current measurement for battery-powered telemetry nodes.',
    readTime: '8 min read',
    tags: ['ESP32', 'C++', 'Hardware', 'Low Power']
  },
  {
    id: 'res-2',
    category: 'Cloud',
    title: 'Deploying Node.js & Docker Telemetry APIs to AWS EC2',
    summary: 'A complete beginner guide to launching Ubuntu EC2 instances, configuring Security Group ingress rules, and mounting Nginx reverse proxies with SSL.',
    readTime: '12 min read',
    tags: ['AWS', 'EC2', 'Docker', 'Nginx']
  },
  {
    id: 'res-3',
    category: 'DevOps',
    title: 'GitHub Actions CI Pipeline for Microcontrollers and Web Apps',
    summary: 'Automate PlatformIO firmware compilation tests and web dashboard builds on every git push using free GitHub Actions runners.',
    readTime: '10 min read',
    tags: ['CI/CD', 'GitHub Actions', 'PlatformIO', 'Automation']
  },
  {
    id: 'res-4',
    category: 'Viva',
    title: 'Top 50 External Examiner Viva Questions & Defensive Answers',
    summary: 'Detailed strategies for defending project scope, component selection logic, sensor error margins, and handling unexpected live demo glitches.',
    readTime: '15 min read',
    tags: ['Viva', 'Exams', 'Defense', 'Academic']
  },
  {
    id: 'res-5',
    category: 'Linux',
    title: 'Linux Server Administration Cheat Sheet for Engineering Students',
    summary: 'Essential systemd service management, journalctl log inspection, ufw firewall control, and SSH public key authentication commands.',
    readTime: '7 min read',
    tags: ['Linux', 'Ubuntu', 'SSH', 'Bash']
  },
  {
    id: 'res-6',
    category: 'IoT',
    title: 'Sensor Interfacing & Signal Conditioning (ADC, I2C, SPI, UART)',
    summary: 'Understand pull-up resistor sizing, ADC attenuation levels on ESP32, and eliminating motor back-EMF spikes using flyback diodes.',
    readTime: '11 min read',
    tags: ['Sensors', 'Electronics', 'Analog', 'I2C']
  },
  {
    id: 'res-7',
    category: 'Docs',
    title: 'Writing an IEEE-Standard Engineering Final Year Project Report',
    summary: 'Guidelines on structuring Literature Surveys, System Architecture block diagrams, mathematical formulation, and BibTeX citation formatting.',
    readTime: '9 min read',
    tags: ['Report', 'IEEE', 'LaTeX', 'Documentation']
  },
  {
    id: 'res-8',
    category: 'Cloud',
    title: 'MQTT vs WebSockets vs HTTP REST: Choosing the Right IoT Protocol',
    summary: 'A comprehensive benchmark comparing packet overhead, battery impact, latency, and cloud infrastructure costs for real-time telemetry.',
    readTime: '10 min read',
    tags: ['MQTT', 'Protocols', 'WebSockets', 'REST']
  }
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filtered = RESOURCES_DATA.filter((r) => {
    if (activeCategory !== 'all' && r.category !== activeCategory) return false;
    if (search.trim() !== '') {
      const q = search.toLowerCase();
      return (
        r.title.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'IoT', label: 'IoT & ESP32' },
    { id: 'Cloud', label: 'AWS & Cloud' },
    { id: 'DevOps', label: 'Docker & CI/CD' },
    { id: 'Linux', label: 'Linux Admin' },
    { id: 'Viva', label: 'Viva Preparation' },
    { id: 'Docs', label: 'Report Templates' },
  ];

  return (
    <div className="min-h-screen py-16 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE & GUIDES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Engineering Developer Resources
          </h1>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Curated technical tutorials, hardware pinout cheat sheets, AWS cloud architecture diagrams, and IEEE thesis documentation guidelines.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="space-y-4 mb-10">
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search guides by title, tag, ESP32, Docker, AWS, Viva..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a1020] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-cyan text-black font-bold'
                    : 'bg-[#0a1020] border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((res) => (
            <div
              key={res.id}
              className="p-6 rounded-2xl bg-[#090f20] border border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/25">
                    {res.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {res.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {res.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {res.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Free Developer Guide</span>
                <span className="inline-flex items-center gap-1 text-brand-cyan font-mono text-xs group-hover:translate-x-0.5 transition-transform">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
