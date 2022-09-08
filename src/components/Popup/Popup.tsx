import React from 'react';
import Button from '../Button/Button';
import './popup.css';
import { ModalWindowContent, ModalWindowTitle } from './Popup.styles';

interface PopupProps {
  isOpen: boolean;
  closeByOverlay: (event: any) => void;
  title: string;
  buttonText: string;
  buttonType: 'button' | 'submit';
  children: React.ReactNode;
}

const Popup = ({
  isOpen,
  closeByOverlay,
  title,
  buttonText,
  children,
  buttonType
}: PopupProps) => {
  return (
    <div
      className={`popup ${isOpen && 'popup_opened'}`}
      onClick={(event) => closeByOverlay(event)}
    >
      <ModalWindowContent>
        <ModalWindowTitle>{title}</ModalWindowTitle>
        {children}
        <Button onClick={() => {}} buttonText={buttonText} type={buttonType} />
      </ModalWindowContent>
    </div>
  );
};

export default Popup;
