import React, { useEffect, useRef, useState } from 'react';
import AjoutHebergement from './AjoutHebergement';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardHebergement = () => {
  var urlHtpp = "http://127.0.0.1:9090/";

  const hebergementDetail = {
    // "date_create": "",
    // "capacite_totale": "",
    // "chambre_restante": "",
    // "chambre_occupees":"",
    // "taux_occupation":"" 
  }

  const [hebergement, setHebergement] = useState({});

  const cardContainerStyle = {
    display: 'flex',
    marginTop: '20px',
    padding: '50px',
    justifyContent: 'center', // Centre les éléments horizontalement
  };

  const cardStyle = {
    width: '20%',
    border: "none",
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Nouveau style de box shadow
    backgroundColor: '#dadada',
    padding: '20px',
    marginRight: '50px',
    textAlign: 'center', // Centre le contenu du texte horizontalement
  };

  const cardTitleStyle = {
    fontSize: '25px',
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const cardTextContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centre les contenus horizontalement
  };

  const cardTextValueStyle = {
    fontSize: '35px',
    fontWeight: 'bold',
    color: '#7d240c',
  };

  ///:====Input ==================
  const nom = useRef();
  const capaciteTotal = useRef();
  const chambreRestante = useRef();
  const chambreOccupe = useRef();

  //==========================



  useEffect(() => {
    fetch(urlHtpp + 'hebergement_details', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json())
      .then(data => { setHebergement(data[0]) })
      .catch(error => { console.log(error) });
  }, []);


  return (<div>
    <div style={cardContainerStyle}>
      <div style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Nombre total de sites
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
             {hebergement.nombretotalsite}
            </span>
          </div>
        </div>
      </div>


      <div style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Capacité totale en lits
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success  pt-1 fw-bold" style={cardTextValueStyle}>
            {hebergement.capacite_totale}
            </span>
          </div>
        </div>
      </div>


      <div style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Nombre de lits occupés
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
            {hebergement.chambre_occupees}
            </span>
          </div>
        </div>
      </div>


      <div style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Taux d'occupation des Sites
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
            {hebergement.taux_occupation}%
            </span>
          </div>
        </div>
      </div>

    </div>

    
  </div>
  );
};

export default CardHebergement;
