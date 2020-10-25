import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import sinon from 'sinon';

test('does not render navbar with missing title', () => {
  const stub = sinon.spy(console, 'error');
  const { getByText } = render(<Navbar />);
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
  const { getByText } = render(<Navbar title="Test Nav" />);
  const linkElement = getByText(/test nav/i);
  expect(linkElement).toBeInTheDocument();

  expect(getByText(/projects/i)).toBeInTheDocument();
  expect(getByText(/references/i)).toBeInTheDocument();
  expect(getByText(/about/i)).toBeInTheDocument();
});
