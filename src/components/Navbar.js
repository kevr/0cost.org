import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import NavItem from './NavItem';

/**
 * Main application navigation bar component.
 *
 * For documentation on Navbar's properties, see Navbar.propTypes
 * at the bottom of this module.
 **/
const Navbar = ({ title, routes, location }) => {
  // navbar-brand className.
  let className = "text-undecorated text-white text-normal";
  if(location.pathname === "/")
    className = className.concat(" active");

  return (
    <AppBar position="static">
      <Toolbar className="d-flex flex-row">
        <div className="flex-fill text-left">
          <Link className="text-undecorated navbar-brand" to="/">
            <Button color="inherit" className={className}>
              <Typography variant="h6">
                {title}
              </Typography>
            </Button>
          </Link>
        </div>

        {routes.map((route, i) => (
          <NavItem key={i}
            id={route.id}
            title={route.title}
            children={route.children}
            path={route.path}
          />
        ))}
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  // The Navbar's branding.
  title: PropTypes.string.isRequired,

  // The Navbar's routes (default: []).
  routes: PropTypes.array.isRequired,

  // React-Router location provided by withRouter. This property
  // should **NOT** be overridden by Navbar's user.
  location: PropTypes.object.isRequired
};

Navbar.defaultProps = {
  routes: []
};

export default withRouter(Navbar);
