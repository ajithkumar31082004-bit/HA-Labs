'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PROJECTS_DATA, Project } from '@/data/projects';
import { Search, X, ArrowRight, Cpu, Tag, Sparkles } from 'lucide-react';

interface ProjectSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSearchModal({ isOpen, onClose }: ProjectSearchModalProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle if handled outside or trigger parent
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? PROJECTS_DATA.slice(0, 5)
    : PROJECTS_DATA.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q)) ||
          p.branch.some((b) => b.toLowerCase().includes(q)) ||
          p.hardware.some((h) => h.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
        );
      });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl rounded-2xl bg-[#090f20] border border-white/15 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-[#0d162d]">
          <Search className="w-5 h-5 text-brand-cyan" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects by name, technology, ESP32, AWS, ECE..."
            className="flex-1 bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-400 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-[380px] overflow-y-auto p-3 space-y-1 divide-y divide-white/5">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm">No matching projects found for "{query}".</p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for 'ESP32', 'AWS', 'IoT', or 'Robotics'.
              </p>
            </div>
          ) : (
            filtered.map((proj) => (
              <Link
                key={proj.id}
                href={`/projects/${proj.slug}`}
                onClick={onClose}
                className="block p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-white group-hover:text-brand-cyan transition-colors">
                      {proj.title}
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-brand-cyan/15 text-brand-cyan">
                      {proj.difficulty}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {proj.budgetDisplay}
                  </span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                  {proj.tagline}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                    {proj.branch.join(', ')}
                  </span>
                  {proj.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-mono text-slate-400">
                      #{t}
                    </span>
                  ))}
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 text-[11px] font-mono text-slate-500 flex items-center justify-between">
          <span>{filtered.length} projects found</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
export default ProjectSearchModal;
