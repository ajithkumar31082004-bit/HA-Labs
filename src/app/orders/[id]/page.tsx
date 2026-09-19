'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useProjectStore } from '@/context/ProjectStoreContext';
import { PROJECTS_DATA } from '@/data/projects';
import {
  CheckCircle2,
  Download,
  FileText,
  Printer,
  ShieldCheck,
  ArrowRight,
  ShoppingBag,
  Phone,
  MessageSquare,
  Lock,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function OrderConfirmationPage() {
  const params = useParams();
  const orderId = (params?.id as string) || 'ORD-2026-9428';
  const { orders } = useProjectStore();

  const order = orders.find((o) => o.id === orderId) || orders[0] || {
    id: orderId,
    projectId: 'proj-ece-1',
    projectTitle: 'Smart Parking Occupancy & Guidance System',
    amount: 5898,
    date: '19 Sep 2026',
    status: 'Completed',
    addons: ['Viva Mentoring Package'],
    studentName: 'Ajith Kumar',
    studentEmail: 'ajith@student.halabs.tech',
    studentPhone: '+91 8778954899',
    college: 'Anna University (CEG)',
    paymentMethod: 'UPI (Instant UPI QR)',
  };

  const project = PROJECTS_DATA.find((p) => p.id === order.projectId) || PROJECTS_DATA[0];

  return (
    <div className="min-h-screen tech-grid-bg py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Celebration Header */}
        <div className="ha-card p-8 rounded-3xl bg-white border border-[#E2E8E4] shadow-xs text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#087443] flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-8 h-8 text-[#16A34A]" />
          </div>
          
          <div className="space-y-1">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#087443] border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider">
              Payment Verified · Deliverables Unlocked
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#17211B] mt-2">
              Thank You! Your Project Is Ready
            </h1>
            <p className="text-xs sm:text-sm text-[#647067] max-w-md mx-auto">
              Your license has been activated. You now have full access to source code, KiCad schematics, IEEE reports, and viva slides.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href={`/account/projects/${project.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#087443] hover:bg-[#065331] text-white font-black text-xs shadow-md hover:shadow-lg transition-all"
            >
              <Download className="w-4 h-4 text-[#84CC16]" />
              <span>Access Protected Deliverables Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] font-bold text-xs transition-all bg-white"
            >
              <Printer className="w-4 h-4 text-[#087443]" />
              <span>Print Tax Invoice</span>
            </button>
          </div>
        </div>

        {/* Official Printable Tax Invoice Card */}
        <div className="ha-card p-8 rounded-3xl bg-white border border-[#E2E8E4] space-y-6 shadow-xs print:shadow-none print:border-none">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8E4] pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#087443]" />
                <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
                  Official Academic Tax Receipt
                </span>
              </div>
              <h2 className="text-xl font-black text-[#17211B] mt-1">
                HA Labs Engineering Inc.
              </h2>
              <div className="text-[11px] font-mono text-[#647067] space-y-0.5 mt-1">
                <div>GSTIN: <strong className="text-[#17211B]">33AAACH2026L1Z4</strong> · SAC Code: 998431</div>
                <div>Founders Hotline: +91 8778954899 · halabs.project@gmail.com</div>
              </div>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                PAYMENT COMPLETED
              </span>
              <div className="font-mono text-sm font-bold text-[#17211B]">{order.id}</div>
              <div className="text-xs text-[#647067]">Date: {order.date}</div>
            </div>
          </div>

          {/* Student Billing Record */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] text-xs">
            <div>
              <span className="text-[#647067] block">Billed To (Student Lead):</span>
              <strong className="text-[#17211B] text-sm">{order.studentName || 'Student Buyer'}</strong>
              <div className="text-[#647067]">{order.studentEmail}</div>
              <div className="text-[#647067]">{order.studentPhone}</div>
            </div>
            <div>
              <span className="text-[#647067] block">College / Institution:</span>
              <strong className="text-[#17211B]">{order.college || 'Anna University (CEG)'}</strong>
              <div className="text-[#647067] mt-1">Payment Method: <span className="font-semibold text-[#17211B]">{order.paymentMethod || 'UPI FastPay'}</span></div>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[#E2E8E4] text-[#647067] uppercase font-bold">
                <tr>
                  <th className="pb-3">Description</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">SAC</th>
                  <th className="pb-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8E4]">
                <tr>
                  <td className="py-3.5 pr-2">
                    <strong className="text-[#17211B] block">{order.projectTitle}</strong>
                    <span className="text-[11px] text-[#647067]">
                      Full deliverables package (Firmware code, KiCad PCB, IEEE report, Viva slides, BOM)
                    </span>
                  </td>
                  <td className="py-3.5 font-mono">Deliverables</td>
                  <td className="py-3.5 font-mono text-[#647067]">998431</td>
                  <td className="py-3.5 text-right font-mono font-bold text-[#17211B]">₹4,999.00</td>
                </tr>

                {order.addons && order.addons.map((addon, i) => (
                  <tr key={i}>
                    <td className="py-3.5 pr-2">
                      <strong className="text-[#17211B] block">{addon}</strong>
                      <span className="text-[11px] text-[#647067]">Academic consultation & review support</span>
                    </td>
                    <td className="py-3.5 font-mono">Service</td>
                    <td className="py-3.5 font-mono text-[#647067]">998313</td>
                    <td className="py-3.5 text-right font-mono font-bold text-[#17211B]">
                      {addon.includes('Mentoring') ? '₹999.00' : '₹1,499.00'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Calculation */}
          <div className="border-t border-[#E2E8E4] pt-4 space-y-1.5 text-xs text-right max-w-xs ml-auto">
            <div className="flex justify-between text-[#647067]">
              <span>Subtotal:</span>
              <span className="font-mono text-[#17211B]">
                ₹{(order.amount - Math.round(order.amount * (18 / 118))).toLocaleString()}.00
              </span>
            </div>
            <div className="flex justify-between text-[#647067]">
              <span>IGST (18% Included):</span>
              <span className="font-mono text-[#17211B]">
                ₹{Math.round(order.amount * (18 / 118)).toLocaleString()}.00
              </span>
            </div>
            <div className="flex justify-between font-black text-base pt-2 border-t border-[#E2E8E4]">
              <span className="text-[#17211B]">Total Paid:</span>
              <span className="font-mono text-[#087443] text-lg">₹{order.amount.toLocaleString()}.00</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] text-[11px] text-[#647067] leading-relaxed">
            This receipt is an authentic academic purchase record issued by HA Labs. It entitles the student team to present this project for external university examinations, academic viva defenses, and semester grading.
          </div>

        </div>

      </div>
    </div>
  );
}
