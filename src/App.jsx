import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InscriptionPays from './Starter/Composants/InscriptionPays';
import PageDeBase from './Starter/Composants/PageDeBase';
import Dashboard from './Starter/Composants/Dashboard1/Dashboard';
import Accueille from './Starter/Composants/Accueille';
import './App.css';
import Login from './Starter/login';
// import ' /assets/css/login.css';
import './assets/css/login.css';
import Homepage from './Starter/Homepage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/inscription-pays" element={<InscriptionPays />} />
          <Route path='/login' element = {<Login />} />
          <Route path="/page-de-base" element={<PageDeBase />} />
          <Route path="/dashboard1" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
