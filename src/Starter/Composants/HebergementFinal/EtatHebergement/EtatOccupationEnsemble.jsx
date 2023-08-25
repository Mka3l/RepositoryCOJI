import React from 'react';
import RecapEtatOccupation from './RecapEtatOccupation';
import EtatOccupation from './EtatOccupation';

const EtatOccupationEnsemble = () => {
  return (
    <div>
      <h2  style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '15px',
          background:' #973116',
          textAlign: 'center',
        }} className="mb-5 text-center">Etat d'occupation des sites d'Hébergement</h2>
      <div className="mb-5"> {/* Ajout de la classe de marge */}
        {/* <RecapEtatOccupation />  */}
        <EtatOccupation />
      </div>
    </div>
  );
};

export default EtatOccupationEnsemble;
