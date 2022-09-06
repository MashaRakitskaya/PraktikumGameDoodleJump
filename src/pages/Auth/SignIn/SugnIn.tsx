import React from 'react';

import { AuthPagesWrapper, Header } from '../styles';
import { SignInWrapper } from './sign-in.styles';
import { useNavigate } from 'react-router-dom';
import { PROFILE_SETTING_PATH, SIGNUP_PATH } from '../../../utils/constants';
import { useFormik } from 'formik';
import { signInSchema } from '../../../utils/validationSchema/schemaAuthPages';
import { Button } from '../../../components/Button';
import { TextField } from '../../../components/TextField/index';

const SugnIn = () => {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      login: '',
      password: ''
    },
    validationSchema: signInSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => {
      navigate(PROFILE_SETTING_PATH);
    }
  });
  return (
    <AuthPagesWrapper>
      <SignInWrapper>
        <Header>Login</Header>
        <TextField
          name="login"
          labelName={'login'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.login}
          errorText={formik.touched.login && formik.errors.login}
        />
        <TextField
          name="password"
          labelName={'Password'}
          type={'password'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          errorText={formik.touched.password && formik.errors.password}
        />
        <Button
          color={'#ffff'}
          onClick={() => formik.handleSubmit()}
          type="submit"
          content={'Sign in'}
        />
        <Button
          onClick={() => navigate(SIGNUP_PATH)}
          // Убрать
          style={{ background: 'none', border: 'none' }}
          content={'Sign up'}
        />
      </SignInWrapper>
    </AuthPagesWrapper>
  );
};

export default SugnIn;
