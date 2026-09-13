import type { Metadata } from 'next';
import './globals.css';
import ClientShell from '@/components/ClientShell';

export const metadata: Metadata = {
  title: 'HA Labs — Engineering Projects. Built for Reality.',
  description: 'HA Labs helps engineering students find, build, deploy, document, and present real-world engineering projects. Founded by Harish and Ajithkumar.',
  keywords: [
    'engineering projects',
    'final year projects',
    'ECE projects',
    'CSE projects',
    'IoT projects',
    'ESP32',
    'AWS Cloud',
    'DevOps',
    'Robotics',
    'viva preparation',
    'HA Labs',
  ],
  authors: [{ name: 'HA Labs' }, { name: 'Harish' }, { name: 'Ajithkumar' }],
  openGraph: {
    title: 'HA Labs — Engineering Projects. Built for Reality.',
    description: 'From Project Idea to Working Prototype. Discover, build, deploy, and understand real engineering projects.',
    url: 'https://halabs.tech',
    siteName: 'HA Labs',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#060913] text-slate-100">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
