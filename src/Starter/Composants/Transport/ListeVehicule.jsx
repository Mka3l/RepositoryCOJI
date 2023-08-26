import React, {useEffect, useState} from "react";
import url from "../../urlHtpp";
import VehiculeCalendrier from "./VehiculeCalendrier";
import PersonneVehicule from "./PersonneVehicule";

const ListeVehicule = ()=>{
    const [category,setCategory] = useState('');
    const [immatriculation,setImmatriculation] = useState('');
    const [marque,setMarque] = useState('');
    const [status,setStatus] = useState('');
    const [carburant,setCarburant] = useState('');
    const [list,setList] = useState([]);
    const getData = ()=>{
        fetch(url.urlHtpp + "vehicule/list?category="+category+"&&immatriculation="+immatriculation+"&&marque="+marque+"&&carburant="+carburant, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(data => {
                console.log("DATA RETOUR : ",data.data);
                setList(data.data)
            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(()=>{
        getData()
    },[])
    const [currentPage,setCurrentPage] = useState(1)
    const itemsPerPage = 15;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = list.slice(startIndex,endIndex);
    const totalPages = Math.ceil(list.length/itemsPerPage)
    const [expanded, setExpanded] = useState(true);
    const styles = {
        formContainer: {
            display: 'flex',
            flexDirection: 'row',
            margin: '0 auto',
        },
        formRow: {
            display: 'inline-flex',  // Changement ici pour affichage en ligne
            flexDirection: 'column',
            gap: '5px',
            marginRight: '10px', // Ajout de marge entre les champs
        },
        label: {
            fontWeight: 'bold',
        },
        input: {
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '3px',
        },
        button: {
            backgroundColor: expanded ? '#7d240c' : '#973116',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
    };
    const [details,setDetails] = useState(null)
    const [personne,setPersonne]= useState(null);
    const [pays,setPays] = useState('');
    const [vehicule,setVehicule] = useState('')
    const [discipline,setDiscipline] = useState('');
    const getDetailsCalendries = (pays,vehicule,discipline) =>{
        if(pays == null){
            pays = '';
        }
        if(discipline == null){
            discipline = '';
        }
        
        setPays(pays)
        setVehicule(vehicule)
        setDiscipline(discipline)
        fetch(url.urlHtpp + "vehicule/calendrier?vehicule="+vehicule+"&&pays="+pays+"&&discipline="+discipline+"&&date=", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(data => {
                console.log("DATA RETOUR : ",data.data);
                setDetails(data.data)
            })
            .catch(error => {
                console.log(error);
            });
    }

    const getPersonne = (pays,vehicule,discipline) =>{
        if(pays == null){
            pays = '';
        }
        if(discipline == null){
            discipline = '';
        }
        fetch(url.urlHtpp + "vehicule/personne?vehicule="+vehicule+"&&pays="+pays+"&&discipline="+discipline+"&&date=", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(data => {
                console.log("DATA RETOUR : ",data.data);
                setPersonne(data.data)
            })
            .catch(error => {
                console.log(error);
            });
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

    const buttonStyle = {
        backgroundColor:'#973116',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };
    const buttonStylep = {
        backgroundColor:'#b6897c',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };
    const tdStyle = {
        padding: '5px',
        textAlign: 'center',
        border: '1px solid #ddd',
    };
    const rechercheER = (datedebut,datefin)=>{
        fetch(url.urlHtpp + "vehicule/calendrier?vehicule="+vehicule+"&&pays="+pays+"&&discipline="+discipline+"&&date="+datedebut+"&&datefin="+datefin, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(data => {
                console.log("DATA RETOUR : ",data.data);
                setDetails(data.data)
            })
            .catch(error => {
                console.log(error);
            });
    }
if(details != null){
    return (
        <>
            <button style={buttonStyle} onClick={e=>{setDetails(null)}}>retour</button>

            <VehiculeCalendrier funct={rechercheER} details={details} vehicule={vehicule} pays={pays} discipline={discipline}/>
        </>
    )   ;
}else if(personne != null){
 return (
     <>
         <button style={buttonStyle} onClick={e=>{setPersonne(null)}}>retour</button>
         <PersonneVehicule details={personne}/>
     </>
 )   ;
}
else {

    return (
        <>
            <div>
                <div style={styles.formContainer}>
                    <div style={styles.formRow}>
                        <label htmlFor="nom" style={styles.label}>Categorie</label>
                        <input
                            type="text"
                            id="nom"
                            value={category}
                            placeholder={'categorie'}
                            onChange={e => setCategory(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formRow}>
                        <label htmlFor="immatriculation" style={styles.label}>immatriculation</label>
                        <input
                            type="text"
                            id="immatriculation"
                            value={immatriculation}
                            placeholder={'immatriculation'}
                            onChange={e => setImmatriculation(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formRow}>
                        <label htmlFor="marque" style={styles.label}>marque</label>
                        <input
                            type="text"
                            id="marque"
                            value={marque}
                            placeholder={'marque'}
                            onChange={e => setMarque(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formRow}>
                        <label htmlFor="carburant" style={styles.label}>carburant</label>
                        <input
                            type="text"
                            id="carburant"
                            value={carburant}
                            placeholder={'carburant'}
                            onChange={e => setCarburant(e.target.value)}
                            style={styles.input}
                        />
                    </div>

                    <button style={styles.button} onClick={e => {
                        getData()
                    }}>recherche
                    </button>
                </div>
            </div>
            <div>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>nombre de place</th>
                        <th style={thStyle}>categorie</th>
                        <th style={thStyle}>immatriculation</th>
                        <th style={thStyle}>consommation theorique</th>
                        <th style={thStyle}>marque</th>
                        <th style={thStyle}>carburant</th>
                        <th style={thStyle}>status</th>
                        <th style={thStyle}>pays</th>
                        <th style={thStyle}>discipline</th>

                    </tr>

                    </thead>
                    <tbody>
                    {
                        itemsToDisplay.map(row => (
                            <tr>
                                <td style={tdStyle}>{row.nbr_place}</td>
                                <td style={tdStyle}>{row.category_vehicule}</td>
                                <td style={tdStyle}>{row.immatriculation}</td>
                                <td style={tdStyle}>{row.consommation_theorique}</td>
                                <td style={tdStyle}>{row.marque}</td>
                                <td style={tdStyle}>{row.type_carburant}</td>
                                <td style={tdStyle}>{row.status}</td>
                                <td style={tdStyle}>{row.pays}</td>
                                <td style={tdStyle}>{row.discipline}</td>
                                <td><button style={buttonStyle} onClick={e=>{
                                    getDetailsCalendries(row.pays,row.category_vehicule + " "+row.immatriculation,row.discipline)
                                }}>calendrie</button></td>
                                <td><button style={buttonStylep} onClick={e=>{
                                    getPersonne(row.pays,row.category_vehicule + " "+row.immatriculation,row.discipline)
                                }}>personnes</button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div style={{marginTop: '10px', display: 'flex', justifyContent: 'center'}}>
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    style={styles.button}>
                    Precedent
                </button>
                <span style={{margin: '0 1px'}}>
                  Page {currentPage} sur {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    style={styles.button}>
                    Suivant
                </button>
            </div>
        </>
    );
}
}
export default ListeVehicule;