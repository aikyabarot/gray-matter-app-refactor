import { Candidate } from '../types';

export const MOCK_CANDIDATES: Candidate[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Software Engineer",
    experience: "5 years",
    education: "BS Computer Science",
    location: "San Francisco, CA",
    phone: "(555) 123-4567",
    skills: ["React", "TypeScript", "Node.js", "Python"],
    availabilityStatus: "Available",
    pipelineStatus: "Interview Scheduled",
    statusHistory: [
      { status: "Applied", date: "2024-01-01", actor: "System" },
      { status: "Screened", date: "2024-01-02", actor: "Recruiter" },
      { status: "Interview Scheduled", date: "2024-01-03", actor: "Client" }
    ],
    notes: "Strong technical background, excellent communication skills",
    feedback: {
      recruiter: "Very promising candidate with solid experience",
      technical: "Passed technical screening with flying colors",
      manager: "Good cultural fit, technical skills align well"
    },
    resumes: [
      { name: "Alice_Johnson_Resume_2024.pdf", date: "2024-01-01" }
    ],
    associatedJobId: 1,
    aiMatch: 85
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Product Manager",
    experience: "8 years",
    education: "MBA",
    location: "New York, NY",
    phone: "(555) 234-5678",
    skills: ["Product Strategy", "Agile", "Analytics", "Leadership"],
    availabilityStatus: "Available in 2 weeks",
    pipelineStatus: "Offer Extended",
    statusHistory: [
      { status: "Applied", date: "2024-01-05", actor: "System" },
      { status: "Screened", date: "2024-01-06", actor: "Recruiter" },
      { status: "Final Interview", date: "2024-01-08", actor: "Client" },
      { status: "Offer Extended", date: "2024-01-10", actor: "Client" }
    ],
    notes: "Excellent product management experience, strong leadership skills",
    feedback: {
      recruiter: "Top-tier candidate with impressive background",
      technical: "Not applicable for this role",
      manager: "Perfect fit for our product team"
    },
    resumes: [
      { name: "Bob_Smith_Resume_2024.pdf", date: "2024-01-05" }
    ],
    associatedJobId: 2,
    aiMatch: 92
  },
  {
    id: 3,
    name: "Carol Davis",
    role: "Data Scientist",
    experience: "6 years",
    education: "PhD in Statistics",
    location: "Austin, TX",
    phone: "(555) 345-6789",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    availabilityStatus: "Available immediately",
    pipelineStatus: "Placed",
    statusHistory: [
      { status: "Applied", date: "2024-01-10", actor: "System" },
      { status: "Screened", date: "2024-01-11", actor: "Recruiter" },
      { status: "Technical Interview", date: "2024-01-12", actor: "Client" },
      { status: "Final Interview", date: "2024-01-15", actor: "Client" },
      { status: "Offer Extended", date: "2024-01-16", actor: "Client" },
      { status: "Placed", date: "2024-01-18", actor: "System" }
    ],
    notes: "Outstanding data science background, successfully placed",
    feedback: {
      recruiter: "Exceptional candidate with strong academic background",
      technical: "Excellent technical skills and problem-solving ability",
      manager: "Great addition to the data science team"
    },
    resumes: [
      { name: "Carol_Davis_Resume_2024.pdf", date: "2024-01-10" }
    ],
    associatedJobId: 3,
    aiMatch: 88
  }
];