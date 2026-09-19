'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Code2,
  Wrench,
  Truck,
  GraduationCap,
  Users2,
  CheckCircle2,
  Phone,
  MessageSquare,
  Mail,
  ShieldCheck,
  ArrowRight,
  Clock,
  Layers,
  HelpCircle
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  price: string;
  turnaround: string;
  icon: any;
  description: string;
  features: string[];
  recommendedFor: string;
  ctaText: string;
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryDept, setInquiryDept] = useState('ECE');
  const [inquiryProject, setInquiryProject] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const services: ServiceItem[] = [
    {
      id: 'blueprints',
      title: 'Complete Project Blueprints & Source Code',
      badge: 'INSTANT ACCESS',
      price: '₹4,999',
      turnaround: 'Instant Download',
      icon: Code2,
      description:
        'The gold standard engineering project bundle. Download 100% bench-tested firmware, KiCad/Fritzing schematics, IEEE formatted report, and viva slide deck.',
      features: [
        'Complete tested firmware & application source code',
        'KiCad 8 schematic netlists & Gerber PCB layout',
        '60–80 page IEEE formatted project report (.docx & .pdf)',
        '30+ slide animated PowerPoint viva defense presentation',
        'Database schema (.sql) and component sourcing BOM',
        '100% university viva pass guarantee with QA verification',
      ],
      recommendedFor: 'Teams ready to assemble hardware but need verified code and publication-grade docs.',
      ctaText: 'Browse 120 Projects',
    },
    {
      id: 'customization',
      title: 'Project Customization & Guide Alignment',
      badge: 'POPULAR ADD-ON',
      price: '₹1,499',
      turnaround: '24–48 Hours',
      icon: Wrench,
      description:
        'Does your guide or college committee require a specific sensor, cloud broker (AWS IoT instead of Blynk), or display module? Our senior engineers customize the code and schematics to match your syllabus.',
      features: [
        'Pinout and sensor remapping for your exact hardware',
        'Cloud telemetry migration (AWS IoT, Azure, MQTT, Firebase)',
        'Mobile app / web dashboard UI branding with college logo',
        'Updated IEEE report diagrams and methodology chapter',
        'Direct consultation call with senior hardware engineer',
      ],
      recommendedFor: 'Students with specific university guide conditions and custom sensor additions.',
      ctaText: 'Book Customization',
    },
    {
      id: 'build-for-me',
      title: 'Physical "Build-For-Me" Prototype Delivery',
      badge: 'HANDS-FREE HARDWARE',
      price: '₹8,999 – ₹14,999',
      turnaround: '4–7 Days Doorstep',
      icon: Truck,
      description:
        'Receive the fully assembled, soldered, wired, and bench-tested physical prototype shipped securely to your doorstep with courier tracking across India.',
      features: [
        'Pre-soldered PCB with industrial-grade laser-cut casing',
        'All genuine sensors, microcontrollers, and power adapters included',
        'Bench tested for 48 hours of continuous runtime without thermal drift',
        'Secure anti-static shock-absorbent packaging with express courier',
        'Includes full digital bundle (Code, IEEE report, PPT, Viva QA)',
        'Video unboxing and quick-start wiring video guide',
      ],
      recommendedFor: 'Final-year students short on lab assembly time needing a flawless working bench demo.',
      ctaText: 'Inquire Prototype Dispatch',
    },
    {
      id: 'viva-mentoring',
      title: '1-on-1 Viva & Defense Mentoring',
      badge: 'HIGH CONFIDENCE',
      price: '₹999',
      turnaround: '2 Hours Live Session',
      icon: GraduationCap,
      description:
        '2-hour intensive mock viva examination conducted over Google Meet / Zoom with an experienced external examiner and research mentor.',
      features: [
        'Detailed line-by-line code walk-through explaining algorithms',
        'Explanation of circuit voltage dividers, pull-up resistors, and IC pinouts',
        '40 high-yield examiner viva questions with model answers',
        'Tricky corner-case stress questions and how to defend them',
        'Audio recording of mock session provided for review',
      ],
      recommendedFor: 'Students preparing for external college panel defense wanting an S-grade/A-grade.',
      ctaText: 'Book Viva Mock Defense',
    },
    {
      id: 'team-collaboration',
      title: 'Full Semester Team Collaboration Package',
      badge: 'END-TO-END',
      price: '₹12,499',
      turnaround: 'Full Semester (3–4 Months)',
      icon: Users2,
      description:
        'Complete academic engineering partnership from problem statement finalization, Phase 1 review, prototype assembly, to final viva defense.',
      features: [
        'Assistance with IEEE base paper selection and synopsis review',
        'Phase 1 and Phase 2 review slide preparation and rehearsal',
        'Complete working hardware prototype delivered to your team',
        'Plagiarism-free IEEE project report with publication assistance',
        'Unlimited WhatsApp and phone support with founders',
      ],
      recommendedFor: '4-member student capstone teams seeking end-to-end guidance and zero academic stress.',
      ctaText: 'Enroll Capstone Team',
    },
  ];

  const handleOpenInquiry = (service: ServiceItem) => {
    if (service.id === 'blueprints') {
      window.location.href = '/projects';
      return;
    }
    setSelectedService(service);
    setInquirySubmitted(false);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setSelectedService(null);
      setInquirySubmitted(false);
      setInquiryName('');
      setInquiryPhone('');
      setInquiryProject('');
    }, 3500);
  };

  return (
    <div className="min-h-screen tech-grid-bg py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087443]/10 border border-[#087443]/20 text-xs font-mono font-bold text-[#087443]">
            <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>Academic Engineering Services & Hardware Prototyping</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17211B] tracking-tight">
            Tailored Engineering Support For Your Semester Capstone
          </h1>
          <p className="text-sm sm:text-base text-[#647067] leading-relaxed">
            From instant verified source code and IEEE reports to custom hardware modifications, physical prototype delivery across India, and 1-on-1 mock viva defense.
          </p>

          {/* Quick contact hotline pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:+918778954899"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E2E8E4] hover:border-[#087443] text-xs font-bold text-[#17211B] shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#087443]" />
              <span>Call Ajithkumar: <strong>+91 8778954899</strong></span>
            </a>
            <a
              href="tel:+919342540464"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E2E8E4] hover:border-[#087443] text-xs font-bold text-[#17211B] shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#087443]" />
              <span>Call Harishkumar: <strong>+91 9342540464</strong></span>
            </a>
            <a
              href="mailto:halabs.project@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E2E8E4] hover:border-[#087443] text-xs font-bold text-[#17211B] shadow-xs"
            >
              <Mail className="w-3.5 h-3.5 text-[#087443]" />
              <span>halabs.project@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            const isFeatured = s.id === 'blueprints' || s.id === 'customization';

            return (
              <div
                key={s.id}
                className={`ha-card rounded-3xl bg-white border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-lg ${
                  isFeatured
                    ? 'border-[#087443] ring-1 ring-[#087443]/20'
                    : 'border-[#E2E8E4] hover:border-[#087443]/40'
                }`}
              >
                {isFeatured && (
                  <div className="absolute top-0 right-0 bg-[#087443] text-white text-[10px] font-mono font-bold px-3 py-1 rounded-bl-xl tracking-wider">
                    RECOMMENDED
                  </div>
                )}

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="p-3 rounded-2xl bg-emerald-50 text-[#087443] border border-emerald-200">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#F8FAF9] border border-[#E2E8E4] text-[10px] font-mono font-bold text-[#647067]">
                      {s.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-[#17211B] leading-snug">
                      {s.title}
                    </h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-2xl font-mono font-black text-[#087443]">
                        {s.price}
                      </span>
                      <span className="text-xs text-[#647067] font-medium">
                        · {s.turnaround}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#647067] leading-relaxed">
                    {s.description}
                  </p>

                  <div className="pt-2 border-t border-[#E2E8E4] space-y-2.5">
                    <div className="text-[11px] font-bold text-[#17211B] uppercase tracking-wider">
                      Included In Package:
                    </div>
                    <ul className="space-y-2 text-xs">
                      {s.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#17211B]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                          <span className="text-xs leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] text-[11px] text-[#647067]">
                    <strong>Ideal for:</strong> {s.recommendedFor}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => handleOpenInquiry(s)}
                    className="w-full py-3 px-4 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>{s.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Institutional & University Standards Strip */}
        <div className="ha-card p-8 rounded-3xl bg-white border border-[#E2E8E4] space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl font-bold text-[#17211B]">
              Why Engineering Colleges Across India Trust HA Labs
            </h3>
            <p className="text-xs text-[#647067]">
              Every hardware schematic, firmware build, and report template adheres strictly to university examination rubrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#087443] flex items-center justify-center mx-auto font-black">
                0%
              </div>
              <h4 className="font-bold text-[#17211B] text-xs">Zero Compile Errors</h4>
              <p className="text-[11px] text-[#647067]">Libraries pinned to exact stable compiler versions.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#087443] flex items-center justify-center mx-auto font-black">
                100%
              </div>
              <h4 className="font-bold text-[#17211B] text-xs">Original Schematics</h4>
              <p className="text-[11px] text-[#647067]">High-resolution KiCad schematics with netlists.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#087443] flex items-center justify-center mx-auto font-black">
                IEEE
              </div>
              <h4 className="font-bold text-[#17211B] text-xs">Standard Format</h4>
              <p className="text-[11px] text-[#647067]">Pre-formatted with table of figures and bibliography.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#087443] flex items-center justify-center mx-auto font-black">
                24/7
              </div>
              <h4 className="font-bold text-[#17211B] text-xs">Direct Support</h4>
              <p className="text-[11px] text-[#647067]">Direct founder hotline for urgent lab defense questions.</p>
            </div>
          </div>
        </div>

      </div>

      {/* ── CONSULTATION & INQUIRY MODAL ─────────────────────────────────────────── */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#E2E8E4] max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-fade-slide-up">
            
            <div className="flex items-start justify-between border-b border-[#E2E8E4] pb-4">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                  {selectedService.badge}
                </span>
                <h3 className="text-xl font-black text-[#17211B] mt-1">
                  Inquire: {selectedService.title}
                </h3>
                <span className="text-xs font-mono font-bold text-[#087443]">
                  Pricing: {selectedService.price} · {selectedService.turnaround}
                </span>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#17211B] hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            {inquirySubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#087443] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#17211B]">Inquiry Received!</h4>
                <p className="text-xs text-[#647067] max-w-sm mx-auto">
                  Ajithkumar or Harishkumar will contact you via WhatsApp/call within 2 hours to confirm specifications.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Your Name & Team Name</label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Ajith Kumar / Team RoboKnights"
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#17211B] mb-1">Mobile / WhatsApp No.</label>
                    <input
                      type="tel"
                      required
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      placeholder="e.g. 8778954899"
                      className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#17211B] mb-1">Department</label>
                    <select
                      value={inquiryDept}
                      onChange={(e) => setInquiryDept(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none bg-white"
                    >
                      <option value="ECE">ECE</option>
                      <option value="CSE">CSE</option>
                      <option value="AI & DS">AI & DS</option>
                      <option value="EEE">EEE</option>
                      <option value="MECH">MECH</option>
                      <option value="IT">IT</option>
                      <option value="CIVIL">CIVIL</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Project Topic / Specifications</label>
                  <textarea
                    rows={3}
                    required
                    value={inquiryProject}
                    onChange={(e) => setInquiryProject(e.target.value)}
                    placeholder="e.g. Smart IoT agriculture system. Need to add soil NPK sensor and send SMS alerts via Twilio."
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <a
                    href="https://wa.me/918778954899?text=Hi%20Ajithkumar,%20I%20need%20quick%20assistance%20with%20an%20engineering%20service"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-emerald-50 text-[#087443] hover:bg-emerald-100 font-bold text-xs flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>WhatsApp Direct</span>
                  </a>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold text-xs shadow-xs transition-all"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
