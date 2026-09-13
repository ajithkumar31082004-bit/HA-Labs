'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { User, Mail, Lock, Building, GraduationCap, Sparkles, ArrowRight } from 'lucide-react';

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: '',
    branch: 'ECE',
    year: '4th Year (Final Year)',
    skills: 'C++, ESP32, Python',
    interests: 'IoT, AWS Cloud',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 700);
  };

  return (
    <div className="min-h-screen py-16 flex items-center justify-center px-4 tech-grid-bg">
      <div className="w-full max-w-lg rounded-3xl bg-[#090f20] border border-white/15 p-8 shadow-2xl relative overflow-hidden">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo size="md" showText={false} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Join HA Labs</h1>
          <p className="text-xs text-slate-400 mt-1">
            Create your engineering project workspace and start building for reality.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Ajithkumar R"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="student@college.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
              Password *
            </label>
            <input
              type="password"
              required
              placeholder="Create strong password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
              College / University *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. PSG College of Technology"
              value={formData.college}
              onChange={(e) => setFormData({ ...formData, college: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                Branch *
              </label>
              <select
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-brand-cyan"
              >
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="AI & DS">AI & DS</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                Academic Year *
              </label>
              <select
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-brand-cyan"
              >
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year (Final Year)">4th Year (Final Year)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                Known Skills (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. C, Arduino, Java"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                Interests (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. IoT, Robotics, Cloud"
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all"
          >
            <span>{isLoading ? 'Creating Your Workspace...' : 'Complete Registration & Enter Workspace'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-400">
          Already registered?{' '}
          <Link href="/login" className="text-brand-cyan hover:underline font-semibold">
            Sign In Here
          </Link>
        </div>
      </div>
    </div>
  );
}
