import React from 'react';
import { Button } from './ButtonStyles';
interface ButtonProps {
  type: 'button' | 'submit';
  buttonText: string;
  onClick?: () => void;
  notPriority?: boolean;
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
      marginTop={marginTop}
      type={type}
      onClick={onClick}
      notPriority={notPriority}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonComponent;
