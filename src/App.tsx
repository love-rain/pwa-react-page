import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {requestPermission, onMessageListener} from "./firebase";

function App() {
  const [isTokenFound, setTokenFound] = useState('');
  onMessageListener().then((payload: any) => {
    console.log(payload);
  }).catch(err => console.log('failed: ', err));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => requestPermission(setTokenFound)}>Request permission1</button>
        <div style={{fontSize:15}}>{isTokenFound}</div>
      </header>
    </div>
  );
}

export default App;
