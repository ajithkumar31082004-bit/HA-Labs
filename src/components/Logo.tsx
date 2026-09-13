import React from 'react';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="ha-glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#00d2ff" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Triangle A-Frame */}
      <path
        d="M60 22 L24 95 L96 95 Z"
        stroke="url(#ha-glow-gradient)"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
        className="drop-shadow-[0_0_8px_rgba(0,210,255,0.6)]"
      />

      {/* Middle A Crossbar / H Top Bridge */}
      <line
        x1="36"
        y1="70"
        x2="84"
        y2="70"
        stroke="url(#ha-glow-gradient)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Center Pin Node extending up from crossbar */}
      <line
        x1="60"
        y1="70"
        x2="60"
        y2="46"
        stroke="url(#ha-glow-gradient)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle
        cx="60"
        cy="42"
        r="4.5"
        fill="url(#ha-glow-gradient)"
      />

      {/* Two lower vertical legs forming the H */}
      <line
        x1="45"
        y1="72"
        x2="45"
        y2="97"
        stroke="url(#ha-glow-gradient)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <line
        x1="75"
        y1="72"
        x2="75"
        y2="97"
        stroke="url(#ha-glow-gradient)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Tech Circuit Rings at vertices */}
      {/* Top Apex Node */}
      <circle
        cx="60"
        cy="19"
        r="5.5"
        stroke="url(#ha-glow-gradient)"
        strokeWidth="3.5"
        fill="#060913"
      />

      {/* Bottom Left Node */}
      <circle
        cx="20"
        cy="97"
        r="5.5"
        stroke="url(#ha-glow-gradient)"
        strokeWidth="3.5"
        fill="#060913"
      />

      {/* Bottom Right Node */}
      <circle
        cx="100"
        cy="97"
        r="5.5"
        stroke="url(#ha-glow-gradient)"
        strokeWidth="3.5"
        fill="#060913"
      />
    </svg>
  );
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', badge: 'text-[10px]' },
    md: { icon: 'w-9 h-9', text: 'text-xl', badge: 'text-[11px]' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', badge: 'text-xs' },
    xl: { icon: 'w-16 h-16', text: 'text-4xl', badge: 'text-sm' },
  };

  const { icon, text } = sizeMap[size];

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="HA Labs Home"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-brand-cyan/20 blur-md rounded-full group-hover:bg-brand-cyan/40 transition-all duration-300" />
        <LogoMark className={`${icon} relative z-10`} />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1">
            <span className={`font-bold tracking-tight text-white font-sans ${text}`}>
              HA Labs
            </span>
          </div>
          <span className="text-[10px] tracking-wider text-slate-400 font-mono uppercase mt-0.5">
            Engineering Platform
          </span>
        </div>
      )}
    </Link>
  );
}

export default Logo;
