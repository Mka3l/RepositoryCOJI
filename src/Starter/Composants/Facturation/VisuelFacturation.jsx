import React from 'react';
import FactureParDelegation from './Delegation';



const VisuelFacture = () => {

  return (
    <div>
      <h1  style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '15px',
          background:' #973116',
          textAlign: 'center',
          marginBottom:'50px'
        }}>Reçu</h1>
      <FactureParDelegation />
      {/*<EtatDePaiementParent/>*/}
    </div>
  );
};

export default VisuelFacture;
