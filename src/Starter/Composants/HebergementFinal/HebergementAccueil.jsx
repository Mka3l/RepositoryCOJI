import React, { useEffect, useRef, useState } from 'react';
import AjoutHebergement from './AjoutHebergement';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import urlHtpp from '../../urlHtpp';
import url from '../../urlHtpp';

const CardHebergement = () => {
  //var urlHtpp = "http://127.0.0.1:9090/";

  // const data ={
  //   "nombre_total":86,
  //   "capacite_total_lit":0,
  //   "nombre_lit_occupe":3068,
  //   "taux_occupation":0
  // }

  const [dashHeb,setDashHeb] = useState()

  const [data,setData] = useState()
  const [totalSite,setTotalSite] = useState();
  const [lit_total,setLit_total] = useState();
  const [lit_occupe,setLit_Occupe] = useState();
  const [taux,setTaux] = useState();
  



  useEffect(()=>{
    fetch(url.urlHtpp+"hebergements/card/2023-08-23",{
      method :"GET",
      headers:{"Content-Type":"application/json"}
    })
    .then(response=>response.json())
    .then(data=>{console.log(data),
      setLit_total(data.data.card.total_lit),
      setLit_Occupe(data.data.card.lit_occupe)
      setTaux(data.data.card.taux_occupe)
      setTotalSite(data.data.total)})
    .catch(error=>{console.log(error)})
  },[])

  
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

  // ///:====Input ==================
  // const nom = useRef();
  // const capaciteTotal = useRef();
  // const chambreRestante = useRef();
  // const chambreOccupe = useRef();

  // //==========================
  // const AddHebergement = () => {
  //   const hebergement = {
  //     "nom": nom.current.value,
  //     "capacite_totale": capaciteTotal.current.value,
  //     "chambre_restante": chambreRestante.current.value,
  //     "chambre_occupees": chambreOccupe.current.value
  //   }
  //   console.log(JSON.stringify(hebergement));
  //   fetch(urlHtpp + "hebergements", {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(hebergement)
  //   })
  //     .then(response => response.json())
  //     .then(data => { ///console.log(data) 
  //     })
  //     .catch(error => { console.log(error) });
  // }


  return (<div>
    <div style={cardContainerStyle}>
      <div style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Nombre total de sites
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
              {totalSite}
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
             {lit_total??0}
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
             {lit_occupe??0}
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
                {taux}%
              </span>
            </div>
        </div>
      </div>

    </div>
  </div>
  );
};

export default CardHebergement;
