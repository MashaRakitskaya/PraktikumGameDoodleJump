import React from 'react';
import Button from '../Button/Button';
import './popup.css';
import { ModalWindowContent, ModalWindowTitle } from './Popup.styles';

interface PopupProps {
  isCreateTopicPopupOpen: boolean;
  closeByOverlay: (event: any) => void;
  title: string;
}

const Popup = ({
  isCreateTopicPopupOpen,
  closeByOverlay,
  title
}: PopupProps) => {
  return (
    <div
      className={`popup ${isCreateTopicPopupOpen && 'popup_opened'}`}
      onClick={(event) => closeByOverlay(event)}
    >
      <ModalWindowContent>
        <ModalWindowTitle>{title}</ModalWindowTitle>
        <Button onClick={() => {}} buttonText="Create" type="submit" />
      </ModalWindowContent>
    </div>
  );
};

export default Popup;
