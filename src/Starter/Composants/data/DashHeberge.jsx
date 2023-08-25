import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DashHeberge = (date) => {
  const chartRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const numberWithThousandsSeparator = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const data = [
    { 'dateJOI': '2023-08-16', 'totalSite': 79, 'capaciteTotal': 12107, 'litOccupes': 4602, 'tauxOccupation': 38 },
    { 'dateJOI': '2023-08-17', 'totalSite': 79, 'capaciteTotal': 13200, 'litOccupes': 4780, 'tauxOccupation': 35 },
    { 'dateJOI': '2023-08-18', 'totalSite': 79, 'capaciteTotal': 12127, 'litOccupes': 4602, 'tauxOccupation': 39 },
    { 'dateJOI': '2023-08-19', 'totalSite': 79, 'capaciteTotal': 12227, 'litOccupes': 4650, 'tauxOccupation': 32 }
  ];
  

  const totalSite = numberWithThousandsSeparator(data[0].totalSite);
  const capaciteTotal = numberWithThousandsSeparator(data[1].capaciteTotal);
  const litOccupes = numberWithThousandsSeparator(data[2].litOccupes);
  const tauxOccupation = numberWithThousandsSeparator(data[3].tauxOccupation);

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

  console.log(date.date.date);
  const [dateChoix,setDateChoix] = useState(date.date.date);
  
  
  
  
  const ChangeDataByDate =()=>{
      var date = dateFiltre.current.value;
       var ActuDT = new Date(date).toLocaleDateString();
       
       setDateAffiche(ActuDT); 
       setDateChoix(date.date.date);
      // console.log(date);
  }

  

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
                  <div style={{ ...divStyle, background: 'rgb(218 179 255)' }}><h6>Nombre total de Sites <span style={{ fontSize: '14pt', fontWeight: '700' }}>{numberWithThousandsSeparator(valeur.totalSite)}   </span></h6></div>
                  <div style={{ ...divStyle, background: 'rgb(255 255 167)' }}><h6>Capacité Totale <span style={{ fontSize: '14pt', fontWeight: '700' }}>{ numberWithThousandsSeparator(valeur.capaciteTotal)}</span></h6></div>
                  <div style={{ ...divStyle, background: 'rgb(195 255 195)' }}><h6>Lits occupés <span style={{ fontSize: '14pt', fontWeight: '700' }}>{numberWithThousandsSeparator(valeur.litOccupes)}</span></h6></div>
                  <div style={{ ...divStyle, background: 'rgb(255 158 158)' }}><h6>Taux d'occupation <span style={{ fontSize: '14pt', fontWeight: '700' }}>{numberWithThousandsSeparator(valeur.tauxOccupation)} %</span></h6></div>
                </div>
              )          
        )
      ))}
  </div>
};

export default DashHeberge;