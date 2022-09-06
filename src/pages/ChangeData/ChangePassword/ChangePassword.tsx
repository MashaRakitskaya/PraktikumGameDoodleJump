import React from 'react';
import { Button } from '../../../components/Button';
import { TextField } from '../../../components/TextField/index';
import { Wrapper } from '../styles';

const ChangePassword = () => {
  return (
    <Wrapper>
      <TextField labelName={'old password'} type={'password'} />
      <TextField labelName={'Password'} type={'password'} />
      <TextField labelName={'password (again)'} type={'password'} />
      <Button color={'#ffff'} content={'Save'} />
    </Wrapper>
  );
};

export default ChangePassword;
