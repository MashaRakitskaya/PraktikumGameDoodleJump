import React from 'react';
import { Button } from './Button.styles';
interface ButtonProps {
  type: 'button' | 'submit';
  buttonText: string;
  notPriority?: boolean;
  onClick?: () => void;
  marginTop?: string;
}

const ButtonComponent = ({
  buttonText,
  notPriority = false,
  onClick,
  type,
  marginTop
}: ButtonProps) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      notPriority={notPriority}
      marginTop={marginTop}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonComponent;
