import React from 'react';
import DelegationCostPieChart from './PieChartTotauxCout';

const data = [
  { delegation: 'Madagascar', totalCost: 940 },
  { delegation: 'Comores', totalCost: 614 },
  { delegation: 'Seychelles', totalCost: 485 },
  { delegation: 'Mayotte', totalCost: 337 },
  { delegation: 'Maldives', totalCost: 411 },
  { delegation: 'Maurice', totalCost: 558 },
  { delegation: 'La Réunion', totalCost: 569 },
];

const CostPieChartDelegation = () => {
  return (
    <div>
      {/* Affichez d'autres composants ici si nécessaire */}
      <DelegationCostPieChart data={data} />
    </div>
  );
};

export default CostPieChartDelegation;
