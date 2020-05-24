import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from  './Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header>
      <Calculator></Calculator>
    </div> 
  );
}

export default App;
