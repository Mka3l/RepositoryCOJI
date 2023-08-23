import React, { useEffect, useState } from 'react';

const TableauSpecifique =()=>{

    var urlHtpp = "http://127.0.0.1:9090/";
    const colonne = 4;
    const row = 4;

    const  [repartition,setRepartition] = useState([])

    useEffect(()=>{

        fetch(urlHtpp+"repartition-delegation",{
            method : "GET",
            headers : {'Content-Type': 'application/json'}
        })
        .then(response=>response.json())
        .then(data=>{setRepartition(data)})
        .catch(error => { console.log(error) });
    },[])
  
    const tableData = [];
    for (let i = 0; i < row; i++) {
      const rowData = [];
      for (let n = 0; n < colonne; n++) {
        rowData.push(<td style={{border : '1px solid'}} key={n}>T{n}</td>)
      }
      tableData.push(<tr style={{border : '1px solid'}} key={i}>{rowData}</tr>);
    }
    return(
        
        <table border={1}>
            <tbody>
                {tableData}
            </tbody>
        </table>
    );
}

export default TableauSpecifique;