import React, { useEffect, useRef, useState } from 'react';
import AjoutHebergement from '../HebergementFinal/AjoutHebergement';
import urlHtpp from '../../urlHtpp';

const TransportCard = ({ onPageChange }) => {

  //var urlHtpp = "http://127.0.0.1:9090/";

  const [delegations, setDelegations] = useState([]);

  useEffect(() => {
    fetch(urlHtpp.urlHtpp + 'delegations', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json())
      .then(data => { setDelegations(data) })
      .catch(error => { console.log(error) });
  }, []);

  const anne = useRef();
  const immatriculation = useRef();
  const kilometrage = useRef();
  const modele = useRef();
  const delegationV = useRef();



  const delegationVeh = {
    "id": "",
    "nom": "",
    "nombre": ""
  }
  const transport = {
    "annee": '',
    "immatriculation": '',
    "kilometrage": '',
    "modele": '',
    "photo_vehicule": '',
    "delegation_id": ''
  }

  const AddTransport = () => {
    transport.annee = anne.current.value;
    transport.kilometrage = kilometrage.current.value;
    transport.immatriculation = immatriculation.current.value;
    transport.modele = modele.current.value;
   
    transport.delegation = delegationV;
    fetch(urlHtpp.urlHtpp + "vehicules", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transport)
    }).then(response => response.json())
      .then(data => { console.log(data) })
      .catch(error => { console.log(error) })
  }

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Permet aux éléments de passer à la ligne
    marginTop: '20px',
    padding: '50px',
    justifyContent: 'center', // Centre les éléments horizontalement
  };
  const handleCardClick = (pageName) => {
    onPageChange(pageName);
  };

  const cardStyle = {
    width: '25%',
    border: "none",
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Nouveau style de box shadow
    backgroundColor: '#dadada',
    padding: '20px',
    marginRight: '50px',
    marginBottom: '20px',
    textAlign: 'center', // Centre le contenu du texte horizontalement
  };

  const cardTitleStyle = {
    fontSize: '25px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const cardTextContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centre les contenus horizontalement
    marginBottom: '15px',
  };

  const cardTextValueStyle = {
    fontSize: '35px',
    fontWeight: 'bold',
    color: '#7d240c',
  };



  return ( <>
      <div style={cardContainerStyle}>
        
        <div className="col-xxl-4 col-md-6" style={{ ...cardStyle }} onClick={() => handleCardClick('Disponibilité des véhicules')}>
          <div className="card-body">
            <h5 className="card-title" style={cardTitleStyle}>
              Total véhicules
            </h5>
              <div style={cardTextContentStyle}>
                <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
                  100
                </span>
                <span className="card-text" style={{ fontSize: '20px', color: '#555', textAlign: 'center' }}>
                  Nombre total véhicules
                </span>
              </div>
          </div>
        </div>

        
        <div className="col-xxl-4 col-md-6" style={{ ...cardStyle }}>
          <div className="card-body">
            <h5 className="card-title" style={cardTitleStyle}>
              Véhicules occupées
            </h5>
              <div style={cardTextContentStyle}>
                <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
                  43
                </span>
                <span className="card-text" style={{ fontSize: '20px', color: '#555', textAlign: 'center' }}>
                  Nombre total véhicules
                </span>
            </div>
          </div>
        </div>

        <div className="col-xxl-4 col-md-6" style={{ ...cardStyle }}>
          <div className="card-body">
            <h5 className="card-title" style={cardTitleStyle}>
              Véhicules disponibles
            </h5> 
              <div style={cardTextContentStyle}>
                <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
                  57
                </span>
                <span className="card-text" style={{ fontSize: '20px', color: '#555', textAlign: 'center' }}>
                  Nombre total véhicules
                </span>
              </div>
          </div>
        </div>
         

        {/* Les autres cartes vont ici... */}
      </div>
      <div>
        <AjoutHebergement Action={"Ajout véhicule"} Titre={"Ajout véhicule"}>
            <p>Catégorie</p>
            <p>
              <select name="" id="">
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
              <select name="" id="">
                <option value="1">Essence</option>
                <option value="2">Diesel</option>
              </select>
            </p>
            <p>Consommation théorique</p>
            <p>
              <input type="number" name="" className='form-control' id="" min="0" />
            </p>
            <p><button className='btn btn-success' onClick={AddTransport}> Ajouter</button></p>
          </AjoutHebergement>
      </div>
    </>
  );
};

export default TransportCard;
