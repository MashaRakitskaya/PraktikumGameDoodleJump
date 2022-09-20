import React from 'react';
import { Button } from '../../components/Button';
import { ErrorWrapper } from './ErrorStyles';

const Error = () => {
  return (
    <ErrorWrapper>
      <p>We are already fixing</p>
      <Button>Back</Button>
    </ErrorWrapper>
  );
};

export default Error;
