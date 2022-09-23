import React from 'react';
import { render, screen } from '@testing-library/react';
import Leaderboard from './Leaderboard';

describe('Leaderboard component', () => {
  it('render Leaderboard', () => {
    render(<Leaderboard />);
    expect(screen.getByRole('leaderboard')).toBeInTheDocument();
  });
});
