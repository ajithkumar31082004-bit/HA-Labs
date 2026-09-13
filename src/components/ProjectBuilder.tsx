'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Wrench, Plus, Check, ArrowRight, Layers, Cpu, Cloud, Monitor, Server, Sparkles } from 'lucide-react';

interface Addon {
  id: string;
  name: string;
  cost: number;
  timeAddDays: number;
  category: 'hardware' | 'feature';
}

const AVAILABLE_ADDONS: Addon[] = [
  { id: 'rfid', name: 'RC522 RFID Card Access Reader', cost: 250, timeAddDays: 4, category: 'hardware' },
  { id: 'camera', name: 'ESP32-CAM / USB OCR License Plate Scanner', cost: 850, timeAddDays: 7, category: 'hardware' },
  { id: 'oled', name: '0.96 inch I2C OLED Slot Occupancy Display', cost: 220, timeAddDays: 2, category: 'hardware' },
  { id: 'servo', name: 'Dual Servo Barrier Gate Mechanism', cost: 350, timeAddDays: 3, category: 'hardware' },
  { id: 'sms', name: 'Twilio SMS Notification Alert System', cost: 150, timeAddDays: 2, category: 'feature' },
  { id: 'ml', name: 'Peak-Hour Demand Prediction ML Model', cost: 400, timeAddDays: 6, category: 'feature' },
];

export function ProjectBuilder() {
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['rfid', 'oled']);
  const [selectedCloud, setSelectedCloud] = useState<'AWS' | 'Firebase' | 'Local Server'>('AWS');
  const [selectedFrontend, setSelectedFrontend] = useState<'React' | 'HTML/CSS/JS'>('React');
  const [selectedBackend, setSelectedBackend] = useState<'Node.js' | 'Python'>('Node.js');

  const baseCost = 3500;
  const baseDays = 21; // 3 weeks

  const addonTotalCost = selectedAddons.reduce((acc, addonId) => {
    const addon = AVAILABLE_ADDONS.find((a) => a.id === addonId);
    return acc + (addon?.cost || 0);
  }, 0);

  const addonTotalDays = selectedAddons.reduce((acc, addonId) => {
    const addon = AVAILABLE_ADDONS.find((a) => a.id === addonId);
    return acc + (addon?.timeAddDays || 0);
  }, 0);

  const totalCost = baseCost + addonTotalCost;
  const totalWeeks = Math.ceil((baseDays + addonTotalDays) / 7);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 relative bg-[#070c18] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>MODULAR ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your Project, Your Way.
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Never build a rigid copy-pasted prototype. With HA Labs, mix and match microcontrollers, sensors, cloud platforms, and frontend frameworks to fit your syllabus and college lab guidelines.
          </p>
        </div>

        {/* Builder Studio Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left customization column */}
          <div className="lg:col-span-8 rounded-3xl bg-[#0b1224] border border-white/10 p-6 sm:p-8 space-y-7 shadow-xl">
            {/* Base Project Banner */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-mono text-brand-cyan tracking-wider font-bold">
                  BASE TEMPLATE
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  Smart Parking System
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Standard baseline: ESP32 Controller + 4x Ultrasonic Sonar Array
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                Baseline: ₹3,500 • 3 Weeks
              </div>
            </div>

            {/* Hardware Add-on Matrix */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-brand-cyan" />
                  <span>Choose Hardware & Sensor Add-ons</span>
                </label>
                <span className="text-xs text-brand-cyan font-mono">
                  {selectedAddons.length} Selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {AVAILABLE_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-brand-cyan/15 border-brand-cyan text-white shadow-sm'
                          : 'bg-surface-50 border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="space-y-0.5 pr-2">
                        <p className="text-xs font-semibold text-white">{addon.name}</p>
                        <p className="text-[11px] font-mono text-slate-400">
                          +₹{addon.cost} • +{addon.timeAddDays} days
                        </p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
                          isChecked ? 'bg-brand-cyan text-black' : 'border border-white/20'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Cloud & Backend Configuration */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {/* Cloud Provider */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                  <Cloud className="w-3.5 h-3.5 text-sky-400" />
                  <span>Cloud Stack</span>
                </label>
                <div className="space-y-1.5">
                  {(['AWS', 'Firebase', 'Local Server'] as const).map((cloud) => (
                    <button
                      key={cloud}
                      type="button"
                      onClick={() => setSelectedCloud(cloud)}
                      className={`w-full py-2 px-3 rounded-lg text-xs font-medium border text-left transition-all ${
                        selectedCloud === cloud
                          ? 'bg-sky-500/20 border-sky-400 text-sky-300 font-bold'
                          : 'bg-surface-50 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {cloud}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frontend Choice */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                  <Monitor className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Dashboard UI</span>
                </label>
                <div className="space-y-1.5">
                  {(['React', 'HTML/CSS/JS'] as const).map((fe) => (
                    <button
                      key={fe}
                      type="button"
                      onClick={() => setSelectedFrontend(fe)}
                      className={`w-full py-2 px-3 rounded-lg text-xs font-medium border text-left transition-all ${
                        selectedFrontend === fe
                          ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300 font-bold'
                          : 'bg-surface-50 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {fe}
                    </button>
                  ))}
                </div>
              </div>

              {/* Backend Choice */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-emerald-400" />
                  <span>API Backend</span>
                </label>
                <div className="space-y-1.5">
                  {(['Node.js', 'Python'] as const).map((be) => (
                    <button
                      key={be}
                      type="button"
                      onClick={() => setSelectedBackend(be)}
                      className={`w-full py-2 px-3 rounded-lg text-xs font-medium border text-left transition-all ${
                        selectedBackend === be
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold'
                          : 'bg-surface-50 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {be}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right summary & estimate card */}
          <div className="lg:col-span-4 rounded-3xl bg-gradient-to-b from-[#101b33] to-[#0a1020] border-2 border-brand-cyan/40 p-6 sm:p-7 shadow-glow-cyan">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan text-brand-cyan text-xs font-mono font-bold mb-4">
              <Sparkles className="w-3 h-3" />
              <span>CUSTOM SPECIFICATION</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              Smart Parking Custom
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Tailored bill of materials and architecture tailored to your specific lab requirements.
            </p>

            {/* Estimates */}
            <div className="space-y-4 pb-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 uppercase font-mono">Estimated BOM Cost</span>
                <span className="text-2xl font-extrabold text-brand-cyan font-mono">
                  ₹{totalCost.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 uppercase font-mono">Estimated Dev Time</span>
                <span className="text-base font-semibold text-white font-mono">
                  {totalWeeks}–{totalWeeks + 2} Weeks
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 uppercase font-mono">Difficulty Level</span>
                <span className="text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                  {selectedAddons.length > 2 ? 'Intermediate-Advanced' : 'Intermediate'}
                </span>
              </div>
            </div>

            {/* Selected Stack summary */}
            <div className="py-4 space-y-2 text-xs">
              <span className="block text-[10px] uppercase font-mono text-slate-400 tracking-wider">
                Configured Architecture Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
                  ESP32
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
                  {selectedCloud}
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
                  {selectedFrontend}
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
                  {selectedBackend}
                </span>
                {selectedAddons.map((addonId) => {
                  const addon = AVAILABLE_ADDONS.find((a) => a.id === addonId);
                  return (
                    <span
                      key={addonId}
                      className="px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-[11px]"
                    >
                      {addon?.name.split(' ')[0]}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Action */}
            <Link
              href="/signup?ref=builder"
              className="mt-4 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all"
            >
              <span>Build This Custom Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProjectBuilder;
