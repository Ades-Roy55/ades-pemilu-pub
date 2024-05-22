import React, { useState } from 'react';
import { Candidate } from '../types';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border rounded-lg p-4 shadow-lg text-center bg-red-500 hover:bg-red-800 hover:text-white transition duration-300 ease-in-out">
      <div className="overflow-hidden h-48 mb-4">
        <img src={candidate.photo} alt={candidate.name} className="w-full h-full object-cover rounded-md transform hover:scale-105 transition duration-300 ease-in-out" />
      </div>
      <h3 className="text-xl font-semibold">{candidate.name}</h3>
      <p className="text-black-600">Nomor: {candidate.number}</p>
      <p className="text-black-600">Angkatan: {candidate.year}</p>
      {showDetails && (
        <div className="mt-4 text-left">
          <h4 className="text-lg font-bold">Visi:</h4>
          <p className="text-black-700 mb-2">{candidate.vision}</p>
          <h4 className="text-lg font-bold">Misi:</h4>
          <p className="text-black-700 whitespace-pre-line">{candidate.mission}</p>
        </div>
      )}
      <button
        className={`mt-4 px-4 py-2 rounded transition duration-300 ease-in-out ${showDetails ? 'bg-red-600' : 'bg-blue-500'} text-white hover:bg-red-600`}
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Tutup' : 'Visi & Misi'}
      </button>
    </div>
  );
};

export default CandidateCard;
