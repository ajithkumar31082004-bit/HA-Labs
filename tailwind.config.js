/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#060913',
        surface: {
          50: '#0d1527',
          100: '#111c34',
          200: '#172545',
          300: '#1e315b',
        },
        border: {
          subtle: '#1e293b',
          glow: 'rgba(56, 189, 248, 0.25)',
        },
        brand: {
          cyan: '#00d2ff',
          blue: '#38bdf8',
          accent: '#2563eb',
          purple: '#818cf8',
          indigo: '#6366f1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(0, 210, 255, 0.25)',
        'glow-blue': '0 0 35px -5px rgba(56, 189, 248, 0.3)',
        'glow-purple': '0 0 35px -5px rgba(129, 140, 248, 0.25)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(0, 210, 255, 0.15) 0%, rgba(99, 102, 241, 0.08) 35%, transparent 70%)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        lineFlow: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
