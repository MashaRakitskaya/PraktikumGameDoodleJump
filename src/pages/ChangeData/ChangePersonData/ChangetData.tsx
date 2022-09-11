import React from 'react';
import { TextField } from '../../../components/TextField/index';
import { ReactComponent as UserIcon } from '../../../assest/svg/user-icon.svg';
import { Wrapper } from '../CommonChangeDataStyles';
import { Button } from '../../../components/Button';

const ChangetData = () => {
  return (
    <Wrapper>
      <UserIcon />
      <TextField labelName={'email'} type={'email'} />
      <TextField labelName={'login'} type={'text'} />
      <TextField labelName={'first name'} type={'text'} />
      <TextField labelName={'second name'} type={'text'} />
      <TextField labelName={'phone number'} type={'number'} />
      <Button color={'#ffff'} content={'Save'} />
    </Wrapper>
  );
};

export default ChangetData;
