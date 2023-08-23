import React from 'react';
const FactureRow = ({ item, handleInputChange, numberWithThousandsSeparator }) => {
  const tdStyle = {}; // Ajoutez les styles appropriés ici pour les cellules

  return (
    <tr style={{ border: '1px solid' }}>
      <td style={tdStyle}>{item.designation}</td>
      <td style={tdStyle}>{item.unite}</td>
      <td style={tdStyle}>
        <input
          style={{ width: '200px' }}
          type="number"
          name="quantite"
          value={item.quantite}
          onChange={(event) => handleInputChange(event)}
        />
      </td>
      <td style={tdStyle}>
        <input
          style={{ width: '200px' }}
          type="number"
          name="concerne"
          value={item.concerne}
          onChange={(event) => handleInputChange(event)}
        />
      </td>
      <td style={tdStyle}>
        <input
          style={{ width: '200px' }}
          type="number"
          name="prixUnitaire"
          value={item.prixUnitaire}
          onChange={(event) => handleInputChange(event)}
        />
      </td>
      <td style={tdStyle}>
        {numberWithThousandsSeparator(item.quantite * item.concerne * item.prixUnitaire)}
      </td>
    </tr>
  );
};

export default FactureRow;