import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Forum from '../../pages/Forum/Forum';
import userEvent from '@testing-library/user-event';
import { FORUM_PATH } from '../../utils/constants';

describe('ForumChat component', () => {
  it('click on buttonBack', async () => {
    window.history.pushState({}, 'Forum page', FORUM_PATH);
    render(<Forum />, { wrapper: BrowserRouter });

    const topicItem = screen.getAllByRole('topic');
    userEvent.click(topicItem[0]);

    await waitFor(() => {
      expect(screen.getByRole('forumChat')).toBeInTheDocument();
    });

    userEvent.click(screen.getByRole('buttonBack'));

    await waitFor(() => {
      expect(window.location.pathname).toEqual(FORUM_PATH);
    });
  });
});
