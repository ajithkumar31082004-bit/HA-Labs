import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Github, Linkedin, Youtube, Instagram, ArrowUpRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#04060d] border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <Logo size="md" showText={true} />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Engineering Projects. Built for Reality. Helping students discover, plan, build, deploy, document, and present real-world engineering systems.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-50 border border-brand-cyan/30 text-xs text-brand-cyan font-mono">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                Find it. Build it. Deploy it.
              </span>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="HA Labs on GitHub"
                className="w-9 h-9 rounded-lg bg-surface-50 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-cyan/40 hover:bg-surface-100 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="HA Labs on LinkedIn"
                className="w-9 h-9 rounded-lg bg-surface-50 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-cyan/40 hover:bg-surface-100 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="HA Labs on YouTube"
                className="w-9 h-9 rounded-lg bg-surface-50 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-cyan/40 hover:bg-surface-100 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="HA Labs on Instagram"
                className="w-9 h-9 rounded-lg bg-surface-50 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-cyan/40 hover:bg-surface-100 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-semibold tracking-wider uppercase font-mono text-slate-200">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects Catalog
                </Link>
              </li>
              <li>
                <Link href="/#ai-assistant" className="hover:text-white transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link href="/#mentors" className="hover:text-white transition-colors">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="hover:text-white transition-colors">
                  For Colleges
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-semibold tracking-wider uppercase font-mono text-slate-200">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  IoT & ESP32 Guides
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  AWS Cloud Architecture
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Docker & DevOps
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Viva Preparation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-semibold tracking-wider uppercase font-mono text-slate-200">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About HA Labs
                </Link>
              </li>
              <li>
                <Link href="/about#mission" className="hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Admin Panel</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/api/health" target="_blank" className="hover:text-white transition-colors font-mono text-xs text-slate-500">
                  /api/health
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 HA Labs. All rights reserved. Founded by Harish & Ajithkumar.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="text-slate-500 hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="text-slate-500 hover:text-slate-400 cursor-pointer">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
