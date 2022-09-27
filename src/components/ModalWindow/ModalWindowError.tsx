import React from 'react';
import { ModalDialog, ModalWrapper } from './ModalWindowError.styles';

interface IModalProps {
  isVisible?: boolean;
  title?: string;
  content?: string;
  onClose: () => void;
}
const ModalWindowError = ({
  isVisible = false,
  title,
  onClose
}: IModalProps) => {
  return !isVisible ? null : (
    <ModalWrapper onClick={onClose}>
      <ModalDialog onClick={(e) => e.stopPropagation()}>
        <div>
          <h3>{title}</h3>
          <span onClick={onClose}>&times;</span>
        </div>
      </ModalDialog>
    </ModalWrapper>
  );
};

export default ModalWindowError;
