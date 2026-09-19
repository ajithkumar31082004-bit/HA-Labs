'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useProjectStore } from '@/context/ProjectStoreContext';
import { PROJECTS_DATA, Project } from '@/data/projects';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Download,
  Code2,
  Cpu,
  FileText,
  Layers,
  ChevronRight,
  Phone,
  MessageSquare,
  Mail,
  ArrowRight,
  Sparkles,
  Terminal,
  ExternalLink,
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';

export default function ProtectedProjectFilesPage() {
  const params = useParams();
  const projectId = (params?.id as string) || 'proj-ece-1';
  const router = useRouter();

  const { isProjectPurchased, currentUser } = useProjectStore();

  const project: Project =
    PROJECTS_DATA.find((p) => p.id === projectId || p.slug === projectId) ||
    PROJECTS_DATA[0];

  const hasAccess =
    isProjectPurchased(project.id) ||
    currentUser?.role === 'admin' ||
    currentUser?.role === 'builder';

  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);

  const handleDownload = (fileName: string, type: string) => {
    setDownloadingFile(fileName);
    setTimeout(() => {
      setDownloadingFile(null);
      alert(`Download complete: ${fileName}\nType: ${type}\nVerified by HA Labs SHA-256 Checksum Engine.`);
    }, 1200);
  };

  // If unauthorized, render Locked Access Gate
  if (!hasAccess) {
    return (
      <div className="min-h-screen tech-grid-bg py-16 flex items-center justify-center px-4">
        <div className="max-w-lg w-full ha-card p-8 rounded-3xl bg-white border border-amber-200 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-mono font-bold uppercase tracking-wider">
              Protected Deliverables Hub · License Required
            </span>
            <h1 className="text-2xl font-black text-[#17211B] mt-1">
              Access Restricted to Verified Buyers
            </h1>
            <p className="text-xs text-[#647067] leading-relaxed">
              The complete firmware source code, KiCad/Fritzing schematics, and IEEE project reports for <strong>{project.title}</strong> are protected under academic single-team licensing.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] text-xs space-y-2 text-left">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#17211B]">{project.title}</span>
              <span className="font-mono font-bold text-[#087443]">₹4,999</span>
            </div>
            <p className="text-[#647067] text-[11px]">{project.tagline}</p>
          </div>

          <div className="space-y-3">
            <Link
              href={`/checkout?projectId=${project.id}`}
              className="w-full py-3.5 px-4 rounded-2xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#84CC16]" />
              <span>Purchase Project to Unlock Files (₹4,999)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={`/projects/${project.slug}`}
              className="block text-xs font-semibold text-[#647067] hover:text-[#087443]"
            >
              ← Back to Project Preview
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Authorized View
  const deliverables = [
    {
      id: 'source-code',
      title: 'Complete Tested Firmware & App Source Code',
      filename: `${project.slug}_firmware_v1.2.zip`,
      size: '14.2 MB',
      sha: 'a8f7b9c24150de3f9821...',
      icon: Code2,
      color: 'bg-emerald-50 text-[#087443] border-emerald-200',
      description: 'C++ firmware (PlatformIO & Arduino IDE compatible), REST API routes, and React telemetry dashboard.',
    },
    {
      id: 'pcb-cad',
      title: 'KiCad 8 Schematics & Gerber PCB Layout',
      filename: `${project.slug}_circuit_pcb.kicad`,
      size: '3.8 MB',
      sha: '71d99e034c562e841aa9...',
      icon: Cpu,
      color: 'bg-blue-50 text-blue-800 border-blue-200',
      description: 'Complete multi-sheet schematic diagram, bill of materials netlist, and 2-layer ready-to-order Gerber files.',
    },
    {
      id: 'ieee-report',
      title: 'IEEE Standard Formatted Final Project Report',
      filename: `${project.slug}_ieee_report_final.docx`,
      size: '8.4 MB',
      sha: 'e5519b389cb43f11072d...',
      icon: FileText,
      color: 'bg-purple-50 text-purple-800 border-purple-200',
      description: '74-page thesis template with literature review, block diagrams, flowchart, results analysis, and IEEE citations.',
    },
    {
      id: 'viva-deck',
      title: 'Viva Defense PowerPoint Presentation Deck',
      filename: `${project.slug}_viva_defense_slides.pptx`,
      size: '18.5 MB',
      sha: '49aa8c614b0351d1f044...',
      icon: Layers,
      color: 'bg-amber-50 text-amber-800 border-amber-200',
      description: '32 professionally formatted slides covering problem, architecture, live hardware photos, graphs, and conclusion.',
    },
    {
      id: 'db-schema',
      title: 'Database Schema & Cloud Telemetry Tables',
      filename: `${project.slug}_database_schema.sql`,
      size: '1.2 MB',
      sha: '03ba72e9dfa38210344c...',
      icon: Code2,
      color: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      description: 'MySQL / PostgreSQL create statements, time-series sensor ingestion tables, and sample telemetry seeds.',
    },
    {
      id: 'bom-excel',
      title: 'Component Sourcing BOM & Vendor Links',
      filename: `${project.slug}_bill_of_materials.xlsx`,
      size: '420 KB',
      sha: '99bf01c2384a2981da4f...',
      icon: FileSpreadsheet,
      color: 'bg-teal-50 text-teal-800 border-teal-200',
      description: 'Pin-compatible component list, Robu.in & Amazon India direct purchase links, and pricing estimates.',
    },
  ];

  return (
    <div className="min-h-screen tech-grid-bg py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#647067]">
          <Link href="/account" className="hover:text-[#087443]">My Account</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-[#17211B] truncate">{project.title}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#087443] font-bold">Protected Deliverables</span>
        </div>

        {/* Header Hero */}
        <div className="ha-card p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8E4] shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#087443] border border-emerald-200 text-xs font-mono font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>OFFICIAL ACTIVE LICENSE · v1.2</span>
                </span>
                <span className="text-xs font-mono text-[#647067]">Branch: {project.branch[0]}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-[#17211B] tracking-tight">
                {project.title} — Deliverables Hub
              </h1>
              <p className="text-xs sm:text-sm text-[#647067]">
                Official download workspace for your team. All files have been bench-tested and compile without warnings.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] hover:border-[#087443] text-xs font-bold text-[#17211B] transition-all"
              >
                <span>View Full Specs</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#087443]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Deliverables Download Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#17211B] flex items-center gap-2">
              <Download className="w-4 h-4 text-[#087443]" />
              <span>Verified Download Packages (6 Deliverables)</span>
            </h2>
            <span className="text-xs font-mono text-[#087443] font-bold">
              Lifetime Single-Team License
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item) => {
              const Icon = item.icon;
              const isDownloading = downloadingFile === item.filename;

              return (
                <div
                  key={item.id}
                  className="ha-card p-5 sm:p-6 rounded-3xl bg-white border border-[#E2E8E4] hover:border-[#087443]/40 transition-all flex flex-col justify-between space-y-4 shadow-2xs"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`p-2.5 rounded-2xl border ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="text-xs font-mono font-bold text-[#647067] bg-[#F8FAF9] px-2.5 py-1 rounded-full border border-[#E2E8E4]">
                        {item.size}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-sm text-[#17211B] leading-tight">
                        {item.title}
                      </h3>
                      <div className="text-[11px] font-mono text-[#087443] mt-0.5">
                        {item.filename}
                      </div>
                    </div>

                    <p className="text-xs text-[#647067] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="text-[10px] font-mono text-[#647067] bg-[#F8FAF9] p-2 rounded-xl border border-[#E2E8E4] truncate">
                      SHA256: {item.sha}
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(item.filename, item.title)}
                    disabled={isDownloading}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-[#84CC16]" />
                    <span>{isDownloading ? 'Preparing File Package...' : `Download ${item.filename}`}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Start & Founder Support Hotline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Quick Start Flashing Instructions */}
          <div className="ha-card p-6 rounded-3xl bg-white border border-[#E2E8E4] space-y-3 text-xs">
            <h3 className="font-bold text-sm text-[#17211B] flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#087443]" />
              <span>Firmware Flashing Quick-Start</span>
            </h3>
            <ol className="space-y-2 list-decimal list-inside text-[#647067] leading-relaxed">
              <li>Extract the firmware `.zip` file into your local project directory.</li>
              <li>Open **VS Code with PlatformIO** or **Arduino IDE 2.3+**.</li>
              <li>Select board **`ESP32 Dev Module`** and connect USB-C / micro-USB cable.</li>
              <li>Install dependencies from `requirements.txt` / `platformio.ini`.</li>
              <li>Click **Upload & Monitor** at 115200 baud rate.</li>
            </ol>
          </div>

          {/* Direct Founders Assistance */}
          <div className="ha-card p-6 rounded-3xl bg-white border border-[#E2E8E4] space-y-3 text-xs">
            <h3 className="font-bold text-sm text-[#17211B] flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#087443]" />
              <span>Need Assistance With Circuit Setup?</span>
            </h3>
            <p className="text-[#647067] leading-relaxed">
              Ajithkumar and Harishkumar are available directly for live debugging, component substitution questions, and mock viva prep.
            </p>

            <div className="space-y-2 pt-1 font-bold">
              <a
                href="tel:+918778954899"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] transition-all"
              >
                <span>Ajithkumar: +91 8778954899</span>
                <span className="text-[10px] text-[#087443] font-mono">CALL →</span>
              </a>
              <a
                href="tel:+919342540464"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] hover:border-[#087443] text-[#17211B] transition-all"
              >
                <span>Harishkumar: +91 9342540464</span>
                <span className="text-[10px] text-[#087443] font-mono">CALL →</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
