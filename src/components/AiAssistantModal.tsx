'use client';

import React, { useState } from 'react';
import { Bot, User, Send, Sparkles, Terminal, CheckCircle2, ChevronRight, CornerDownLeft } from 'lucide-react';

interface PresetPrompt {
  id: string;
  title: string;
  query: string;
  response: {
    title: string;
    bullets: string[];
  };
}

const PRESET_CONVERSATIONS: PresetPrompt[] = [
  {
    id: 'esp32-troubleshoot',
    title: 'Hardware & Network Debugging',
    query: 'My ESP32 is not sending sensor data to my Node.js server.',
    response: {
      title: "Let's troubleshoot it step by step:",
      bullets: [
        '1. Check Wi-Fi connection: Verify WiFi.status() == WL_CONNECTED in loop() and print local IP to Serial.',
        '2. Verify server IP and port: If running Node.js on your laptop, use laptop local IPv4 (e.g. 192.168.1.45:5000), NOT "localhost".',
        '3. Test the API endpoint: Send a test POST via Postman or curl from another device on the same subnet.',
        '4. Check ESP32 serial output: Inspect HTTP response code (e.g., -1 indicates timeout, 404 indicates wrong path, 500 indicates server crash).',
        '5. Verify firewall/security-group rules: Allow inbound TCP traffic on port 5000 in Windows Defender Firewall.'
      ]
    }
  },
  {
    id: 'budget-recommendation',
    title: 'Budget & Branch Matching',
    query: 'I have ₹2,000 and want an ECE IoT project.',
    response: {
      title: 'Here are your highest compatibility engineering matches under ₹2,000:',
      bullets: [
        '1. Smart Street Light with Ambient Sensation — 96% Match (LDR + IR sensors, ₹800–₹1,500, 1-2 weeks)',
        '2. Smart Fire & Gas Leakage Detection System — 93% Match (MQ-2 gas sensor + flame sensor, ₹900–₹1,800)',
        '3. Temperature & Humidity Cloud Logger — 89% Match (ESP8266 + DHT11 + Thingspeak, ₹1,200–₹1,900)'
      ]
    }
  },
  {
    id: 'viva-prep',
    title: 'Comprehensive Viva Examination Prep',
    query: 'Explain Smart Parking System for my viva.',
    response: {
      title: 'Viva Defense Breakdown: Smart Parking System',
      bullets: [
        '• Introduction: IoT-based urban parking automation system using ESP32 ultrasonic telemetry.',
        '• Problem Statement: Drivers spend up to 20 minutes finding vacant slots, contributing to 30% of urban traffic congestion.',
        '• Architecture: Ultrasonic sensors → ESP32 ADC → MQTT/HTTP payload → Node.js server → MySQL DB → Web client.',
        '• Working Principle: Transmits 40kHz ultrasound pulses; time of flight (ToF) determines slot occupancy state.',
        '• Technologies: ESP32 Tensilica LX6, FreeRTOS, Node.js Express, MySQL, Docker, AWS EC2.',
        '• Advantages: Sub-second slot updates, automated billing, reduces fuel wastage by 22%.',
        '• Key Viva Question: "How do you handle sensor crosstalk?" Answer: Sequenced round-robin firing of adjacent ultrasonic triggers at 60ms intervals.'
      ]
    }
  }
];

export function AiAssistant() {
  const [activePreset, setActivePreset] = useState<PresetPrompt>(PRESET_CONVERSATIONS[0]);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; content: string | { title: string; bullets: string[] } }>>([
    { sender: 'user', content: PRESET_CONVERSATIONS[0].query },
    { sender: 'ai', content: PRESET_CONVERSATIONS[0].response },
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const handleSelectPreset = (preset: PresetPrompt) => {
    setActivePreset(preset);
    setIsThinking(true);
    setMessages([
      { sender: 'user', content: preset.query },
    ]);
    setTimeout(() => {
      setMessages([
        { sender: 'user', content: preset.query },
        { sender: 'ai', content: preset.response }
      ]);
      setIsThinking(false);
    }, 450);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setInputMessage('');
    setMessages((prev) => [...prev, { sender: 'user', content: userText }]);
    setIsThinking(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          content: {
            title: `HA Engineering Analysis for: "${userText}"`,
            bullets: [
              '1. Hardware Architecture: Validate pin assignments on ESP32/microcontroller GPIO.',
              '2. Firmware Logic: Check timing loops, baud rates (115200 for ESP32), and pull-up resistors.',
              '3. Telemetry Ingestion: Ensure JSON payloads match schema formats expected by your REST/MQTT backend.',
              '4. Viva Point: Examiners commonly ask why you avoided blocking delay() routines in favor of millis() timers.'
            ]
          }
        }
      ]);
      setIsThinking(false);
    }, 600);
  };

  return (
    <section id="ai-assistant" className="py-20 relative tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span>SPECIALIZED ENGINEERING COPILOT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Meet your AI Project Assistant.
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Stuck during development? Ask questions about your project, hardware pinouts, code syntax, AWS cloud deployment, project documentation, or viva questions.
          </p>
        </div>

        {/* AI Chat Console UI */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#090f20]/95 border border-white/15 shadow-2xl overflow-hidden backdrop-blur-2xl">
          {/* Console Header */}
          <div className="px-6 py-4 bg-[#0d162d] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="h-4 w-px bg-white/15 mx-1" />
              <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
                <span>ha-ai-assistant --model engineering-v2</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-emerald-400">Online & Ready</span>
            </div>
          </div>

          {/* Quick Preset Prompts */}
          <div className="p-4 bg-black/30 border-b border-white/5 flex flex-wrap gap-2">
            {PRESET_CONVERSATIONS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => handleSelectPreset(preset)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activePreset.id === preset.id
                    ? 'bg-brand-cyan/20 border border-brand-cyan text-cyan-300 font-semibold shadow-sm'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <Sparkles className="w-3 h-3 text-brand-cyan" />
                <span>{preset.title}</span>
              </button>
            ))}
          </div>

          {/* Chat Messages Body */}
          <div className="p-6 sm:p-8 space-y-6 min-h-[340px] max-h-[480px] overflow-y-auto">
            {messages.map((msg, index) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={index}
                  className={`flex gap-3.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center flex-shrink-0 text-brand-cyan">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`rounded-2xl p-4 max-w-2xl text-xs sm:text-sm leading-relaxed ${
                      isUser
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                        : 'bg-white/5 border border-white/10 text-slate-200'
                    }`}
                  >
                    {typeof msg.content === 'string' ? (
                      <p>{msg.content}</p>
                    ) : (
                      <div className="space-y-2">
                        <p className="font-semibold text-brand-cyan font-mono text-xs">
                          {msg.content.title}
                        </p>
                        <ul className="space-y-1.5 text-slate-300 font-sans">
                          {msg.content.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-slate-400 select-none">•</span>
                              <span>{b.startsWith('• ') ? b.slice(2) : b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {isUser && (
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 text-slate-300">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {isThinking && (
              <div className="flex gap-3.5 justify-start">
                <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center flex-shrink-0 text-brand-cyan">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="rounded-2xl p-4 bg-white/5 border border-white/10 text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                  <span>Synthesizing engineering response...</span>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input Box */}
          <form onSubmit={handleCustomSubmit} className="p-4 bg-[#0d162d] border-t border-white/10 flex items-center gap-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask anything (e.g. 'How do I configure AWS IoT certificates for ESP32?')..."
              className="flex-1 bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan font-sans"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="px-4 py-2.5 rounded-xl bg-brand-cyan hover:bg-cyan-300 disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <span>Ask</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default AiAssistant;
