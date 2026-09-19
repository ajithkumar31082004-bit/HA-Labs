import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { DEPARTMENTS } from './Navbar';
import { Github, Linkedin, Youtube, Instagram, ArrowUpRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E2E8E4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <Logo size="md" showText={true} />
            <p className="text-[#647067] text-sm max-w-sm leading-relaxed">
              Engineering Projects & Prototyping Platform. Helping students discover, plan, build, deploy, document, and defend real-world engineering systems.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087443]/10 border border-[#087443]/20 text-xs text-[#087443] font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                Build. Learn. Create. Innovate.
              </span>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="HA Labs on GitHub"
                className="w-8 h-8 rounded-lg bg-[#F8FAF9] border border-[#E2E8E4] flex items-center justify-center text-[#647067] hover:text-[#087443] hover:border-[#087443] transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="HA Labs on LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#F8FAF9] border border-[#E2E8E4] flex items-center justify-center text-[#647067] hover:text-[#087443] hover:border-[#087443] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="HA Labs on YouTube"
                className="w-8 h-8 rounded-lg bg-[#F8FAF9] border border-[#E2E8E4] flex items-center justify-center text-[#647067] hover:text-[#087443] hover:border-[#087443] transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Departments Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#17211B]">
              Departments
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {DEPARTMENTS.slice(0, 5).map((dept) => (
                <li key={dept.code}>
                  <Link
                    href={`/projects?department=${encodeURIComponent(dept.code)}`}
                    className="text-[#647067] hover:text-[#087443] transition-colors"
                  >
                    {dept.code} — {dept.name.split(' ')[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms & Tools Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#17211B]">
              Workspaces
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#647067]">
              <li>
                <Link href="/projects" className="hover:text-[#087443] transition-colors">
                  Explore Projects
                </Link>
              </li>
              <li>
                <Link href="/setup" className="hover:text-[#087443] transition-colors">
                  Start / Build Project
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-[#087443] transition-colors">
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#087443] transition-colors">
                  HA Labs Admin
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#087443] transition-colors">
                  Project Resources & BOM
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Academic */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#17211B]">
              Academic Help
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#647067]">
              <li>
                <Link href="/resources" className="hover:text-[#087443] transition-colors">
                  IEEE Report Templates
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#087443] transition-colors">
                  Viva Question Bank
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#087443] transition-colors">
                  About Founders
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-[#087443] transition-colors">
                  Student Sign In
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E2E8E4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#647067]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} HA Labs. All rights reserved.</span>
            <span>·</span>
            <span className="text-[#087443] font-bold">Engineering Platform PRO</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-[#087443] transition-colors">
              About
            </Link>
            <Link href="/resources" className="hover:text-[#087443] transition-colors">
              Documentation
            </Link>
            <Link href="/dashboard" className="hover:text-[#087443] transition-colors">
              Dashboard
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
