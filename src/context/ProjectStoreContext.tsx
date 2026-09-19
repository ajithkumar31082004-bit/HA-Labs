'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'visitor' | 'buyer' | 'builder' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'builder' | 'admin';
  college?: string;
  avatar?: string;
  phone?: string;
}

export interface ActiveProjectItem {
  projectId: string;
  progress: number;
  teamName: string;
  role: string;
  startDate: string;
}

export interface OrderItem {
  id: string;
  projectId: string;
  projectTitle: string;
  amount: number;
  date: string;
  status: 'Completed' | 'Processing';
  addons: string[];
  studentName?: string;
  studentEmail?: string;
  studentPhone?: string;
  college?: string;
  paymentMethod?: string;
}

export interface BuilderProjectItem {
  id: string;
  title: string;
  slug: string;
  department: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  status: 'draft' | 'pending' | 'published' | 'rejected';
  views: number;
  salesCount: number;
  submittedAt: string;
  adminNotes?: string;
}

export const SEED_USERS: Record<string, User> = {
  student: {
    id: 'usr-student-1',
    name: 'Ajith Kumar',
    email: 'ajith@student.halabs.tech',
    role: 'buyer',
    college: 'Anna University (CEG)',
    phone: '+91 8778954899',
    avatar: 'AK',
  },
  builder: {
    id: 'usr-builder-1',
    name: 'Harish Kumar',
    email: 'harish@builder.halabs.tech',
    role: 'builder',
    college: 'PSG College of Technology',
    phone: '+91 9342540464',
    avatar: 'HK',
  },
  admin: {
    id: 'usr-admin-1',
    name: 'HA Labs Core Admin',
    email: 'admin@halabs.tech',
    role: 'admin',
    college: 'HA Labs HQ',
    phone: '+91 8778954899',
    avatar: 'HA',
  },
};

interface ProjectStoreContextType {
  currentUser: User | null;
  currentRole: UserRole;
  login: (email: string, role?: 'buyer' | 'builder' | 'admin') => boolean;
  logout: () => void;
  register: (name: string, email: string, role: 'buyer' | 'builder', college?: string, phone?: string) => void;
  savedProjectIds: string[];
  activeProjects: ActiveProjectItem[];
  purchasedProjectIds: string[];
  orders: OrderItem[];
  builderProjects: BuilderProjectItem[];
  toggleSaveProject: (projectId: string) => void;
  isProjectSaved: (projectId: string) => boolean;
  isProjectPurchased: (projectId: string) => boolean;
  startProject: (projectId: string, teamName?: string, role?: string) => void;
  purchaseProject: (
    projectId: string,
    projectTitle: string,
    amount: number,
    addons?: string[],
    orderDetails?: { studentName?: string; studentEmail?: string; studentPhone?: string; college?: string; paymentMethod?: string }
  ) => string;
  submitBuilderProject: (projectData: Partial<BuilderProjectItem>) => void;
  reviewProject: (projectId: string, decision: 'approve' | 'request_changes' | 'reject', notes?: string) => void;
  savedCount: number;
  activeCount: number;
  purchasedCount: number;
  toastMessage: string | null;
  clearToast: () => void;
}

const ProjectStoreContext = createContext<ProjectStoreContextType | undefined>(undefined);

export function ProjectStoreProvider({ children }: { children: React.ReactNode }) {
  // Default to student user for seamless demo, or read from localStorage
  const [currentUser, setCurrentUser] = useState<User | null>(SEED_USERS.student);
  const [savedProjectIds, setSavedProjectIds] = useState<string[]>(['proj-ece-1', 'proj-eee-1']);
  const [purchasedProjectIds, setPurchasedProjectIds] = useState<string[]>(['proj-ece-1']); // default purchased
  const [activeProjects, setActiveProjects] = useState<ActiveProjectItem[]>([
    {
      projectId: 'proj-ece-1',
      progress: 68,
      teamName: 'Team Nova ECE',
      role: 'Hardware Lead',
      startDate: '2026-08-15',
    },
    {
      projectId: 'proj-ece-2',
      progress: 35,
      teamName: 'AgriTech Builders',
      role: 'Firmware Dev',
      startDate: '2026-09-01',
    },
  ]);

  const [orders, setOrders] = useState<OrderItem[]>([
    {
      id: 'ORD-2026-9428',
      projectId: 'proj-ece-1',
      projectTitle: 'Smart Parking Occupancy & Guidance System',
      amount: 4999,
      date: '19 Sep 2026',
      status: 'Completed',
      addons: ['Viva Mentoring Package'],
      studentName: 'Ajith Kumar',
      studentEmail: 'ajith@student.halabs.tech',
      studentPhone: '+91 8778954899',
      college: 'Anna University (CEG)',
      paymentMethod: 'UPI (Google Pay)',
    },
  ]);

  const [builderProjects, setBuilderProjects] = useState<BuilderProjectItem[]>([
    {
      id: 'proj-b-1',
      title: 'Autonomous Solar Tracking Dual-Axis Inverter',
      slug: 'autonomous-solar-tracking-dual-axis-inverter',
      department: 'EEE',
      category: 'Embedded',
      difficulty: 'Advanced',
      price: 5499,
      status: 'published',
      views: 1420,
      salesCount: 18,
      submittedAt: '2026-08-10',
    },
    {
      id: 'proj-b-2',
      title: 'Drone-Assisted Forest Fire Detection Node',
      slug: 'drone-assisted-forest-fire-detection-node',
      department: 'ECE',
      category: 'IoT',
      difficulty: 'Advanced',
      price: 6999,
      status: 'pending',
      views: 240,
      salesCount: 0,
      submittedAt: '2026-09-18',
    },
    {
      id: 'proj-b-3',
      title: 'Microgrid Battery Balancing Circuit',
      slug: 'microgrid-battery-balancing-circuit',
      department: 'EEE',
      category: 'Embedded',
      difficulty: 'Intermediate',
      price: 3999,
      status: 'draft',
      views: 45,
      salesCount: 0,
      submittedAt: '2026-09-17',
    },
  ]);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('halabs_current_user');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }

      const storedSaved = localStorage.getItem('halabs_saved_projects');
      if (storedSaved) setSavedProjectIds(JSON.parse(storedSaved));

      const storedPurchased = localStorage.getItem('halabs_purchased_projects');
      if (storedPurchased) setPurchasedProjectIds(JSON.parse(storedPurchased));

      const storedOrders = localStorage.getItem('halabs_orders');
      if (storedOrders) setOrders(JSON.parse(storedOrders));
    } catch (e) {}
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3500);
  };

  const login = (email: string, role?: 'buyer' | 'builder' | 'admin') => {
    let targetUser: User | null = null;

    if (email.includes('admin') || role === 'admin') {
      targetUser = SEED_USERS.admin;
    } else if (email.includes('builder') || role === 'builder') {
      targetUser = SEED_USERS.builder;
    } else {
      targetUser = {
        ...SEED_USERS.student,
        email: email || SEED_USERS.student.email,
      };
    }

    setCurrentUser(targetUser);
    try {
      localStorage.setItem('halabs_current_user', JSON.stringify(targetUser));
    } catch (e) {}
    showToast(`Signed in as ${targetUser.name} (${targetUser.role.toUpperCase()})`);
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('halabs_current_user');
    } catch (e) {}
    showToast('Signed out successfully');
  };

  const register = (name: string, email: string, role: 'buyer' | 'builder', college = 'Engineering College', phone = '') => {
    const newUser: User = {
      id: `usr-${Date.now()}`,
      name,
      email,
      role,
      college,
      phone,
      avatar: name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2) || 'ST',
    };
    setCurrentUser(newUser);
    try {
      localStorage.setItem('halabs_current_user', JSON.stringify(newUser));
    } catch (e) {}
    showToast(`Account created! Welcome to HA Labs, ${name}`);
  };

  const currentRole: UserRole = currentUser ? currentUser.role : 'visitor';

  const toggleSaveProject = (projectId: string) => {
    setSavedProjectIds((prev) => {
      const exists = prev.includes(projectId);
      const updated = exists ? prev.filter((id) => id !== projectId) : [...prev, projectId];
      try {
        localStorage.setItem('halabs_saved_projects', JSON.stringify(updated));
      } catch (e) {}
      showToast(exists ? 'Removed from Saved Projects' : 'Project added to Saved Projects ⭐');
      return updated;
    });
  };

  const isProjectSaved = (projectId: string) => savedProjectIds.includes(projectId);
  const isProjectPurchased = (projectId: string) => purchasedProjectIds.includes(projectId);

  const startProject = (projectId: string, teamName = 'My Project Team', role = 'Project Lead') => {
    setActiveProjects((prev) => {
      if (prev.some((p) => p.projectId === projectId)) {
        showToast('Project is already in your Active Projects list');
        return prev;
      }
      const updated = [
        ...prev,
        {
          projectId,
          progress: 5,
          teamName,
          role,
          startDate: new Date().toISOString().split('T')[0],
        },
      ];
      showToast('Project workspace launched! Added to My Projects 🚀');
      return updated;
    });
  };

  const purchaseProject = (
    projectId: string,
    projectTitle: string,
    amount: number,
    addons: string[] = [],
    orderDetails?: { studentName?: string; studentEmail?: string; studentPhone?: string; college?: string; paymentMethod?: string }
  ): string => {
    setPurchasedProjectIds((prev) => {
      if (!prev.includes(projectId)) {
        const updated = [...prev, projectId];
        try {
          localStorage.setItem('halabs_purchased_projects', JSON.stringify(updated));
        } catch (e) {}
        return updated;
      }
      return prev;
    });

    const newOrderId = `ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrder: OrderItem = {
      id: newOrderId,
      projectId,
      projectTitle,
      amount,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'Completed',
      addons,
      studentName: orderDetails?.studentName || currentUser?.name || 'Student Buyer',
      studentEmail: orderDetails?.studentEmail || currentUser?.email || 'student@halabs.tech',
      studentPhone: orderDetails?.studentPhone || currentUser?.phone || '+91 8778954899',
      college: orderDetails?.college || currentUser?.college || 'Anna University',
      paymentMethod: orderDetails?.paymentMethod || 'UPI (FastPay)',
    };

    setOrders((prev) => {
      const updated = [newOrder, ...prev];
      try {
        localStorage.setItem('halabs_orders', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    // Also add to active projects if not present
    setActiveProjects((prev) => {
      if (!prev.some((p) => p.projectId === projectId)) {
        return [
          ...prev,
          {
            projectId,
            progress: 10,
            teamName: `${currentUser?.name || 'My'} Capstone Team`,
            role: 'Lead Developer',
            startDate: new Date().toISOString().split('T')[0],
          },
        ];
      }
      return prev;
    });

    showToast('Payment verified! Project deliverables & source code unlocked 🎉');
    return newOrderId;
  };

  const submitBuilderProject = (projectData: Partial<BuilderProjectItem>) => {
    const newProj: BuilderProjectItem = {
      id: `proj-b-${Date.now()}`,
      title: projectData.title || 'Untitled Engineering Project',
      slug: (projectData.title || 'untitled-project').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      department: projectData.department || 'ECE',
      category: projectData.category || 'IoT',
      difficulty: projectData.difficulty || 'Intermediate',
      price: projectData.price || 4999,
      status: 'pending',
      views: 1,
      salesCount: 0,
      submittedAt: new Date().toISOString().split('T')[0],
    };

    setBuilderProjects((prev) => [newProj, ...prev]);
    showToast('Project submitted for Admin Technical Verification! ✅');
  };

  const reviewProject = (projectId: string, decision: 'approve' | 'request_changes' | 'reject', notes?: string) => {
    setBuilderProjects((prev) =>
      prev.map((p) => {
        if (p.id === projectId) {
          const statusMap = {
            approve: 'published' as const,
            request_changes: 'draft' as const,
            reject: 'rejected' as const,
          };
          return {
            ...p,
            status: statusMap[decision],
            adminNotes: notes || '',
          };
        }
        return p;
      })
    );
    showToast(`Project status updated: ${decision.toUpperCase()}`);
  };

  return (
    <ProjectStoreContext.Provider
      value={{
        currentUser,
        currentRole,
        login,
        logout,
        register,
        savedProjectIds,
        activeProjects,
        purchasedProjectIds,
        orders,
        builderProjects,
        toggleSaveProject,
        isProjectSaved,
        isProjectPurchased,
        startProject,
        purchaseProject,
        submitBuilderProject,
        reviewProject,
        savedCount: savedProjectIds.length,
        activeCount: activeProjects.length,
        purchasedCount: purchasedProjectIds.length,
        toastMessage,
        clearToast: () => setToastMessage(null),
      }}
    >
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#17211B] text-white rounded-xl shadow-xl border border-white/10 animate-fade-slide-up text-sm">
          <div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-xs text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}
    </ProjectStoreContext.Provider>
  );
}

export function useProjectStore() {
  const context = useContext(ProjectStoreContext);
  if (!context) {
    throw new Error('useProjectStore must be used within a ProjectStoreProvider');
  }
  return context;
}
