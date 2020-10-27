import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders NotFound on unknown route', () => {
  const { getByText } = render((
    <MemoryRouter initialEntries={['/not_found']}>
      <App />
    </MemoryRouter>
  ));
});

test('renders App', () => {
  const { getByText } = render((
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  ));

  // Ensure the brand (root navigation item) is active.
  const brandButton = getByText(/zerocost/i).closest("button");
  expect(brandButton).toHaveClass("active");

  // Click the Projects navigation and expect that it became active.
  const projectsButton = getByText(/projects/i).closest("button");
  fireEvent.click(projectsButton);
  expect(projectsButton).toHaveClass("active");

  // Click the Reference navigation and expect that it became active.
  const referenceButton = getByText(/reference/i).closest("button");
  fireEvent.click(referenceButton);
  expect(referenceButton).toHaveClass("active");

  // Navigate to /about/org by clicking the menu...
  const aboutButton = getByText(/about/i).closest("button");
  fireEvent.click(aboutButton);

  // Then clicking Organization.
  const orgButton = getByText(/organization/i).closest("button");
  fireEvent.click(orgButton);

  // Expect that the About button became active.
  expect(aboutButton).toHaveClass("active");

  // Re-expand the menu and run an expectation that the Organization
  // button became active after navigating to it.
  fireEvent.click(aboutButton);
  expect(orgButton).toHaveClass("active");
});
