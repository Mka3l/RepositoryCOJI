import React, { useRef, useState, useEffect } from 'react';
import '../../../assets/style.css'
import url from '../../urlHtpp';


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
  
  const [dateChoix, setDateChoix] = useState(date.date.date.date);

  const [delegationTotal,setDelegationTotal] = useState();
  const [hebergementTotal,setHebergementTotal] = useState();
  const [platServiParJour,setPlats_servi] = useState();
  const [detail_hebergement,setDetail_hebergement] = useState();
  const [nombre_site,setNombre_site] = useState();
  const [transport,setTransport] = useState();
  const [voiture_total,setVoitureTotal] = useState();
  const [voitureLibre,setVoitureLibre] = useState();
  const [siteRestau,setSiteRestau] = useState();

  useEffect(()=>{
    console.log("ENTRER")
    fetch(url.urlHtpp+"chiffre-jour/"+dateChoix,{
      method:'GET',
      headers:{'Content-Type':'application/json'},
    })
    .then(response => response.json())
    .then(data=>{
      console.log(data.data);
      setDelegationTotal(data.data.delegationTotal.nombre_total),
      setHebergementTotal(data.data.hebergementTotal.nombre_total),
      setPlats_servi(data.data.platServiParJour),
      setDetail_hebergement(data.data.hebergementDetail),
      setNombre_site(data.data.nombre_site.nombre_total)
    })
    .catch(error=>{console.log(error)})

    fetch(url.urlHtpp+"restauration-transport/"+dateChoix,{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    })
    .then(response=>response.json())
    .then(data=>{
      console.log(data.data),
       setSiteRestau(data.data.nombre_site_resaturation) ,
       setVoitureTotal(data.data.transport.vehicule_total)
       setVoitureLibre(data.data.transport.vehicule_repos);
    })
    .catch(error=>{console.log(error)})
  },[])

  var dateFiltre = useRef();

  const [dateAffichage, setDateAffiche] = useState(new Date().toLocaleDateString());





  const ChangeDataByDate = () => {
    var date = dateFiltre.current.value;
    var ActuDT = new Date(date).toLocaleDateString();

    setDateAffiche(ActuDT);
    setDateChoix(date.date.date.date);
  }


  const numberWithThousandsSeparator = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div>

            <div>
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
                    <div className="card-body cardBody-1" style={{ textAlign: 'center',width: '90%' }}>
                      <h5 className="card-title" style={fontSizeCard}>Délégation</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart"></i>
                        </div>
                        <div className="vide">

                          <h6 style={fontSizeH6}>Nombre total de personnes  <br /> <span className="small pt-1 fw-bold" style={fontSizeTEXT} >{numberWithThousandsSeparator(delegationTotal ?? 0)}</span> </h6>

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
                    <div className="card-body cardBody-2" style={{ textAlign: 'center',width: '100%' }}>
                      <h5 className="card-title" style={fontSizeCard}>Hébergement</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart"></i>
                        </div>
                        <div className="vide">

                          <h6 className='ms-4' style={fontSizeH6}>Nombre total Sites<br /> <span className="small pt-1 fw-bold" style={fontSizeTEXT}>{numberWithThousandsSeparator(hebergementTotal ?? 0)}</span>  </h6>


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
                    <div className="card-body cardBody-3" style={{ textAlign: 'center',width: '90%' }}>
                      <h5 className="card-title" style={fontSizeCard}>Restauration </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart"></i>
                        </div>
                        <div className="vide">

                          <h6 style={fontSizeH6}>Nombre de site de restauration  <br /> <span className="small pt-1 fw-bold" style={fontSizeTEXT}>{siteRestau}</span>  </h6>
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
                    <div className="card-body cardBody-4" style={{ textAlign: 'center',width: '90%' }} >
                      <h5 className="card-title" style={fontSizeCard}>Transport </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart"></i>
                        </div>
                        <div className="vide">
                          <h6 style={fontSizeH6}>Véhicules disponibles <br /> <span className="small pt-1 fw-bold" style={fontSizeTEXT}>{voitureLibre}/{voiture_total}</span>  </h6>
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
    </div>
  );
};

export default Card;
