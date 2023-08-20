import React from 'react';
import RecapEtatOccupation from './RecapEtatOccupation';
import EtatOccupation from './EtatOccupation';

const EtatOccupationEnsemble = () => {
  return (
    <div>
      <h2 className="mb-3 text-center">Etat d'occupation des sites d'Hébergement</h2>
      <div className="mb-5"> {/* Ajout de la classe de marge */}
        <RecapEtatOccupation /> 
      </div>

      <div>
        <EtatOccupation />
      </div>
    </div>
  );
};

export default EtatOccupationEnsemble;
