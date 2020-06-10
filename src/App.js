import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Room from './components/room';

function App() {

  const [light, setlight] = useState(false);

  function changeState() {
    console.log("button clicked")
    setlight(!light);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is React App deployed on Surge
        </p>
        <button onClick={changeState}>Light On</button>
        <p>The light is : {light ? "on" : "off"}</p>
      </header>
      <Room />
    </div>
  );
}

export default App;
