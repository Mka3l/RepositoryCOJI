import React, { useRef, useState } from 'react';
import '../../../assets/style.css'


const Card = (date) => {
  const styleDiv = {
    width: '95%',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto'
  };

  const fontSizeTEXT = {
    fontSize: '31pt',
    color: 'rebeccapurple',
    alignItems: 'center',
    textAlign: 'center'
  };

  const fontSizeH6 = {
    fontSize: '14pt',
    color: 'rebeccapurple',
    
  };

  const fontSizeCard = {
    fontSize: '25pt',
    fontWeight: '700',
    color: 'rebeccapurple',
    alignItems: 'center',
    textAlign: 'center'
  };

  const centerTextStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  };

  const data = [
    { 'dateJOI': '2023-08-16', 'delegation': 4455, 'hebergement': 79, 'restauration': 4602, 'transport': '57/100' },
    { 'dateJOI': '2023-08-17', 'delegation': 3305, 'hebergement': 75, 'restauration': 4520, 'transport': '50/100' },
    { 'dateJOI': '2023-08-18', 'delegation': 5455, 'hebergement': 74, 'restauration': 4502, 'transport': '80/100' },
    { 'dateJOI': '2023-08-19', 'delegation': 6455, 'hebergement': 72, 'restauration': 4702, 'transport': '30/100' }
  ]

  var dateFiltre = useRef();
  const [dateAffichage, setDateAffiche] = useState(new Date().toLocaleDateString());

  console.log(date.date.date);
  const [dateChoix, setDateChoix] = useState(date.date.date.date);




  const ChangeDataByDate = () => {
    var date = dateFiltre.current.value;
    var ActuDT = new Date(date).toLocaleDateString();

    setDateAffiche(ActuDT);
    setDateChoix(date.date.date.date);
    // console.log(date);
  }


  const numberWithThousandsSeparator = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div>
      {data.map((valeur, indexVal) => (
        date.date.date.date === valeur.dateJOI && (
          valeur.totalSite !== null && (
            <div key={indexVal}>
              <div style={{ display: 'flex', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div className="col-xxl-4 col-md-6" style={styleDiv}>
                  <div className="card info-card sales-card" style={{ borderStyle: 'none' }}>
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>
                    <div className="card-body cardBody-1" style={{ textAlign: 'center' }}>
                      <h5 className="card-title" style={fontSizeCard}>Délégation</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart"></i>
                        </div>
                        <div className="vide">

                          <h6 style={fontSizeH6}>Nombre total de personnes  <br /> <span className="small pt-1 fw-bold" style={fontSizeTEXT} >{numberWithThousandsSeparator(valeur.delegation)}</span> </h6>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card info-card sales-card" style={{ borderStyle: 'none' }}>
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>
                    <div className="card-body cardBody-2" style={{ textAlign: 'center' }}>
                      <h5 className="card-title" style={fontSizeCard}>Hébergement</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart"></i>
                        </div>
                        <div className="vide">

                          <h6 className='ms-4' style={fontSizeH6}>Nombre total Sites<br /> <span className="small pt-1 fw-bold" style={fontSizeTEXT}>{numberWithThousandsSeparator(valeur.hebergement)}</span>  </h6>


                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="card info-card sales-card" style={{ borderStyle: 'none' }}>
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>
                    <div className="card-body cardBody-3" style={{ textAlign: 'center' }}>
                      <h5 className="card-title" style={fontSizeCard}>Restauration </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart"></i>
                        </div>
                        <div className="vide">

                          <h6 style={fontSizeH6}>Nombre de plats servis par jour  <br /> <span className="small pt-1 fw-bold" style={fontSizeTEXT}>{numberWithThousandsSeparator(valeur.restauration)}</span>  </h6>
                          <div className="icon">
                            <i className="ri-bar-chart-2-fill"></i>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card info-card sales-card" style={{ borderStyle: 'none' }}>
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>
                    <div className="card-body cardBody-4" style={{ textAlign: 'center' }} >
                      <h5 className="card-title" style={fontSizeCard}>Transport </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart"></i>
                        </div>
                        <div className="vide">



                          <h6 style={fontSizeH6}>Véhicules disponibles <br /> <span className="small pt-1 fw-bold" style={fontSizeTEXT}>{valeur.transport}</span>  </h6>
                          <div className="icon">
                            <i className="ri-bar-chart-2-fill"></i>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))))}
    </div>
  );
};

export default Card;
