import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';

/**
 * Represent a single Navbar item. This component renders
 * an optional array of children in a menu, if given, instead
 * of it's path. This component includes the "active" css
 * class in all of it's elements who's paths match the current
 * location (see isActive, makeClass internal to NavItem).
 *
 * See NavItem.propTypes at the bottom of this module for
 * documentation on NavItem properties.
 **/
const NavItem = (props) => {
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const { title, children, location } = props;

  // A simple functor that returns whether path is active
  // based on the current react-router location path.
  const isActive = (path) => {
    return location.pathname.slice(0, path.length) === path;
  };

  // A simple functor that appends " active" to defaultClass
  // if the given path isActive.
  const makeClass = (path, defaultClass) => {
    const className = defaultClass;
    if(isActive(path))
      return className.concat(" active");
    return className;
  };

  const className = makeClass(props.path, "text-white");
  if(children) {

    // Some bind functions for button operations.
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <span>
        <Button
          id={`${props.id}-button`}
          className={className}
          aria-controls={props.id}
          aria-haspopup="true"
          color="inherit"
          onClick={handleClick}
        >
          {title}
        </Button>
        <Menu id={props.id}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {children.map((item, i) => {

            const className = makeClass(item.path, "text-white");
            return (
              <Link key={i}
                className="text-white text-undecorated"
                to={item.path}
              >
                <MenuItem
                  className="text-right"
                  onClick={handleClose}
                >
                  <Button color="inherit" className={className}>
                    {item.title}
                  </Button>
                </MenuItem>
              </Link>
            );
          })}
        </Menu>
      </span>
    );
  }

  // If child was false (or null), just return a link to the route.
  return (
    <Link className="text-white" to={props.path}>
      <Button color="inherit" className={className}>
        {title}
      </Button>
    </Link>
  );
};

NavItem.propTypes = {
  // Optional element id.
  id: PropTypes.string,

  // The NavItem title.
  title: PropTypes.string.isRequired,

  // The NavItem path (default: '#').
  path: PropTypes.string.isRequired,

  /*
   * Optional children: An array of objects of NavItem props.
   *
   * const children = [
   *   { title: "SubItem1", path: "/sub/one" },
   *   { title: "SubItem2", path: "/sub/two" }
   * ];
   *
   * return <NavItem id="sub-nav-menu" title="TestItem" children={children} />;
   */
  children: PropTypes.array,

  // React-router property provided via withRouter. This should
  // **NOT** be provided by NavItem's user.
  location: PropTypes.object.isRequired
};

NavItem.defaultProps = {
  path: "#"
};

export default withRouter(NavItem);
