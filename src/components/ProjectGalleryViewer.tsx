'use client';

import React, { useState } from 'react';
import { ProjectGallery } from '@/data/projects';
import { 
  Eye, 
  Cpu, 
  Layers, 
  Monitor, 
  Cloud, 
  Sparkles, 
  Maximize2, 
  X, 
  Download, 
  CheckCircle2 
} from 'lucide-react';

interface ProjectGalleryViewerProps {
  projectTitle: string;
  gallery: ProjectGallery;
}

type GalleryTabKey = 'overview' | 'hardware' | 'architecture' | 'dashboard' | 'deployment' | 'prototype';

interface TabConfig {
  key: GalleryTabKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  accent: string;
}

const TABS: TabConfig[] = [
  {
    key: 'overview',
    label: 'Overview',
    icon: Eye,
    tagline: 'System Overview & Problem-Solution Model',
    description: 'High-level system topology, module boundaries, and end-to-end engineering concept for academic review.',
    accent: '#00d2ff'
  },
  {
    key: 'hardware',
    label: 'Hardware',
    icon: Cpu,
    tagline: 'Pin-to-Pin Schematics & Microcontroller Wiring',
    description: 'Pin connection tables, regulated power distribution, sensor debounce, and microcontroller interfacing.',
    accent: '#38bdf8'
  },
  {
    key: 'architecture',
    label: 'Architecture',
    icon: Layers,
    tagline: 'End-to-End Cloud & Telemetry Dataflow',
    description: 'Sensor telemetry propagation through MQTT/HTTP broker, REST backend, database tables, and client sockets.',
    accent: '#818cf8'
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: Monitor,
    tagline: 'Real-Time Student & Operator UI',
    description: 'Interactive responsive web interface with live sensor heatmaps, alert notifications, and control toggles.',
    accent: '#10b981'
  },
  {
    key: 'deployment',
    label: 'Deployment',
    icon: Cloud,
    tagline: 'Docker Container & Cloud Pipeline',
    description: 'Production containerization with multi-stage Dockerfiles, Docker Compose, Nginx proxy, and AWS deployment.',
    accent: '#f59e0b'
  },
  {
    key: 'prototype',
    label: 'Final Prototype',
    icon: Sparkles,
    tagline: 'Working Physical Prototype & Examiner Demo',
    description: 'Assembled working laboratory demonstration unit ready for university committee evaluation and viva voce.',
    accent: '#ec4899'
  }
];

export function ProjectGalleryViewer({ projectTitle, gallery }: ProjectGalleryViewerProps) {
  const [activeTab, setActiveTab] = useState<GalleryTabKey>('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentTab = TABS.find((t) => t.key === activeTab) || TABS[0];
  const activeImageUrl = gallery[activeTab];

  return (
    <div className="rounded-3xl bg-[#0a1020] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl relative">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-mono bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 mb-2">
            <Sparkles className="w-3 h-3" />
            <span>6 DEDICATED VISUAL ARTIFACTS</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Interactive Blueprint & Visual Gallery
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Explore verified engineering blueprints, circuit schematics, cloud dataflows, and prototype assemblies.
          </p>
        </div>

        {/* Action button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-colors"
        >
          <Maximize2 className="w-4 h-4 text-brand-cyan" />
          <span>Full-Screen Viewer</span>
        </button>
      </div>

      {/* 6 Tab Switcher Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-xs font-mono font-semibold transition-all duration-200 text-center ${
                isActive
                  ? 'bg-brand-cyan text-black shadow-glow-cyan font-bold scale-[1.02]'
                  : 'bg-black/40 hover:bg-white/5 text-slate-300 border border-white/5 hover:border-white/20'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Image Display Box */}
      <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group shadow-inner">
        {/* Active Image */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer relative aspect-video w-full flex items-center justify-center overflow-hidden"
        >
          <img
            src={activeImageUrl}
            alt={`${projectTitle} - ${currentTab.label}`}
            className="w-full h-full object-contain bg-[#070b16] transition-transform duration-500 group-hover:scale-[1.01]"
          />

          {/* Hover Zoom Hint */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <div className="px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono text-xs flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-brand-cyan" />
              <span>Click to enlarge diagram</span>
            </div>
          </div>
        </div>

        {/* Image Caption & Description Bar */}
        <div className="p-4 sm:p-5 bg-black/80 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span 
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: currentTab.accent }}
              />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Visual 0{TABS.findIndex(t => t.key === activeTab) + 1} / 06 : {currentTab.label}
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white mt-1">
              {currentTab.tagline}
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed max-w-3xl">
              {currentTab.description}
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <a
              href={activeImageUrl}
              download={`${projectTitle.toLowerCase().replace(/\s+/g, '-')}-${activeTab}.webp`}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
              title="Download high-resolution image"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-brand-cyan/20 hover:bg-brand-cyan/30 border border-brand-cyan/40 text-brand-cyan text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Inspect</span>
            </button>
          </div>
        </div>
      </div>

      {/* 6-Thumbnail Filmstrip Selector */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 pt-2">
        {TABS.map((tab, idx) => {
          const isSelected = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative rounded-xl overflow-hidden border text-left transition-all ${
                isSelected
                  ? 'border-brand-cyan ring-2 ring-brand-cyan/30 scale-[1.03]'
                  : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
              }`}
            >
              <div className="aspect-video w-full bg-slate-900 overflow-hidden">
                <img
                  src={gallery[tab.key]}
                  alt={tab.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-1.5 bg-black/80 backdrop-blur-sm text-center">
                <span className="text-[10px] font-mono font-bold text-white block truncate">
                  0{idx + 1}. {tab.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Full Screen Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-brand-cyan">
                {projectTitle} • {currentTab.label.toUpperCase()} BLUEPRINT
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {currentTab.tagline}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={activeImageUrl}
                download={`${projectTitle.toLowerCase().replace(/\s+/g, '-')}-${activeTab}.webp`}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Save WebP</span>
              </a>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Modal Image Body */}
          <div className="flex-1 flex items-center justify-center p-2 sm:p-6 overflow-auto">
            <img
              src={activeImageUrl}
              alt={`${projectTitle} - ${currentTab.label}`}
              className="max-h-[78vh] max-w-[95vw] object-contain rounded-xl border border-white/10 shadow-2xl"
            />
          </div>

          {/* Modal Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-white/10">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === t.key
                    ? 'bg-brand-cyan text-black font-bold'
                    : 'bg-white/10 hover:bg-white/20 text-slate-300'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
