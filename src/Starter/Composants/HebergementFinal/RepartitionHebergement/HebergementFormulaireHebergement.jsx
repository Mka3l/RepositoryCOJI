import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Delegation() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const API_URL = "http://127.0.0.1:9090/api/v1/delegations";  
//   useEffect(() => {
//     axios.get(API_URL)
//       .then(response => {
//         setData(response.data.data);
//       })
//       .catch(error => {
//         console.error('Erreur lors de l\'appel à l\'API:', error);
//       });
//   }, []);

  const handleSelectChange = event => {
    setSelectedItem(event.target.value);
  };

  return (
    <div>
      <h1>Formulaire insertion</h1>
      <select value={selectedItem} onChange={handleSelectChange} className='form-control'>
        <option value="">Sélectionnez un élément</option>
        {data.map(item => (
          <option key={item.id} value={item.id}>
            {item.nom_delegations} - {item.pays.nom_pays} - {item.discipline.nom_discipline}
          </option>
        ))}
      </select>
      {selectedItem && (
        <p>Élément sélectionné : {data.find(item => item.id === parseInt(selectedItem)).nom_delegations}</p>
      )}
    </div>
  );
}

export default Delegation;