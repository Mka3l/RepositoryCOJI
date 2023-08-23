import React from 'react';

import RecapRepartitionHebergement from './TableauRecapitulatifRepartition';
import RepartitionHebergement from './RepartitionHebergement';
import HebergementFormulaire from '../EtatHebergement/RepartitionHebergement/HebergementFormulaire';
import HebergementFormulaireSite from '../EtatHebergement/RepartitionHebergement/HebergementFormulaireSite';

const RepartitionHebergementEnsemble = () => {
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
        }} className="mb-5 text-center">Répartition des Délégations par Site d'Hébergement</h2>

      <div className="mb-5"> {/* Ajout de la classe de marge */}
        <RecapRepartitionHebergement /> 
      </div>

      <div>
        <div><HebergementFormulaireSite/></div>
        <div><HebergementFormulaire /></div>
      </div>
    </div>
  );
};

export default RepartitionHebergementEnsemble;
