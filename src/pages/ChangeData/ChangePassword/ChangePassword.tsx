import React from 'react';
import { Button } from '../../../components/Button';
import ModalWindowError from '../../../components/ModalWindow/ModalWindowError';
import { TextField } from '../../../components/TextField/index';
import UserHeaderNav from '../../../components/UserHeader/UserHeaderNav';
import { Wrapper } from '../CommonChangeDataStyles';

const ChangePassword = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <Wrapper>
      <ModalWindowError isVisible={open} onClose={() => setOpen(false)} />
      <UserHeaderNav />
      <TextField labelName={'old password'} type={'password'} />
      <TextField labelName={'Password'} type={'password'} />
      <TextField labelName={'password (again)'} type={'password'} />
      <Button type="button" buttonText="Save" onClick={() => setOpen(true)} />
    </Wrapper>
  );
};

export default ChangePassword;
