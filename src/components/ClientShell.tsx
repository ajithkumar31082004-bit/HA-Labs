'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import { Footer } from './Footer';
import ProjectSearchModal from './ProjectSearchModal';

export function ClientShell({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-[#17211B] selection:bg-[#087443]/20 selection:text-[#087443]">
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <ProjectSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
export default ClientShell;
