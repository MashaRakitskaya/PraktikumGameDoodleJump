import React from 'react';
import { Button } from './Button.styles';
interface ButtonProps {
  buttonText: string;
  onCLickFunc?: () => void;
  notPriority?: boolean;
}

const ButtonComponent = ({
  onCLickFunc,
  buttonText,
  notPriority = false
}: ButtonProps) => {
  return (
    <Button onClick={onCLickFunc} notPriority={notPriority}>
      {buttonText}
    </Button>
  );
};

export default ButtonComponent;
