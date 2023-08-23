import React from 'react';
import DelegationBarCostChart from './DelegationCostBarChart';

const data = [
  { delegation: 'Madagascar', hebergement: 508, transport: 30, restauration: 402 },
  { delegation: 'Comores', hebergement: 406, transport: 25, restauration: 183 },
  { delegation: 'Seychelles', hebergement: 232, transport: 32, restauration: 221 },
  { delegation: 'Mayotte', hebergement: 101, transport: 35, restauration: 201 },
  { delegation: 'Maldives', hebergement: 203, transport: 25, restauration: 183 },
  { delegation: 'Maurice', hebergement: 301, transport: 32, restauration: 225 },
  { delegation: 'La Réunion', hebergement: 312, transport: 32, restauration: 225 },
  // Ajoutez les données pour les autres délégations ici
];

const CoutParent = () => {
  return (
    <div>
      {/* Affichez d'autres composants ici si nécessaire */}
      <DelegationBarCostChart data={data} />
    </div>
  );
};

export default CoutParent;
