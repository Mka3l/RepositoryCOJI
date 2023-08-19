import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../../HebergementStyles/HebergementFormulaire.css'
import configUrl from '../../../../ConfigUrl/config_Url';

const HebergementFormulaire = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    NomHebergement: '',
    RibHebergement: '',
    Zones: '',
    DatesEntree: '',
    DateSortie: '',
    PrixJournalier: '',
    Delegation: '',
    PrixHebergement: '',
  });
  const [showForm, setShowForm] = useState(false);

  // axios.get('http://localhost:8080/excel-data')
  // .then(response => {
  //   setData(response.data);
  // })
  // .catch(error => {
  //   console.error('Erreur lors de la récupération des données :', error);
  // });

  const [pays,setPays] = useState([])
  const [sites,setSites] = useState([])
  const [hebergements,setHebergement] = useState([])

  const [hebergementAFF,setHebergementAFF] = useState([])

  useEffect(() => {
    fetch(configUrl.url+"pays",{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    }).then(response=>response.json())
      .then(data=>{
       /// console.log(data.data),
        (data.data)})
      .catch(error=>{
        ////console.log(error)
      })
      ///////////////////////////////////:
    fetch(configUrl.url+"sites",{
        method:"GET",
        headers:{"Content-Type":"application/json"}
    })
    .then(response=>response.json())
      .then(data=>{
        ///console.log(data.data),
        setSites(data.data)})
      .catch(error=>{
        ///console.log(error)
      })
      ///////////////////////////////////
     //// fetch(configUrl.url+"")

    //  fetch(configUrl.url+"hebergement_delegation",{
    //   method:"GET",
    //   headers:{"Content-Type":"application/json"}
    //  })
    //  .then(response=>response.json())
    //  .then(data=>{console.log(data.data),setHebergementAFF(data.data)})
    //  .catch(error=>{console.log(error)})



  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, formData]);
    setFormData({
      NomHebergement: '',
      RibHebergement: '',
      Zones: '',
      DatesEntree: '',
      DateSortie: '',
      PrixJournalier: '',
      Delegation: '',
      PrixHebergement: '',
    });
  };

  const columns = [
    "nom_hebergement",
    "rib_hebergement",
    "zone",
    "date_entree",
    "date_sortie",
    "prix_journalier",
    "delegation",
    "prix_hebergement",
  ];

  const hebergement_id = useRef();
  const rib_hebergement = useRef();

  const date_entre = useRef();
  const delegation_id = useRef();
 const date_sortie = useRef();
  const prix_journalier = useRef();
  const prix_hebergement  =  useRef();

  const AjoutDelegation =()=>{
    setShowForm(!showForm)
    fetch(configUrl.url+"hebergements",{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    }).then(response=>response.json())
      .then(data=>{
        ///console.log(data.data),
        setHebergement(data.data)})
      .catch(error=>{console.log(error)})
  }

  

  const ajoutHebegementDelegation = ()=>{
    const hebergementDe = {
      "date_entree": date_entre.current.value,
      "date_sortie": date_sortie.current.value,
      "delegations": {
              "id": delegation_id.current.value
      },
      "hebergement": {
          "id": hebergement_id.current.value
      }
    }
    console.log(JSON.stringify(hebergementDe))
    fetch(configUrl.url+"hebergement_delegation",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(hebergementDe)
    })
    .then(response=>response.json())
      .then(data=>{
        ///console.log(data)
      })
      .catch(error=>{
        ///console.log(error)
      })
  }

  return (
    <div className="container">
      
      <a className="add-link" onClick={AjoutDelegation}>
        (Ajout Délégation sur SIte d'Hébergement)
      </a>
      {showForm && (
       <div>
          {/* Champs du formulaire */}
          <label>
            Hebergements
          
            <select ref={hebergement_id}
              value={formData.Delegation}
              onChange={(e) => setFormData({ ...formData, Delegation: e.target.value })}
            >
              <option value="">Sélectionnez un Hébergement</option>
              {hebergements.map((row,indexRow)=>
                <option key={indexRow} value={row.id}>{row.nom_hebergement}-{row.sites.nom_site}</option>
              )}
              
             
            </select>
          </label>
          <br />
         
          <br />
          <label>
            Date d'Entrée:
            <input ref={date_entre}
              type="date"
              value={formData.DatesEntree}
              onChange={(e) => setFormData({ ...formData, DatesEntree: e.target.value })}
            />
          </label>
          <br />
          <label>
            Date de Sortie:
            <input ref={date_sortie}
              type="date"
              value={formData.DateSortie}
              onChange={(e) => setFormData({ ...formData, DateSortie: e.target.value })}
            />
          </label>
          <br />
         
          <br />
          <label>
            Délégation:
            <select ref={delegation_id}
              value={formData.Delegation}
              onChange={(e) => setFormData({ ...formData, Delegation: e.target.value })}
            >
              <option value="">Sélectionnez une délégation</option>
              {pays.map((row,indexRow)=>
                <option key={indexRow} value={row.id}>{row.nom_pays}</option>
              )}
              
             
            </select>
          </label>
          <br />
          <label>
            Prix de l'Hébergement:
            <input ref={prix_hebergement}
              type="text"
              value={formData.PrixHebergement}
              onChange={(e) => setFormData({ ...formData, PrixHebergement: e.target.value })}
            />
          </label>
          

          <br />
          <button type="submit" onClick={ajoutHebegementDelegation}>Ajouter</button>
          </div>
      )}
      <table className="table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.nom_hebergement}</td>
              <td>{row.rib_hebergement}</td>
              <td>{row.zone}</td>
              <td>{row.date_entree}</td>
              <td>{row.date_sortie}</td>
              <td>{row.prix_journalier}</td>
              <td>{row.delegation}</td>
              <td>{row.prix_hebergement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HebergementFormulaire;
