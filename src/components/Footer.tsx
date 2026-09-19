import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { DEPARTMENTS } from './Navbar';
import { Github, Linkedin, Youtube, Phone, MessageSquare, Mail, ArrowUpRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E2E8E4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Founders Direct Contact Strip */}
        <div className="mb-12 p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
                Direct Founder & Project Mentorship Support
              </span>
            </div>
            <h3 className="text-base font-bold text-[#17211B]">
              Need guidance on your semester project or hardware component sourcing?
            </h3>
            <p className="text-xs text-[#647067]">
              Reach out directly to the founders for project consultation, schematics review, and viva coaching.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Ajithkumar */}
            <a
              href="tel:+918778954899"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8E4] hover:border-[#087443] hover:text-[#087443] transition-all shadow-xs text-xs font-bold text-[#17211B] group"
              title="Call Ajithkumar"
            >
              <Phone className="w-3.5 h-3.5 text-[#087443] group-hover:scale-110 transition-transform" />
              <span>Ajithkumar: <strong>+91 8778954899</strong></span>
            </a>

            {/* Harishkumar */}
            <a
              href="tel:+919342540464"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8E4] hover:border-[#087443] hover:text-[#087443] transition-all shadow-xs text-xs font-bold text-[#17211B] group"
              title="Call Harishkumar"
            >
              <Phone className="w-3.5 h-3.5 text-[#087443] group-hover:scale-110 transition-transform" />
              <span>Harishkumar: <strong>+91 9342540464</strong></span>
            </a>

            {/* Official Email */}
            <a
              href="mailto:halabs.project@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8E4] hover:border-[#087443] hover:text-[#087443] transition-all shadow-xs text-xs font-bold text-[#17211B] group"
              title="Email HA Labs"
            >
              <Mail className="w-3.5 h-3.5 text-[#087443] group-hover:scale-110 transition-transform" />
              <span>halabs.project@gmail.com</span>
            </a>

            {/* WhatsApp Quick Connect */}
            <a
              href="https://wa.me/918778954899?text=Hi%20Ajithkumar,%20I%20need%20assistance%20with%20an%20engineering%20project%20on%20HA%20Labs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white transition-all text-xs font-bold shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

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
              Workspaces & Hubs
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#647067]">
              <li>
                <Link href="/projects" className="hover:text-[#087443] transition-colors">
                  120 Projects Catalog
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#087443] transition-colors">
                  Services Marketplace
                </Link>
              </li>
              <li>
                <Link href="/builder" className="hover:text-[#087443] transition-colors">
                  Builder Studio & Creator Payouts
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-[#087443] transition-colors">
                  Buyer Account & Downloads
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#087443] transition-colors">
                  HA Labs Admin & Verification
                </Link>
              </li>
              <li>
                <Link href="/setup" className="hover:text-[#087443] transition-colors">
                  Team Setup Wizard
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
              <li>
                <a href="mailto:halabs.project@gmail.com" className="text-[#087443] font-bold hover:underline">
                  halabs.project@gmail.com
                </a>
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
