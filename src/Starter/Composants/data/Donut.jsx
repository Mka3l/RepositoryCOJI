// import React, { useEffect } from 'react';
// import ApexCharts from 'react-apexcharts'; // Assurez-vous d'installer la bibliothèque "react-apexcharts" avant d'utiliser ce composant

// const DonutChartComponent = () => {
//   useEffect(() => {
//     // Code à exécuter lors du chargement de la page
//     const donutChartOptions = {
//       series: [44, 55, 13, 43, 22],
//       options: {
//         chart: {
//           height: 350,
//           type: 'donut',
//           toolbar: {
//             show: true
//           }
//         },
//         labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
//       }
//     };

//     const donutChart = new ApexCharts(document.querySelector("#donutChart"), donutChartOptions);
//     donutChart.render();
//   }, []);

//   return (
//     <div className="col-lg-6">
//       <div className="card">
//         <div className="card-body ">
//           <h5 className="card-title">Donut Chart</h5>

//           {/* Donut Chart */}
//           <div id="donutChart"></div>
//           {/* End Donut Chart */}
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonutChartComponent;
