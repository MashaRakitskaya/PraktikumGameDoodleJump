import React from 'react';
import { Button } from './ButtonStyles';
interface ButtonProps {
  type: 'button' | 'submit';
  buttonText: string;
  onCLickFunc?: () => void;
  notPriority?: boolean;
  marginTop?: string;
}

const ButtonComponent = ({
  buttonText,
  notPriority = false,
  onCLickFunc,
  type,
  marginTop
}: ButtonProps) => {
  return (
    <Button
      marginTop={marginTop}
      type={type}
      onClick={onCLickFunc}
      notPriority={notPriority}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonComponent;
