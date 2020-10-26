import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import sinon from 'sinon';

test('does not render navbar with missing title', () => {
  const stub = sinon.spy(console, 'error');
  const { getByText } = render((
    <Router>
      <Navbar />
    </Router>
  ));
  expect(stub.called).toBe(true);

  const args = stub.getCall(0).args;
  expect(args[0]).toBe("Warning: Failed %s type: %s%s");
  expect(args[1]).toBe("prop");
  expect(args[2]).toBe(
    "The prop `title` is marked as required " +
    "in `Navbar`, but its value is `undefined`.");
  // We don't match against args[3], because it has \n and extra spacing.
  // The expectation above is enough.
});

test('renders navbar', () => {
  const { getByText } = render((
    <Router>
      <Navbar title="Test Nav" />
    </Router>
  ));
  const linkElement = getByText(/test nav/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders navbar with routes and tests their active state', () => {
  const routes = [
    { title: "Projects", path: "/projects" }
  ];

  const { getByText } = render((
    <Router>
      <Navbar title="Test Nav" routes={routes} />
    </Router>
  ));

  // Capture the navbar-brand element.
  const brandElement = getByText(/test nav/i);
  expect(brandElement).toBeInTheDocument();

  // Expect the navbar-brand title element to be active.
  const brandButton = brandElement.closest("button");
  expect(brandButton).toHaveClass("active");

  // Capture the Projects element.
  const projectsElement = getByText(/projects/i);
  expect(projectsElement).toBeInTheDocument();

  // Capture the button related to projectsElement.
  const projectsButton = projectsElement.closest("button");
  expect(projectsButton).toBeInTheDocument();

  // Navigate to /projects through Navbar.
  fireEvent.click(projectsButton);

  // Expect that now the Projects button is active, not root.
  expect(brandButton.classList.contains("active")).toBe(false);
  expect(projectsButton).toHaveClass("active");

  // Reverse it, go back to root.
  fireEvent.click(brandButton);
  expect(projectsButton.classList.contains("active")).toBe(false);
  expect(brandButton).toHaveClass("active");
});
