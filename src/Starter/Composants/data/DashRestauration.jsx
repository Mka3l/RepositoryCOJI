import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';

const DashRestauration = (date) => {
  const chartRef = useRef(null);
  const numberWithThousandsSeparator = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const data = [ 
    {'dateJOI': '2023-08-16','totalSite': 79, 'plat':4602},/////Date Current
    {'dateJOI': '2023-08-17','totalSite': 79, 'plat':3602},
    {'dateJOI': '2023-08-18','totalSite': 79, 'plat':5502},
    {'dateJOI': '2023-08-19','totalSite': 80, 'plat':6702}
  ]

  const totalSite =numberWithThousandsSeparator(data[0].totalSite);
  const plat = numberWithThousandsSeparator(data[1].plat);
  
  const colors = {
    violet: '#8A2BE2',
    jaune: '#FFFF00',
    vert: '#008000',
    rouge: '#A52A2A',
  };

  const divStyle = {
    display: 'flex',
    width: '200px',
    height: '50px',
    background:colors.violet,
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
    marginTop: '10px',
  }
  
  var dateFiltre = useRef();
  const [dateAffichage,setDateAffiche] = useState(new Date().toLocaleDateString());

  console.log(date.date.date);
  const [dateChoix,setDateChoix] = useState(date.date.date);
  
  
  
  
  // const ChangeDataByDate =()=>{
  //     var date = dateFiltre.current.value;
  //      var ActuDT = new Date(date).toLocaleDateString();
       
  //      setDateAffiche(ActuDT); 
  //      setDateChoix(date.date.date);
  //     // console.log(date);
  // }

  return <div style={compoGlade}>

       {data.map((valeur,indexVal)=> (
         date.date.date === valeur.dateJOI && ( 
           valeur.totalSite !== null && (
        <div style={styleHeberge} key={indexVal}>
          <div style={{ ...divStyle, background: 'rgb(129 255 222)' }}><h6>Sites Restauration <span style={{ fontSize:'14pt',fontWeight:'700' }}>{valeur.totalSite}</span></h6></div>
          <div style={{ ...divStyle, background: 'rgb(218 255 251)' }}><h6>Plats Servis <span style={{ fontSize:'14pt',fontWeight:'700' }}>{numberWithThousandsSeparator(valeur.plat)}</span></h6></div>

        </div>
  ))))}
  </div>
};

export default DashRestauration;
