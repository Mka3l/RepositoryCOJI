import React, { useEffect, useRef, useState } from 'react';
import AjoutHebergement from './AjoutHebergement';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import urlHtpp from '../../urlHtpp';

const CardHebergement = (date) => {
  //var urlHtpp = "http://127.0.0.1:9090/";

  const data ={
    "nombre_total":'',
    "capacite_total_lit":'',
    "nombre_lit_occupe":'',
    "taux_occupation":''
  }
  const [siteHEB,setSiteHEB] = useState();
  const [capacite_total,setTotal] = useState();
  const [NBR_LIT,setNBR_LIT] = useState();
  const [TAUX,SETTAUX] = useState(); 

  const [dashHeb,setDashHeb] = useState()
  
  useEffect(()=>{
    //let date = new Date();
    ////console.log(urlHtpp.url+"hebergement-liste/etat/"+date.date.date)
    ///detail{date_create: 1692741600000, capacite_total: 12, lits_occupe: 2, lits_restant: 10, taux_occupation: 16.666666666666664
    fetch(urlHtpp.urlHtpp+"hebergement-liste/dash/"+date.toString(),{
      method :"GET",
      headers:{"Content-Type":"application/json"}
    })
    .then(response=>response.json())
    .then(data=>{
      console.log(data.data)
      setSiteHEB(data.data.getCardheber.nombre_total);
      setTotal(data.data.detail.capacite_total)
      setNBR_LIT(data.data.detail.lits_occupe);
      SETTAUX(data.data.detail.taux_occupation)
    })
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
              {siteHEB}
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
             {capacite_total}
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
             {NBR_LIT}
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
                {TAUX}%
              </span>
            </div>
        </div>
      </div>

    </div>
  </div>
  );
};

export default CardHebergement;
