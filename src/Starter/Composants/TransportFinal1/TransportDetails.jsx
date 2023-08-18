import React from 'react';

const TransportDispo = () => {
  const carsData = [
    {
      immatriculation: 'AB123CD',
      date: '21/08/23',
      depart: 'Ankadimbahoaka',
      arrivee: 'Stade Mahamasina',
      distance: '10 km',
    
    },
    {
      immatriculation: 'EF456GH',
      date: '22/08/23',
      depart: 'Ambohipo',
      arrivee: 'Complexe de la CNaPS',
      distance: '15 km',
     
    },
    {
      immatriculation: 'IJ789KL',
      date: '23/08/23',
      depart: 'Soarano',
      arrivee: 'Terrain de rugby d\'Ankorondrano',
      distance: '7 km',
   
    },
    {
      immatriculation: 'MN012OP',
      date: '24/08/23',
      depart: 'Ankadifotsy',
      arrivee: 'Patinoire d\'Andohalo',
      distance: '12 km',
    
    },
    {
      immatriculation: 'QR345ST',
      date: '25/08/23',
      depart: 'Ivandry',
      arrivee: 'Centre de Tir Tsaralalàna',
      distance: '8 km',
   
    },
  ];
  
  const tableStyle = {
    width: '80%',
    margin: 'auto',
    borderCollapse: 'collapse',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    
  };

  const thStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
    backgroundColor: '#f5f5f5',
  };

  const tdStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
    width: 'auto',
    whiteSpace: 'nowrap',
  };
  const boldStyle = {
    fontWeight: 'bold', // Ajout du style en gras
  };
  const taille = {
    width: '30%', // Ajout du style en gras
  };



  const totalVehicles = 100;
  const availableVehicles = 57;
  const occupiedVehicles = totalVehicles - availableVehicles;

  return (
    <div className="car-list">
      <h1  style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '15px',
          background:' #973116',
          textAlign: 'center',
        }} className="mb-5 text-center">Trajet véhicules</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Immatriculation</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Lieu de départ</th>
            <th style={thStyle}>Lieu d'arrivée</th>
            <th style={thStyle}>Distance</th>
           
          </tr>
        </thead>
        <tbody>
          {carsData.map((car, index) => (
            <tr key={index}>
              <td style={tdStyle}>{car.immatriculation}</td>
              <td style={tdStyle}>{car.date}</td>
              <td style={tdStyle}>{car.depart}</td>
              <td style={tdStyle}>{car.arrivee}</td>
              <td style={tdStyle}>{car.distance}</td>
            
            </tr>
          ))}
        </tbody>
      </table>

      <div className="vehicle-info">
        <h2  style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '15px',
          background:' #973116',
          textAlign: 'center',
        }}className="mb-5 mt-5 text-center">Informations sur les véhicules</h2>
        <table style={{ ...tableStyle, ...taille}}>
          <tbody>
            <tr>
              <td style={{ ...tdStyle, ...boldStyle }}>Total de véhicules</td>
              <td style={{ ...tdStyle, ...boldStyle }}>{totalVehicles}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Véhicules disponibles</td>
              <td style={tdStyle}>{availableVehicles}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Véhicules occupés</td>
              <td style={tdStyle}>{occupiedVehicles}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default TransportDispo;
