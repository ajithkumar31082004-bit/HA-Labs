'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { useProjectStore, SEED_USERS } from '@/context/ProjectStoreContext';
import { Lock, Mail, ArrowRight, ShieldCheck, UserCheck, Sparkles, Key, CheckCircle2, Hammer } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get('redirect') || '/account';

  const { login } = useProjectStore();
  const [email, setEmail] = useState('ajith@student.halabs.tech');
  const [password, setPassword] = useState('engineering2026');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      login(email);
      setIsLoading(false);
      if (email.includes('admin')) {
        router.push('/admin');
      } else if (email.includes('builder')) {
        router.push('/builder');
      } else {
        router.push(redirectPath);
      }
    }, 400);
  };

  const handleQuickDemo = (role: 'student' | 'builder' | 'admin') => {
    if (role === 'admin') {
      login(SEED_USERS.admin.email, 'admin');
      router.push('/admin');
    } else if (role === 'builder') {
      login(SEED_USERS.builder.email, 'builder');
      router.push('/builder');
    } else {
      login(SEED_USERS.student.email, 'buyer');
      router.push(redirectPath || '/account');
    }
  };

  return (
    <div className="min-h-screen py-16 flex items-center justify-center px-4 tech-grid-bg">
      <div className="w-full max-w-md rounded-3xl bg-white border border-[#E2E8E4] p-8 shadow-xl relative overflow-hidden space-y-6">
        
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <Logo size="md" showText={false} />
          </div>
          <h1 className="text-2xl font-black text-[#17211B] tracking-tight">Sign In to HA Labs</h1>
          <p className="text-xs text-[#647067]">
            Access your engineering project workspace, unlocked deliverables, and builder studio.
          </p>
        </div>

        {/* Quick Testing Personas */}
        <div className="p-3.5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#647067] uppercase tracking-wider font-bold">
              ⚡ 1-Click Verification Logins
            </span>
            <span className="text-[10px] text-[#087443] font-semibold">Testing mode</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemo('student')}
              className="py-2 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-[#087443] text-xs font-bold flex flex-col items-center justify-center gap-1 transition-all"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span className="text-[10px]">Student Buyer</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickDemo('builder')}
              className="py-2 px-2 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold flex flex-col items-center justify-center gap-1 transition-all"
            >
              <Hammer className="w-3.5 h-3.5" />
              <span className="text-[10px]">Project Builder</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickDemo('admin')}
              className="py-2 px-2 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-800 text-xs font-bold flex flex-col items-center justify-center gap-1 transition-all"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="text-[10px]">Platform Admin</span>
            </button>
          </div>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-[#17211B] mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#647067] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@college.edu"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none text-[#17211B] text-xs"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-bold text-[#17211B]">
                Password
              </label>
              <span className="text-[11px] text-[#087443] hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#647067] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none text-[#17211B] text-xs"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <span>{isLoading ? 'Authenticating...' : 'Sign In to Workspace'}</span>
            <ArrowRight className="w-4 h-4 text-[#84CC16]" />
          </button>
        </form>

        <div className="pt-4 border-t border-[#E2E8E4] text-center text-xs text-[#647067]">
          Don't have an account yet?{' '}
          <Link href="/signup" className="text-[#087443] hover:underline font-bold">
            Create Student / Builder Account
          </Link>
        </div>

      </div>
    </div>
  );
}
