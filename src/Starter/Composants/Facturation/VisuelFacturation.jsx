import React from 'react';
import FactureParDelegation from './Delegation';



const VisuelFacture = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    paddingTop: '20px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>FACTURE</h1>
      <FactureParDelegation />
      {/*<EtatDePaiementParent/>*/}
    </div>
  );
};

export default VisuelFacture;
