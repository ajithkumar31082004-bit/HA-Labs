'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CartRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/setup');
  }, [router]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center p-6 text-center">
      <div className="space-y-2">
        <div className="w-8 h-8 rounded-full border-2 border-[#087443] border-t-transparent animate-spin mx-auto" />
        <p className="text-xs text-[#647067] font-mono">Redirecting to Project Setup & Workspace...</p>
      </div>
    </div>
  );
}
