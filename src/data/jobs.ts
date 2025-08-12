import { Job } from '../types';

export const MOCK_JOBS: Job[] = [
  {
    id: 1,
    clientId: 1,
    title: "Senior Software Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    employmentType: "Permanent",
    startDate: "2024-01-15",
    salary: "$120,000 - $150,000",
    posted: "2024-01-01",
    status: "Open",
    recruiterId: 1,
    description: "We are looking for a senior software engineer to join our team."
  },
  {
    id: 2,
    clientId: 1,
    title: "Product Manager",
    location: "New York, NY",
    type: "Full-time",
    employmentType: "Permanent",
    startDate: "2024-02-01",
    salary: "$130,000 - $160,000",
    posted: "2024-01-05",
    status: "Open",
    recruiterId: 2,
    description: "Seeking an experienced product manager to lead our product initiatives."
  },
  {
    id: 3,
    clientId: 2,
    title: "Data Scientist",
    location: "Austin, TX",
    type: "Full-time",
    employmentType: "Contract",
    startDate: "2024-03-01",
    salary: "$110,000 - $140,000",
    posted: "2024-01-10",
    status: "Completed",
    recruiterId: 1,
    description: "Looking for a data scientist with machine learning expertise."
  }
];