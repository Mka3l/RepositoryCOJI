import React, { useEffect, useRef } from 'react';
import AjoutHebergement from '../HebergementFinal/AjoutHebergement';

const TransportDispo = () => {

  useEffect(()=>{
    ////console.log(urlHtpp.url+"hebergement-liste/etat/"+date.date.date)
    ///detail{date_create: 1692741600000, capacite_total: 12, lits_occupe: 2, lits_restant: 10, taux_occupation: 16.666666666666664
    fetch(urlHtpp.urlHtpp+"trajet-vehicule/2023-08-23",{
      method :"GET",
      headers:{"Content-Type":"application/json"}
    })
    .then(response=>response.json())
    .then(data=>{
      console.log(data.data)
    
    })
    .catch(error=>{console.log(error)})
  },[])
  // const carsData = [
  //   {
  //     immatriculation: '2525TBA',
  //     date: '21/08/23',
  //     categorie: '4 x 4',
  //     nombreDePlace: 5,
  //     typeCarburant: 'Essence',
  //     consommationTheorique: '7.5 l/100km',
  //     depart: 'Ankadimbahoaka',
  //     arrivee: 'Stade Mahamasina',
  //     distance: '10 km'
  //   },
  //   {
  //     immatriculation: '6852TBN',
  //     date: '22/08/23',
  //     categorie: 'Bus',
  //     nombreDePlace: 7,
  //     typeCarburant: 'Diesel',
  //     consommationTheorique: '9.8 l/100km',
  //     depart: 'Ambohipo',
  //     arrivee: 'Complexe de la CNaPS',
  //     distance: '15 km'
  //   },
  //   {
  //     immatriculation: '9898TBR',
  //     date: '23/08/23',
  //     categorie: 'Mini-bus',
  //     nombreDePlace: 4,
  //     typeCarburant: 'Hybride',
  //     consommationTheorique: '5.2 l/100km',
  //     depart: 'Soarano',
  //     arrivee: 'Terrain de rugby d\'Ankorondrano',
  //     distance: '7 km'
  //   },
  //   {
  //     immatriculation: '5768TBP',
  //     date: '24/08/23',
  //     categorie: 'Mini-bus',
  //     nombreDePlace: 4,
  //     typeCarburant: 'Essence',
  //     consommationTheorique: '6.3 l/100km',
  //     depart: 'Ankadifotsy',
  //     arrivee: 'Patinoire d\'Andohalo',
  //     distance: '12 km'
  //   },
  //   {
  //     immatriculation: '0024TBN',
  //     date: '25/08/23',
  //     categorie: '4 x 4 VVIP',
  //     nombreDePlace: 2,
  //     typeCarburant: 'Diesel',
  //     consommationTheorique: '7.8 l/100km',
  //     depart: 'Ivandry',
  //     arrivee: 'Centre de Tir Tsaralalàna',
  //     distance: '8 km'
  //   }
  // ];
  const tableHeaders = [
    "Immatriculation",
    "Date",
    "Catégorie",
    "Nombre de places",
    "Type de carburant",
    "Consommation théorique",
    "Départ",
    "Arrivée",
    "Distance"
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

  // const categorie = useRef();
  const boldStyle = {
    fontWeight: 'bold', // Ajout du style en gras
  };
  const taille = {
    width: '30%', // Ajout du style en gras
  };

  const AddTransport = () => {
    // transport.annee = anne.current.value;
    // transport.kilometrage = kilometrage.current.value;
    // transport.immatriculation = immatriculation.current.value;
    // transport.modele = modele.current.value;
   
    // transport.delegation = delegationV;
    // fetch(urlHtpp.urlHtpp + "vehicules", {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(transport)
    // }).then(response => response.json())
    //   .then(data => { console.log(data) })
    //   .catch(error => { console.log(error) })
  }

  const totalVehicles = 100;
  const availableVehicles = 57;
  const occupiedVehicles = totalVehicles - availableVehicles;

  return (
    <div className="car-list">
      {/* <h1  style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '15px',
          background:' #973116',
          textAlign: 'center',
        }} className="mb-5 text-center">Trajet véhicules
      </h1>
      <div>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Immatriculation</th>
              <th style={thStyle}>Catégorie</th>
              <th style={thStyle}>Nombre de place</th>
              <th style={thStyle}>Type carburant</th>
              <th style={thStyle}>Consommation théorique</th>
              <th style={thStyle}>Lieu de départ</th>
              <th style={thStyle}>Lieu d'arrivée</th>
              <th style={thStyle}>Distance</th>
            </tr>
          </thead>
          <tbody>
            {carsData.map((car, index) => (
              <tr key={index}>
                <td style={tdStyle}>{car.date}</td>
                <td style={tdStyle}>{car.immatriculation}</td>
                <td style={tdStyle}>{car.categorie}</td>
                <td style={tdStyle}>{car.nombreDePlace}</td>
                <td style={tdStyle}>{car.typeCarburant}</td>
                <td style={tdStyle}>{car.consommationTheorique}</td>
                <td style={tdStyle}>{car.depart}</td>
                <td style={tdStyle}>{car.arrivee}</td>
                <td style={tdStyle}>{car.distance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div> */}
          {/* <AjoutHebergement Action={"Ajout Trajet"} Titre={"Ajout Trajet"}>
              <p>Catégorie</p>
              <p>
                <select name="" id="" ref={categorie}>
                  <option value="2">bus</option>
                  <option value="1">4 x 4</option>
                  <option value="1">4 x 4 VVIP</option>
                  <option value="2">Mini-bus</option>
                  <option value="2">Fourgon</option>
                  <option value="2">Voiture Legère</option>
                </select>
              </p>
              <p>Immatriculation</p>
              <input type='text' className='form-control' ref={immatriculation} />
              <p>Nombre de place</p>
              <input type='number' className='form-control' min={0} ref={kilometrage} />
              <p>Type carburant</p>
              <p>
                <select name="" id="" ref={type_carburant}>
                  <option value="1">Essence</option>
                  <option value="2">Diesel</option>
                </select>
              </p>
              <p>Consommation théorique</p>
              <p>
                <input type="number" name="" ref={consommationTheorique} className='form-control' id="" min="0" />
              </p>
              <p><button className='btn btn-success' onClick={AddTransport}> Ajouter</button></p>
          </AjoutHebergement>
        </div> */}
      {/* </div>

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
      </div> */}
    </div>
  );
};


export default TransportDispo;
