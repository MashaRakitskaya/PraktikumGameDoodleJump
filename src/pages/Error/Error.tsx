import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { SIGNIN_PATH } from '../../utils/constants';
import { ErrorWrapper } from './ErrorStyles';

const Error = () => {
  let navigate = useNavigate();

  return (
    <ErrorWrapper>
      <p>We are already fixing</p>
      <Button
        onCLickFunc={() => navigate(SIGNIN_PATH)}
        type="button"
        buttonText="Back"
      />
    </ErrorWrapper>
  );
};

export default Error;
