// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

test('MyComponent should have specific text content', () => {
    const { getByText } = render(<MyComponent />);
    const element = getByText(/Hello, World/i); } )