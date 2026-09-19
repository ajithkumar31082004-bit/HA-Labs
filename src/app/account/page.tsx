'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useProjectStore } from '@/context/ProjectStoreContext';
import { PROJECTS_DATA, Project } from '@/data/projects';
import {
  User,
  ShoppingBag,
  Download,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  Layers,
  ArrowRight,
  FolderGit2,
  Clock,
  Printer,
  Sparkles,
  HelpCircle,
  Code2,
  Cpu,
  Bookmark
} from 'lucide-react';

type AccountTab = 'purchased' | 'orders' | 'support' | 'saved';

export default function BuyerAccountPage() {
  const {
    purchasedProjectIds,
    orders,
    savedProjectIds,
    toggleSaveProject,
    currentRole,
    currentUser,
  } = useProjectStore();

  const [activeTab, setActiveTab] = useState<AccountTab>('purchased');
  const [selectedInvoiceOrder, setSelectedInvoiceOrder] = useState<any | null>(null);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  // Match purchased projects with data
  const purchasedProjects: Project[] = PROJECTS_DATA.filter((p) =>
    purchasedProjectIds.includes(p.id)
  );

  // Match saved projects with data
  const savedProjects: Project[] = PROJECTS_DATA.filter((p) =>
    savedProjectIds.includes(p.id)
  );

  const handleDownloadDeliverable = (type: string, projTitle: string) => {
    alert(`Downloading ${type} package for "${projTitle}"...\nIncludes verified source code, CAD/KiCad circuit schematics, and formatted documentation.`);
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSubmitted(true);
    setTimeout(() => {
      setTicketSubject('');
      setTicketMessage('');
      setTicketSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen tech-grid-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Card Header */}
        <div className="ha-card p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8E4] shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#087443] to-[#16A34A] text-white flex items-center justify-center text-2xl font-black shadow-md flex-shrink-0">
                AK
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-black text-[#17211B] tracking-tight">
                    Ajith Kumar
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#087443] border border-emerald-200 text-xs font-mono font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#087443]" />
                    <span>Verified Student Buyer</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#647067]">
                  Final Year B.E. Electronics & Communication Engineering · Student ID: <span className="font-mono text-[#17211B] font-semibold">HA-2026-8778</span>
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[#647067]">
                  <span>Member since: <strong>Aug 2026</strong></span>
                  <span>·</span>
                  <span>Unlocked Projects: <strong className="text-[#087443] font-mono">{purchasedProjects.length}</strong></span>
                  <span>·</span>
                  <span>Support Plan: <strong className="text-[#16A34A]">Viva Priority</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Actions & Role indicator */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] text-[#17211B] hover:border-[#087443] hover:text-[#087443] text-xs font-bold transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#087443]" />
                <span>Explore Services</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs transition-all shadow-xs"
              >
                <span>Browse Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#84CC16]" />
              </Link>
            </div>

          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-[#E2E8E4] mb-8 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('purchased')}
            className={`flex items-center gap-2 px-4 py-2.5 border-b-2 text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'purchased'
                ? 'border-[#087443] text-[#087443]'
                : 'border-transparent text-[#647067] hover:text-[#17211B]'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>My Purchased Projects</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-emerald-50 text-[#087443] font-bold">
              {purchasedProjects.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 px-4 py-2.5 border-b-2 text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'orders'
                ? 'border-[#087443] text-[#087443]'
                : 'border-transparent text-[#647067] hover:text-[#17211B]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Orders & Tax Invoices</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-slate-100 text-slate-700 font-bold">
              {orders.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('support')}
            className={`flex items-center gap-2 px-4 py-2.5 border-b-2 text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'support'
                ? 'border-[#087443] text-[#087443]'
                : 'border-transparent text-[#647067] hover:text-[#17211B]'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Customization & Viva Support</span>
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`flex items-center gap-2 px-4 py-2.5 border-b-2 text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'saved'
                ? 'border-[#087443] text-[#087443]'
                : 'border-transparent text-[#647067] hover:text-[#17211B]'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Saved Projects</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-slate-100 text-slate-700 font-bold">
              {savedProjects.length}
            </span>
          </button>
        </div>

        {/* ── TAB 1: MY PURCHASED PROJECTS ────────────────────────────────────────── */}
        {activeTab === 'purchased' && (
          <div className="space-y-6">
            {purchasedProjects.length === 0 ? (
              <div className="ha-card p-12 rounded-3xl bg-white border border-[#E2E8E4] text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#087443] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#17211B]">No purchased projects yet</h3>
                <p className="text-xs text-[#647067] max-w-md mx-auto">
                  When you purchase an engineering project on HA Labs, all verified deliverables (source code ZIP, KiCad schematics, IEEE reports, PPT decks) unlock here immediately.
                </p>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#087443] text-white font-bold text-xs"
                >
                  Explore Verified Projects
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {purchasedProjects.map((p) => (
                  <div
                    key={p.id}
                    className="ha-card rounded-3xl bg-white border border-[#E2E8E4] p-6 sm:p-8 space-y-6 shadow-xs hover:border-[#087443]/40 transition-all"
                  >
                    {/* Project Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E2E8E4] pb-5">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#087443] border border-emerald-200 text-[10px] font-mono font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-[#16A34A]" />
                            <span>LICENSED & UNLOCKED (v1.2)</span>
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-700">
                            {p.branch[0]}
                          </span>
                          <span className="text-xs text-[#647067]">
                            Difficulty: <strong>{p.difficulty}</strong>
                          </span>
                        </div>
                        <h2 className="text-lg sm:text-xl font-black text-[#17211B]">
                          {p.title}
                        </h2>
                        <p className="text-xs text-[#647067] line-clamp-2">
                          {p.tagline}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Link
                          href={`/projects/${p.slug}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] hover:border-[#087443] hover:text-[#087443] text-xs font-bold transition-all"
                        >
                          <span>Open Project Workspace</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Unlocked Deliverables Grid */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#17211B] flex items-center gap-1.5">
                          <Download className="w-4 h-4 text-[#087443]" />
                          <span>Instant One-Click Deliverables Download</span>
                        </h3>
                        <span className="text-[11px] font-mono text-[#087443] font-semibold">
                          All files verified · SHA256 validated
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        
                        {/* Deliverable 1: Source Code */}
                        <div className="p-3.5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] hover:border-[#087443] transition-all space-y-2 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="p-2 rounded-xl bg-emerald-100 text-[#087443]">
                                <Code2 className="w-4 h-4" />
                              </span>
                              <span className="text-[10px] font-mono text-[#647067]">14.2 MB</span>
                            </div>
                            <div className="font-bold text-[#17211B] text-xs mt-2">Firmware & Code</div>
                            <p className="text-[10px] text-[#647067] mt-0.5">ESP32 C++, APIs, React UI</p>
                          </div>
                          <button
                            onClick={() => handleDownloadDeliverable('Full Source Code ZIP', p.title)}
                            className="w-full py-1.5 px-2 rounded-lg bg-white border border-[#E2E8E4] hover:bg-[#087443] hover:text-white text-xs font-bold text-[#17211B] transition-all flex items-center justify-center gap-1 shadow-2xs"
                          >
                            <Download className="w-3 h-3" />
                            <span>Download .zip</span>
                          </button>
                        </div>

                        {/* Deliverable 2: PCB & Circuit */}
                        <div className="p-3.5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] hover:border-[#087443] transition-all space-y-2 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="p-2 rounded-xl bg-blue-100 text-blue-700">
                                <Cpu className="w-4 h-4" />
                              </span>
                              <span className="text-[10px] font-mono text-[#647067]">3.8 MB</span>
                            </div>
                            <div className="font-bold text-[#17211B] text-xs mt-2">PCB & Schematics</div>
                            <p className="text-[10px] text-[#647067] mt-0.5">KiCad 8, Gerber, Fritzing</p>
                          </div>
                          <button
                            onClick={() => handleDownloadDeliverable('KiCad Schematics & Gerber Files', p.title)}
                            className="w-full py-1.5 px-2 rounded-lg bg-white border border-[#E2E8E4] hover:bg-[#087443] hover:text-white text-xs font-bold text-[#17211B] transition-all flex items-center justify-center gap-1 shadow-2xs"
                          >
                            <Download className="w-3 h-3" />
                            <span>Download .kicad</span>
                          </button>
                        </div>

                        {/* Deliverable 3: IEEE Report */}
                        <div className="p-3.5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] hover:border-[#087443] transition-all space-y-2 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="p-2 rounded-xl bg-purple-100 text-purple-700">
                                <FileText className="w-4 h-4" />
                              </span>
                              <span className="text-[10px] font-mono text-[#647067]">8.4 MB</span>
                            </div>
                            <div className="font-bold text-[#17211B] text-xs mt-2">IEEE Report Pack</div>
                            <p className="text-[10px] text-[#647067] mt-0.5">70-page formatted DOCX</p>
                          </div>
                          <button
                            onClick={() => handleDownloadDeliverable('IEEE Formatted Project Report (DOCX & PDF)', p.title)}
                            className="w-full py-1.5 px-2 rounded-lg bg-white border border-[#E2E8E4] hover:bg-[#087443] hover:text-white text-xs font-bold text-[#17211B] transition-all flex items-center justify-center gap-1 shadow-2xs"
                          >
                            <Download className="w-3 h-3" />
                            <span>Download .docx</span>
                          </button>
                        </div>

                        {/* Deliverable 4: PPT Deck */}
                        <div className="p-3.5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] hover:border-[#087443] transition-all space-y-2 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="p-2 rounded-xl bg-amber-100 text-amber-800">
                                <Layers className="w-4 h-4" />
                              </span>
                              <span className="text-[10px] font-mono text-[#647067]">18.5 MB</span>
                            </div>
                            <div className="font-bold text-[#17211B] text-xs mt-2">Viva Slide Deck</div>
                            <p className="text-[10px] text-[#647067] mt-0.5">32 animated defense slides</p>
                          </div>
                          <button
                            onClick={() => handleDownloadDeliverable('Viva Defense PowerPoint Deck', p.title)}
                            className="w-full py-1.5 px-2 rounded-lg bg-white border border-[#E2E8E4] hover:bg-[#087443] hover:text-white text-xs font-bold text-[#17211B] transition-all flex items-center justify-center gap-1 shadow-2xs"
                          >
                            <Download className="w-3 h-3" />
                            <span>Download .pptx</span>
                          </button>
                        </div>

                        {/* Deliverable 5: Database & Setup */}
                        <div className="p-3.5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] hover:border-[#087443] transition-all space-y-2 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="p-2 rounded-xl bg-indigo-100 text-indigo-700">
                                <Code2 className="w-4 h-4" />
                              </span>
                              <span className="text-[10px] font-mono text-[#647067]">1.2 MB</span>
                            </div>
                            <div className="font-bold text-[#17211B] text-xs mt-2">Database & BOM</div>
                            <p className="text-[10px] text-[#647067] mt-0.5">SQL tables, BOM Excel</p>
                          </div>
                          <button
                            onClick={() => handleDownloadDeliverable('Database Schema & Component Sourcing BOM', p.title)}
                            className="w-full py-1.5 px-2 rounded-lg bg-white border border-[#E2E8E4] hover:bg-[#087443] hover:text-white text-xs font-bold text-[#17211B] transition-all flex items-center justify-center gap-1 shadow-2xs"
                          >
                            <Download className="w-3 h-3" />
                            <span>Download .sql</span>
                          </button>
                        </div>

                      </div>
                    </div>

                    {/* Support & Add-on Actions */}
                    <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-[#647067]">
                        <HelpCircle className="w-4 h-4 text-[#087443]" />
                        <span>Need project customization or guidance for external review?</span>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <Link
                          href="/services"
                          className="flex-1 sm:flex-none text-center px-3.5 py-1.5 rounded-xl border border-[#E2E8E4] hover:border-[#087443] font-bold text-[#17211B] transition-all"
                        >
                          Request Customization
                        </Link>
                        <a
                          href="https://wa.me/918778954899?text=Hi%20Ajithkumar,%20I%20have%20purchased%20a%20project%20and%20need%20viva%20mentoring%20support"
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 sm:flex-none text-center px-3.5 py-1.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold transition-all shadow-xs flex items-center justify-center gap-1.5"
                        >
                          <Phone className="w-3 h-3 text-[#84CC16]" />
                          <span>Call Mentor</span>
                        </a>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── TAB 2: ORDERS & INVOICES ────────────────────────────────────────────── */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="ha-card p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8E4] space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8E4] pb-4">
                <div>
                  <h3 className="text-base font-bold text-[#17211B]">Order History & Invoices</h3>
                  <p className="text-xs text-[#647067] mt-0.5">
                    Official GST receipts for college reimbursement and academic project submission proof.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#087443] font-bold">
                  {orders.length} Verified Orders
                </span>
              </div>

              {orders.length === 0 ? (
                <div className="text-center py-10 text-[#647067] text-xs">No orders recorded yet.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-[#E2E8E4] text-[#647067] uppercase font-bold">
                      <tr>
                        <th className="pb-3">Order ID</th>
                        <th className="pb-3">Project Title</th>
                        <th className="pb-3">Date</th>
                        <th className="pb-3">Amount</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3">Included Add-ons</th>
                        <th className="pb-3 text-right">Invoice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8E4]">
                      {orders.map((o) => (
                        <tr key={o.id} className="hover:bg-[#F8FAF9] transition-colors">
                          <td className="py-4 font-mono font-bold text-[#087443]">{o.id}</td>
                          <td className="py-4 font-bold text-[#17211B]">{o.projectTitle}</td>
                          <td className="py-4 text-[#647067]">{o.date}</td>
                          <td className="py-4 font-mono font-bold text-[#17211B]">₹{o.amount.toLocaleString()}</td>
                          <td className="py-4">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                              {o.status}
                            </span>
                          </td>
                          <td className="py-4 text-[#647067]">
                            {o.addons && o.addons.length > 0 ? o.addons.join(', ') : 'Base Deliverables'}
                          </td>
                          <td className="py-4 text-right">
                            <button
                              onClick={() => setSelectedInvoiceOrder(o)}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-[#E2E8E4] hover:border-[#087443] hover:text-[#087443] text-xs font-bold transition-all"
                            >
                              <Printer className="w-3.5 h-3.5 text-[#087443]" />
                              <span>View Receipt</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── TAB 3: CUSTOMIZATION & SUPPORT ──────────────────────────────────────── */}
        {activeTab === 'support' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Support Ticket Submission Form */}
            <div className="lg:col-span-7 ha-card p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8E4] space-y-4">
              <div>
                <h3 className="text-base font-bold text-[#17211B]">Open a Customization or Viva Request Ticket</h3>
                <p className="text-xs text-[#647067] mt-0.5">
                  Our core engineering mentors review requests within 2 hours.
                </p>
              </div>

              {ticketSubmitted && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-[#087443] font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>Ticket successfully lodged! A mentor will review and reach out via email/WhatsApp.</span>
                </div>
              )}

              <form onSubmit={handleTicketSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Request Type</label>
                  <select className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none bg-white">
                    <option>Hardware Component / Sensor Replacement</option>
                    <option>University / Guide Customization Alignment</option>
                    <option>Viva Defense 1-on-1 Mock Session Booking</option>
                    <option>Physical Prototype Delivery Query</option>
                    <option>Firmware / Library Debugging Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Subject / Project Reference</label>
                  <input
                    type="text"
                    required
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    placeholder="e.g. Need to replace GSM SIM800L with ESP32 Wi-Fi MQTT"
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Detailed Explanation</label>
                  <textarea
                    required
                    rows={4}
                    value={ticketMessage}
                    onChange={(e) => setTicketMessage(e.target.value)}
                    placeholder="Describe specific pinout changes, college guidelines, or schedule requirements..."
                    className="w-full p-3 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#84CC16]" />
                  <span>Submit Ticket</span>
                </button>
              </form>
            </div>

            {/* Direct Founders Contact Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="ha-card p-6 rounded-3xl bg-white border border-[#E2E8E4] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
                    Direct Founder Hotline
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#17211B]">
                  Prefer urgent phone or WhatsApp clarification?
                </h4>
                <p className="text-xs text-[#647067] leading-relaxed">
                  Ajithkumar and Harishkumar are available directly for urgent student capstone doubts, circuit corrections, and physical hardware dispatch queries.
                </p>

                <div className="space-y-2 pt-2 text-xs font-bold">
                  {/* Ajithkumar */}
                  <a
                    href="tel:+918778954899"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#087443]" />
                      <span>Ajithkumar: +91 8778954899</span>
                    </div>
                    <span className="text-[10px] text-[#087443] font-mono">CALL NOW →</span>
                  </a>

                  {/* Harishkumar */}
                  <a
                    href="tel:+919342540464"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#087443]" />
                      <span>Harishkumar: +91 9342540464</span>
                    </div>
                    <span className="text-[10px] text-[#087443] font-mono">CALL NOW →</span>
                  </a>

                  {/* Official Email */}
                  <a
                    href="mailto:halabs.project@gmail.com"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#087443]" />
                      <span>halabs.project@gmail.com</span>
                    </div>
                    <span className="text-[10px] text-[#087443] font-mono">EMAIL →</span>
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/918778954899?text=Hi%20Ajithkumar,%20I%20need%20customization%20support%20for%20my%20HA%20Labs%20project"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#84CC16]" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ── TAB 4: SAVED PROJECTS ──────────────────────────────────────────────── */}
        {activeTab === 'saved' && (
          <div className="space-y-6">
            <div className="ha-card p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8E4] space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8E4] pb-4">
                <div>
                  <h3 className="text-base font-bold text-[#17211B]">Saved Engineering Projects</h3>
                  <p className="text-xs text-[#647067] mt-0.5">
                    Projects you bookmarked for team evaluation and guide review.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#087443] font-bold">{savedProjects.length} Saved</span>
              </div>

              {savedProjects.length === 0 ? (
                <div className="text-center py-10 text-[#647067] text-xs">
                  No saved projects. Click the bookmark icon on any project card to save it here.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedProjects.map((p) => (
                    <div key={p.id} className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                            {p.branch[0]}
                          </span>
                          <span className="text-[11px] font-mono font-bold text-[#087443]">₹4,999</span>
                        </div>
                        <h4 className="font-bold text-[#17211B] text-sm line-clamp-2">
                          {p.title}
                        </h4>
                        <p className="text-xs text-[#647067] line-clamp-2">
                          {p.tagline}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-[#E2E8E4]">
                        <Link
                          href={`/projects/${p.slug}`}
                          className="flex-1 py-1.5 px-3 rounded-lg bg-[#087443] text-white text-xs font-bold text-center hover:bg-[#065331] transition-all"
                        >
                          View & Buy
                        </Link>
                        <button
                          onClick={() => toggleSaveProject(p.id)}
                          className="px-2.5 py-1.5 rounded-lg border border-[#E2E8E4] text-[#647067] hover:text-red-600 text-xs"
                          title="Remove bookmark"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      </div>

      {/* ── INVOICE RECEIPT MODAL ────────────────────────────────────────────────── */}
      {selectedInvoiceOrder && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#E2E8E4] max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-fade-slide-up">
            
            <div className="flex items-start justify-between border-b border-[#E2E8E4] pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#087443]" />
                  <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
                    HA Labs Official Tax Invoice
                  </span>
                </div>
                <h3 className="text-xl font-black text-[#17211B] mt-1">
                  Tax Invoice / Academic Receipt
                </h3>
              </div>
              <button
                onClick={() => setSelectedInvoiceOrder(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#17211B] hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4]">
                <div>
                  <span className="text-[#647067] block">Invoice No:</span>
                  <strong className="font-mono text-[#17211B]">{selectedInvoiceOrder.id}</strong>
                </div>
                <div>
                  <span className="text-[#647067] block">Date:</span>
                  <strong className="text-[#17211B]">{selectedInvoiceOrder.date}</strong>
                </div>
                <div>
                  <span className="text-[#647067] block">Billed To:</span>
                  <strong className="text-[#17211B]">Ajith Kumar (Student)</strong>
                </div>
                <div>
                  <span className="text-[#647067] block">Payment Status:</span>
                  <span className="text-[#087443] font-bold">PAID (Online UPI/Card)</span>
                </div>
              </div>

              <div>
                <div className="font-bold text-[#17211B] mb-2">Itemized Breakdown</div>
                <div className="border border-[#E2E8E4] rounded-xl divide-y divide-[#E2E8E4]">
                  <div className="p-3 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#17211B]">{selectedInvoiceOrder.projectTitle}</div>
                      <div className="text-[11px] text-[#647067]">Full deliverables package (Code, PCB, Report, PPT)</div>
                    </div>
                    <span className="font-mono font-bold text-[#17211B]">₹4,999.00</span>
                  </div>

                  {selectedInvoiceOrder.addons && selectedInvoiceOrder.addons.map((addon: string, i: number) => (
                    <div key={i} className="p-3 flex items-center justify-between text-[#647067]">
                      <div>
                        <div className="font-semibold">{addon}</div>
                        <div className="text-[11px]">Academic support & mentorship service</div>
                      </div>
                      <span className="font-mono font-bold text-[#17211B]">
                        {addon.includes('Mentoring') ? '₹999.00' : '₹1,499.00'}
                      </span>
                    </div>
                  ))}

                  <div className="p-3 bg-[#F8FAF9] flex items-center justify-between font-bold text-sm">
                    <span className="text-[#17211B]">Total Paid</span>
                    <span className="text-[#087443] font-mono text-base">₹{selectedInvoiceOrder.amount.toLocaleString()}.00</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-[#647067] leading-relaxed">
                Authorized by HA Labs Engineering Inc. GSTIN: 33AAACH2026L1Z4. This receipt serves as valid academic proof of project component licensing for university semester examinations.
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E2E8E4]">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] font-bold text-xs flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5 text-[#087443]" />
                <span>Print Invoice</span>
              </button>
              <button
                onClick={() => setSelectedInvoiceOrder(null)}
                className="px-5 py-2 rounded-xl bg-[#087443] text-white font-bold text-xs"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
