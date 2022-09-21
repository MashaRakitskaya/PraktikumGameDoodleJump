import React from 'react';
import {
  ModalWindowContent,
  ModalWindowTitle,
  ModalWindow,
  ButtonClose
} from './Popup.styles';

interface PopupProps {
  isOpen: boolean;
  closeByOverlay: (event: React.MouseEvent<Element, MouseEvent>) => void;
  closePopup: () => void;
  title: string;
  children: React.ReactNode;
}

const Popup = ({
  isOpen,
  closeByOverlay,
  title,
  children,
  closePopup
}: PopupProps) => {
  return (
    <ModalWindow
      id="popup"
      isOpen={isOpen}
      onClick={(event) => closeByOverlay(event)}
    >
      <ModalWindowContent>
        <ButtonClose type="button" onClick={closePopup}></ButtonClose>
        <ModalWindowTitle>{title}</ModalWindowTitle>
        {children}
      </ModalWindowContent>
    </ModalWindow>
  );
};

export default Popup;
