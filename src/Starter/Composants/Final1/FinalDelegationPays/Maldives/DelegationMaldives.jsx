import React from 'react';
import DelegationParDisciplineMaldives from './DelegationParDisciplineMaldives';
import DelegationParFonctionMaldives from './DelegationParFonctionMaldives';

const DelegationMaldives = () => {
  return (
    <div style={{ marginTop: '20px' }}>

<h2  style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '15px',
          background:' #973116',
          textAlign: 'center',
        }}>Répartition de la Délégation par fonction </h2>
<div style={{ marginBottom: '50px' }}>
        <DelegationParFonctionMaldives /> 
      </div>

      <h2  style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '15px',
          background:' #973116',
          textAlign: 'center',
        }}>Répartition de la Délégation par Discipline </h2>
      <div>
        <DelegationParDisciplineMaldives />
      </div>
    </div>
  );
};

export default DelegationMaldives;
