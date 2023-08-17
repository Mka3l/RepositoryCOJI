import React, { useRef } from 'react';

import TableauRecapitulatifRepartitionHebergement from './TableauRecapitulatifRepartition';
import RepartitionHebergement from './RepartitionHebergement';
import AjoutHebergement from '../AjoutHebergement';

const RepartitionHebergementEnsemble = () => {

  var urlHtpp = "http://127.0.0.1:9090/";
  const hotels =[
    {"id":1,"nom":"Carlton"},
    {"id":2,"nom":"5 étoile"},
  ];

  const disciplines =[
    {"id":1,"nom":"FootBall"},
    {"id":2,"nom":"basketBall"},
  ];

  const delegations = [
    {"id":1,"delegation":"Madagascar"},
    {"id":2,"delegation":"Comores"},
    {"id":3,"delegation":"Seychelle"},
    {"id":4,"delegation":"Mayotte"},
    {"id":5,"delegation":"Maldives"},
    {"id":6,"delegation":"La Réunion"}
  ]

  const hotel_id = useRef();
  const discipline_id = useRef();
  const delegation_id = useRef();
  const nombre_prev = useRef();
  const nombre_reel = useRef();

  const AjouterRepartition = ()=>{
    const repartitionDATA ={
      "hebergement_id":hotel_id.current.value,
      "discipline_id":discipline_id.current.value,
      "delegation_id":delegation_id.current.value,
      "nombre_prevision":nombre_prev.current.value,
      "nombre_reel": nombre_reel.current.value
    }
    fetch(urlHtpp+"repartition-delegation-hebergement",{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body : JSON.stringify(repartitionDATA)
    })
    .then(response => response.json())
      .then(data => { alert("Insertion Succée") })
      .catch(error => { console.log(error) });
  }
  return (
    <div>
      <h2 className="mb-3 text-center">Répartition des Délégations par Site d'Hébergement</h2>

      <div className="mb-5"> {/* Ajout de la classe de marge */}
        <TableauRecapitulatifRepartitionHebergement /> 
      </div>
    <AjoutHebergement Action={"Ajout Répartition"} Titre={"Répartition des Délégations par Site d'Hébergement"}>
      <p>Hotel </p>
      <p>
        <select className='form-control' ref={hotel_id}>
          {hotels.map((hotel,indexR)=>(
              <option key={indexR} value={hotel.id}>{hotel.nom}</option>
          ))}
        </select>
      </p>
      <p>Discipline </p>
      <p>
        <select className='form-control' ref={discipline_id}>
          {disciplines.map((discipline,indexDisc)=>(
              <option key={indexDisc} value={discipline.id}>{discipline.nom}</option>
          ))}
        </select>
      </p>

      <p>Delegation </p>
      <p>
        <select className='form-control' ref={delegation_id}>
          {delegations.map((delegation,indexDel)=>(
              <option key={indexDel} value={delegation.id}>{delegation.delegation}</option>
          ))}
        </select>
      </p>
      <p>Nombre Prévisionnel</p>
      <p><input type="number" className="form-control" ref={nombre_prev}/></p>
      <p>Nombre Réel</p>
      <p><input type='number' className='form-control' ref={nombre_reel}/></p>
      <p><button className='btn btn-primary' onClick={AjouterRepartition}>Ajouter</button></p>
    </AjoutHebergement>
      <div>
        <RepartitionHebergement />
      </div>
    </div>
  );
};

export default RepartitionHebergementEnsemble;
