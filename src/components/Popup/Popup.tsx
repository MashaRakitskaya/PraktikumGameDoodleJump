import React from 'react';
import {
  ModalWindowContent,
  ModalWindowTitle,
  ModalWindow,
  ButtonClose
} from './Popup.styles';
import ReactDOM from 'react-dom';

interface PopupProps {
  isOpen: boolean;
  closePopup: () => void;
  title: string;
  children: React.ReactNode;
  isOverlayAndCloseButton?: boolean;
}

const Popup = ({
  isOpen,
  title,
  children,
  closePopup,
  isOverlayAndCloseButton = true
}: PopupProps) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <ModalWindow
      isOpen={isOpen}
      onClick={isOverlayAndCloseButton ? closePopup : undefined}
      role="popup"
    >
      <ModalWindowContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {isOverlayAndCloseButton && (
          <ButtonClose
            role="close"
            type="button"
            onClick={closePopup}
          ></ButtonClose>
        )}
        <ModalWindowTitle>{title}</ModalWindowTitle>
        {children}
      </ModalWindowContent>
    </ModalWindow>,
    document.getElementById('app-root') as HTMLElement
  );
};

export default Popup;
