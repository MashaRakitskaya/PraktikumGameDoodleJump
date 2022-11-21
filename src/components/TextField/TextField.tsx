import React, { FC, InputHTMLAttributes } from 'react';
import {
  ErrorTextTextField,
  StyledInput,
  StyledLabel
} from './TextField.styles.js';

interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  labelName?: string;
  errorText?: any;
}

const TextField: FC<IPropsInput> = ({
  name,
  labelName,
  errorText,
  ...rest
}) => {
  return (
    <StyledLabel>
      {labelName}
      <StyledInput {...rest} id={name} />
      <ErrorTextTextField>{errorText}</ErrorTextTextField>
    </StyledLabel>
  );
};

export default TextField;
