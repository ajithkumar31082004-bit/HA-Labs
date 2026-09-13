import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Compass, ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 tech-grid-bg">
      <div className="max-w-md w-full rounded-3xl bg-[#090f20] border border-white/15 p-8 text-center shadow-2xl space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center mx-auto text-brand-cyan shadow-glow-cyan">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '10s' }} />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-extrabold font-mono text-brand-cyan">404</span>
          <h1 className="text-2xl font-bold text-white">Lost in the lab?</h1>
          <p className="text-xs text-slate-400 leading-relaxed">
            The page you're looking for doesn't exist or has been moved to another test bench.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-cyan text-black font-bold text-xs hover:bg-cyan-300 transition-colors flex items-center justify-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Back to HA Labs</span>
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-medium transition-colors"
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
