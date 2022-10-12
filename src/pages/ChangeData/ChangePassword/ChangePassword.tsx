import React from 'react';
import { Button } from '../../../components/Button';
import { TextField } from '../../../components/TextField/index';
import UserHeaderNav from '../../../components/UserHeader/UserHeaderNav';
import { Wrapper } from '../CommonChangeData.styles';

const ChangePassword = () => {
  return (
    <Wrapper>
      <UserHeaderNav />
      <TextField labelName={'old password'} type={'password'} />
      <TextField labelName={'Password'} type={'password'} />
      <TextField labelName={'password (again)'} type={'password'} />
      <Button type="button" buttonText="Save" />
    </Wrapper>
  );
};

export default ChangePassword;
