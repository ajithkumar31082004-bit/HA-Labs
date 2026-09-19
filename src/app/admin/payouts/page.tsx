'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useProjectStore } from '@/context/ProjectStoreContext';
import { DollarSign, ShieldCheck, CheckCircle2, Lock, ArrowUpRight, Clock, Building2 } from 'lucide-react';

export default function AdminPayoutsPage() {
  const { currentUser } = useProjectStore();

  if (currentUser?.role !== 'admin') {
    return (
      <div className="min-h-screen tech-grid-bg py-20 flex items-center justify-center px-4">
        <div className="ha-card p-8 rounded-3xl bg-white border border-red-200 shadow-xl max-w-md w-full text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-red-100 text-red-700 flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="text-xl font-bold text-[#17211B]">403 — Admin Access Required</h1>
          <p className="text-xs text-[#647067]">
            This creator payout disbursement ledger is restricted to authorized platform finance admins.
          </p>
          <Link
            href="/login"
            className="inline-block py-2.5 px-5 rounded-xl bg-[#087443] text-white font-bold text-xs"
          >
            Sign In as Admin
          </Link>
        </div>
      </div>
    );
  }

  const payouts = [
    {
      id: 'PAY-7410',
      builder: 'Harish Kumar',
      email: 'harish@builder.halabs.tech',
      project: 'Autonomous Solar Tracking Dual-Axis Inverter',
      salesCount: 18,
      amount: 84150,
      bank: 'HDFC Bank (IFSC: HDFC0001248)',
      status: 'Disbursed',
      date: '18 Sep 2026',
    },
    {
      id: 'PAY-7409',
      builder: 'Pooja Venkatesh',
      email: 'pooja.v@nitk.edu.in',
      project: 'Real-Time Edge AI Defect Detection',
      salesCount: 12,
      amount: 51000,
      bank: 'SBI (IFSC: SBIN0004521)',
      status: 'Processing',
      date: '19 Sep 2026',
    },
    {
      id: 'PAY-7408',
      builder: 'Vigneshwaran S',
      email: 'vignesh.s@ceg.edu',
      project: 'EV Battery Management System with CAN Bus',
      salesCount: 15,
      amount: 63750,
      bank: 'ICICI Bank (IFSC: ICIC0000841)',
      status: 'Disbursed',
      date: '15 Sep 2026',
    },
  ];

  const totalDisbursed = payouts.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="min-h-screen tech-grid-bg py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#647067]">
          <Link href="/admin" className="hover:text-[#087443]">Admin Console</Link>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-[#17211B]">Builder Payouts & Disbursements</span>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8E4] pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#087443]" />
              <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
                Finance & Payouts (85% Creator Model)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#17211B] mt-1 tracking-tight">
              Builder Royalty & Commission Disbursements
            </h1>
            <p className="text-xs sm:text-sm text-[#647067] mt-0.5">
              Automated NEFT / IMPS transfers to verified engineering creators.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-emerald-50 text-[#087443] border border-emerald-200 text-xs font-mono font-bold">
              ₹{totalDisbursed.toLocaleString()} Distributed
            </span>
          </div>
        </div>

        {/* Payouts Table */}
        <div className="ha-card rounded-3xl bg-white border border-[#E2E8E4] p-6 space-y-4 shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[#E2E8E4] text-[#647067] uppercase font-bold">
                <tr>
                  <th className="pb-3">Payout ID</th>
                  <th className="pb-3">Builder & Email</th>
                  <th className="pb-3">Project Title</th>
                  <th className="pb-3">Units Sold</th>
                  <th className="pb-3">Net Payout (85%)</th>
                  <th className="pb-3">Beneficiary Bank / IFSC</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8E4]">
                {payouts.map((p) => (
                  <tr key={p.id} className="hover:bg-[#F8FAF9] transition-colors">
                    <td className="py-4 font-mono font-bold text-[#087443]">{p.id}</td>
                    <td className="py-4">
                      <div className="font-bold text-[#17211B]">{p.builder}</div>
                      <div className="text-[11px] text-[#647067]">{p.email}</div>
                    </td>
                    <td className="py-4 font-semibold text-[#17211B]">{p.project}</td>
                    <td className="py-4 font-mono font-bold">{p.salesCount}</td>
                    <td className="py-4 font-mono font-black text-sm text-[#087443]">
                      ₹{p.amount.toLocaleString()}
                    </td>
                    <td className="py-4 text-[#647067] font-mono text-[11px]">{p.bank}</td>
                    <td className="py-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        p.status === 'Disbursed'
                          ? 'bg-emerald-50 text-[#087443] border border-emerald-200'
                          : 'bg-amber-50 text-amber-800 border border-amber-200 animate-pulse'
                      }`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="py-4 text-right text-[#647067]">{p.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
