import React, { useState, useEffect, createContext, ReactNode } from 'react';
import { User, Job, Candidate, Client } from '../types';
import { MOCK_JOBS } from '../data/jobs';
import { MOCK_CANDIDATES } from '../data/candidates';
import { MOCK_CLIENTS } from '../data/clients';
import { MOCK_USERS_DB } from '../data/users';

interface AppContextType {
  activeUser: User | null;
  login: (user: User) => void;
  logout: () => void;
  jobs: Job[];
  candidates: Candidate[];
  clients: Client[];
  loading: boolean;
  toast: { show: boolean; message: string };
  updateCandidateStatus: (candidateId: number, newStatus: string) => void;
  updateCandidateFeedback: (candidateId: number, notes: string) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [activeUser, setActiveUser] = useState<User | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // # INTEGRATE: Replace this mock loading with parallel API calls to fetch initial data.
    const enrichedJobs = MOCK_JOBS.map(job => ({
      ...job,
      clientName: MOCK_CLIENTS.find(c => c.id === job.clientId)?.name || 'Unknown',
    }));
    setJobs(enrichedJobs);
    setCandidates(MOCK_CANDIDATES);
    setClients(MOCK_CLIENTS);
    setLoading(false);
  }, []);

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const login = (user: User) => {
    setActiveUser(user);
    showToast(`Welcome, ${user.name}!`);
  };

  const logout = () => setActiveUser(null);

  const updateCandidateStatus = (candidateId: number, newStatus: string) => {
    // # INTEGRATE: Replace with API call: PUT /api/candidates/{candidateId}/status
    setCandidates(candidates.map(c => c.id === candidateId ? { ...c, pipelineStatus: newStatus } : c));
    showToast(`Status updated to "${newStatus}"`);
  };

  const updateCandidateFeedback = (candidateId: number, notes: string) => {
    // # INTEGRATE: Replace with API call: POST /api/candidates/{candidateId}/feedback
    setCandidates(candidates.map(c => c.id === candidateId ? { ...c, feedback: { ...c.feedback, manager: notes } } : c));
    showToast('Feedback submitted!');
  };

  const value = { activeUser, login, logout, jobs, candidates, clients, loading, toast, updateCandidateStatus, updateCandidateFeedback };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};