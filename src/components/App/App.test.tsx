import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('render App', () => {
    render(<App />);
  });
});
