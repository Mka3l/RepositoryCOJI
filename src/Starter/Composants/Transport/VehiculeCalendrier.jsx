import React, {useState} from "react";
import url from "../../urlHtpp";
import {Button} from "react-bootstrap";
const VehiculeCalendrier = ({details,vehicule,pays,discipline,funct}) =>{
    const [datedebut,setDateDebut] = useState('');
    const [datefin,setDateFin] = useState('');
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
            backgroundColor: '#973116',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
    };
    const hStyle = {
        fontSize: '24px', // Taille de police
        fontWeight: 'bold', // Gras
        marginBottom: '10px', // Marge en bas pour séparer du contenu suivant
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
    return(
        <>
            <h1 style={hStyle}>calendrier {details.vehicule} </h1>
            <div style={styles.formContainer}>
                <div style={styles.formRow}>
                    <label htmlFor="nom" style={styles.label}>Date debut</label>
                    <input
                        type={'date'}
                        value={datedebut}
                        placeholder={'datedebut'}
                        onChange={e=>setDateDebut(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formRow}>
                    <label htmlFor="nom" style={styles.label}>Date Fin</label>
                    <input
                        type={'date'}
                        value={datefin}
                        placeholder={'dateFin'}
                        onChange={e=>setDateFin(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <button style={styles.button} onClick={e=>{
                    funct(datedebut,datefin)
                }}>recherche</button>
            </div>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>date debut</th>
                        <th style={thStyle}>date fin</th>
                        <th style={thStyle}>discipline</th>
                        <th style={thStyle}>site</th>
                    </tr>
                </thead>
                <tbody>
                {
                    details.calendrierNouveauList &&
                    details.calendrierNouveauList.map(row=>(
                        <tr>
                            <td style={tdStyle}>{row.datedebut}</td>
                            <td style={tdStyle}>{row.datefin}</td>
                            <td style={tdStyle}>{row.discipline}</td>
                            <td style={tdStyle}>{row.site}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    );
}
export default VehiculeCalendrier;