import { Client } from '../types';

export const MOCK_CLIENTS: Client[] = [
  {
    id: 1,
    name: "TechCorp Inc.",
    address: "123 Tech Street, San Francisco, CA 94105",
    notes: "Premier technology client with excellent placement success rate",
    satisfaction: 4.8,
    avgTimeToFill: 22,
    contacts: [
      {
        contactId: 1,
        personId: 1,
        position: "HR Director",
        email: "hr@techcorp.com"
      }
    ]
  },
  {
    id: 2,
    name: "DataFlow Solutions",
    address: "456 Data Ave, Austin, TX 78701",
    notes: "Growing data analytics company, prefers contract placements",
    satisfaction: 4.5,
    avgTimeToFill: 18,
    contacts: [
      {
        contactId: 2,
        personId: 2,
        position: "VP Engineering",
        email: "vp@dataflow.com"
      }
    ]
  },
  {
    id: 3,
    name: "Innovation Labs",
    address: "789 Innovation Blvd, Boston, MA 02101",
    notes: "Research-focused organization, looking for specialized talent",
    satisfaction: 4.6,
    avgTimeToFill: 35,
    contacts: [
      {
        contactId: 3,
        personId: 3,
        position: "CTO",
        email: "cto@innovationlabs.com"
      }
    ]
  }
];