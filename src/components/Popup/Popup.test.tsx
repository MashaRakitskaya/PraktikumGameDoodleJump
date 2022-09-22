import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Popup from './Popup';

describe('Popup component', () => {
  it('render Popup and shows the children', () => {
    const onClosePopup = jest.fn(() => false);
    const openPopup = true;
    render(
      <Popup
        isOpen={openPopup}
        title={'Create topic'}
        closePopup={onClosePopup}
      >
        <div>test</div>
      </Popup>
    );

    expect(
      screen.getByRole('heading', {
        name: /create topic/i
      })
    ).toBeInTheDocument();
    expect(screen.getByText('test')).toBeTruthy();
  });

  it('сlose Popup', () => {
    const onClosePopup = jest.fn(() => false);
    const openPopup = true;
    render(
      <Popup
        isOpen={openPopup}
        title={'Create topic'}
        closePopup={onClosePopup}
      >
        <div>test</div>
      </Popup>
    );

    userEvent.click(screen.getByRole('close'));
    expect(onClosePopup).toHaveBeenCalledTimes(1);
  });

  it('close by overlay Popup', () => {
    const onClosePopup = jest.fn(() => false);
    const openPopup = true;
    render(
      <Popup
        isOpen={openPopup}
        title={'Create topic'}
        closePopup={onClosePopup}
      >
        <div>test</div>
      </Popup>
    );

    userEvent.click(screen.getByRole('popup'));
    expect(onClosePopup).toHaveBeenCalledTimes(1);
  });
});
