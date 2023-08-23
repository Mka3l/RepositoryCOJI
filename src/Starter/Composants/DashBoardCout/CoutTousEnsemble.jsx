import React from 'react';
import CoutParent from './CoutBarParent';
import CostPieChartDelegation from './costPieParent';


const CoutPieBarEnsemble = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <div><CoutParent /> </div>

      <div style={{ flex: '1 1 300px', minWidth: '300px', maxWidth: '500px' }}>
        
        < CostPieChartDelegation/>
      </div>
    </div>
  );
};

export default CoutPieBarEnsemble;
