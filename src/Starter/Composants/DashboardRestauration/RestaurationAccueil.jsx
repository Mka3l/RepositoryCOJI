import React, { useEffect, useRef, useState } from 'react';
import AjoutHebergement from '../HebergementFinal/AjoutHebergement';
import CompResumeResto from './CompResumeResto';
import url from '../../urlHtpp';
import { format } from 'date-fns';
const RestaurationCard = (date) => {

  const [restaurationDash, setrestaurationDash] = useState([]);
  useEffect(() => {
 
    fetch(url.urlHtpp + "planning-restauration/accueille/"+date.date, {

      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json())
      .then(data => { console.log(data),setrestaurationDash(data.data) })
      .catch(error => { console.log(error) })
  }, [date.date]);

  const nomAD = useRef();
  const del = useRef();



  const AddRestauration = () => {
    // const restaurationAD = {
    //   "nom": nomAD.current.value,
    //   "delegation_id": del.current.value
    // }

    // console.log(JSON.stringify(restaurationAD));
    // fetch(urlHtpp + "restaurations", {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(restaurationAD)
    // }).then(response => response.json())
    //   .then(data => { console.log(data) })
    //   .catch(error => { console.log(error) })
  }

  
  

  const cardContainerStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    gap: '30px',
    marginTop: '20px',
    padding: '0px 100px',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  };


  return ( <>

      <div style={cardContainerStyle}>
        { restaurationDash.map((item, index) => (
          <CompResumeResto
            key={index}
            titre={item.titre}
            valeur={item.valeur}
            unite={item.unite}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurationCard;
