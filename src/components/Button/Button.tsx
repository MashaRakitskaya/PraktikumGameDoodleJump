import React from 'react';
import { Button } from './Button.styles';
interface ButtonProps {
  buttonText: string;
  notPriority?: boolean;
  onClick?: () => void;
}

const ButtonComponent = ({
  buttonText,
  notPriority = false,
  onClick
}: ButtonProps) => {
  return (
    <Button onClick={onClick} notPriority={notPriority}>
      {buttonText}
    </Button>
  );
};

export default ButtonComponent;
