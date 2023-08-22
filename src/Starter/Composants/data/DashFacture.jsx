import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyPieChart = (date) => {
  const chartRef = useRef(null);
  const [visible, setVisible] = useState(true);



  const data = [49, 0, 33];
  

  const colors = {
    violet: '#8A2BE2',
    jaune: '#FFFF00',
    vert: '#008000',
    rouge: '#A52A2A',
  };

  const datyIO = {
    data: [
      { 'dateIO': '16/08/2023' },
      { 'dateIO': '17/08/2023' },
      { 'dateIO': '18/08/2023' }
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

  const [dateChoix,setDateChoix] = useState(new Date().toISOString().slice(0, 10));
  
  
  
  const ChangeDataByDate =()=>{
       var dt = dateFiltre.current.value;
       var ActuDT = new Date(dt).toLocaleDateString();
       
       setDateAffiche(ActuDT); 
       setDateChoix(dt);
      console.log(dt);
  }

  

  /*`Payées partiellement : ${numberWithThousandsSeparator(data[0])}/82`,
        `Payées totalement : ${data[1]}/82`,
        `Impayées : ${data[2]}/82`,*/

   

  return <div style={compoGlade}>
    <div style={{ ...divStyle, width: '250px', background: 'rgb(85 80 80)', color: '#ffffff' }} >
      <h4>Total  82 </h4>
    <div>
    </div>
</div>
   
      
      <div style={styleHeberge}>
        <div style={{ ...divStyle, background: 'rgb(218 179 255)' }}><h6>Payées partiellement  <span style={{ fontSize: '14pt', fontWeight: '700' }}>{data[0]} </span></h6></div>
        <div style={{ ...divStyle, background: 'rgb(255 255 167)' }}><h6>Payées totalement  <span style={{ fontSize: '14pt', fontWeight: '700' }}>{ data[1]}</span></h6></div>
        <div style={{ ...divStyle, background: 'rgb(195 255 195)' }}><h6>Impayées  <span style={{ fontSize: '14pt', fontWeight: '700' }}>{data[2]}</span></h6></div>
      </div>
              
  </div>
};

export default MyPieChart;
