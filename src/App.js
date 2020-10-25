import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar title="ZeroCost" />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="contained" color="primary">
            Learn React
          </Button>
        </a>
      </header>
    </div>
  );
}

export default App;
