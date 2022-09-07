import React from 'react';
import { Button } from './Button.styles';
interface ButtonProps {
  type: 'button' | 'submit';
  buttonText: string;
  notPriority?: boolean;
  onClick?: () => void;
}

const ButtonComponent = ({
  buttonText,
  notPriority = false,
  onClick,
  type
}: ButtonProps) => {
  return (
    <Button type={type} onClick={onClick} notPriority={notPriority}>
      {buttonText}
    </Button>
  );
};

export default ButtonComponent;
