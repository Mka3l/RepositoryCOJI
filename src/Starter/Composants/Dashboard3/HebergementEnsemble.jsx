import React from 'react';
import ParentCombinedChart from './ParentCombinedChart';
import AccommodationCard from '../Dashboard1/AccommodationCard';
import AccommodationTable from '../Dashboard1/AccommodationTab';

const HebergementEnsemble = () => {
  return (
    <div style={{ marginTop: '50px' }}>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition du nombre de personnes, par site et par délégation</h2>
      <div>
        <ParentCombinedChart /> 
      </div>

      <div>
        <AccommodationTable />
      </div>
      
      <div>
        < AccommodationCard />
      </div>

    </div>
  );
};

export default HebergementEnsemble;
