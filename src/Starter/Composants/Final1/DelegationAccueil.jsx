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
      headers:{'Content-Type':'application/json'},
    })
    .then(response => response.json())
    .then(data=>{console.log(data.data),setRepartitionDelegation(data.data)})
    .catch(error=>{console.log(error)})
  },[getPLAN])

  // const data = [
  //   {
  //     "country": "Madagascar",
  //     "value": 1459,
  //   },
  //   {
  //     "country": "Comores",
  //     "value": 290,
  //   },
  //   {
  //     "country": "Mayotte",
  //     "value": 361,
  //   },
  //   {
  //     "country": "Maurice",
  //     "value": 649,
  //   },
  //   {
  //     "country": "Seychelles",
  //     "value": 511,
  //   },
  //   {
  //     "country": "Maldives",
  //     "value": 242,
  //   },
  //   {
  //     "country": "La Réunion",
  //     "value": 652,
  //   }
  // ]
  return (
    <div style={cardContainerStyle}>
      {repartitionDelegation.map((row, index) => (
        <CardDelegation key={index} nomPays={row.nompays} nombre={row.nombre} />
      ))}
    </div>
  );
};
export default DelegationAccueil;