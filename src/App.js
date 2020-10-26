import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Button } from '@material-ui/core';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const routes = [
    // Direct nav items to routes.
    { title: "Projects", path: "/projects" },
    { title: "Reference", path: "/reference" },

    // About is a nav item with a submenu to subitems.
    {
      // An id ending with "-nav-menu" styles it to match the navbar.
      id: "about-nav-menu",
      title: "About",
      path: "/about",
      children: [
        { title: "Organization", path: "/about/org" }
      ]
    }
  ];

  return (
    <Router>
      <div className="App">
        <Navbar title="ZeroCost" routes={routes} />

        <Switch>
          <Route path="/">
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
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
