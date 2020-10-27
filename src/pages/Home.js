import React from 'react';
import { Button } from '@material-ui/core';
import logo from '../logo.svg';

const Home = () => (
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
);

export default Home;
