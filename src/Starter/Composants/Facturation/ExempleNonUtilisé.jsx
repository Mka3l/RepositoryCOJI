// FactureDelegation.js
import React from 'react';
import FactureVisuel from './FactureVisuel';

const FactureDelegation = () => {
  const factureDelegation = {
    nomDelegation: 'Madagascar',
    siteHebergement: 'Carlton',
    nombreChambres: 200,
    prixChambre: 100,
    montantHT: 1000,
    montantTTC: 1200,
  };

  return (
    <div>
      <h1>Factures pour les Jeux des Îles</h1>
      <FactureVisuel {...factureDelegation} />
    </div>
  );
};

export default FactureDelegation;
