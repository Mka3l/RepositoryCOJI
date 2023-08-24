import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Starter/Homepage';
import InscriptionPays from './Starter/Composants/InscriptionPays';
import PageDeBase from './Starter/Composants/PageDeBase';
import Dashboard from './Starter/Composants/Dashboard1/Dashboard';
import Accueille from './Starter/Composants/Accueille';
import './App.css';
import UserManager from './Starter/Composants/UserManager';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inscription-pays" element={<InscriptionPays />} />
          <Route path="/page-de-base" element={<PageDeBase />} />
          <Route path="/dashboard1" element={<Dashboard />} />
          <Route path="/user-manager" element={<UserManager />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
