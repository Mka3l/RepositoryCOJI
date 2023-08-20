import React from 'react';

import TableauRecapitulatifRepartitionHebergement from './TableauRecapitulatifRepartition';
import RepartitionHebergement from './RepartitionHebergement';

const RepartitionHebergementEnsemble = () => {
  return (
    <div>
      <h2 className="mb-3 text-center">Répartition des Délégations par Site d'Hébergement</h2>

      <div className="mb-5"> {/* Ajout de la classe de marge */}
        <TableauRecapitulatifRepartitionHebergement /> 
      </div>

      <div>
        <RepartitionHebergement />
      </div>
    </div>
  );
};

export default RepartitionHebergementEnsemble;
