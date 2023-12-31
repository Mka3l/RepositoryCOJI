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
    fetch(url.urlHtpp+"repartition-delegation",{
      method:'GET',
      headers:{'Content-Type':'application/json',"Access-Control-Allow-Origin": "*"},
    })
    .then(response => response.json())
    .then(data=>{console.log(data.data),setRepartitionDelegation(data.data)})
    .catch(error=>{console.log(error)})
  },[getPLAN])

  return (
    <div style={cardContainerStyle}>
      {repartitionDelegation.map((row, index) => (
        <CardDelegation key={index} nomPays={row.nompays} nombre={row.nombre} />
      ))}
    </div>
  );
};
export default DelegationAccueil;