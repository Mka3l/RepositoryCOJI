import React, { useState } from 'react';

const GestionUtilisateur = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
         
        />
        <input
          type="password"
          placeholder="Password"
         
        />
      </div>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default GestionUtilisateur;
