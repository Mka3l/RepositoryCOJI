import React, { useRef,useState,useEffect } from 'react';
import DelegationAfficherDetails from './DelegationAfficherDetails';
import DelegationClic from './DelegationClic';
import AjoutHebergement from '../HebergementFinal/AjoutHebergement';
import url from '../../urlHtpp';
const DelegationEnsemble = () => {
  const NameDelegation = [
    { "nom": "Madagascar" }, { "nom": "Maurice" },
    { "nom": "Comores" }, { "nom": "Mayotte" },
    { "nom": "Maldives" }, { "nom": "Seychelle" },
    { "nom": "La Réunion" }
  ];


  const contact_id = useRef();
  const nom_complet = useRef();
  const nom_pays = useRef();
  const nom_fonction = useRef();
  const nom_discipline = useRef();
  const nom_comission = useRef();
  const nom_categorie  = useRef();
  const qualite_demandeur = useRef();
  const nom_media = useRef();
  const titulaire = useRef();
  const printing_status = useRef();
  const application_status = useRef();
  const hebergement = useRef();
  const numero_chambre = useRef();
  const [listdelegation,setListdelegation] = useState([]); 

  const AddDelegation = () => {
    const delegation = {
      "contact_id" : contact_id.current.value,
      "nom_complet" : nom_complet.current.value,
      "nom_pays" : nom_pays.current.value,
      "nom_fonction" : nom_fonction.current.value,
      "nom_discipline" : nom_discipline.current.value,
      "nom_comission" : nom_comission.current.value,
      "nom_categorie " : nom_categorie.current.value,
      "qualite_demandeur" : qualite_demandeur.current.value,
      "nom_media" : nom_media.current.value,
      "titulaire" : titulaire.current.value,
      "printing_status" : printing_status.current.value,
      "application_status" : application_status.current.value,
      "hebergement" : hebergement.current.value,
      "numero_chambre" : numero_chambre.current.value
    }
    setListdelegation(delegation)
    
    fetch(url.urlHtpp+"delegations", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(delegation)
      
    }).then(response => response.json())
    .then(data => { console.log(data) })
    .catch(error => { console.log(error) });
  }
  console.log(listdelegation);
  console.log(url.urlHtpp+"delegations/"+{listdelegation});
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
  const [getPLAN,setGetPlan] = useState(true);

  
  

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


  // const AddDelegation =()=>{
  //   const delegationAttribut = {
      
  //   }
  //   console.log(JSON.stringify(hebergementDe))
  //   fetch(configUrl.urlHtpp+"hebergement_delegation",{
  //     method:"POST",
  //     headers:{"Content-Type":"application/json"},
  //     body:JSON.stringify(hebergementDe)
  //   })
  //   .then(response=>response.json())
  //     .then(data=>{
  //       ///console.log(data)
  //     })
  //     .catch(error=>{
  //       ///console.log(error)
  //     })
  // }


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

        

        <AjoutHebergement Action={"Ajout Delegation"} Titre={"Ajout Hebergement"}>
          <p>Votre Contact ID</p>
          <p> <input type='text' ref={contact_id} className='form-control' required /></p>
          <p>Nom complet</p>
          <p> <input type='text' ref={nom_complet} className='form-control' required /></p>
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

          <p>Qualite demandeur</p>
          <p><input type='text' ref={qualite_demandeur} className='form-control' /></p>

          <p>Nom media</p>
          <p><input type='text' ref={nom_media} className='form-control' /></p>

          <p>Titulaire</p>
          <p><input type='text' ref={titulaire} className='form-control' /></p>
          
          <p>Printing status</p>
          <p><input type='text' ref={printing_status} className='form-control' /></p>

          <p>Application status</p>
          <p><input type='text' ref={application_status} className='form-control' /></p>

          <p>Hebergement</p>
          <p><input type='text' ref={hebergement} className='form-control' /></p>

          <p>Numero chambre</p>
          <p><input type='text' ref={numero_chambre} className='form-control' /></p>

          <p><button className='btn btn-success' onClick={AddDelegation}>Ajouter</button></p>
        </AjoutHebergement>
      </div>
    </div>
  );
};

export default DelegationEnsemble;
