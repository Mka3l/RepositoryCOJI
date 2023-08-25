import React, { useEffect, useRef, useState } from 'react';

import RecapRepartitionHebergement from './TableauRecapitulatifRepartition';
import RepartitionHebergement from './RepartitionHebergement';
import HebergementFormulaire from '../EtatHebergement/RepartitionHebergement/HebergementFormulaire';
import HebergementFormulaireSite from '../EtatHebergement/RepartitionHebergement/HebergementFormulaireSite';
import url from '../../../urlHtpp';
import { Select } from '@mui/material';

const RepartitionHebergementEnsemble = () => {
  const [pays,setPays] = useState([])
  const [hotel_pays,setHotel_pays] = useState([])
  const [detail,setDetails] = useState([])
  const [nomHotel,setNomHotel] = useState()
  const [Fpays,setFPays] = useState(false)
  
  

  useEffect(()=>{
    fetch(url.urlHtpp+"pays",{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    }).then(response=>response.json())
    .then(data=>{console.log(data),setPays(data.data)})
    .catch(error=>{console.log(error)})

  },[])
  const pays_hotel = useRef();
  const getParPays = ()=>{
      setFPays(false)
      fetch(url.urlHtpp+"hebergement-pays/"+pays_hotel.current.value,{
        method:"GET",
        headers:{"Content-Type":"application/json"}
      })
      .then(response=>response.json())
      .then(data=>{console.log(data),setHotel_pays(data.data)})
      .catch(error=>{console.log(error)})
  }

  const details = (nom_hot,nom_p)=>{
    setNomHotel(nom_hot);
      setFPays(true)
     alert("Voir detail si-dessous")
      /////alert(url.urlHtpp+"hebergement-pays/"+nom_p+"&&"+nom_hot)
      fetch(url.urlHtpp+"hebergement-pays/discipline/"+nom_p+"&&"+nom_hot,{
        method:"GET",
        headers:{"Content-Type":"application/json"}
      })
      .then(response=>response.json())
      .then(data=>{console.log(data),setDetails(data.data)})
      .catch(error=>{console.log(error)})
  }

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const thStyle = {
    padding: '5px',
    textAlign: 'center',
    border: '1px solid #ddd',
    backgroundColor: '#f5f5f5',
  };

  const tdStyle = {
    padding: '5px',
    textAlign: 'center',
    border: '1px solid #ddd',
  };
  const buttonStyle = {
    backgroundColor: '#973116',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div>
      <h2  style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '15px',
          background:' #973116',
          textAlign: 'center',
        }} className="mb-5 text-center">Répartition des Délégations par Site d'Hébergement</h2>

      <div className="mb-5"> {/* Ajout de la classe de marge */}
        <RecapRepartitionHebergement /> 
      </div>
      <div>
        {/* <div><HebergementFormulaireSite/></div>
        <div><HebergementFormulaire /></div> */}
        <div>
          <h1>ROOMING LIST</h1>
          <select onChange={getParPays} ref={pays_hotel}>
            {pays.map((pays1,index)=>(
                  <option value={pays1.nom_pays} key={index}>{pays1.nom_pays}</option>
            ))}
           
          </select>
          <h1>Liste Hotel Par Pays</h1>

          <table key={1} border={1} style={tableStyle}>
            <tr style={thStyle}>
             
              <td style={tdStyle}>Hotels</td>
              <td style={tdStyle}>Effectif</td>
            </tr>
            {hotel_pays.map((hotel1,index)=>(
               <tr style={thStyle}>
                  <td style={tdStyle}>{hotel1.nom_hotel}</td>
                  <td style={tdStyle}>{hotel1.effectif}</td>
                  <td style={tdStyle}><button style={buttonStyle} onClick={()=>details(hotel1.nom_hotel,hotel1.nom_pays)}> + Details</button></td>
               </tr>
            ))}
          </table>
          {Fpays===true && (
            <>
              <h3>Hotel {nomHotel}</h3>
              <table border={1} style={tableStyle}>
              <tr style={thStyle}>   
                 <td style={tdStyle}>Hotels</td>
                 <td style={tdStyle}>Discpline</td>
                 <td style={tdStyle}>Effectif</td>
              </tr>
              {detail.map((detail,index)=>(
                   <tr key={index} style={thStyle}>
                      <td style={tdStyle}>{detail.nom_hotel}</td>
                      <td style={tdStyle}>{detail.nom_discipline}</td>
                      <td style={tdStyle}>{detail.effectif}</td>
                      <td style={tdStyle}><button style={buttonStyle} onClick={()=>details(discipline.nom_hotel,discipline.nom_pays)}> Voir Details</button></td>
                   </tr>
                ))}
              </table>
              </>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default RepartitionHebergementEnsemble;
