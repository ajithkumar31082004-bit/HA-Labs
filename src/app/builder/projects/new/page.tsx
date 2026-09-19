'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useProjectStore } from '@/context/ProjectStoreContext';
import { DEPARTMENTS } from '@/components/Navbar';
import {
  ChevronRight,
  ArrowRight,
  Upload,
  CheckCircle2,
  FileCode,
  ShieldCheck,
  Plus,
  Zap,
  Sparkles,
  Layers,
  HelpCircle
} from 'lucide-react';

export default function NewBuilderProjectPage() {
  const router = useRouter();
  const { submitBuilderProject, currentUser } = useProjectStore();

  const [wizardStep, setWizardStep] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(1);
  const [formData, setFormData] = useState({
    title: '',
    department: 'ECE',
    category: 'IoT',
    shortDesc: '',
    detailedDesc: '',
    technologies: 'ESP32, MQTT, C++',
    hardware: 'ESP32 DevKit, Sensors, Relays',
    software: 'PlatformIO, Node.js',
    languages: 'C++, TypeScript',
    frameworks: 'Express, React',
    database: 'PostgreSQL / InfluxDB',
    apis: 'REST API, WebSockets',
    skillLevel: 'Intermediate' as 'Beginner' | 'Intermediate' | 'Advanced',
    buildTime: '3–4 Weeks',
    teamSize: '3–4',
    hardwareCost: '₹3,500',
    softwareRequirements: 'VS Code, Arduino IDE 2.0',
    price: 4999,
    installationPrice: 999,
    customizationPrice: 1999,
    mentorshipPrice: 999,
  });

  const handleWizardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitBuilderProject({
      title: formData.title,
      department: formData.department,
      category: formData.category,
      difficulty: formData.skillLevel,
      price: Number(formData.price),
    });
    router.push('/builder');
  };

  return (
    <div className="min-h-screen tech-grid-bg py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#647067]">
          <Link href="/builder" className="hover:text-[#087443]">Builder Studio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-[#17211B]">Submit New Engineering Project</span>
        </div>

        {/* Header */}
        <div className="ha-card p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8E4] shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#087443] animate-pulse" />
            <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
              7-Step Project Submission Wizard
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#17211B] tracking-tight">
            Publish an Engineering Project to HA Labs
          </h1>
          <p className="text-xs sm:text-sm text-[#647067]">
            Creators receive <strong>85% direct payout</strong> for every verified student purchase. Fill in the required specifications for admin review.
          </p>
        </div>

        {/* 7 Step Progress Stepper */}
        <div className="flex items-center justify-between overflow-x-auto pb-2 border-b border-[#E2E8E4] text-xs font-mono font-bold">
          {[
            { s: 1, label: '1. Basic Info' },
            { s: 2, label: '2. Tech Stack' },
            { s: 3, label: '3. Specs' },
            { s: 4, label: '4. Media' },
            { s: 5, label: '5. Deliverables' },
            { s: 6, label: '6. Pricing' },
            { s: 7, label: '7. Submit' },
          ].map((item) => (
            <button
              key={item.s}
              type="button"
              onClick={() => setWizardStep(item.s as any)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                wizardStep === item.s
                  ? 'bg-[#087443] text-white shadow-xs'
                  : item.s < wizardStep
                  ? 'text-[#087443] bg-emerald-50'
                  : 'text-[#647067] hover:text-[#17211B]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Step Forms */}
        <form onSubmit={handleWizardSubmit} className="ha-card p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8E4] shadow-xs space-y-6">
          
          {/* STEP 1: BASIC INFO */}
          {wizardStep === 1 && (
            <div className="space-y-4 text-xs">
              <h3 className="text-base font-bold text-[#17211B]">Step 1: Basic Project Information</h3>
              <div>
                <label className="block font-bold text-[#17211B] mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Autonomous LoRa Wildlife Tracking Collar"
                  className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Department *</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none bg-white"
                  >
                    {DEPARTMENTS.map((d) => (
                      <option key={d.code} value={d.code}>{d.code} — {d.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none bg-white"
                  >
                    <option value="IoT">IoT / Wireless</option>
                    <option value="Embedded">Embedded Systems</option>
                    <option value="Robotics">Robotics & Automation</option>
                    <option value="Power Electronics">Power Electronics</option>
                    <option value="AI / Computer Vision">Edge AI / Computer Vision</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#17211B] mb-1">Short Tagline *</label>
                <input
                  type="text"
                  required
                  value={formData.shortDesc}
                  onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                  placeholder="One sentence describing problem and engineering solution."
                  className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setWizardStep(2)}
                  className="px-5 py-2.5 rounded-xl bg-[#087443] hover:bg-[#065331] text-white font-bold flex items-center gap-1.5"
                >
                  <span>Continue to Tech Stack</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: TECH STACK */}
          {wizardStep === 2 && (
            <div className="space-y-4 text-xs">
              <h3 className="text-base font-bold text-[#17211B]">Step 2: Technical Specifications</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Hardware Components *</label>
                  <input
                    type="text"
                    value={formData.hardware}
                    onChange={(e) => setFormData({ ...formData, hardware: e.target.value })}
                    placeholder="ESP32, LoRa SX1278, GPS NEO-6M"
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Languages & Firmware *</label>
                  <input
                    type="text"
                    value={formData.languages}
                    onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                    placeholder="Embedded C++, Python 3.11"
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Database & Storage</label>
                  <input
                    type="text"
                    value={formData.database}
                    onChange={(e) => setFormData({ ...formData, database: e.target.value })}
                    placeholder="PostgreSQL, InfluxDB"
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Web / Cloud Dashboard</label>
                  <input
                    type="text"
                    value={formData.frameworks}
                    onChange={(e) => setFormData({ ...formData, frameworks: e.target.value })}
                    placeholder="Next.js, Tailwind, AWS IoT"
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setWizardStep(1)}
                  className="px-4 py-2 rounded-xl border border-[#E2E8E4] font-bold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setWizardStep(3)}
                  className="px-5 py-2.5 rounded-xl bg-[#087443] text-white font-bold flex items-center gap-1.5"
                >
                  <span>Continue to Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SPECS & BUDGET */}
          {wizardStep === 3 && (
            <div className="space-y-4 text-xs">
              <h3 className="text-base font-bold text-[#17211B]">Step 3: Build Requirements & Estimates</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Difficulty Level *</label>
                  <select
                    value={formData.skillLevel}
                    onChange={(e) => setFormData({ ...formData, skillLevel: e.target.value as any })}
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none bg-white"
                  >
                    <option value="Beginner">Beginner (1st/2nd Year)</option>
                    <option value="Intermediate">Intermediate (3rd Year Mini-Project)</option>
                    <option value="Advanced">Advanced (Final Year Capstone)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Recommended Team Size</label>
                  <input
                    type="text"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Estimated Build Time</label>
                  <input
                    type="text"
                    value={formData.buildTime}
                    onChange={(e) => setFormData({ ...formData, buildTime: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#17211B] mb-1">Hardware Sourcing Budget</label>
                  <input
                    type="text"
                    value={formData.hardwareCost}
                    onChange={(e) => setFormData({ ...formData, hardwareCost: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setWizardStep(2)}
                  className="px-4 py-2 rounded-xl border border-[#E2E8E4] font-bold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setWizardStep(4)}
                  className="px-5 py-2.5 rounded-xl bg-[#087443] text-white font-bold flex items-center gap-1.5"
                >
                  <span>Continue to Media</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: VISUAL GALLERY */}
          {wizardStep === 4 && (
            <div className="space-y-4 text-xs">
              <h3 className="text-base font-bold text-[#17211B]">Step 4: Bench Proof Media & Photos</h3>
              <p className="text-[#647067]">
                Upload high-resolution bench prototype photographs. Admins verify hardware photos to prevent simulated duplicates.
              </p>

              <div className="border-2 border-dashed border-[#E2E8E4] p-8 rounded-2xl text-center space-y-2 hover:border-[#087443] transition-colors">
                <Upload className="w-8 h-8 text-[#087443] mx-auto" />
                <div className="font-bold text-[#17211B]">Drag & Drop Hardware / Dashboard Screenshots</div>
                <div className="text-[11px] text-[#647067]">PNG, WEBP, or JPG up to 10MB each</div>
                <button type="button" className="px-3.5 py-1.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] font-bold text-xs">
                  Select Photos
                </button>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setWizardStep(3)}
                  className="px-4 py-2 rounded-xl border border-[#E2E8E4] font-bold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setWizardStep(5)}
                  className="px-5 py-2.5 rounded-xl bg-[#087443] text-white font-bold flex items-center gap-1.5"
                >
                  <span>Continue to Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: DELIVERABLES UPLOAD */}
          {wizardStep === 5 && (
            <div className="space-y-4 text-xs">
              <h3 className="text-base font-bold text-[#17211B]">Step 5: Deliverables Pack (.zip, .kicad, .docx, .pptx)</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl border border-[#E2E8E4] bg-[#F8FAF9] space-y-1">
                  <div className="font-bold text-[#17211B]">Firmware Source Code (.zip)</div>
                  <div className="text-[11px] text-[#647067]">Contains full code repository and pinout definitions.</div>
                  <button type="button" className="mt-1 text-xs font-bold text-[#087443] hover:underline">
                    + Attach Code.zip
                  </button>
                </div>

                <div className="p-4 rounded-xl border border-[#E2E8E4] bg-[#F8FAF9] space-y-1">
                  <div className="font-bold text-[#17211B]">KiCad PCB & Schematics (.kicad)</div>
                  <div className="text-[11px] text-[#647067]">Schematic netlists and Gerber fabrication files.</div>
                  <button type="button" className="mt-1 text-xs font-bold text-[#087443] hover:underline">
                    + Attach Schematics
                  </button>
                </div>

                <div className="p-4 rounded-xl border border-[#E2E8E4] bg-[#F8FAF9] space-y-1">
                  <div className="font-bold text-[#17211B]">IEEE Project Report (.docx)</div>
                  <div className="text-[11px] text-[#647067]">Formatted academic report with literature survey.</div>
                  <button type="button" className="mt-1 text-xs font-bold text-[#087443] hover:underline">
                    + Attach Report
                  </button>
                </div>

                <div className="p-4 rounded-xl border border-[#E2E8E4] bg-[#F8FAF9] space-y-1">
                  <div className="font-bold text-[#17211B]">Viva Presentation Deck (.pptx)</div>
                  <div className="text-[11px] text-[#647067]">Slide deck for external examiner viva evaluation.</div>
                  <button type="button" className="mt-1 text-xs font-bold text-[#087443] hover:underline">
                    + Attach PPT Deck
                  </button>
                </div>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setWizardStep(4)}
                  className="px-4 py-2 rounded-xl border border-[#E2E8E4] font-bold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setWizardStep(6)}
                  className="px-5 py-2.5 rounded-xl bg-[#087443] text-white font-bold flex items-center gap-1.5"
                >
                  <span>Continue to Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: PRICING & PAYOUTS */}
          {wizardStep === 6 && (
            <div className="space-y-4 text-xs">
              <h3 className="text-base font-bold text-[#17211B]">Step 6: Marketplace Pricing & Builder Share</h3>
              
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                <span className="font-bold text-[#087443]">85% Creator Payout Guarantee</span>
                <p className="text-[#17211B] text-[11px]">
                  For a base price of ₹{formData.price.toLocaleString()}, you receive <strong className="font-mono text-[#087443]">₹{Math.round(formData.price * 0.85).toLocaleString()}</strong> directly to your bank account / UPI for each purchase.
                </p>
              </div>

              <div>
                <label className="block font-bold text-[#17211B] mb-1">Base Deliverables Price (INR) *</label>
                <input
                  type="number"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                  className="w-full p-2.5 rounded-xl border border-[#E2E8E4] focus:border-[#087443] outline-none font-mono text-sm font-bold"
                />
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setWizardStep(5)}
                  className="px-4 py-2 rounded-xl border border-[#E2E8E4] font-bold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setWizardStep(7)}
                  className="px-5 py-2.5 rounded-xl bg-[#087443] text-white font-bold flex items-center gap-1.5"
                >
                  <span>Review & Finalize</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 7: REVIEW & SUBMIT */}
          {wizardStep === 7 && (
            <div className="space-y-4 text-xs">
              <h3 className="text-base font-bold text-[#17211B]">Step 7: Final Review & Admin Verification</h3>
              
              <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2E8E4] space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#647067]">Project Title:</span>
                  <strong className="text-[#17211B]">{formData.title || 'Untitled Project'}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#647067]">Department:</span>
                  <strong className="text-[#087443]">{formData.department}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#647067]">Difficulty:</span>
                  <strong>{formData.skillLevel}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#647067]">Base Price:</span>
                  <strong className="font-mono text-[#087443]">₹{formData.price.toLocaleString()}</strong>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-[#17211B] space-y-1">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Admin 8-Point Bench Test Policy</span>
                </span>
                <p className="text-[11px] text-[#647067]">
                  Your project will enter the admin verification queue. Once verified by senior hardware mentors, it will be published live to students nationwide.
                </p>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setWizardStep(6)}
                  className="px-4 py-2 rounded-xl border border-[#E2E8E4] font-bold"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-[#087443] hover:bg-[#065331] text-white font-black text-xs shadow-md transition-all flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                  <span>Submit Project For Admin Verification</span>
                </button>
              </div>
            </div>
          )}

        </form>

      </div>
    </div>
  );
}
