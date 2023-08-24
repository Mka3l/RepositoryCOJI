import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DashTransport = (date) => {

  const chartRef = useRef(null);
  const [visible, setVisible] = useState(true);



  const data = [
    {'dateJOI': '2023-08-16','vehiculeDispo':57 ,'vehiculeoccupe':43,'Total':100},
    {'dateJOI': '2023-08-17','vehiculeDispo':50 ,'vehiculeoccupe':50,'Total':100},
    {'dateJOI': '2023-08-18','vehiculeDispo':80 ,'vehiculeoccupe':20,'Total':100},
    {'dateJOI': '2023-08-19','vehiculeDispo':57 ,'vehiculeoccupe':43,'Total':100}
  ];
  

  const colors = {
    violet: '#8A2BE2',
    jaune: '#FFFF00',
    vert: '#008000',
    rouge: '#A52A2A',
  };

  const datyIO = {
    data: [
      { 'dateIO': '09/08/2023' },
      { 'dateIO': '10/08/2023' },
      { 'dateIO': '11/08/2023' }
    ]
  }

  const divStyle = {
    display: 'flex',
    width: '200px',
    height: '50px',
    background: colors.violet,
    borderRadius: '15px',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
  }

  const styleHeberge = {
    margin: 'auto 50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-start',
    width: '420px',
    height: '150px',
    flexWrap: 'wrap',
  }

  const compoGlade = {
    width: '100%',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40px',
  }

  const menuIcon = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '30px',
    height: '20px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    margin: '10px'
  }

  const menu = {
    width: '100%',
    height: '4px',
    backgroundColor: '#ffffff',
  }


  // const showFiltre = () => {
  //   setVisible(false);
  // }

  // const [showModal, setShowModal] = useState(false);

  // const handleShowModal = () => {
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  var dateFiltre = useRef();
  const [dateAffichage,setDateAffiche] = useState(new Date().toLocaleDateString());

  console.log(date.date.date.date);
  const [dateChoix,setDateChoix] = useState(date.date.date.date);
  
  
  
  
  const ChangeDataByDate =()=>{
      var date = dateFiltre.current.value;
       var ActuDT = new Date(date).toLocaleDateString();
       
       setDateAffiche(ActuDT); 
       setDateChoix(date.date.date.date);
      // console.log(date);
  }

  

  /*`Payées partiellement : ${numberWithThousandsSeparator(data[0])}/82`,
        `Payées totalement : ${data[1]}/82`,
        `Impayées : ${data[2]}/82`,*/

   

  return <div style={compoGlade}>
    <div style={{ ...divStyle, width: '250px', background: 'rgb(85 80 80)', color: '#ffffff' }} >
      <h6>
        <span style={{ fontSize: '13pt', fontWeight: '700' }}>
          <input style={{ background: 'none',border: 'none',color: 'white',marginLeft: '20px', }} type="date" value={date.date.date} ref={dateFiltre} onChange={ChangeDataByDate} />
        </span>
      </h6>
    <div>
    </div>
</div>
    
{data.map((valeur,indexVal)=> (
         date.date.date === valeur.dateJOI && ( 
           valeur.totalSite !== null && (
      <div style={styleHeberge} key={indexVal}>
        <div style={{ ...divStyle, background: 'rgb(218 179 255)' }}><h6>Véhicules disponibles <span style={{ fontSize: '14pt', fontWeight: '700' }}>{valeur.vehiculeDispo} </span></h6></div>
        <div style={{ ...divStyle, background: 'rgb(255 255 167)' }}><h6>Véhicules occupés <span style={{ fontSize: '14pt', fontWeight: '700' }}>{ valeur.vehiculeoccupe}</span></h6></div>
        <div style={{ ...divStyle, background: 'rgb(195 255 195)' }}><h6>Total de véhicules <span style={{ fontSize: '14pt', fontWeight: '700' }}>{valeur.Total}</span></h6></div>
      </div>
))))}
              
  </div>
};

export default DashTransport;