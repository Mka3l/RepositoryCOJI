import React, { useState,useEffect,useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDelegation from './CardDelegation';
import url from '../../urlHtpp';
const DelegationAccueil = ({onPageChange}) => {
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

  const [repartitionDelegation, setRepartitionDelegation] = useState([]);
  const [getPLAN,setGetPlan] = useState(true)

  useEffect(()=>{
    console.log("ENTRER")
    fetch(url.urlHtpp+"dash-delegation",{
      method:'GET',
      headers:{'Content-Type':'application/json'},
    })
    .then(response => response.json())
    .then(data=>{console.log(data.data),setRepartitionDelegation(data.data)})
    .catch(error=>{console.log(error)})
  },[getPLAN])

  return (
    <div>
    {/* <div style={cardContainerStyle}>
      {repartitionDelegation.map((row, index) => (
      row.nom_pays === "Madagascar" && (
           <CardDelegation key={index} nomPays={row.nom_pays} nombre={row.nbr_par_pays} />
      )
      ))}
    </div> */}
    <div style={cardContainerStyle}>
    {repartitionDelegation.map((row, index) => (
    row.nom_pays && (
         <CardDelegation key={index} nomPays={row.nom_pays} nombre={row.nbr_par_pays} />
    )
    ))}
  </div>
  </div>
  );
};
export default DelegationAccueil;