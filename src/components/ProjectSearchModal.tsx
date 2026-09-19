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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl rounded-2xl bg-white border border-[#E2E8E4] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E2E8E4] flex items-center gap-3 bg-[#F8FAF9]">
          <Search className="w-5 h-5 text-[#087443]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects by name, ESP32, Python, AWS, ECE, IoT..."
            className="flex-1 bg-transparent text-[#17211B] placeholder-[#647067] text-sm focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-[#17211B] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded-lg bg-white border border-[#E2E8E4] text-xs font-mono text-[#647067] hover:text-[#17211B]"
          >
            ESC
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-[380px] overflow-y-auto p-3 space-y-1 divide-y divide-[#E2E8E4]/60">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-[#647067]">
              <p className="text-sm font-semibold">No matching projects found for "{query}".</p>
              <p className="text-xs text-[#647067] mt-1">
                Try searching for 'ESP32', 'AWS', 'IoT', or 'Robotics'.
              </p>
            </div>
          ) : (
            filtered.map((proj) => (
              <Link
                key={proj.id}
                href={`/projects/${proj.slug}`}
                onClick={onClose}
                className="block p-3 rounded-xl hover:bg-[#F8FAF9] transition-colors group"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#17211B] group-hover:text-[#087443] transition-colors">
                      {proj.title}
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                      {proj.branch[0]}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#087443] group-hover:translate-x-1 transition-all" />
                </div>

                <p className="text-xs text-[#647067] line-clamp-1 mt-1 font-normal">
                  {proj.tagline || proj.description}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] font-mono font-bold text-[#087443]">{proj.difficulty}</span>
                  <span className="text-[10px] text-slate-400">·</span>
                  <span className="text-[10px] font-mono text-[#647067]">{proj.duration}</span>
                  <span className="text-[10px] text-slate-400">·</span>
                  <span className="text-[10px] font-mono text-[#647067]">{proj.teamSize}</span>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#F8FAF9] border-t border-[#E2E8E4] flex items-center justify-between text-xs text-[#647067]">
          <span>Tip: Press ESC to close</span>
          <Link
            href="/projects"
            onClick={onClose}
            className="text-[#087443] font-bold hover:underline"
          >
            Explore all 140+ projects →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectSearchModal;
