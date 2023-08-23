import React from 'react';
import CombinedChart from './CombinedChart';

const data = [
  {
    site: 'Carlton',
    delegations: [
      { name: 'La Réunion', nombrePersonnes: 200 },
      { name: 'Maldives', nombrePersonnes: 245 },
      // Ajoutez les autres délégations pour le site Carlton ici
    ],
  },
  {
    site: 'Radisson',
    delegations: [
        { name: 'La Réunion', nombrePersonnes: 176 },
      { name: 'Comores', nombrePersonnes: 245 },
      // Ajoutez les délégations pour le site Radisson ici
    ],
  },
  {
    site: 'Colbert',
    delegations: [
        { name: 'Maurice', nombrePersonnes: 78 },
      { name: 'Comores', nombrePersonnes: 113 },
      // Ajoutez les délégations pour le site Colbert ici
    ],
  },
  {
    site: 'Pousse-Pousse',
    delegations: [
        { name: 'Madagascar', nombrePersonnes: 210 },
      { name: 'Mayottes', nombrePersonnes: 93 },
      // Ajoutez les délégations pour le site Pousse-Pousse ici
    ],
  },
  {
    site: 'Urban',
    delegations: [
        { name: 'La Réunion', nombrePersonnes: 210 },
      { name: 'Seychelles', nombrePersonnes: 125 },
      // Ajoutez les délégations pour le site Urban ici
    ],
  },
];

const ParentCombinedChart = () => {
  return (
    <div>
      {/* Affichez d'autres composants ici si nécessaire */}
      <CombinedChart data={data} />
    </div>
  );
};

export default ParentCombinedChart;
