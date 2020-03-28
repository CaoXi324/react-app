import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Form from "../form/Form";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi，曹茜</p>
          <Form/>
      </header>
    </div>
  );
}

export default App;
