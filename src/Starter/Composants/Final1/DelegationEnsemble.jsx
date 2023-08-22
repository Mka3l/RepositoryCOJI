import React, { useRef,useState,useEffect } from 'react';
import DelegationAfficherDetails from './DelegationAfficherDetails';
import DelegationClic from './DelegationClic';
import AjoutHebergement from '../HebergementFinal/AjoutHebergement';
import url from '../../urlHtpp';
import DelegationAfficherPerson from './DelegationAfficherPerson';
const DelegationEnsemble = () => {

  var urlHtpp = url;

  const NameDelegation = [
    { "nom": "Madagascar" }, { "nom": "Maurice" },
    { "nom": "Comores" }, { "nom": "Mayotte" },
    { "nom": "Maldives" }, { "nom": "Seychelle" },
    { "nom": "La Réunion" }
  ];


  const nomPays = useRef();
  const nombre = useRef();

  const AddDelegation = () => {
    const delegation = {
      "nom": nomPays.current.value,
      "nombre": nombre.current.value
    }
    fetch(urlHtpp+"delegations", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(delegation)

    }).then(response => response.json())
      .then(data => { console.log(data) })
      .catch(error => { console.log(error) });
  }
  const inputButton = {
    width: '150px',
    height: '40px',
    fontWeight: '700',
    background: 'rgb(43 76 196 / 92%)',
  }
  const inputNormal = {
    boxShadow: 'rgb(190 190 190) 5px 5px 3px 0px inset',
  }
  const iconlist = {
    width: '30px',
    margin:'10px 10px 9px 645px',
    position: 'absolute',
  }
  const labelStyle = {
    letterSpacing: '1px',
    fontSize: '16pt',
    fontWeight: '300',
  }


  const [repartitionTotal, setRepartitionTotal] = useState([]);
  const [getPLAN,setGetPlan] = useState(true)

  useEffect(()=>{
    console.log("ENTRER")
    fetch(url.urlHtpp+"repartition-delegation/total",{
      method:'GET',
      headers:{'Content-Type':'application/json'},
    })
    .then(response => response.json())
    .then(data=>{console.log(data.data),setRepartitionTotal(data.data)})
    .catch(error=>{console.log(error)})
  },[getPLAN])

  return (
    <div style={{ marginLeft:"50px",marginTop: '20px' }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '900',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '30px',
          background:' #973116',
          textAlign: 'center',
        }}>Répartition du nombre de personnes par Délégation (nombre total {repartitionTotal})</h2>
      <div style={{ marginBottom: '50px' }}>

        <DelegationClic/> 
        <DelegationAfficherDetails/>
        <DelegationAfficherPerson/>
        <AjoutHebergement Action={"Ajout Delegation"} Titre={"Ajout Hebergement"}>
          <p>Votre Contact ID</p>
          <p> <input type='text' ref={contact_id} className='form-control' required /></p>
          <p>Nom complet</p>
          <p> <input type='number' ref={nom_complet} className='form-control' required /></p>
          <p>Nom categorie</p>
          <p> <input type='text' ref={nom_categorie} className='form-control' /></p>
          <p>Nom pays</p>
          <select name="" ref={nom_pays} id="">
            <option value="1">Madagascar</option>
            <option value="2">Maldives</option>
            <option value="3">Mayotte</option>
            <option value="4">Comore</option>
            <option value="5">La Reunion</option>
            <option value="6">Seychelles</option>
          </select>
          <p>Nom Fonction</p>
          <p> <input type='text' ref={nom_fonction} className='form-control' /></p>

          <p>Nom discipline</p>
          <p> <input type='text' ref={nom_discipline} className='form-control' /></p>

          <p>Nom comission</p>
          <p> <input type='text' ref={nom_comission} className='form-control' /></p>

          <p><button className='btn btn-success' onClick={AddHebergement}>Ajouter</button></p>
        </AjoutHebergement>

        	
        	
        	
        	
        	
        	
        	
        qualite_demandeur	
        nom_media	
        titulaire	
        printing_status	
        application_status	
        hebergement	
        numero_chambre
      </div>
    </div>
  );
};

export default DelegationEnsemble;
