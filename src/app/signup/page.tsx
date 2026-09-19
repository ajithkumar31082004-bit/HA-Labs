'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { useProjectStore } from '@/context/ProjectStoreContext';
import { User, Mail, Lock, Building, GraduationCap, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SignUpPage() {
  const router = useRouter();
  const { register } = useProjectStore();
  const [accountType, setAccountType] = useState<'buyer' | 'builder'>('buyer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: '',
    branch: 'ECE',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      register(formData.name, formData.email, accountType, formData.college, formData.phone);
      setIsLoading(false);
      if (accountType === 'builder') {
        router.push('/builder');
      } else {
        router.push('/account');
      }
    }, 500);
  };

  return (
    <div className="min-h-screen py-16 flex items-center justify-center px-4 tech-grid-bg">
      <div className="w-full max-w-lg rounded-3xl bg-white border border-[#E2E8E4] p-8 shadow-xl relative overflow-hidden space-y-6">
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <Logo size="md" showText={false} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#17211B] tracking-tight">Join HA Labs</h1>
          <p className="text-xs text-[#647067]">
            Create your account to purchase verified deliverables or sell academic projects as a builder.
          </p>
        </div>

        {/* Account Type Selector */}
        <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4]">
          <button
            type="button"
            onClick={() => setAccountType('buyer')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
              accountType === 'buyer'
                ? 'bg-[#087443] text-white shadow-xs'
                : 'text-[#647067] hover:text-[#17211B]'
            }`}
          >
            🎓 Student / Buyer
          </button>
          <button
            type="button"
            onClick={() => setAccountType('builder')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
              accountType === 'builder'
                ? 'bg-[#087443] text-white shadow-xs'
                : 'text-[#647067] hover:text-[#17211B]'
            }`}
          >
            🛠️ Project Builder / Seller
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-[#17211B] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ajith Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none text-[#17211B]"
              />
            </div>
            <div>
              <label className="block font-bold text-[#17211B] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="student@college.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none text-[#17211B]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-[#17211B] mb-1">
                Mobile / WhatsApp No. *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 8778954899"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none text-[#17211B]"
              />
            </div>
            <div>
              <label className="block font-bold text-[#17211B] mb-1">
                Password *
              </label>
              <input
                type="password"
                required
                placeholder="Create password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none text-[#17211B]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-[#17211B] mb-1">
                College / University *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anna University (CEG)"
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none text-[#17211B]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#17211B] mb-1">
                Department / Branch *
              </label>
              <select
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none bg-white text-[#17211B]"
              >
                <option value="ECE">ECE — Electronics & Communication</option>
                <option value="EEE">EEE — Electrical & Electronics</option>
                <option value="CSE">CSE — Computer Science</option>
                <option value="IT">IT — Information Technology</option>
                <option value="AI & DS">AI & DS — Artificial Intelligence</option>
                <option value="MECH">MECH — Mechanical Engineering</option>
                <option value="CIVIL">CIVIL — Civil Engineering</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <span>{isLoading ? 'Creating Account...' : `Register as ${accountType === 'builder' ? 'Project Builder' : 'Student Buyer'}`}</span>
            <ArrowRight className="w-4 h-4 text-[#84CC16]" />
          </button>
        </form>

        <div className="pt-4 border-t border-[#E2E8E4] text-center text-xs text-[#647067]">
          Already registered?{' '}
          <Link href="/login" className="text-[#087443] hover:underline font-bold">
            Sign In Here
          </Link>
        </div>
      </div>
    </div>
  );
}
