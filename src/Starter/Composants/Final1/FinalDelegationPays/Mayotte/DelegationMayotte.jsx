import React from 'react';
import DelegationParDisciplineMayotte from './DelegationParDisciplineMayotte';
import DelegationParFonctionMayotte from './DelegationParFonctionMayotte';

const DelegationMayotte = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par fonctions </h2>

      <div style={{ marginBottom: '50px' }}>
        <DelegationParFonctionMayotte />
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par Disciplines </h2>
      <div>
        <DelegationParDisciplineMayotte />
      </div>
    </div>
  );
};

export default DelegationMayotte;
