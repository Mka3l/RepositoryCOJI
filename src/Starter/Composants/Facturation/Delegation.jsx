import React, { useState, useEffect, useRef } from 'react';
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import FactureTable from './FacturesPayees/FactureTable';

const FactureParDelegation = () => {
  const [factureDelegation, setFactureDelegation] = useState({
    nomDelegation: 'Madagascar',
    siteHebergement: 'Hebergement',
    nombreChambres: 2,
    prixChambre: 25000,
    montantHT: 1150000,
    montantTTC: 1380000,
  });

  const [items, setItems] = useState([
   
  ]);

  const hotel =[{'hotel':'Cartlon'},{'hotel':'5 étoile'},{'hotel':'Louvre'}];

  useEffect(() => {
    calculateMontantTotal();
  }, [items]);

  const reducevalue = 5000;

  const calculateMontantTotal = () => {
    return items.reduce((total, item) => total + item.montant, 15900);
  };
  const calculateReste = () => {
    return calculateMontantTotal() - reducevalue;
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newItems = items.map((item, idx) =>
      idx === index ? { ...item, [name]: value, montant: value * item.concerne * item.prixUnitaire } : item
    );
    setItems(newItems);
  };

  
  


  const montantTotal = factureDelegation.montantTTC;
  const montantHT = factureDelegation.montantHT;
  const montantTVA = montantHT * 0.2;

  const numberWithThousandsSeparator = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyle = {
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    fontSize: '14px',
  };

  const strongStyle = {
    fontWeight: 'bold',
    fontSize: '16px',
  };

  const containerStyle = {
    margin: '10px auto',
    maxWidth: '800px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  };
  const currentDate = new Date().toLocaleDateString();

  //  Test Facture
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#fff',
      padding: 20,
    },
    section: {
      margin: 10,
      padding: 10,
    },
    header: {
      marginBottom: 20,
  
      textAlign: 'center',
      fontSize:'14pt'
    },
    info: {
      flexDirection: 'row',
      marginBottom: 20,
      justifyContent: 'space-between',
      fontSize:'14pt'
    },
    address: {
      flexGrow: 1,
      fontSize:'14pt'
    },
    table: {
      flexGrow: 1,
      border: '1px solid #ddd',
    },
    tableHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#f0f0f0',
      padding: 10,
      borderTop: '2px solid #ddd',
      fontSize:"14pt",
      fontWeight:"bold"
    },
    tableRow: {
      fontSize:'12pt',
      display:"flex",
      //width:"400px",
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent:"center",
      textAlign:"right",
      width:"100%",
      border: '1px solid #ddd',
      alignItems: "center",
      height:"30px",

    },
    col: {
      flex: 1,
      height:"30px",
      border: '1px solid #ddd',
    },
    footer: {
      borderTop: '1px solid #000',
      padding: 10,
      textAlign: 'right',
      marginTop: 20,
    },
  });
  

  const FactureDelegationCanva = ({dateValue,dateValueVR,donneAff,client,paye}) => {
    const total = donneAff.reduce((acc, item) => acc + item.quantite * item.prixUnitaire*item.concerne, 0);
    const gtt = ()=>{
    }
    // ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    
    // --------------------------------------------------------
    const restePaye = total-paye;
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={styles.header}>
              <Text>Reçu</Text>
              <Text>Date : {dateValue} jusqu'au {dateValueVR}</Text>
            </View>
            <View style={styles.info}>
              <View style={styles.address}>
                <Text>De : JOI Madagascar</Text>
                <Text>JOI</Text>
                <Text>Antanarivo</Text>
                <Text>Antananarivo, 101</Text>
                <Text>Madagascar</Text>
              </View>
              <View style={styles.address}>
                <Text>Pour : {client}</Text>
                <Text>Client : {client}</Text>
                <Text>{client}</Text>
                <Text>Antananarivo, Carlton 152</Text>
                <Text>Pays du Client : Madagascar</Text>
              </View>
            </View>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.colHeader}>Designation</Text>
                <Text style={styles.colHeader}>Unite</Text>
                <Text style={styles.colHeader}>Quantité</Text>
                <Text style={styles.colHeader}>Concerne</Text>
                <Text style={styles.colHeader}>Prix unitaire</Text>
                <Text style={styles.colHeader}>Total</Text>
              </View>
              {donneAff.map((item, index) => (
                <View style={styles.tableRow} key={index}>
                  <Text style={[styles.col]}>{item.designation}</Text>
                  <Text style={[styles.col]}>{item.unite}</Text>
                  <Text style={[styles.col]}>{item.quantite}</Text>
                  <Text style={[styles.col]}>{item.concerne}</Text>
                  <Text style={[styles.col]}>{item.prixUnitaire} Ar</Text>
                  <Text style={styles.col}>
                    {(item.quantite * item.prixUnitaire * item.concerne).toFixed(2)} Ar
                  </Text>
                </View>              
              ))}
              <View style={{ ...styles.tableRow,justifyContent: 'flex-end' }}>
                <Text style={styles.colFooter} colSpan={3}>Total :</Text>
                <Text style={styles.colFooter}>{total.toFixed(2)} Ar</Text>
              </View>
              <View style= {{ ...styles.tableRow,justifyContent: 'flex-end' }}>
                <Text style={styles.colFooter} colSpan={3}> à compte :</Text>
                <Text style={styles.colFooter}>{paye} Ar</Text>
              </View>
              <View style={{ ...styles.tableRow,justifyContent: 'flex-end' }}>
                <Text style={styles.colFooter} colSpan={3}> reste à payé :</Text>
                <Text style={styles.colFooter}>{restePaye} Ar</Text>
              </View>
            </View>
            <View style={styles.footer}>
              <Text>Montant total : {restePaye.toFixed(2)} Ar</Text>
            </View>
          </View>
        </Page>
      </Document>

    );
  };
  //  End Test Facture


  /////// Les Data pour les rubriques
  const data = [
    {
      'designation': 'Transport', 'unite': 'voiture', quantite: 0,
      concerne: 0,
      prixUnitaire: 0,
      montant: 0,
    },
    {
      'designation': 'Hebergement', 'unite': 'Lit', quantite: 0,
      concerne: 0,
      prixUnitaire: 0,
      montant: 0,
    },
    {
      'designation': 'Restauration', 'unite': 'Personne', quantite: 0,
      concerne: 0,
      prixUnitaire: 0,
      montant: 0,
    },
  ];
  ///================================================

  ///=================   ADD RUBRIQUE========================

  const des = useRef();
  const addligne = () => {
    console.log("==>"+des.current.value)
    for(let i=0;i<data.length;i++){
      console.log(data[i].designation+" ===  ==== "+des.current.value);
      if(data[i].designation===des.current.value){
        console.log("Miditra");
        /////items.push(data[i]);
        const newItem = { ...data[i] };
        setItems(items => [...items, newItem]);
      }
    }
    console.log(items.length)
    ///window.location.reload();
  }

  ///======================================================
  const date1 =useRef();
 // console.log(date1.current);
  ///const dt1 = date1.current.value;

  const date2 = useRef();
  const client=useRef();

  //const  d1  = useRef();
  const [dateFact1,setDateFact1] = useState();
  const [dateFact2,setDateFact2] = useState();
  const [clientH,setClientH] = useState();

  const setDate1 =()=>{
    date1.current.value;
    setDateFact1(new Date(date1.current.value).toLocaleDateString());
  }

  const setDate2=()=>{
    setDateFact2(new Date(date2.current.value).toLocaleDateString());
  }

  const setNewClient=()=>{
    setClientH(client.current.value);
  }

  const pe=1200;

   const compte = useRef();
   const [compteH,setCompteH] =useState();

  const AddCompte =()=>{
    setCompteH(compte.current.value);
  }
  const styleClient = {
    width:'80%',
    height:'330px',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    
  }

  const styleClient1 = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 6px 12px -5px',
    background: 'rgb(185 185 185)',
    alignItems: 'center',
    marginTop: "40px",
  }
  const styleInputDate={
    width: '80%',
    margin: 'auto',
    height: '70px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'left', 
    fontSize: '18px', 
    marginBottom: '5px',
    background: 'rgb(206 205 205)',
    boxShadow: '0px 6px 12px -5px',
  }
  const inputStyle={
    border: 'none',
    background: 'white',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: 'rgb(194 194 194) 5px 5px 3px 0px inset'
  }
  const styleBut = {
    color: 'white',
    background: 'rgb(133 133 133)',
    borderRadius: '5px',
    width: '200px',
    height: '50px',
    border: 'none',
    boxShadow: '0px 5px 10px 0px #666666',
  }
  const iconlist = {
    width: '30px',
    margin:'65px 10px 9px 570px',
    position: 'absolute',
  }

  return (
    <div style={containerStyle}>

      <div style={{ ...styleInputDate }}>
         Facture du <input style={inputStyle} type='date' onChange={setDate1} ref={date1} />  au  <input style={inputStyle} type='date'ref={date2} onChange={setDate2}/>

        {/* Ajoutez ici la plage de dates souhaitée */}
      </div>
      <br/>
      <br/>
      <div className='client' style={{...styleClient,margin :'auto'}}>
        <div style={styleClient1} className="select-icon">
          <h4 style={{  paddingTop:"10px",height: '50px' }} >Choisir Client</h4>
          <select ref={client} className='form-control' onChange={setNewClient}> 
          {hotel.map((hot,indexHot)=>
          <option key={indexHot} value={hot.hotel}>{hot.hotel}</option>
          )}
          </select>
          <span style={iconlist}>▼</span>
        </div>
        <div style={styleClient1} className="select-icon">
          
          <h4 style={{  paddingTop:"10px",height: '50px' }} >Choisir Rubrique </h4>
          <select ref={des} className='form-control'>
            <option value="Transport">Transport</option>
            <option value="Hebergement">Hebergement</option>
            <option value="Restauration">Restauration</option>
          </select>
          <span style={iconlist}>▼</span>
        </div>
        
      <button onClick={addligne} style={{ ...styleBut}}>Ajouter</button>
      </div>
      <br/>
      <div style={{margin:'auto'}}> 
      <FactureTable
        tableStyle={tableStyle}
        thStyle={thStyle}
        tdStyle={tdStyle}
        strongStyle={strongStyle}
        items={items}
        handleInputChange={handleInputChange}
        numberWithThousandsSeparator={numberWithThousandsSeparator}
        calculateMontantTotal={calculateMontantTotal}
        reducevalue={reducevalue}
        calculateReste={calculateReste}
      />
      </div>
      <div style={styleClient1}> 
        <p style={{ marginLeft: '10px', fontSize:'15pt',fontWeight:"bolder" }} >à Compte :</p> 
        <input type='text' className='form-control' ref={compte} onChange={AddCompte} placeholder='tapez le montant'/>
      </div>
    
      <br />
      <br />
      <PDFViewer width="800" height="700">
        <FactureDelegationCanva dateValue={dateFact1} dateValueVR={dateFact2} donneAff={items} client={clientH} paye={compteH}/>
      </PDFViewer>
    </div>

  );
};

export default FactureParDelegation;