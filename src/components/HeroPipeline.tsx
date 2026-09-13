'use client';

import React, { useState, useEffect } from 'react';
import { 
  Lightbulb, 
  FolderKanban, 
  Cpu, 
  Code2, 
  Cloud, 
  Rocket, 
  FileText, 
  Award,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const PIPELINE_NODES = [
  { id: 'idea', label: 'IDEA', icon: Lightbulb, color: '#f59e0b', desc: 'Problem definition & scope' },
  { id: 'project', label: 'PROJECT', icon: FolderKanban, color: '#38bdf8', desc: 'Architecture & BOM selection' },
  { id: 'hardware', label: 'HARDWARE', icon: Cpu, color: '#00d2ff', desc: 'Circuit schematics & sensor pins' },
  { id: 'code', label: 'CODE', icon: Code2, color: '#818cf8', desc: 'Firmware & fullstack backend' },
  { id: 'cloud', label: 'CLOUD', icon: Cloud, color: '#38bdf8', desc: 'MQTT broker & AWS ingestion' },
  { id: 'deploy', label: 'DEPLOY', icon: Rocket, color: '#10b981', desc: 'Docker containerized runner' },
  { id: 'docs', label: 'DOCS', icon: FileText, color: '#a78bfa', desc: 'Reports, PPTs & circuit diagrams' },
  { id: 'viva', label: 'VIVA', icon: Award, color: '#ec4899', desc: 'Question bank & defense coaching' },
];

export function HeroPipeline() {
  const [activeStep, setActiveStep] = useState(2); // Start on Hardware/ESP32

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PIPELINE_NODES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 p-6 sm:p-8 rounded-3xl bg-[#080d1a]/90 border border-brand-cyan/20 shadow-[0_0_50px_-10px_rgba(0,210,255,0.15)] overflow-hidden">
      {/* Background grid and circuit glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Card 1: Project Match */}
      <div className="absolute -top-3 sm:top-4 right-4 sm:right-8 z-20 animate-float">
        <div className="px-4 py-3 rounded-xl bg-[#0d172e]/90 border border-brand-cyan/40 shadow-glow-cyan backdrop-blur-md flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-brand-cyan animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Project Match</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] font-bold font-mono bg-cyan-500/20 text-cyan-300">
                95% Match
              </span>
            </div>
            <p className="text-xs font-semibold text-white mt-0.5">
              ECE • IoT • ESP32 • AWS
            </p>
          </div>
        </div>
      </div>

      {/* Floating Card 2: Build Progress */}
      <div className="absolute -bottom-2 sm:bottom-4 left-4 sm:left-8 z-20 animate-float" style={{ animationDelay: '-3s' }}>
        <div className="px-4 py-3 rounded-xl bg-[#0d172e]/90 border border-white/15 shadow-xl backdrop-blur-md flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Build Progress</span>
              <span className="text-xs font-mono font-bold text-emerald-400">75%</span>
            </div>
            <div className="w-32 h-2 bg-white/10 rounded-full mt-1.5 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full w-3/4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline Title Badge */}
      <div className="relative z-10 text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
          <span>REAL-TIME ENGINEERING PIPELINE</span>
        </div>
        <h4 className="text-sm text-slate-400 mt-2">
          From concept architecture to final academic evaluation
        </h4>
      </div>

      {/* Interactive Horizontal Pipeline Nodes */}
      <div className="relative z-10 py-6">
        {/* Animated Connecting Track Line */}
        <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-0.5 bg-slate-800 hidden md:block">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 transition-all duration-700 shadow-[0_0_10px_#00d2ff]"
            style={{ width: `${((activeStep + 1) / PIPELINE_NODES.length) * 100}%` }}
          />
        </div>

        {/* Nodes Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 sm:gap-2 relative">
          {PIPELINE_NODES.map((node, index) => {
            const Icon = node.icon;
            const isActive = activeStep === index;
            const isCompleted = activeStep > index;

            return (
              <button
                key={node.id}
                onClick={() => setActiveStep(index)}
                className="flex flex-col items-center group text-center focus:outline-none"
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 relative z-10 ${
                    isActive
                      ? 'bg-brand-cyan text-black scale-110 shadow-[0_0_20px_rgba(0,210,255,0.8)]'
                      : isCompleted
                      ? 'bg-surface-100 text-brand-cyan border border-brand-cyan/40'
                      : 'bg-surface-50 text-slate-400 border border-white/10 group-hover:border-white/30 group-hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                  {isActive && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white animate-ping" />
                  )}
                </div>

                <span
                  className={`mt-2.5 text-[11px] font-mono tracking-wider font-bold transition-colors ${
                    isActive ? 'text-brand-cyan' : isCompleted ? 'text-slate-200' : 'text-slate-400'
                  }`}
                >
                  {node.label}
                </span>

                <span className="text-[9px] text-slate-400 hidden sm:block max-w-[80px] truncate mt-0.5">
                  {node.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Phase Live Inspection Banner */}
      <div className="relative z-10 mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-mono">
          <span className="text-brand-cyan font-bold">Phase 0{activeStep + 1}:</span>
          <span className="text-white font-semibold">{PIPELINE_NODES[activeStep].label}</span>
          <span className="text-slate-400">— {PIPELINE_NODES[activeStep].desc}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Interactive Prototype Step</span>
        </div>
      </div>
    </div>
  );
}
export default HeroPipeline;
