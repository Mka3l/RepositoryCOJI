import React, { useEffect, useRef, useState } from 'react';
import AjoutHebergement from './AjoutHebergement';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import configUrl from '../../ConfigUrl/config_Url';

const CardHebergement = () => {
  var urlHtpp = "http://127.0.0.1:9090/";

  const data ={
    "nombre_total":79,
    "capacite_total_lit":12042,
    "nombre_lit_occupe":4602,
    "taux_occupation":38
  }

  const [dashHeb,setDashHeb] = useState()
  



  /*useEffect(()=>{
    fetch(configUrl.url+"",{
      method :"GET",
      headers:{"Content-Type":"application/json"}
    })
    .then(response=>response.json())
    .then(data=>{console.log(data)})
    .catch(error=>{console.log(error)})
  },[])*/

  
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
  const AddHebergement = () => {
    const hebergement = {
      "nom": nom.current.value,
      "capacite_totale": capaciteTotal.current.value,
      "chambre_restante": chambreRestante.current.value,
      "chambre_occupees": chambreOccupe.current.value
    }
    console.log(JSON.stringify(hebergement));
    fetch(urlHtpp + "hebergements", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(hebergement)
    })
      .then(response => response.json())
      .then(data => { ///console.log(data) 
      })
      .catch(error => { console.log(error) });
  }


  return (<div>
    <div style={cardContainerStyle}>
      <div style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Nombre total de sites
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
              {data.nombre_total}
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
             {data.capacite_total_lit}
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
             {data.nombre_lit_occupe}
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
                {data.taux_occupation}%
              </span>
            </div>
        </div>
      </div>

    </div>

    <AjoutHebergement Action={"Ajout Hebergement"} Titre={"Ajout Hebergement"}>
      <p>Nom</p>
      <p> <input type='text' ref={nom} className='form-control' /></p>
      <p>Capacite Total</p>
      <p> <input type='number' ref={capaciteTotal} className='form-control' /></p>
      <p>Chambre Restante</p>
      <p> <input type='number' ref={chambreRestante} className='form-control' /></p>
      <p>Chambre Occupé</p>
      <p> <input type='number' ref={chambreOccupe} className='form-control' /></p>
      <p><button className='btn btn-success' onClick={AddHebergement}>Ajouter</button></p>
    </AjoutHebergement>
  </div>
  );
};

export default CardHebergement;
