import React from 'react';
import FactureRow from './FactureRow';
import FactureParDelegation from '../Delegation';

const FactureTable = ({ tableStyle, thStyle, tdStyle, strongStyle, items, handleInputChange, numberWithThousandsSeparator, calculateMontantTotal, reducevalue, calculateReste }) => {





  return (
    <table style={tableStyle}>
      <tbody style={{ border: '1px solid' }}>
        <tr style={{boxShadow: '0px 0px 5px 0px'}}>
          <th style={thStyle}>Designation</th>
          <th style={thStyle}>Unité</th>
          <th style={thStyle}>Quantité</th>
          <th style={thStyle}>Concerne<p>(Par Jour)</p></th>
          <th style={thStyle}>Prix Unitaire<p>(Ariary)</p></th>
          <th style={thStyle}>Montant<p>(Ariary)</p></th>
        </tr>
        {items.map((item, index) => (
          <FactureRow
            key={index}
            item={item}
            handleInputChange={(event) => handleInputChange(index, event)}
            numberWithThousandsSeparator={numberWithThousandsSeparator}
          />
        ))}
        {/* ... Autres lignes ... */}
        {/* Ligne supplémentaire 1 */}
        
        {/* Ligne supplémentaire 2 */}
        
      </tbody>

    </table>

  );
};
export default FactureTable;
