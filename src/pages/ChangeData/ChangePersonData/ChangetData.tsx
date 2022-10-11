import React from 'react';
import { TextField } from '../../../components/TextField/index';
import { Wrapper } from '../CommonChangeDataStyles';
import { Button } from '../../../components/Button';
import UserHeaderNav from '../../../components/UserHeader/UserHeaderNav';

const ChangetData = () => {
  return (
    <Wrapper>
      <UserHeaderNav />
      <TextField labelName={'email'} type={'email'} />
      <TextField labelName={'login'} type={'text'} />
      <TextField labelName={'first name'} type={'text'} />
      <TextField labelName={'second name'} type={'text'} />
      <TextField labelName={'phone number'} type={'number'} />
      <Button type="button" buttonText="Save" />
    </Wrapper>
  );
};

export default ChangetData;
