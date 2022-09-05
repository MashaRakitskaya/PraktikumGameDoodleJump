import React from 'react';
import { Button } from './Button.styles';
interface ButtonProps {
  buttonText: string;
}

const ButtonComponent = ({ buttonText }: ButtonProps) => {
  return <Button>{buttonText}</Button>;
};

export default ButtonComponent;
