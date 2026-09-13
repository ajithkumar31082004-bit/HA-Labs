'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectSearchModal from './ProjectSearchModal';

export function ClientShell({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#060913] text-slate-100 selection:bg-brand-cyan/30 selection:text-white">
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <ProjectSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
export default ClientShell;
