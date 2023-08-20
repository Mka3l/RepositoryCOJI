import React from 'react';

import DelegationParFonctionReunion from './DelegationParFonctionReunion';
import DelegationParDisciplineReunion from './DelegationParDiscipline';


const DelegationLaReunion = () => {
  return (
    <div style={{ marginTop: '20px' }}>

<h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par fonctions </h2>
<div style={{ marginBottom: '50px' }}>
        <DelegationParFonctionReunion /> 
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par Disciplines </h2>
      <div>
        <DelegationParDisciplineReunion />
      </div>
    </div>
  );
};

export default DelegationLaReunion;
