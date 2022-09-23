import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Forum from './Forum';
import userEvent from '@testing-library/user-event';
import { FORUM_PATH } from '../../utils/constants';
import App from '../../components/App/App';

describe('Forum component', () => {
  it('render Forum', () => {
    render(<Forum />, { wrapper: BrowserRouter });
    expect(screen.getByRole('forum')).toBeInTheDocument();
  });

  it('get ForumChat on ForumTopicItem click', async () => {
    window.history.pushState({}, 'Forum page', FORUM_PATH);
    render(<Forum />, { wrapper: BrowserRouter });

    const topicItem = screen.getAllByRole('topic');
    userEvent.click(topicItem[0]);

    await waitFor(() => {
      expect(screen.getByRole('forumChat')).toBeInTheDocument();
    });
  });

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
