import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { FORUM_PATH } from '../../utils/constants';
import { debug } from 'console';

describe('App component', () => {
  it('open Popup on click button add topic', async () => {
    window.history.pushState({}, 'Forum page', FORUM_PATH);
    render(<App />);

    userEvent.click(
      screen.getByRole('button', {
        name: /add topic/i
      })
    );

    await waitFor(() => {
      expect(
        screen.getByRole('heading', {
          name: /create topic/i
        })
      ).toBeInTheDocument();
    });
  });
});
