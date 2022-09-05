import React from 'react';
import { Button } from './Button.styles';
interface ButtonProps {
  buttonText: string;
  onCLickFunc?: Function;
}

const ButtonComponent = ({ buttonText, onCLickFunc }: ButtonProps) => {
  // @ts-ignore
  return <Button onClick={onCLickFunc}>{buttonText}</Button>;
};

export default ButtonComponent;
