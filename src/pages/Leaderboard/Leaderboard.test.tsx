import React from 'react';
import { render } from '@testing-library/react';
import Leaderboard from './Leaderboard';

describe('Leaderboard component', () => {
  it('render Leaderboard', () => {
    const { asFragment } = render(<Leaderboard />);
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot();
  });
});
