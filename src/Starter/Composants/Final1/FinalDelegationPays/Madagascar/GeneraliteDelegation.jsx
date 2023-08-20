import React from 'react';
import DelegationParFonctionExcel from './DelegationParFonctionExcel';
import DelegationParDisciplineExcel from './DelegationParDisciplineExcel';

const GeneraliteDelegation = () => {
  return (
    <div style={{ marginTop: '20px' }}>
  
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par fonctions </h2>
    
      <div style={{ marginBottom: '50px' }}>
        <DelegationParFonctionExcel /> 
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par Disciplines </h2>
      <div>
        <DelegationParDisciplineExcel />
      </div>
    </div>
  );
  };

export default GeneraliteDelegation;
