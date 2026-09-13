'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, CheckCircle2, Users, FileCheck, Send, Check, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CollegesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    collegeName: '',
    department: 'ECE',
    contactPerson: '',
    email: '',
    phone: '',
    studentCount: '100–250',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-16 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>INSTITUTIONAL SOLUTION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            A project ecosystem for colleges, too.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Give faculty and project coordinators a transparent system to supervise batch milestones, track code commits, verify circuit hardware, and automate university review documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left: Faculty Dashboard Showcase */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl bg-[#090f20] border border-white/15 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Department Head Project Tracker</h3>
                  <p className="text-xs text-slate-400 font-mono">Academic Year 2025–2026 • Final Year Batch</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  Live Sync
                </span>
              </div>

              {/* KPI Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Total Teams</span>
                  <span className="text-xl font-bold text-white font-mono">42 Teams</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Average Progress</span>
                  <span className="text-xl font-bold text-brand-cyan font-mono">79%</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Upcoming Review</span>
                  <span className="text-xl font-bold text-sky-400 font-mono">Review 02</span>
                </div>
              </div>

              {/* Active Teams List */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#0c152a] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold">Team 01 — Smart Parking System</span>
                    <span className="text-emerald-400 font-bold">80% On Track</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-4/5" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Guide: Dr. R. Murugan</span>
                    <span>AWS Telemetry Passed</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0c152a] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold">Team 02 — Smart Agriculture System</span>
                    <span className="text-sky-400 font-bold">65% Progress</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-400 rounded-full w-2/3" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Guide: Prof. S. Karthik</span>
                    <span>Firmware MQTT Stage</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0c152a] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold">Team 03 — EV Charging Monitor</span>
                    <span className="text-emerald-400 font-bold">92% Ready</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[92%]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Guide: Dr. Anitha P.</span>
                    <span>Pre-Viva Mock Scheduled</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#0a1020] border border-white/10 space-y-1.5">
                <h4 className="text-sm font-bold text-white">Automated Review Rubrics</h4>
                <p className="text-xs text-slate-400">
                  Pre-configured grading rubrics conforming to NBA / NAAC project assessment criteria.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#0a1020] border border-white/10 space-y-1.5">
                <h4 className="text-sm font-bold text-white">Genuine Engineering Work</h4>
                <p className="text-xs text-slate-400">
                  Eliminate black-box purchased projects with verifiable Git commits and hardware build logs.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Institutional Inquiry Form */}
          <div className="lg:col-span-5 rounded-3xl bg-[#090f20] border border-white/15 p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Request an Institutional Demo</h3>
            <p className="text-xs text-slate-400 mb-6">
              Connect your department to HA Labs for academic pilot access and faculty coordinator accounts.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-base font-bold text-white">Demo Request Received</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Thank you, {formData.contactPerson}. Our academic coordinator Harish will reach out to your institution within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    College / University Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Government College of Technology"
                    value={formData.collegeName}
                    onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                      Department *
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-brand-cyan"
                    >
                      <option value="ECE">ECE</option>
                      <option value="EEE">EEE</option>
                      <option value="CSE">CSE</option>
                      <option value="IT">IT</option>
                      <option value="AI & DS">AI & DS</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="All Engineering">All Departments</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                      Student Count
                    </label>
                    <select
                      value={formData.studentCount}
                      onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-brand-cyan"
                    >
                      <option value="Under 100">Under 100</option>
                      <option value="100–250">100–250</option>
                      <option value="250–500">250–500</option>
                      <option value="500+">500+ Students</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Coordinator / Faculty Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Prof. / Dr. Full Name"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="faculty@college.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Requirements / Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your upcoming review schedules or lab constraints..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Institutional Demo Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
