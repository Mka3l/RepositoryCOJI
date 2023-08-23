import React, { useEffect, useState } from 'react';

const RecapEtatOccupation = ({data}) => {
  const columns = [
      "SITE D'HEBERGEMENT",
      "CAPACITE \r\nTOTALE (EN LITS)",
      "LITS \r\nOCCUPES",
      "LITS \r\nRESTANTS",
      "TAUX D'OCCUPATION (%)"
    ];

    // "nombre_total":79,
    // "capacite_total_lit":12042,
    // "nombre_lit_occupe":4602,
    // "taux_occupation":38
    
  const rows = [
    [

    ]
  ];


  // const [siteHEB,setSiteHEB] = useState();
  // const [capacite_total,setTotal] = useState();
  // const [NBR_LIT,setNBR_LIT] = useState();
  // const [TAUX,SETTAUX] = useState(); 
  // const [restant,setRestant] = useState();
  // const [dashHeb,setDashHeb] = useState()
  



  // useEffect(()=>{
  //   ////console.log(urlHtpp.url+"hebergement-liste/etat/"+date.date.date)
  //   ///detail{date_create: 1692741600000, capacite_total: 12, lits_occupe: 2, lits_restant: 10, taux_occupation: 16.666666666666664
  //   fetch(urlHtpp.urlHtpp+"hebergement-liste/etat/"+date.date,{
  //     method :"GET",
  //     headers:{"Content-Type":"application/json"}
  //   })
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log(data.data)
  //     setSiteHEB(data.data.getCardheber.nombre_total);
  //     setTotal(data.data.detail.capacite_total)
  //     setNBR_LIT(data.data.detail.lits_occupe);
  //     SETTAUX(data.data.detail.taux_occupation)
  //     setRestant(data.data.detail.lits_restants)
  //   })
  //   .catch(error=>{console.log(error)})
  // },[])

  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? rows : rows.slice(0, 1);
  const firstRowStyle = {
    fontWeight: 'bold', // Utiliser une valeur plus légère que 'bold'
    color: '#332', // Couleur de police
  };
  
  return (
    <div>
      <style>
        {`
          .table-cell-auto {
            width: auto;
            white-space: nowrap;
          }
          .expand-button {
            cursor: pointer;
          }
        `}
      </style>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className='text-center'>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
         
            <tr key={rowIndex} style={rowIndex === 0 ? firstRowStyle : {}}>
           
                <td className={`table-cell-auto ${typeof siteHEB === 'number' ? 'text-center' : ''}`}>
                {typeof siteHEB === 'number'
                    ? siteHEB.toLocaleString() // Formate les nombres avec des séparateurs de milliers
                    : siteHEB}
                </td>
                <td className={`table-cell-auto ${typeof capacite_total === 'number' ? 'text-center' : ''}`}>
                {typeof capacite_total === 'number'
                    ? capacite_total.toLocaleString() // Formate les nombres avec des séparateurs de milliers
                    : capacite_total}
                </td>
                <td className={`table-cell-auto ${typeof cell === 'number' ? 'text-center' : ''}`}>
                {typeof cell === 'number'
                    ? cell.toLocaleString() // Formate les nombres avec des séparateurs de milliers
                    : cell}
                </td>
                <td className={`table-cell-auto ${typeof cell === 'number' ? 'text-center' : ''}`}>
                {typeof cell === 'number'
                    ? cell.toLocaleString() // Formate les nombres avec des séparateurs de milliers
                    : cell}
                </td>
                <td className={`table-cell-auto ${typeof cell === 'number' ? 'text-center' : ''}`}>
                {typeof cell === 'number'
                    ? cell.toLocaleString() // Formate les nombres avec des séparateurs de milliers
                    : cell}
                </td>
           
            </tr>
       
        </tbody>
      </table>
    </div>
  );
};

export default RecapEtatOccupation;
