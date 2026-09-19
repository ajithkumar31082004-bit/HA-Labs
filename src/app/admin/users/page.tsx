'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useProjectStore } from '@/context/ProjectStoreContext';
import { Users, ShieldCheck, CheckCircle2, Lock, Search, Filter } from 'lucide-react';

export default function AdminUsersPage() {
  const { currentUser } = useProjectStore();

  if (currentUser?.role !== 'admin') {
    return (
      <div className="min-h-screen tech-grid-bg py-20 flex items-center justify-center px-4">
        <div className="ha-card p-8 rounded-3xl bg-white border border-red-200 shadow-xl max-w-md w-full text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-red-100 text-red-700 flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="text-xl font-bold text-[#17211B]">403 — Admin Access Required</h1>
          <p className="text-xs text-[#647067]">
            This user directory is restricted to authorized platform administrators.
          </p>
          <Link
            href="/login"
            className="inline-block py-2.5 px-5 rounded-xl bg-[#087443] text-white font-bold text-xs"
          >
            Sign In as Admin
          </Link>
        </div>
      </div>
    );
  }

  const sampleUsers = [
    {
      id: 'USR-8491',
      name: 'Ajith Kumar',
      email: 'ajith@student.halabs.tech',
      role: 'Buyer / Student',
      college: 'Anna University (CEG)',
      dept: 'ECE',
      projectsOwned: 3,
      status: 'Active',
      joined: '15 Aug 2026',
    },
    {
      id: 'USR-8492',
      name: 'Harish Kumar',
      email: 'harish@builder.halabs.tech',
      role: 'Project Builder',
      college: 'PSG College of Technology',
      dept: 'EEE',
      projectsOwned: 3,
      status: 'Verified Creator',
      joined: '10 Aug 2026',
    },
    {
      id: 'USR-8493',
      name: 'Karthik Raja',
      email: 'karthik.r@vtu.ac.in',
      role: 'Buyer / Student',
      college: 'BMS College of Engineering',
      dept: 'CSE',
      projectsOwned: 1,
      status: 'Active',
      joined: '01 Sep 2026',
    },
    {
      id: 'USR-8494',
      name: 'Pooja Venkatesh',
      email: 'pooja.v@nitk.edu.in',
      role: 'Project Builder',
      college: 'NIT Karnataka, Surathkal',
      dept: 'AI & DS',
      projectsOwned: 2,
      status: 'Verified Creator',
      joined: '28 Aug 2026',
    },
    {
      id: 'USR-8495',
      name: 'HA Labs Core Admin',
      email: 'admin@halabs.tech',
      role: 'Platform Admin',
      college: 'HA Labs HQ',
      dept: 'All Branches',
      projectsOwned: 40,
      status: 'Super Admin',
      joined: '01 Jul 2026',
    },
  ];

  return (
    <div className="min-h-screen tech-grid-bg py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#647067]">
          <Link href="/admin" className="hover:text-[#087443]">Admin Console</Link>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-[#17211B]">Platform Users Directory</span>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8E4] pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#087443]" />
              <span className="text-xs font-mono font-bold text-[#087443] uppercase tracking-wider">
                User Management
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#17211B] mt-1 tracking-tight">
              Students & Project Builders Directory
            </h1>
            <p className="text-xs sm:text-sm text-[#647067] mt-0.5">
              Manage accounts, academic affiliations, college verify badges, and creator licenses.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-emerald-50 text-[#087443] border border-emerald-200 text-xs font-mono font-bold">
              3,840 Active Users
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="ha-card rounded-3xl bg-white border border-[#E2E8E4] p-6 space-y-4 shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[#E2E8E4] text-[#647067] uppercase font-bold">
                <tr>
                  <th className="pb-3">User ID</th>
                  <th className="pb-3">Name & Email</th>
                  <th className="pb-3">Role</th>
                  <th className="pb-3">College / Affiliation</th>
                  <th className="pb-3">Dept</th>
                  <th className="pb-3">Projects</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8E4]">
                {sampleUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-[#F8FAF9] transition-colors">
                    <td className="py-4 font-mono font-bold text-[#087443]">{u.id}</td>
                    <td className="py-4">
                      <div className="font-bold text-[#17211B]">{u.name}</div>
                      <div className="text-[11px] text-[#647067]">{u.email}</div>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        u.role.includes('Admin')
                          ? 'bg-purple-100 text-purple-800'
                          : u.role.includes('Builder')
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-emerald-50 text-[#087443]'
                      }`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="py-4 text-[#17211B]">{u.college}</td>
                    <td className="py-4 font-mono">{u.dept}</td>
                    <td className="py-4 font-mono text-[#087443] font-bold">{u.projectsOwned}</td>
                    <td className="py-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-[#087443] border border-emerald-200">
                        {u.status}
                      </span>
                    </td>
                    <td className="py-4 text-right text-[#647067]">{u.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
