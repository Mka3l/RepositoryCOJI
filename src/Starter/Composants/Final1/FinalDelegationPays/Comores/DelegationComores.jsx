import React from 'react';
import DelegationParFonctionComores from './DelegationParFonctionComores';
import DelegationParDisciplineComores from './DelegationParDisciplineComores';


const DelegationComores = () => {
  return (
    <div style={{ marginTop: '20px' }}>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par fonctions</h2>
      <div style={{ marginBottom: '50px' }}>
        <DelegationParFonctionComores /> 
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par Disciplines </h2>
      <div>
        <DelegationParDisciplineComores />
      </div>
    </div>
  );
};

export default DelegationComores;
