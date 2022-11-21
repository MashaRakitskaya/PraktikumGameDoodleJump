import React from 'react';
import { Input, Label, Span } from './Field.styles.js';

interface InputProps {
  name: string;
  label: string;
  type: string;
}

const Field = ({ label, name, type }: InputProps) => {
  return (
    <Label>
      {label}
      <Input type={type} name={name}></Input>
      <Span></Span>
    </Label>
  );
};

export default Field;
