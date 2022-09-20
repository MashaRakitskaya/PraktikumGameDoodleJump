import React from 'react';
import { render, screen } from '@testing-library/react';
import GameItem from './GameItem';

test('renders learn react link', () => {
  render(<GameItem />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
