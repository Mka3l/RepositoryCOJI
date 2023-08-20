import React from 'react';
import DelegationParDisciplineMaldives from './DelegationParDisciplineMaldives';
import DelegationParFonctionMaldives from './DelegationParFonctionMaldives';

const DelegationMaldives = () => {
  return (
    <div style={{ marginTop: '20px' }}>

<h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par fonctions </h2>
<div style={{ marginBottom: '50px' }}>
        <DelegationParFonctionMaldives /> 
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par Disciplines </h2>
      <div>
        <DelegationParDisciplineMaldives />
      </div>
    </div>
  );
};

export default DelegationMaldives;
