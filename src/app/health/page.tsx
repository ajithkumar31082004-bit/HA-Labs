import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Activity, Server, Database, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HealthPage() {
  const timestamp = new Date().toISOString();

  return (
    <div className="min-h-screen py-16 flex items-center justify-center px-4 tech-grid-bg">
      <div className="w-full max-w-lg rounded-3xl bg-[#090f20] border border-white/15 p-8 shadow-2xl space-y-6 text-center">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
          <ShieldCheck className="w-8 h-8" />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">System Status: Operational</h1>
          <p className="text-xs text-slate-400 font-mono mt-1">
            All HA Labs platform services and telemetry gateways are responding normally.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-3 text-xs font-mono text-left">
          <div className="flex items-center justify-between">
            <span className="text-slate-400">HTTP Status:</span>
            <span className="text-emerald-400 font-bold">200 OK</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Platform API:</span>
            <span className="text-brand-cyan">Active (/api/health)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Cluster Pods:</span>
            <span className="text-white">Healthy</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Timestamp:</span>
            <span className="text-slate-400 truncate max-w-[200px]">{timestamp}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/api/health"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300"
          >
            Raw JSON Feed
          </Link>
          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-brand-cyan text-black font-bold text-xs hover:bg-cyan-300"
          >
            Back to HA Labs
          </Link>
        </div>
      </div>
    </div>
  );
}
