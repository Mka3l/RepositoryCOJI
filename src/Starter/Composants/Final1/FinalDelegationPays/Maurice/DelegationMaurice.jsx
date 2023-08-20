import React from 'react';
import DelegationParDisciplineMaurice from './DelegationParDisciplineMaurice';
import DelegationParFonctionMaurice from './DelegationParFonctionMaurice';

const DelegationMaurice = () => {
  return (
    <div style={{ marginTop: '20px' }}>

<h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par fonctions </h2>
<div style={{ marginBottom: '50px' }}>        <DelegationParFonctionMaurice /> 
      </div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par Disciplines </h2>
      <div>
        <DelegationParDisciplineMaurice />
      </div>
    </div>
  );
};

export default DelegationMaurice;
