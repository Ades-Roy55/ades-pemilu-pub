import React from 'react';
import { candidates } from './data';
import CandidateCard from './components/CandidateCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-red-800 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Pemilihan Ketua PUB</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {candidates.map(candidate => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
