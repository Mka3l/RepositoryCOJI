import React, { useEffect, useRef, useState } from 'react';
import AjoutHebergement from '../HebergementFinal/AjoutHebergement';
import url from '../../urlHtpp';

const TransportDispo = () => {
  const carsData = [
    {
      immatriculation: '2525TBA',
      date: '21/08/23',
      categorie: '4 x 4',
      nombreDePlace: 5,
      typeCarburant: 'Essence',
      consommationTheorique: '7.5 l/100km',
      depart: 'Ankadimbahoaka',
      arrivee: 'Stade Mahamasina',
      distance: '10 km'
    },
    {
      immatriculation: '6852TBN',
      date: '22/08/23',
      categorie: 'Bus',
      nombreDePlace: 7,
      typeCarburant: 'Diesel',
      consommationTheorique: '9.8 l/100km',
      depart: 'Ambohipo',
      arrivee: 'Complexe de la CNaPS',
      distance: '15 km'
    },
    {
      immatriculation: '9898TBR',
      date: '23/08/23',
      categorie: 'Mini-bus',
      nombreDePlace: 4,
      typeCarburant: 'Hybride',
      consommationTheorique: '5.2 l/100km',
      depart: 'Soarano',
      arrivee: 'Terrain de rugby d\'Ankorondrano',
      distance: '7 km'
    },
    {
      immatriculation: '5768TBP',
      date: '24/08/23',
      categorie: 'Mini-bus',
      nombreDePlace: 4,
      typeCarburant: 'Essence',
      consommationTheorique: '6.3 l/100km',
      depart: 'Ankadifotsy',
      arrivee: 'Patinoire d\'Andohalo',
      distance: '12 km'
    },
    {
      immatriculation: '0024TBN',
      date: '25/08/23',
      categorie: '4 x 4 VVIP',
      nombreDePlace: 2,
      typeCarburant: 'Diesel',
      consommationTheorique: '7.8 l/100km',
      depart: 'Ivandry',
      arrivee: 'Centre de Tir Tsaralalàna',
      distance: '8 km'
    }
  ];
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

  const categorie = useRef();
  const boldStyle = {
    fontWeight: 'bold', // Ajout du style en gras
  };
  const taille = {
    width: '30%', // Ajout du style en gras
  };

  // const immatriculation = useRef();
  // const kilometrage = useRef();

  // const AddTransport = () => {
  //   transport.annee = anne.current.value;
  //   transport.kilometrage = kilometrage.current.value;
  //   transport.immatriculation = immatriculation.current.value;
  //   transport.modele = modele.current.value;

  //   transport.delegation = delegationV;
  //   fetch(urlHtpp.urlHtpp + "vehicules", {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(transport)
  //   }).then(response => response.json())
  //     .then(data => { console.log(data) })
  //     .catch(error => { console.log(error) })
  // }

  const [vehicules, setVehicules] = useState([]);
  const [trajet_vehicule,setTrajetVehicule] = useState([])
  const [useListe,setUseListe] = useState(true)
  const [useListev2,setUseListeV2] = useState(true)
  const [total,setTotal] = useState();
  const [occupe,setOccupe] = useState();
  const [dispo,setDispo] =useState();

  useEffect(() => {
    fetch(url.urlHtpp+"vehicule-gestion",{
      method:"GET",
      headers : {"Content-Type":"application/json"}
     })
     .then(response=>response.json())
     .then(data=>{console.log(data),setTrajetVehicule(data.data)})
     .catch(error=>console.log(error))
     console.log(url.urlHtpp + "liste-vehicule")
    fetch(url.urlHtpp + "liste-vehicule", {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => { console.log("#################",data),setVehicules(data) })
      .catch(error => console.log(error))

      fetch(url.urlHtpp + 'vehicules-excel/card-vehicule', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then(response => response.json())
        .then(data => { 
          // console.log(data.data.vehicule_total)
          // setCard(data.data) ,
        setTotal(data.data.vehicule_total),
        setOccupe(data.data.vehicule_occupe),
        setDispo(data.data.vehicule_repos)
        })
        .catch(error => { console.log(error) });
     
  }, [useListe,useListev2])

  const totalVehicles = 100;
  const availableVehicles = 57;
  const occupiedVehicles = totalVehicles - availableVehicles;
  const datyH = useRef();
  const intitule = useRef();
  const lieu_depart = useRef();
  const lieu_arrive = useRef();
  const vehicule_id = useRef();
  const AddTransport = ()=>{
      const trajet ={
          "vehicule_id" : vehicule_id.current.value,
          "intitule_trajet":intitule.current.value,
          "lieu_depart":lieu_depart.current.value,
          "lieu_arrive":lieu_arrive.current.value,
          "date_trajet":datyH.current.value
      }
      fetch(url.urlHtpp+"vehicule-gestion",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body : JSON.stringify(trajet)
      })
      .then(response=>response.json())
      .then(data=>{console.log(data),alert("Trajet Ajouter Par success"),setUseListe(false)})
      .catch(error=>{console.log(error)})
  }

  const Terminer =(id,immatriculation,idveh)=>{
    setUseListeV2(false)
    alert("Immatriculation : "+immatriculation)
    fetch(url.urlHtpp+"vehicule-gestion/0&&"+idveh+"&&"+id,{
      method:"PUT",
      headers:{"Content-Type":"application/json"}
    }).then(response=>response.json())
    .then(data=>{console.log(data)})
    .catch(error=>{console.log(error)})
   
  }



  return (
    <div className="car-list">
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        boxShadow: '0px 5px 10px 4px #9f9f9f',
        color: 'rgb(255 255 255)',
        textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
        padding: '15px',
        background: ' #973116',
        textAlign: 'center',
      }} className="mb-5 text-center">Trajet véhicules
      </h1>
      <div>
        <table style={tableStyle}>
          <thead>
            <tr style={{
                        ...thStyle,
                      
                        position: 'sticky',
                        top: '150px',
                        backgroundColor: 'white',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '16px', 
                        textAlign: 'center', 
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                        color: '#333'
                        }}>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Immatriculation</th>
              <th style={thStyle}>Catégorie</th>
              <th style={thStyle}>Nombre de place</th>
              <th style={thStyle}>Type carburant</th>
              <th style={thStyle}>Lieu de départ</th>
              <th style={thStyle}>Lieu d'arrivée</th>
              <th style={thStyle}>Distance</th>
            </tr>
          </thead>
          <tbody>
            {trajet_vehicule.map((car, index) => (
              <tr key={index}>
                <td style={tdStyle}>{new Date(car.date_trajet).toLocaleDateString()}</td>
                <td style={tdStyle}>{car.immatriculation}</td>
                <td style={tdStyle}>{car.categorie}</td>
                <td style={tdStyle}>{car.nbr_place}</td>
                <td style={tdStyle}>{car.energie}</td>
                <td style={tdStyle}>{car.lieu_depart}</td>
                <td style={tdStyle}>{car.lieu_arrive}</td>
                <td style={tdStyle}>{car.intitule}</td>
                <td><button onClick={()=>Terminer(car.id,car.immatriculation,car.vehicule_id)} className='btn btn-danger'>Termier</button></td>
                <td>
                  <AjoutHebergement Action={"Update"} Titre={"Update Trajet"}>
                    <p>Date</p>
                      <p><input type='datetime-local' value={new Date(car.date_trajet).toLocaleDateString()}/></p>
                      <p>Lieu Date</p>
                      <p><input  type='text' value={car.lieu_depart}/></p>
                      <p>Lieu Arrive</p>
                      <p><input type='text' value={car.lieu_arrive}/></p>
                  </AjoutHebergement>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <AjoutHebergement Action={"Ajout Trajet"} Titre={"Ajout Trajet"}>
            <p>Date</p>
            <p><input type='datetime-local' ref={datyH}/></p>
            <p>Catégorie</p>
            <p>
              <select name="" id="" ref={vehicule_id}>
                {vehicules.map((val, indexval) =>
                  <>
                    <option key={indexval} value={val.id}>{val.cat_VEHICULE}-{val.immatriculation}-{val.nbr_place} PLaces-{val.energie}</option>
                  </>
                )}

              </select>
            </p>
            <p>Motif Trajet</p>
            <p> <input type='text'ref={intitule}/></p>
            <p>Lieu Depart</p>
            <p><input type='text' ref={lieu_depart}/></p>
            <p>Lieu Arrive</p>
            <p><input type='text' ref={lieu_arrive}/></p>

            {/* <p>Immatriculation</p>
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
                <input type="number" name="" ref={consommationTheorique} className='form-control' id="" min="0" /> */}
            {/* </p> */}
            <p><button className='btn btn-success' onClick={AddTransport}> Ajouter</button></p>
          </AjoutHebergement>
        </div>
      </div>
      <div className="vehicle-info">
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '15px',
          background: ' #973116',
          textAlign: 'center',
        }} className="mb-5 mt-5 text-center">Informations sur les véhicules</h2>
        <table style={{ ...tableStyle, ...taille }}>
          <tbody>
            <tr>
              <td style={{ ...tdStyle, ...boldStyle }}>Total de véhicules</td>
              <td style={{ ...tdStyle, ...boldStyle }}>{total}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Véhicules disponibles</td>
              <td style={tdStyle}>{dispo}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Véhicules occupés</td>
              <td style={tdStyle}>{occupe}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default TransportDispo;