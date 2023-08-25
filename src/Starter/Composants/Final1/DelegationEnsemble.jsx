import React from 'react';
import DelegationAfficherDetails from './DelegationAfficherDetails';
import DelegationClic from './DelegationClic';

import DelegationAfficherPerson from './DelegationAfficherPerson';
const DelegationEnsemble = () => {
 
 
  return (
    <div style={{ marginLeft:"50px",marginTop: '20px' }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '900',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '30px',
          background:' #973116',
          textAlign: 'center',
        }}>Répartition du nombre de personnes par Délégation {/*{(nombre total {repartitionTotal})*/}</h2>
      <div style={{ marginBottom: '50px' }}>

        <DelegationClic/> 
        <DelegationAfficherDetails/>
        <DelegationAfficherPerson/>
        
      </div>
    </div>
  );
};

export default DelegationEnsemble;
