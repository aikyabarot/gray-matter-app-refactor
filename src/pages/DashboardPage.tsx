import React from 'react';
import { useAppData } from '../hooks/useAppData';
import { PageProps } from '../types';

const DashboardPage: React.FC<PageProps> = ({ onOpenCandidate }) => {
  const { candidates, clients, jobs } = useAppData();

  // # INTEGRATE: This logic would be replaced by an API query: /api/candidates?status=Pending+Review
  const profilesForReview = candidates.filter(c => c.pipelineStatus === 'Pending ACM Review');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Account Manager Dashboard</h2>
      <div className="grid grid-cols-3 gap-6">
        <StatCard label="Active Clients" value={clients.length} />
        <StatCard label="Open Jobs" value={jobs.filter(j => j.status === 'Open').length} />
        <StatCard label="Avg. Satisfaction" value="92%" />
      </div>
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="font-semibold mb-4">Profiles Awaiting Your Review ({profilesForReview.length})</h3>
        {profilesForReview.length > 0 ? (
          profilesForReview.map(c => (
            <div key={c.id} className="p-3 bg-slate-50 rounded-md flex justify-between items-center mb-2">
              <div>
                <p className="font-bold">{c.name}</p>
                <p className="text-sm text-slate-500">For: {c.role}</p>
              </div>
              <button onClick={() => onOpenCandidate(c.id)} className="px-3 py-1 bg-teal-500 text-white text-sm rounded-md">Review</button>
            </div>
          ))
        ) : <p className="text-center py-10 text-slate-500">No profiles awaiting review.</p>}
      </div>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div className="bg-white p-4 rounded-lg border">
    <p className="text-sm text-slate-600">{label}</p>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

export default DashboardPage;