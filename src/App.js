import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Button } from '@material-ui/core';
import Navbar from './components/Navbar';
import Page from './pages';
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
          <Route path="/" component={Page.Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
