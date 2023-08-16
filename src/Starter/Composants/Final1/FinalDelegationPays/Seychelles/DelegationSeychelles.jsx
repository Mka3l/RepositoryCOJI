import React from 'react';
import DelegationParDisciplineSeychelles from './DelegationParDisciplineSeychelles';
import DelegationParFonctionSeychelles from './DelegationParFonctionSeychelles';


const DelegationSeychelles = () => {
  return (
    <div style={{ marginTop: '20px' }}>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par fonctions </h2>
      <div style={{ marginBottom: '50px' }}>        <DelegationParFonctionSeychelles />
      </div>
      
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par Disciplines </h2>
      <div>
        <DelegationParDisciplineSeychelles />
      </div>
    </div>
  );
};

export default DelegationSeychelles;
