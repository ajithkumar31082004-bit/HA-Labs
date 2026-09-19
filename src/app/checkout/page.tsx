'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { PROJECTS_DATA, Project } from '@/data/projects';
import { useProjectStore } from '@/context/ProjectStoreContext';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Download,
  CreditCard,
  QrCode,
  Building2,
  Phone,
  HelpCircle,
  Clock,
  Sparkles,
  ChevronRight,
  Code2,
  Cpu,
  FileText
} from 'lucide-react';

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectIdParam = searchParams.get('projectId') || searchParams.get('id') || 'proj-ece-1';
  const initialAddon = searchParams.get('addon');

  const { currentUser, purchaseProject, isProjectPurchased } = useProjectStore();

  // Find project
  const project: Project =
    PROJECTS_DATA.find((p) => p.id === projectIdParam || p.slug === projectIdParam) ||
    PROJECTS_DATA[0];

  const [studentName, setStudentName] = useState(currentUser?.name || 'Ajith Kumar');
  const [studentEmail, setStudentEmail] = useState(currentUser?.email || 'ajith@student.halabs.tech');
  const [studentPhone, setStudentPhone] = useState(currentUser?.phone || '+91 8778954899');
  const [college, setCollege] = useState(currentUser?.college || 'Anna University (CEG)');

  // Selected add-ons
  const [selectedAddons, setSelectedAddons] = useState<string[]>(
    initialAddon ? [initialAddon] : ['Viva Mentoring Package']
  );

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setStudentName(currentUser.name);
      setStudentEmail(currentUser.email);
      if (currentUser.phone) setStudentPhone(currentUser.phone);
      if (currentUser.college) setCollege(currentUser.college);
    }
  }, [currentUser]);

  const basePrice = 4999;

  const addonPrices: Record<string, { label: string; price: number; desc: string }> = {
    'Viva Mentoring Package': {
      label: '1-on-1 Viva Defense Mentoring Call',
      price: 999,
      desc: '2-hour mock viva examination with external reviewer & high-yield QA.',
    },
    'Customization Service': {
      label: 'University / Guide Customization Alignment',
      price: 1499,
      desc: 'Senior engineer adapts pinouts, sensor types, and report chapters.',
    },
    'Physical Prototype': {
      label: 'Pre-Assembled Physical Hardware Prototype Dispatch',
      price: 8999,
      desc: 'Pre-soldered hardware tested on bench, securely shipped to doorstep.',
    },
  };

  const toggleAddon = (addonKey: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonKey) ? prev.filter((k) => k !== addonKey) : [...prev, addonKey]
    );
  };

  const addonsTotal = selectedAddons.reduce(
    (sum, k) => sum + (addonPrices[k]?.price || 0),
    0
  );
  const subtotal = basePrice + addonsTotal;
  const gst = Math.round(subtotal * 0.18);
  const finalTotal = subtotal + gst;

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const orderId = purchaseProject(
        project.id,
        project.title,
        finalTotal,
        selectedAddons,
        {
          studentName,
          studentEmail,
          studentPhone,
          college,
          paymentMethod: paymentMethod === 'upi' ? 'UPI (Instant UPI QR)' : paymentMethod === 'card' ? 'Credit/Debit Card' : 'Net Banking',
        }
      );
      setIsProcessing(false);
      router.push(`/orders/${orderId}`);
    }, 900);
  };

  return (
    <div className="min-h-screen tech-grid-bg py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb / Step Indicator */}
        <div className="flex items-center gap-2 text-xs text-[#647067]">
          <Link href="/projects" className="hover:text-[#087443]">Projects</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/projects/${project.slug}`} className="hover:text-[#087443] truncate max-w-xs">{project.title}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-[#17211B]">Secure Checkout</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8E4] pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
                HA Labs Verified Gateway · 256-Bit SSL Encrypted
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#17211B] mt-1 tracking-tight">
              Project Purchase & Deliverables Setup
            </h1>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#647067]">
            <ShieldCheck className="w-4 h-4 text-[#087443]" />
            <span>100% University Viva Pass Guarantee</span>
          </div>
        </div>

        {/* 2-Column Checkout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ── LEFT: STUDENT INFO, ADDONS & PAYMENT ──────────────────────────────── */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Student & College Details Card */}
            <div className="ha-card p-6 rounded-3xl bg-white border border-[#E2E8E4] space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8E4] pb-3">
                <h2 className="text-sm font-bold text-[#17211B] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#087443] text-white text-[11px] font-mono flex items-center justify-center font-bold">1</span>
                  <span>Student & College Billing Information</span>
                </h2>
                <span className="text-[11px] font-mono text-[#087443] font-bold">Official Invoice Details</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#17211B] mb-1">Student / Team Lead Name</label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none text-[#17211B]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#17211B] mb-1">Mobile / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none text-[#17211B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#17211B] mb-1">College / University Name</label>
                    <input
                      type="text"
                      required
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none text-[#17211B]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#17211B] mb-1">Email (For Downloads & Receipt)</label>
                    <input
                      type="email"
                      required
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none text-[#17211B]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Academic Add-ons Card */}
            <div className="ha-card p-6 rounded-3xl bg-white border border-[#E2E8E4] space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8E4] pb-3">
                <h2 className="text-sm font-bold text-[#17211B] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#087443] text-white text-[11px] font-mono flex items-center justify-center font-bold">2</span>
                  <span>Select Optional Academic Support Services</span>
                </h2>
                <span className="text-[11px] text-[#647067]">Can be added now or later</span>
              </div>

              <div className="space-y-3">
                {Object.entries(addonPrices).map(([key, item]) => {
                  const isChecked = selectedAddons.includes(key);
                  return (
                    <label
                      key={key}
                      onClick={() => toggleAddon(key)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'border-[#087443] bg-emerald-50/50 ring-1 ring-[#087443]/30'
                          : 'border-[#E2E8E4] bg-white hover:bg-[#F8FAF9]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="mt-1 rounded text-[#087443] focus:ring-[#087443]"
                        />
                        <div>
                          <div className="text-xs font-bold text-[#17211B]">{item.label}</div>
                          <p className="text-[11px] text-[#647067] mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-xs text-[#087443] whitespace-nowrap">
                        +₹{item.price.toLocaleString()}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="ha-card p-6 rounded-3xl bg-white border border-[#E2E8E4] space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8E4] pb-3">
                <h2 className="text-sm font-bold text-[#17211B] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#087443] text-white text-[11px] font-mono flex items-center justify-center font-bold">3</span>
                  <span>Choose Payment Method</span>
                </h2>
                <span className="text-[11px] text-[#087443] font-bold">Instant Activation</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                    paymentMethod === 'upi'
                      ? 'border-[#087443] bg-emerald-50 text-[#087443] font-bold shadow-2xs'
                      : 'border-[#E2E8E4] text-[#647067] hover:border-[#087443]'
                  }`}
                >
                  <QrCode className="w-5 h-5" />
                  <span className="text-xs">UPI / QR Code</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                    paymentMethod === 'card'
                      ? 'border-[#087443] bg-emerald-50 text-[#087443] font-bold shadow-2xs'
                      : 'border-[#E2E8E4] text-[#647067] hover:border-[#087443]'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span className="text-xs">Card (Debit/Credit)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                    paymentMethod === 'netbanking'
                      ? 'border-[#087443] bg-emerald-50 text-[#087443] font-bold shadow-2xs'
                      : 'border-[#E2E8E4] text-[#647067] hover:border-[#087443]'
                  }`}
                >
                  <Building2 className="w-5 h-5" />
                  <span className="text-xs">Net Banking</span>
                </button>
              </div>

              {paymentMethod === 'upi' && (
                <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="font-bold text-[#17211B] block">Supported UPI Apps</span>
                    <p className="text-[11px] text-[#647067]">Google Pay · PhonePe · Paytm · CRED · BHIM</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-[#087443] font-mono text-[10px] font-bold">
                    Zero Surcharge
                  </span>
                </div>
              )}
            </div>

          </div>

          {/* ── RIGHT: ORDER SUMMARY & PAYMENT TRIGGER ───────────────────────────── */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="ha-card p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8E4] space-y-6 shadow-sm sticky top-24">
              
              <div className="border-b border-[#E2E8E4] pb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#17211B]">
                  Order Summary
                </h3>
                <span className="text-xs text-[#647067]">HA Labs Engineering Catalog</span>
              </div>

              {/* Project Card */}
              <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                    {project.branch[0]}
                  </span>
                  <span className="text-[10px] text-[#647067] font-semibold">Difficulty: {project.difficulty}</span>
                </div>
                <h4 className="font-black text-sm text-[#17211B] leading-tight">
                  {project.title}
                </h4>
                <p className="text-xs text-[#647067] line-clamp-2">
                  {project.tagline}
                </p>
              </div>

              {/* Deliverables Inclusions */}
              <div className="space-y-2 text-xs">
                <span className="font-bold text-[#17211B] text-[11px] uppercase tracking-wider block">
                  Unlocked Immediately After Payment:
                </span>
                <ul className="space-y-1.5 text-[#17211B]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] flex-shrink-0" />
                    <span>Complete Firmware Source Code (.zip)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] flex-shrink-0" />
                    <span>Circuit Schematics & Gerber Layout (.kicad)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] flex-shrink-0" />
                    <span>60–80 Page IEEE Formatted Report (.docx)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] flex-shrink-0" />
                    <span>Viva Defense PowerPoint Presentation (.pptx)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] flex-shrink-0" />
                    <span>Component Sourcing BOM & Database Schema</span>
                  </li>
                </ul>
              </div>

              {/* Price Calculation Breakdown */}
              <div className="pt-4 border-t border-[#E2E8E4] space-y-2 text-xs">
                <div className="flex items-center justify-between text-[#647067]">
                  <span>Base Deliverables Package</span>
                  <span className="font-mono text-[#17211B]">₹{basePrice.toLocaleString()}.00</span>
                </div>

                {selectedAddons.map((k) => (
                  <div key={k} className="flex items-center justify-between text-[#647067]">
                    <span className="truncate pr-2">{addonPrices[k]?.label}</span>
                    <span className="font-mono text-[#17211B] whitespace-nowrap">
                      +₹{addonPrices[k]?.price.toLocaleString()}.00
                    </span>
                  </div>
                ))}

                <div className="flex items-center justify-between text-[#647067] pt-1">
                  <span>GST (18% Academic Software & Services)</span>
                  <span className="font-mono text-[#17211B]">₹{gst.toLocaleString()}.00</span>
                </div>

                <div className="pt-3 border-t border-[#E2E8E4] flex items-center justify-between font-black text-base">
                  <span className="text-[#17211B]">Total Payable</span>
                  <span className="font-mono text-[#087443] text-xl">₹{finalTotal.toLocaleString()}.00</span>
                </div>
              </div>

              {/* Pay Button */}
              <form onSubmit={handleCompleteOrder}>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#087443] hover:bg-[#065331] text-white font-black text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4 text-[#84CC16]" />
                  <span>
                    {isProcessing ? 'Processing Transaction...' : `Pay ₹${finalTotal.toLocaleString()} & Unlock Files`}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="text-[11px] text-[#647067] text-center leading-relaxed">
                By purchasing, you gain an official academic single-team license with lifetime download access and free version updates (v1.2).
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-emerald-400">Loading Checkout...</div>}>
      <CheckoutContent />
    </React.Suspense>
  );
}
