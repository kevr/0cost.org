import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavItem from './NavItem';
import sinon from 'sinon';

test('does not render NavItem with missing title', () => {
  const stub = sinon.spy(console, 'error');
  const { getByText } = render((
    <Router>
      <NavItem />
    </Router>
  ));
  expect(stub.called).toBe(true);

  const args = stub.getCall(0).args;
  expect(args[0]).toBe("Warning: Failed %s type: %s%s");
  expect(args[1]).toBe("prop");
  expect(args[2]).toBe(
    "The prop `title` is marked as required " +
    "in `NavItem`, but its value is `undefined`.");
  // We don't match against args[3], because it has \n and extra spacing.
  // The expectation above is enough.
});

test('renders NavItem', () => {
  const { getByText } = render((
    <Router>
      <NavItem title="TestItem" />
    </Router>
  ));
  const linkElement = getByText(/testitem/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders NavItem with a child menu', () => {
  const children = [
    { title: "Organization", path: "/about/org" }
  ];

  const {
    getByText,
    queryByText
  } = render((
    <Router>
      <NavItem id="test-menu" title="TestMenu" children={children} />
    </Router>
  ));

  const menuButton = getByText(/testmenu/i);
  expect(menuButton).toBeInTheDocument();

  // Click the TestMenu button, which expands the menu.
  fireEvent.click(menuButton);

  // Grab the Organization menu item.
  const org = getByText(/organization/i);
  expect(org).toBeInTheDocument();

  // Click it, causing the menu to be closed.
  fireEvent.click(org);
});
