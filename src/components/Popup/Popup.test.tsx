import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Popup from './Popup';

describe('Popup component', () => {
  const onClosePopup = jest.fn(() => false);
  const openPopup = true;

  beforeEach(() => {
    render(
      <Popup
        isOpen={openPopup}
        title={'Create topic'}
        closePopup={onClosePopup}
      >
        <div>test</div>
      </Popup>
    );
  });

  it('render Popup and shows the children', () => {
    expect(
      screen.getByRole('heading', {
        name: /create topic/i
      })
    ).toBeInTheDocument();
    expect(screen.getByText('test')).toBeTruthy();
  });

  it('сlose Popup', () => {
    userEvent.click(screen.getByRole('close'));
    expect(onClosePopup).toHaveBeenCalledTimes(1);
  });

  it('close by overlay Popup', () => {
    userEvent.click(screen.getByRole('popup'));
    expect(onClosePopup).toHaveBeenCalledTimes(1);
  });
});
