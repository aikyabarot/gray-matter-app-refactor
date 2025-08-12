export interface User {
  id: number;
  name: string;
  email: string;
  role: 'recruiter' | 'account_manager' | 'admin' | 'technical_manager' | 'executive';
}

export interface Person {
  personId: number;
  name: string;
  linkedIn?: string;
}

export interface ClientContact {
  contactId: number;
  personId: number;
  position: string;
  email: string;
}

export interface Client {
  id: number;
  name: string;
  address: string;
  notes: string;
  satisfaction: number;
  avgTimeToFill: number;
  contacts: ClientContact[];
}

export interface Job {
  id: number;
  clientId: number;
  clientName?: string; 
  title: string;
  location: string;
  type: string;
  employmentType: string;
  startDate: string;
  salary: string;
  posted: string;
  status: 'Open' | 'Completed' | 'On Hold';
  recruiterId: number;
  description: string;
}

export interface Candidate {
  id: number;
  name: string;
  role: string;
  experience: string;
  education: string;
  location: string;
  phone: string;
  skills: string[];
  availabilityStatus: string;
  pipelineStatus: string;
  statusHistory: { status: string; date: string; actor: string }[];
  notes: string;
  feedback: {
    recruiter: string;
    technical: string;
    manager: string;
  };
  resumes: { name: string; date: string }[];
  associatedJobId: number;
  aiMatch: number;
}

export interface CandidateProfile extends Candidate {
  job: Job;
}

export interface PageProps {
  user: User;
  onNavigate: (page: string, context?: any) => void;
  onOpenCandidate: (candidateId: number) => void;
  context?: any;
}

export interface AppContextType {
    activeUser: User | null;
    currentPage: string;
    pageContext: any;
    isCandidateModalOpen: boolean;
    selectedCandidateId: number | null;
    toastMessage: string | null;
    login: (email: string) => void;
    logout: () => void;
    navigate: (page: string, context?: any) => void;
    openCandidateModal: (candidateId: number) => void;
    closeCandidateModal: () => void;
    showToast: (message: string) => void;
    addClientContact: (clientId: number, newContact: ClientContact) => void;
    getCandidateProfile: (candidateId: number) => CandidateProfile | undefined;
    getClient: (clientId: number) => Client | undefined;
    getJobsForClient: (clientId: number) => Job[];
    getOpenJobsCount: () => number;
    getJobs: () => Job[];
    getClients: () => Client[];
}