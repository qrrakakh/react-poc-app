import React from 'react';

import { Parent as PoC1Parent } from "./PoC1/Parent";
import { Parent as PoC2Parent } from "./PoC2/Parent";
import { Parent as PoC3Parent } from "./PoC3/Parent";
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>qrrakakh React PoC</h1>
    <PoC1Parent />
    <PoC2Parent />
    <PoC3Parent />
    </div>
  );
}

export default App;
