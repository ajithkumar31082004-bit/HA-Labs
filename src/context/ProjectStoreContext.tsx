'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ActiveProjectItem {
  projectId: string;
  progress: number;
  teamName: string;
  role: string;
  startDate: string;
}

interface ProjectStoreContextType {
  savedProjectIds: string[];
  activeProjects: ActiveProjectItem[];
  toggleSaveProject: (projectId: string) => void;
  isProjectSaved: (projectId: string) => boolean;
  startProject: (projectId: string, teamName?: string, role?: string) => void;
  savedCount: number;
  activeCount: number;
  toastMessage: string | null;
  clearToast: () => void;
}

const ProjectStoreContext = createContext<ProjectStoreContextType | undefined>(undefined);

export function ProjectStoreProvider({ children }: { children: React.ReactNode }) {
  const [savedProjectIds, setSavedProjectIds] = useState<string[]>(['proj-1', 'proj-3']);
  const [activeProjects, setActiveProjects] = useState<ActiveProjectItem[]>([
    {
      projectId: 'proj-1',
      progress: 68,
      teamName: 'Team Nova ECE',
      role: 'Hardware Lead',
      startDate: '2026-08-15',
    },
    {
      projectId: 'proj-2',
      progress: 35,
      teamName: 'AgriTech Builders',
      role: 'Firmware Dev',
      startDate: '2026-09-01',
    },
  ]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load from localStorage if available
  useEffect(() => {
    try {
      const storedSaved = localStorage.getItem('halabs_saved_projects');
      if (storedSaved) setSavedProjectIds(JSON.parse(storedSaved));

      const storedActive = localStorage.getItem('halabs_active_projects');
      if (storedActive) setActiveProjects(JSON.parse(storedActive));
    } catch (e) {
      // ignore
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3000);
  };

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

  const isProjectSaved = (projectId: string) => {
    return savedProjectIds.includes(projectId);
  };

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
      try {
        localStorage.setItem('halabs_active_projects', JSON.stringify(updated));
      } catch (e) {}
      showToast('Project workspace launched! Added to My Projects 🚀');
      return updated;
    });
  };

  return (
    <ProjectStoreContext.Provider
      value={{
        savedProjectIds,
        activeProjects,
        toggleSaveProject,
        isProjectSaved,
        startProject,
        savedCount: savedProjectIds.length,
        activeCount: activeProjects.length,
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
