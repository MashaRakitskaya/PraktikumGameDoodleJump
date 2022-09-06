import React from 'react';
import { TextField } from '../../../components/TextField/index';
import { SignInWrapper } from '../SignIn/sign-in.styles';
import { AuthPagesWrapper, Header } from '../styles';
import { useNavigate } from 'react-router-dom';
import { PROFILE_SETTING_PATH, SIGNIN_PATH } from '../../../utils/constants';
import { useFormik } from 'formik';
import { signUpSchema } from '../../../utils/validationSchema/schemaAuthPages';
import { Button } from '../../../components/Button';

const SignUp = () => {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      login: '',
      firstName: '',
      secondName: '',
      phoneNumber: '',
      password: '',
      passwordAgaing: ''
    },
    validationSchema: signUpSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => {
      navigate(PROFILE_SETTING_PATH);
    }
  });
  return (
    <AuthPagesWrapper>
      <SignInWrapper>
        <Header>Sign up</Header>
        <TextField
          labelName={'email'}
          type={'email'}
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          errorText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name="login"
          type={'text'}
          labelName={'login'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.login}
          errorText={formik.touched.login && formik.errors.login}
        />
        <TextField
          name="firstName"
          labelName={'first name'}
          type={'text'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          errorText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          name="secondName"
          labelName={'second name'}
          type={'text'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.secondName}
          errorText={formik.touched.secondName && formik.errors.secondName}
        />
        <TextField
          name="phoneNumber"
          type={'number'}
          labelName={'phone number'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
          errorText={formik.touched.phoneNumber && formik.errors.phoneNumber}
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
        <TextField
          name="passwordAgaing"
          labelName={'password againg'}
          type={'password'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordAgaing}
          errorText={
            formik.touched.passwordAgaing && formik.errors.passwordAgaing
          }
        />
        <Button
          onClick={() => formik.handleSubmit()}
          type="submit"
          color={'#ffff'}
          content={'Create user'}
        />
        <Button
          onClick={() => navigate(SIGNIN_PATH)}
          style={{ background: 'none', border: 'none' }}
          content={'Sign in'}
        />
      </SignInWrapper>
    </AuthPagesWrapper>
  );
};

export default SignUp;
