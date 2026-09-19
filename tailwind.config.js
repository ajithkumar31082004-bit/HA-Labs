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
        // HA Labs Official Palette
        'ha-emerald': '#087443',      // primary emerald
        'ha-action': '#16A34A',       // action green
        'ha-lime': '#84CC16',         // skill/highlight accent
        'ha-bg': '#F8FAF9',           // page background
        'ha-card': '#FFFFFF',         // cards
        'ha-text': '#17211B',         // primary text
        'ha-muted': '#647067',        // secondary text
        'ha-border': '#E2E8E4',       // borders

        // Emerald tonal ramp
        emerald: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#087443',
          900: '#065331',
          950: '#03331d',
        },
        surface: {
          50: '#F8FAF9',
          100: '#F1F5F3',
          200: '#E7ECE9',
          300: '#D5DFDA',
        },
        border: {
          subtle: '#E2E8E4',
          glow: 'rgba(8, 116, 67, 0.2)',
        },
        brand: {
          primary: '#087443',
          action: '#16A34A',
          lime: '#84CC16',
          cyan: '#087443',
          blue: '#16A34A',
          accent: '#16A34A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Existing dark theme shadows
        'glow-cyan': '0 0 35px -5px rgba(0, 210, 255, 0.25)',
        'glow-blue': '0 0 35px -5px rgba(56, 189, 248, 0.3)',
        'glow-purple': '0 0 35px -5px rgba(129, 140, 248, 0.25)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        // Supermarket shadows
        'card-fresh': '0 4px 20px -4px rgba(34, 197, 94, 0.18), 0 2px 8px -2px rgba(0,0,0,0.06)',
        'card-warm': '0 4px 20px -4px rgba(249, 115, 22, 0.22), 0 2px 8px -2px rgba(0,0,0,0.06)',
        'card-hover': '0 16px 40px -8px rgba(0,0,0,0.14), 0 4px 16px -4px rgba(0,0,0,0.08)',
        'grocery-nav': '0 2px 20px -4px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
        'grocery-card': '0 2px 12px -2px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
        'grocery-sm': '0 1px 6px -1px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
      },
      backgroundImage: {
        // Existing
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(0, 210, 255, 0.15) 0%, rgba(99, 102, 241, 0.08) 35%, transparent 70%)',
        // Supermarket gradients
        'fresh-gradient': 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
        'warm-gradient': 'linear-gradient(135deg, #fb923c 0%, #ea580c 100%)',
        'fresh-soft': 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
        'warm-soft': 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
        'hero-fresh': 'linear-gradient(120deg, #f0fdf4 0%, #dcfce7 40%, #bbf7d0 100%)',
        'hero-warm': 'linear-gradient(120deg, #fff7ed 0%, #ffedd5 40%, #fed7aa 100%)',
        'hero-teal': 'linear-gradient(120deg, #ecfdf5 0%, #d1fae5 40%, #a7f3d0 100%)',
      },
      keyframes: {
        // Existing
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
        },
        // Supermarket keyframes
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        fadeSlideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeSlideDown: {
          '0%': { transform: 'translateY(-16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.6)', opacity: '0' },
          '60%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatEmoji: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(6deg)' },
          '66%': { transform: 'translateY(-9px) rotate(-4deg)' },
        },
        cartBounce: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.35)' },
          '60%': { transform: 'scale(0.88)' },
          '100%': { transform: 'scale(1)' },
        },
        heroSlide: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        progressBar: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        // Existing
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'floatSlow 6s ease-in-out infinite',
        // Supermarket
        'slide-in-right': 'slideInRight 0.38s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-out-right': 'slideOutRight 0.28s ease-in',
        'fade-slide-up': 'fadeSlideUp 0.5s ease-out both',
        'fade-slide-down': 'fadeSlideDown 0.4s ease-out both',
        'bounce-in': 'bounceIn 0.45s ease-out both',
        'shimmer': 'shimmer 2.2s linear infinite',
        'float-emoji': 'floatEmoji 5s ease-in-out infinite',
        'cart-bounce': 'cartBounce 0.42s ease-out',
        'hero-slide': 'heroSlide 0.6s ease-out both',
        'spin-slow': 'spinSlow 8s linear infinite',
      },
    },
  },
  plugins: [],
}
