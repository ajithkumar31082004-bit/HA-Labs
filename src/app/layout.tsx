import type { Metadata } from 'next';
import './globals.css';
import ClientShell from '@/components/ClientShell';
import { ProjectStoreProvider } from '@/context/ProjectStoreContext';

export const metadata: Metadata = {
  title: 'HA Labs — Engineering Projects & Prototyping Platform',
  description: 'HA Labs helps engineering students find, build, deploy, document, and present real-world engineering projects across ECE, CSE, IT, EEE, MECH, CIVIL, and AI/DS.',
  keywords: [
    'engineering projects',
    'HA Labs',
    'ECE projects',
    'CSE projects',
    'IoT projects',
    'Embedded systems',
    'AI projects',
    'final year projects',
    'viva preparation',
    'circuit schematics',
  ],
  authors: [{ name: 'HA Labs' }, { name: 'Harish' }, { name: 'Ajithkumar' }],
  openGraph: {
    title: 'HA Labs — Engineering Projects & Prototyping Platform',
    description: 'Build. Learn. Create. Innovate. Discover engineering projects, build with your friends, develop real-world skills, and turn ideas into working prototypes.',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#F8FAF9] text-[#17211B]">
        <ProjectStoreProvider>
          <ClientShell>{children}</ClientShell>
        </ProjectStoreProvider>
      </body>
    </html>
  );
}
