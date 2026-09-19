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
        <linearGradient id="ha-emerald-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#087443" />
          <stop offset="50%" stopColor="#16A34A" />
          <stop offset="100%" stopColor="#84CC16" />
        </linearGradient>
      </defs>

      {/* Outer Triangle A-Frame */}
      <path
        d="M60 22 L24 95 L96 95 Z"
        stroke="url(#ha-emerald-gradient)"
        strokeWidth="6.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Middle A Crossbar / H Top Bridge */}
      <line
        x1="36"
        y1="70"
        x2="84"
        y2="70"
        stroke="url(#ha-emerald-gradient)"
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* Center Pin Node extending up from crossbar */}
      <line
        x1="60"
        y1="70"
        x2="60"
        y2="46"
        stroke="url(#ha-emerald-gradient)"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <circle
        cx="60"
        cy="42"
        r="5"
        fill="url(#ha-emerald-gradient)"
      />

      {/* Two lower vertical legs forming the H */}
      <line
        x1="45"
        y1="72"
        x2="45"
        y2="97"
        stroke="url(#ha-emerald-gradient)"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      <line
        x1="75"
        y1="72"
        x2="75"
        y2="97"
        stroke="url(#ha-emerald-gradient)"
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* Tech Circuit Rings at vertices */}
      <circle
        cx="60"
        cy="19"
        r="6"
        stroke="url(#ha-emerald-gradient)"
        strokeWidth="3.5"
        fill="#FFFFFF"
      />
      <circle
        cx="20"
        cy="97"
        r="6"
        stroke="url(#ha-emerald-gradient)"
        strokeWidth="3.5"
        fill="#FFFFFF"
      />
      <circle
        cx="100"
        cy="97"
        r="6"
        stroke="url(#ha-emerald-gradient)"
        strokeWidth="3.5"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', badge: 'text-[10px]' },
    md: { icon: 'w-8 h-8', text: 'text-xl', badge: 'text-[11px]' },
    lg: { icon: 'w-11 h-11', text: 'text-2xl', badge: 'text-xs' },
    xl: { icon: 'w-14 h-14', text: 'text-3xl', badge: 'text-sm' },
  };

  const { icon, text } = sizeMap[size];

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="HA Labs Home"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-[#16A34A]/15 blur-sm rounded-full group-hover:bg-[#16A34A]/25 transition-all duration-300" />
        <LogoMark className={`${icon} relative z-10`} />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight text-[#17211B] font-sans ${text}`}>
              HA Labs
            </span>
            <span className="px-1.5 py-0.5 rounded bg-[#087443]/10 text-[#087443] font-mono text-[9px] font-bold uppercase tracking-wider">
              PRO
            </span>
          </div>
          <span className="text-[10px] tracking-wider text-[#647067] font-mono uppercase mt-0.5 font-medium">
            Engineering Platform
          </span>
        </div>
      )}
    </Link>
  );
}

export default Logo;
