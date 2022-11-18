import React from 'react';
import { Input, MessageFormStyled, SubmitButton } from './MessageForm.styles';

interface MessageFormProps {
  inputName: string;
  inputType: string;
  inputValue: string;
  formik: any;
  isMainInput?: boolean;
}

const MessageForm = ({
  inputName,
  inputType,
  inputValue,
  formik,
  isMainInput = true
}: MessageFormProps) => {
  return (
    <MessageFormStyled onSubmit={formik.handleSubmit}>
      <Input
        name={inputName}
        type={inputType}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={inputValue}
        disabled={formik.isSubmitting}
        placeholder="Write a message..."
        isMainInput={isMainInput}
      ></Input>
      <SubmitButton type="submit"></SubmitButton>
    </MessageFormStyled>
  );
};

export default MessageForm;
