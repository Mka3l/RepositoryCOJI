import React, { useState } from 'react';
const VisualisationDejeunerDiner = ({data}) => {

  const columns = [
    "Lieu du repas",
    "Nombre de participants",
  ]
  

  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? data : data;

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
              <th className='text-center' key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {    
                rowsToShow.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    <td>{row['Lieu du repas']}</td>
                    <td>{row['Nombre de participants']}</td>
                </tr>
                ))
            }
        </tbody>
      </table>

    </div>
  );
};

export default VisualisationDejeunerDiner;
