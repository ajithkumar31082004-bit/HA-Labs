'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { useProjectStore, UserRole } from '@/context/ProjectStoreContext';
import {
  Search,
  Menu,
  X,
  ArrowRight,
  Bookmark,
  Layers,
  ChevronDown,
  Sparkles,
  LayoutDashboard,
  Cpu,
  Terminal,
  BookOpen,
  CheckCircle2,
  Wrench,
  ShieldCheck,
  ShoppingBag,
  User,
  Hammer
} from 'lucide-react';

interface NavbarProps {
  onOpenSearch?: () => void;
}

export const DEPARTMENTS = [
  { code: 'ECE', name: 'Electronics & Communication', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { code: 'CSE', name: 'Computer Science Engineering', color: 'bg-sky-50 text-sky-700 border-sky-200' },
  { code: 'AI & DS', name: 'Artificial Intelligence & Data Science', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { code: 'AIDS / AIML', name: 'AI & Machine Learning', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  { code: 'IT', name: 'Information Technology', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { code: 'EEE', name: 'Electrical & Electronics', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { code: 'MECH', name: 'Mechanical Engineering', color: 'bg-orange-50 text-orange-700 border-orange-200' },
  { code: 'CIVIL', name: 'Civil Engineering', color: 'bg-teal-50 text-teal-700 border-teal-200' },
];

export function Navbar({ onOpenSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [deptDropdownOpen, setDeptDropdownOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const roleRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const {
    savedCount,
    activeCount,
    purchasedCount,
    currentRole,
    setRole
  } = useProjectStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDeptDropdownOpen(false);
      }
      if (roleRef.current && !roleRef.current.contains(event.target as Node)) {
        setRoleDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const rolesList: { role: UserRole; label: string; desc: string; color: string }[] = [
    { role: 'visitor', label: 'Visitor', desc: 'Public browsing & preview', color: 'bg-slate-100 text-slate-700' },
    { role: 'buyer', label: 'Student / Buyer', desc: 'Purchased projects & downloads', color: 'bg-emerald-100 text-[#087443]' },
    { role: 'builder', label: 'Project Builder', desc: 'Creator studio & sales payouts', color: 'bg-blue-100 text-blue-800' },
    { role: 'admin', label: 'HA Labs Admin', desc: '8-point verification & catalog', color: 'bg-purple-100 text-purple-800' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E8E4] shadow-sm py-2.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-[#E2E8E4]/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Left: Brand Monogram & Main Links */}
          <div className="flex items-center gap-5 lg:gap-7">
            <Logo size="md" showText={true} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              
              {/* Departments Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDeptDropdownOpen(!deptDropdownOpen)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    deptDropdownOpen
                      ? 'bg-[#087443]/10 text-[#087443]'
                      : 'text-[#17211B] hover:text-[#087443] hover:bg-[#F8FAF9]'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-[#087443]" />
                  <span>Departments</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${deptDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {deptDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white border border-[#E2E8E4] shadow-xl p-2.5 grid grid-cols-1 gap-1 z-50 animate-fade-slide-down">
                    <div className="px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#647067]">
                      Explore By Engineering Department
                    </div>
                    {DEPARTMENTS.map((dept) => (
                      <Link
                        key={dept.code}
                        href={`/projects?department=${encodeURIComponent(dept.code)}`}
                        onClick={() => setDeptDropdownOpen(false)}
                        className="flex items-center justify-between p-2 rounded-xl hover:bg-[#F8FAF9] transition-colors group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`px-2 py-0.5 rounded-md text-xs font-mono font-bold border ${dept.color}`}>
                            {dept.code}
                          </span>
                          <span className="text-xs font-medium text-[#17211B] group-hover:text-[#087443]">
                            {dept.name}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#087443] group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Explore Projects Link */}
              <Link
                href="/projects"
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  pathname === '/projects'
                    ? 'text-[#087443] bg-[#087443]/10'
                    : 'text-[#17211B] hover:text-[#087443] hover:bg-[#F8FAF9]'
                }`}
              >
                120 Projects
              </Link>

              {/* Services Marketplace Link */}
              <Link
                href="/services"
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  pathname === '/services'
                    ? 'text-[#087443] bg-[#087443]/10'
                    : 'text-[#17211B] hover:text-[#087443] hover:bg-[#F8FAF9]'
                }`}
              >
                <Sparkles className="w-3 h-3 text-[#16A34A]" />
                <span>Services</span>
              </Link>

              {/* Builder Studio Link */}
              <Link
                href="/builder"
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  pathname === '/builder'
                    ? 'text-[#087443] bg-[#087443]/10'
                    : 'text-[#17211B] hover:text-[#087443] hover:bg-[#F8FAF9]'
                }`}
              >
                <Hammer className="w-3 h-3 text-[#087443]" />
                <span>Builder Studio</span>
              </Link>

              {/* Admin Link */}
              <Link
                href="/admin"
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  pathname === '/admin'
                    ? 'text-[#087443] bg-[#087443]/10'
                    : 'text-[#17211B] hover:text-[#087443] hover:bg-[#F8FAF9]'
                }`}
              >
                <ShieldCheck className="w-3 h-3 text-[#087443]" />
                <span>Admin</span>
              </Link>
            </nav>
          </div>

          {/* Right Side: Role Selector, Search, Account, Start Building */}
          <div className="hidden md:flex items-center gap-2.5">
            
            {/* Multi-Role Quick Switcher */}
            <div className="relative" ref={roleRef}>
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-[#E2E8E4] bg-white hover:border-[#087443] transition-all text-xs font-bold shadow-2xs"
                title="Switch active viewing persona"
              >
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                <span className="text-[#647067] text-[11px]">Role:</span>
                <span className="text-[#087443] capitalize">{currentRole}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 rounded-2xl bg-white border border-[#E2E8E4] shadow-xl p-2 z-50 animate-fade-slide-down space-y-1">
                  <div className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#647067]">
                    Simulate Platform Role
                  </div>
                  {rolesList.map((r) => (
                    <button
                      key={r.role}
                      onClick={() => {
                        setRole(r.role);
                        setRoleDropdownOpen(false);
                      }}
                      className={`w-full text-left p-2 rounded-xl transition-all flex items-center justify-between text-xs ${
                        currentRole === r.role
                          ? 'bg-emerald-50 text-[#087443] font-bold'
                          : 'hover:bg-[#F8FAF9] text-[#17211B]'
                      }`}
                    >
                      <div>
                        <div className="font-bold">{r.label}</div>
                        <div className="text-[10px] text-[#647067]">{r.desc}</div>
                      </div>
                      {currentRole === r.role && (
                        <CheckCircle2 className="w-4 h-4 text-[#087443]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] text-[#647067] hover:border-[#087443] hover:text-[#17211B] transition-all text-xs font-mono group"
              title="Search projects, departments & technologies"
            >
              <Search className="w-3.5 h-3.5 text-[#087443] group-hover:scale-110 transition-transform" />
              <span>Search...</span>
              <kbd className="px-1 py-0.5 rounded bg-white border border-[#E2E8E4] text-[9px] text-[#647067]">
                ⌘K
              </kbd>
            </button>

            {/* Saved Projects Bookmark */}
            <Link
              href="/account?tab=saved"
              className="relative p-2 rounded-xl text-[#647067] hover:text-[#087443] hover:bg-[#F8FAF9] border border-transparent hover:border-[#E2E8E4] transition-all"
              title="Saved Projects"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#087443] text-white text-[10px] font-bold flex items-center justify-center font-mono">
                  {savedCount}
                </span>
              )}
            </Link>

            {/* Buyer Account / My Projects */}
            <Link
              href="/account"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-[#17211B] hover:text-[#087443] hover:bg-[#F8FAF9] border border-[#E2E8E4] transition-all"
              title="My Purchased Projects & Invoices"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#087443]" />
              <span>My Account</span>
              {purchasedCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-[#16A34A]/15 text-[#16A34A] text-[10px] font-bold">
                  {purchasedCount}
                </span>
              )}
            </Link>

            {/* Start Building CTA */}
            <Link
              href="/setup"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <Wrench className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>Start Building</span>
            </Link>

          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#647067] hover:text-[#087443]"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/account"
              className="relative p-2 text-[#647067] hover:text-[#087443]"
              aria-label="My Account"
            >
              <ShoppingBag className="w-5 h-5" />
              {purchasedCount > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#087443] text-white text-[9px] font-bold flex items-center justify-center">
                  {purchasedCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#17211B] hover:bg-[#F8FAF9]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E2E8E4] bg-white px-4 pt-3 pb-6 space-y-3 animate-fade-slide-down">
            {/* Mobile Role Switcher */}
            <div className="p-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-[#647067]">Active Persona</span>
              <div className="grid grid-cols-2 gap-1.5 text-xs font-bold">
                {rolesList.map((r) => (
                  <button
                    key={r.role}
                    onClick={() => setRole(r.role)}
                    className={`py-1.5 px-2 rounded-lg border text-center capitalize transition-all ${
                      currentRole === r.role
                        ? 'bg-[#087443] text-white border-[#087443]'
                        : 'bg-white border-[#E2E8E4] text-[#17211B]'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1 text-sm font-bold">
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-[#17211B] hover:bg-[#F8FAF9]"
              >
                120 Engineering Projects
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-[#17211B] hover:bg-[#F8FAF9]"
              >
                Services Marketplace
              </Link>
              <Link
                href="/builder"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-[#17211B] hover:bg-[#F8FAF9]"
              >
                Builder Studio
              </Link>
              <Link
                href="/account"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-[#17211B] hover:bg-[#F8FAF9]"
              >
                My Account & Downloads ({purchasedCount})
              </Link>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-[#17211B] hover:bg-[#F8FAF9]"
              >
                HA Labs Admin
              </Link>
            </div>

            <div className="pt-2 border-t border-[#E2E8E4]">
              <div className="text-[11px] font-bold text-[#647067] uppercase mb-2">Departments</div>
              <div className="grid grid-cols-2 gap-1.5">
                {DEPARTMENTS.map((dept) => (
                  <Link
                    key={dept.code}
                    href={`/projects?department=${encodeURIComponent(dept.code)}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-xs font-medium text-[#17211B] hover:bg-[#F8FAF9] flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087443]" />
                    {dept.code}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/setup"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-[#087443] text-white font-bold text-xs shadow-xs"
              >
                Start Building Project
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
