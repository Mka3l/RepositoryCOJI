import React from 'react';
import TableauRecapitulatifEtatHebergement from './TableauRecapitulatifEtatOccupation';
import EtatHebergement from './EtatHebergement';

const EtatHebergementEnsemble = () => {

  
  return (
    <div>
      <h2 className="mb-3 text-center">Etat d'occupation des sites d'Hébergement</h2>
      <div className="mb-5"> {/* Ajout de la classe de marge */}
        <TableauRecapitulatifEtatHebergement /> 
      </div>

      <div>
        <EtatHebergement />
      </div>
    </div>
  );
};

export default EtatHebergementEnsemble;
