import React from 'react';
import {
  ModalWindowContent,
  ModalWindowTitle,
  ModalWindow,
  ButtonClose
} from './Popup.styles';

interface PopupProps {
  isOpen: boolean;
  closePopup: () => void;
  title: string;
  children: React.ReactNode;
}

const Popup = ({ isOpen, title, children, closePopup }: PopupProps) => {
  return isOpen ? (
    <ModalWindow id="popup" isOpen={isOpen} onClick={closePopup} role="popup">
      <ModalWindowContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ButtonClose
          role="close"
          type="button"
          onClick={closePopup}
        ></ButtonClose>
        <ModalWindowTitle>{title}</ModalWindowTitle>
        {children}
      </ModalWindowContent>
    </ModalWindow>
  ) : null;
};

export default Popup;
