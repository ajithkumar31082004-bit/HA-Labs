'use client';

import React from 'react';
import Link from 'next/link';
import { useProjectStore } from '@/context/ProjectStoreContext';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Printer,
  Lock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function AdminOrdersPage() {
  const { currentUser, orders } = useProjectStore();

  if (currentUser?.role !== 'admin') {
    return (
      <div className="min-h-screen tech-grid-bg py-20 flex items-center justify-center px-4">
        <div className="ha-card p-8 rounded-3xl bg-white border border-red-200 shadow-xl max-w-md w-full text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-red-100 text-red-700 flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="text-xl font-bold text-[#17211B]">403 — Admin Access Required</h1>
          <p className="text-xs text-[#647067]">
            This sales and orders ledger is restricted to platform administrators.
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

  const totalVolume = orders.reduce((sum, o) => sum + o.amount, 0) + 124800;
  const platformRevenue = Math.round(totalVolume * 0.15);
  const builderDisbursements = totalVolume - platformRevenue;

  return (
    <div className="min-h-screen tech-grid-bg py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#647067]">
          <Link href="/admin" className="hover:text-[#087443]">Admin Console</Link>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-[#17211B]">Orders & Financial Ledger</span>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8E4] pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#087443]" />
              <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
                Financial Management
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#17211B] mt-1 tracking-tight">
              All Platform Orders & Revenue Ledger
            </h1>
            <p className="text-xs sm:text-sm text-[#647067] mt-0.5">
              Live transaction records, itemized GST slips, and automated 85/15 revenue splits.
            </p>
          </div>
        </div>

        {/* Revenue KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#647067] block">Gross Platform Volume</span>
            <div className="text-3xl font-black text-[#17211B] font-mono mt-1">₹{totalVolume.toLocaleString()}</div>
            <span className="text-[11px] text-[#16A34A] font-medium">+18% this month</span>
          </div>

          <div className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#647067] block">Builder Payouts (85%)</span>
            <div className="text-3xl font-black text-[#087443] font-mono mt-1">₹{builderDisbursements.toLocaleString()}</div>
            <span className="text-[11px] text-[#087443] font-medium">Distributed to creators</span>
          </div>

          <div className="ha-card p-5 rounded-2xl bg-white border border-[#E2E8E4]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#647067] block">HA Labs Platform Fee (15%)</span>
            <div className="text-3xl font-black text-[#16A34A] font-mono mt-1">₹{platformRevenue.toLocaleString()}</div>
            <span className="text-[11px] text-[#647067] font-medium">Net platform commission</span>
          </div>
        </div>

        {/* Orders Table */}
        <div className="ha-card rounded-3xl bg-white border border-[#E2E8E4] p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-[#E2E8E4] pb-4">
            <h3 className="text-sm font-bold text-[#17211B] uppercase tracking-wider">
              Recent Transactions ({orders.length} Verified)
            </h3>
            <span className="text-xs font-mono text-[#087443] font-bold">GSTIN: 33AAACH2026L1Z4</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[#E2E8E4] text-[#647067] uppercase font-bold">
                <tr>
                  <th className="pb-3">Order ID</th>
                  <th className="pb-3">Project Title</th>
                  <th className="pb-3">Student Buyer</th>
                  <th className="pb-3">College</th>
                  <th className="pb-3">Gross</th>
                  <th className="pb-3">Creator Share (85%)</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8E4]">
                {orders.map((o) => (
                  <tr key={o.id} className="hover:bg-[#F8FAF9] transition-colors">
                    <td className="py-4 font-mono font-bold text-[#087443]">{o.id}</td>
                    <td className="py-4 font-bold text-[#17211B]">{o.projectTitle}</td>
                    <td className="py-4 text-[#17211B]">{o.studentName || 'Ajith Kumar'}</td>
                    <td className="py-4 text-[#647067]">{o.college || 'Anna University'}</td>
                    <td className="py-4 font-mono font-bold text-[#17211B]">₹{o.amount.toLocaleString()}</td>
                    <td className="py-4 font-mono text-[#087443] font-semibold">
                      ₹{Math.round(o.amount * 0.85).toLocaleString()}
                    </td>
                    <td className="py-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                        {o.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <Link
                        href={`/orders/${o.id}`}
                        className="inline-flex items-center gap-1 text-[#087443] hover:underline font-bold"
                      >
                        <span>View</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </td>
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
