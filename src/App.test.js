import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App landing', () => {
  const { getByText } = render(<App />);

  // Ensure the brand (root navigation item) is active.
  const brandButton = getByText(/zerocost/i).closest("button");
  expect(brandButton).toHaveClass("active");
});
