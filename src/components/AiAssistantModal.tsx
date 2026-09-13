'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, User, Send, Sparkles, Terminal, CheckCircle2, 
  ChevronRight, X, Wrench, BookOpen, FileText, Lightbulb,
  CornerDownLeft, MessageSquare
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
  streaming?: boolean;
}

interface TopicMode {
  id: 'troubleshoot' | 'viva' | 'report' | 'recommend';
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  placeholder: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const TOPIC_MODES: TopicMode[] = [
  { id: 'troubleshoot', label: 'Troubleshoot', icon: Wrench, color: 'text-amber-400 border-amber-500/30 bg-amber-500/10', placeholder: 'Describe your hardware or software issue...' },
  { id: 'viva', label: 'Viva Prep', icon: BookOpen, color: 'text-purple-400 border-purple-500/30 bg-purple-500/10', placeholder: 'Ask any viva question or topic to practice...' },
  { id: 'report', label: 'Generate Report', icon: FileText, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10', placeholder: 'What section do you need help writing?' },
  { id: 'recommend', label: 'Project Advice', icon: Lightbulb, color: 'text-sky-400 border-sky-500/30 bg-sky-500/10', placeholder: 'Tell me your branch, budget, and interests...' },
];

const QUICK_SUGGESTIONS = [
  'My ESP32 is not sending data to the server',
  'Explain Smart Parking for my viva exam',
  'I have ₹2,000 budget for an ECE IoT project',
  'Help me write the Abstract section for IEEE report',
];

const PRESET_RESPONSES: Record<string, string> = {
  default_troubleshoot: `Let me help you debug this step by step:

**1. Check your Wi-Fi connection**
\`\`\`cpp
if (WiFi.status() != WL_CONNECTED) {
  WiFi.reconnect();
  delay(5000);
}
\`\`\`

**2. Verify your server endpoint**
Use your laptop's **local IPv4 address** (e.g., 192.168.1.45:5000), NOT "localhost" — the ESP32 cannot resolve that hostname.

**3. Check HTTP response codes**
- \`-1\` = Connection timeout (wrong IP/port, or firewall)
- \`404\` = Wrong API path  
- \`500\` = Server crash (check Node.js logs)

**4. Firewall rules**
Allow inbound TCP on port 5000 in Windows Defender Firewall.

What specific error code or Serial output are you seeing?`,

  esp32_not_sending: `Here's a systematic ESP32 HTTP debugging guide:

**Step 1: Verify Wi-Fi connects**
Print \`WiFi.localIP()\` — you need a valid 192.168.x.x address.

**Step 2: Test the server first**
Use \`curl -X POST http://YOUR_PC_IP:5000/api/data\` from another device before testing ESP32.

**Step 3: Check your HTTPClient code**
\`\`\`cpp
HTTPClient http;
http.begin("http://192.168.1.45:5000/api/sensor"); // NOT localhost!
http.addHeader("Content-Type", "application/json");
int httpCode = http.POST("{\"slot\":1,\"occupied\":true}");
Serial.println(httpCode); // Should print 200
http.end();
\`\`\`

**Step 4: Power issue?**
ESP32 needs stable 5V/500mA. USB debugging can cause brownouts when Wi-Fi transmits.`,

  viva_smart_parking: `**Viva Defense: Smart Parking System**

**Introduction (30 seconds)**
"This is an IoT-based urban parking management system using ESP32 microcontrollers with ultrasonic sonar arrays, connected to a Node.js cloud backend via MQTT protocol."

**Key Technical Answers:**

**Q: Why ESP32 over Arduino?**
ESP32 has built-in 2.4GHz Wi-Fi + BLE, 240MHz dual-core processor, and 520KB SRAM — no external Wi-Fi shield needed.

**Q: How does slot detection work?**
HC-SR04 emits 40kHz ultrasonic pulses. Time-of-flight (ToF) = (pulse_duration × 343m/s) / 2. If distance < 20cm → occupied.

**Q: How do you prevent false triggers?**
Median filter: take 5 samples 50ms apart, discard outliers, use median value.

**Q: End-to-end latency?**
~280-450ms: sensor (100ms) + Wi-Fi TX (80ms) + backend (40ms) + WebSocket push (60ms).

**Q: Why MQTT over HTTP?**
MQTT is lightweight (2-byte header vs HTTP overhead), supports publish-subscribe, and handles intermittent connectivity with QoS levels.`,

  budget_2000_ece: `**Best ECE IoT Projects Under ₹2,000:**

**1. Smart Street Light System** — 96% Match
- Budget: ₹800–₹1,500
- Hardware: Arduino/ESP32, LDR, PIR sensor, relay
- Duration: 1–2 weeks
- Best for: Beginner | Mini Project

**2. IoT Fire & Gas Detection System** — 93% Match  
- Budget: ₹900–₹1,800
- Hardware: ESP32, MQ-2 gas sensor, flame sensor, buzzer
- Duration: 1–2 weeks
- Best for: Beginner | Major Project

**3. RFID Smart Attendance System** — 89% Match
- Budget: ₹1,500–₹1,900
- Hardware: ESP32, RC522 RFID module, RFID cards
- Features: Cloud database + web dashboard
- Duration: 2–3 weeks

**4. Smart Home Automation (Basic)** — 85% Match
- Budget: ₹1,200–₹1,800
- Hardware: ESP32, relay modules (4-channel), smartphone app

Which of these interests you? I can help you plan the full bill of materials.`,

  abstract_report: `**IEEE Abstract Template for IoT Projects:**

---

*Abstract—* **[Project Title]** presents a novel **[domain: IoT/AI/embedded]** approach to address **[problem in 1 sentence]**. The proposed system utilizes **[key technologies, e.g., ESP32 microcontroller, MQTT protocol, and AWS cloud infrastructure]** to implement **[core functionality]**. Experimental results demonstrate **[key achievement with numbers, e.g., 94.7% detection accuracy and 280ms end-to-end latency]**, validating the system's effectiveness in **[application domain]**. The hardware prototype was validated under **[testing conditions]**, confirming practical viability for **[deployment scenario]**.

---

**Typical word count:** 150–250 words
**Required elements:** Problem → Proposed approach → Technologies → Results → Conclusion

**Common examiner mistakes to avoid:**
- Don't use "I" or "we" (use "the proposed system")
- Don't start with "This paper..." (outdated style)
- Always include at least one quantitative result

Want me to write a complete abstract for your specific project?`,
};

function getResponse(input: string, topic: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('esp32') && (lower.includes('not sending') || lower.includes('not connecting') || lower.includes('sensor data'))) {
    return PRESET_RESPONSES.esp32_not_sending;
  }
  if ((lower.includes('smart parking') || lower.includes('parking system')) && (lower.includes('viva') || lower.includes('explain') || lower.includes('question'))) {
    return PRESET_RESPONSES.viva_smart_parking;
  }
  if ((lower.includes('₹2,000') || lower.includes('2000') || lower.includes('budget')) && (lower.includes('ece') || lower.includes('iot') || lower.includes('project'))) {
    return PRESET_RESPONSES.budget_2000_ece;
  }
  if (lower.includes('abstract') || (lower.includes('report') && (lower.includes('write') || lower.includes('section') || lower.includes('ieee')))) {
    return PRESET_RESPONSES.abstract_report;
  }
  if (topic === 'troubleshoot') return PRESET_RESPONSES.default_troubleshoot;
  if (topic === 'viva') return PRESET_RESPONSES.viva_smart_parking;
  if (topic === 'report') return PRESET_RESPONSES.abstract_report;
  if (topic === 'recommend') return PRESET_RESPONSES.budget_2000_ece;

  return `I'm HA Labs AI Copilot — specialized in engineering project guidance.

**I can help you with:**
- 🔧 **Hardware debugging** — ESP32 wiring, sensor calibration, I2C/SPI issues
- ☁️ **Cloud deployment** — AWS EC2, Docker, Nginx, port configuration
- 🎓 **Viva preparation** — Architecture defenses, circuit questions, exam coaching
- 📄 **Documentation** — IEEE report templates, abstract writing, PPT structure
- 💡 **Project selection** — Budget-aware recommendations for your branch

Try asking me: *"My ESP32 Serial shows brownout triggered"* or *"Explain MQTT vs HTTP for my viva"*`;
}

// ─── Streaming hook ───────────────────────────────────────────────────────────
function useStreamingText(targetText: string, isStreaming: boolean, onDone: () => void) {
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);
  
  useEffect(() => {
    if (!isStreaming) { setDisplayed(targetText); return; }
    setDisplayed('');
    indexRef.current = 0;
    const interval = setInterval(() => {
      if (indexRef.current < targetText.length) {
        const chunkSize = Math.floor(Math.random() * 4) + 2;
        indexRef.current = Math.min(indexRef.current + chunkSize, targetText.length);
        setDisplayed(targetText.slice(0, indexRef.current));
      } else {
        clearInterval(interval);
        onDone();
      }
    }, 18);
    return () => clearInterval(interval);
  }, [targetText, isStreaming]);
  
  return displayed;
}

// ─── Message Bubble ───────────────────────────────────────────────────────────
function StreamingMessage({ text, isStreaming, onDone }: { text: string; isStreaming: boolean; onDone: () => void }) {
  const displayed = useStreamingText(text, isStreaming, onDone);
  
  // Simple markdown-like renderer
  const renderText = (t: string) => {
    return t.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={i} className="font-bold text-white mt-2 mb-1">{line.slice(2, -2)}</p>;
      }
      if (line.match(/^\*\*(.+?)\*\*/)) {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="text-slate-200 text-xs leading-relaxed">
            {parts.map((part, j) =>
              part.startsWith('**') ? <strong key={j} className="text-white">{part.slice(2, -2)}</strong> : part
            )}
          </p>
        );
      }
      if (line.startsWith('```')) return null;
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return <li key={i} className="text-slate-300 text-xs ml-3 list-disc">{line.slice(2)}</li>;
      }
      if (line.startsWith('#')) {
        const level = line.match(/^#+/)?.[0].length || 1;
        const content = line.replace(/^#+\s/, '');
        return level === 1 
          ? <h3 key={i} className="text-base font-bold text-white mt-3 mb-1">{content}</h3>
          : <h4 key={i} className="text-sm font-bold text-brand-cyan mt-2 mb-0.5">{content}</h4>;
      }
      if (line.trim() === '---') return <hr key={i} className="border-white/10 my-2" />;
      if (line.trim() === '') return <div key={i} className="h-1" />;
      return <p key={i} className="text-slate-300 text-xs leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="text-sm leading-relaxed space-y-0.5">
      {renderText(displayed)}
      {isStreaming && displayed.length < text.length && (
        <span className="inline-block w-1.5 h-4 bg-brand-cyan animate-pulse ml-0.5 rounded-sm" />
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function AiAssistant({ projectContext }: { projectContext?: string }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'assistant',
      text: `Hi! I'm **HA Labs AI Copilot** — your engineering project assistant.\n\nI can help you debug hardware issues, prepare for viva exams, write IEEE reports, and find the perfect project for your budget and branch.\n\nWhat would you like help with today?`,
      timestamp: new Date(),
      streaming: false,
    }
  ]);
  const [input, setInput] = useState('');
  const [activeTopic, setActiveTopic] = useState<TopicMode['id']>('troubleshoot');
  const [isTyping, setIsTyping] = useState(false);
  const [streamingId, setStreamingId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentTopicMode = TOPIC_MODES.find(t => t.id === activeTopic)!;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: text.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking delay
    const thinkDelay = 800 + Math.random() * 600;
    setTimeout(() => {
      const responseText = getResponse(text, activeTopic);
      const assistantId = (Date.now() + 1).toString();
      const assistantMsg: Message = {
        id: assistantId,
        role: 'assistant',
        text: responseText,
        timestamp: new Date(),
        streaming: true,
      };
      setIsTyping(false);
      setStreamingId(assistantId);
      setMessages(prev => [...prev, assistantMsg]);
    }, thinkDelay);
  };

  const handleStreamDone = (id: string) => {
    setStreamingId(null);
    setMessages(prev => prev.map(m => m.id === id ? { ...m, streaming: false } : m));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <section id="ai-assistant" className="py-20 bg-[#050814] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span>HA LABS AI COPILOT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your engineering project assistant
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Debug hardware issues, prepare viva answers, find the right project, and write IEEE reports — all in one AI-powered chat.
          </p>
        </div>

        {/* Chat Window */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#090f20] border border-white/10 shadow-2xl overflow-hidden flex flex-col" style={{ height: '600px' }}>
          
          {/* Header */}
          <div className="px-5 py-4 border-b border-white/10 bg-[#0d1628] flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-cyan/15 border border-brand-cyan/40 flex items-center justify-center">
                <Bot className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block leading-tight">HA Labs AI Copilot</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-emerald-400">Online — Engineering Specialist</span>
                </div>
              </div>
            </div>
            {projectContext && (
              <div className="px-3 py-1.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 text-xs font-mono text-brand-cyan hidden sm:flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Context: {projectContext}</span>
              </div>
            )}
          </div>

          {/* Topic Mode Selector */}
          <div className="px-4 py-3 border-b border-white/5 bg-[#080d1c] flex items-center gap-2 overflow-x-auto flex-shrink-0">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider flex-shrink-0">Mode:</span>
            {TOPIC_MODES.map((mode) => {
              const Icon = mode.icon;
              const isActive = activeTopic === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveTopic(mode.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all flex-shrink-0 ${
                    isActive ? mode.color + ' border-opacity-60' : 'border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/15'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 scroll-smooth">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  msg.role === 'assistant'
                    ? 'bg-brand-cyan/15 border border-brand-cyan/30'
                    : 'bg-white/10 border border-white/15'
                }`}>
                  {msg.role === 'assistant' 
                    ? <Bot className="w-4 h-4 text-brand-cyan" />
                    : <User className="w-4 h-4 text-slate-300" />
                  }
                </div>

                {/* Bubble */}
                <div className={`max-w-[78%] rounded-2xl px-4 py-3 ${
                  msg.role === 'user'
                    ? 'bg-brand-cyan/20 border border-brand-cyan/30 text-white text-sm ml-auto'
                    : 'bg-[#0d1628] border border-white/10'
                }`}>
                  {msg.role === 'user' ? (
                    <p className="text-sm text-white">{msg.text}</p>
                  ) : (
                    <StreamingMessage
                      text={msg.text}
                      isStreaming={msg.streaming === true && streamingId === msg.id}
                      onDone={() => handleStreamDone(msg.id)}
                    />
                  )}
                  <span className="text-[10px] font-mono text-slate-500 block mt-1.5">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-brand-cyan" />
                </div>
                <div className="bg-[#0d1628] border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-brand-cyan/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-brand-cyan/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="text-[10px] font-mono text-slate-500 ml-1">HA Labs AI is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2 flex-shrink-0">
              {QUICK_SUGGESTIONS.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(suggestion)}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/30 text-xs text-slate-300 hover:text-white transition-all font-mono"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input Bar */}
          <div className="px-4 py-4 border-t border-white/10 bg-[#0d1628] flex-shrink-0">
            <form onSubmit={handleSubmit} className="flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={currentTopicMode.placeholder}
                disabled={isTyping}
                className="flex-1 px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-brand-cyan text-sm text-white placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-3 rounded-xl bg-brand-cyan hover:bg-cyan-300 text-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between mt-2 px-1">
              <span className="text-[10px] font-mono text-slate-600">
                Press Enter to send • Simulated AI responses
              </span>
              <span className="text-[10px] font-mono text-slate-600">
                HA Labs Copilot v2.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiAssistant;
