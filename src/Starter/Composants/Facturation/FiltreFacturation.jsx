import React from 'react';

const ComboBoxes = () => {
  const sites = ['Domaine WellSpring Ambohimangakely', 'Carlton Anosy', 'Colbert', 'Ibis'];
  const delegations = ['Madagascar', 'Maurice', 'Mayotte', 'Seychelles', 'La Réunion', 'Maldives'];
  const disciplines = ['Volley', 'Foot', 'Basket', 'Tennis', 'Natation', 'Judo', 'Athlétisme'];

  const comboBoxStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const comboBoxContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const selectStyle = {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  };

  return (
    <div style={comboBoxStyle}>
      <div style={comboBoxContainerStyle}>
        <label htmlFor="site" style={labelStyle}>Site:</label>
        <select id="site" style={selectStyle}>
          {sites.map((site, index) => (
            <option key={index} value={site}>{site}</option>
          ))}
        </select>
      </div>
      <div style={comboBoxContainerStyle}>
        <label htmlFor="delegation" style={labelStyle}>Délégation:</label>
        <select id="delegation" style={selectStyle}>
          {delegations.map((delegation, index) => (
            <option key={index} value={delegation}>{delegation}</option>
          ))}
        </select>
      </div>
      <div style={comboBoxContainerStyle}>
        <label htmlFor="discipline" style={labelStyle}>Discipline:</label>
        <select id="discipline" style={selectStyle}>
          {disciplines.map((discipline, index) => (
            <option key={index} value={discipline}>{discipline}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ComboBoxes;
