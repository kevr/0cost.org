import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';

const Navbar = ({ title }) => (
  <AppBar position="static">
    <Toolbar className="d-flex">
      <div className="flex-fill text-left">
        <Link className="text-undecorated" to="/">
          <Typography variant="h6">
            {title}
          </Typography>
        </Link>
      </div>

      <Button color="inherit">
        Projects
      </Button>
      <Button color="inherit">
        References
      </Button>
      <Button color="inherit">
        About
      </Button>
    </Toolbar>
  </AppBar>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
