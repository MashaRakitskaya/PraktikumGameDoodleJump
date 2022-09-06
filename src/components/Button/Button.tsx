import React from 'react';
import { Button } from './Button.styles';
interface ButtonProps {
  buttonText: string;
  notPriority?: boolean;
  onClick?: () => void;
}

const ButtonComponent = ({ buttonText, notPriority = false }: ButtonProps) => {
  return <Button notPriority={notPriority}>{buttonText}</Button>;
};

export default ButtonComponent;