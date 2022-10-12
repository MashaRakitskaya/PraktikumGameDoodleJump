import React, { useEffect } from 'react';
import { TextField } from '../../../components/TextField/index';
import { AuthPagesWrapper, AuthWrapper } from '../CommonAuthStyles';
import { useNavigate } from 'react-router-dom';
import { PROFILE_SETTING_PATH, SIGNIN_PATH } from '../../../utils/constants';
import { useFormik } from 'formik';
import { signUpSchema } from '../../../utils/validationSchema/schemaAuthPages';
import { Button } from '../../../components/Button';
import { useFetchSignUpMutation } from '../../../services/auth';
import { InputLabel, InputNames, InputType } from '../../../constans/constans';
import { ISignUpParams } from '../../../models/ISignUpParams';
import Header from '../../../components/Header/Header';
import CommonLink from '../../../components/CommonLink/CommonLink';

const SignUp = () => {
  let navigate = useNavigate();
  const formik = useFormik<ISignUpParams>({
    initialValues: {
      [InputNames.email]: '',
      [InputNames.login]: '',
      [InputNames.firstName]: '',
      [InputNames.secondName]: '',
      [InputNames.phone]: '',
      [InputNames.password]: '',
      [InputNames.passwordAgain]: ''
    },
    validationSchema: signUpSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      fetchSignUp(values);
    }
  });
  const [fetchSignUp, { isSuccess, data }] = useFetchSignUpMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate(PROFILE_SETTING_PATH);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <AuthPagesWrapper>
      <form onSubmit={formik.handleSubmit}>
        <Header title={'Sign up'} />
        <AuthWrapper>
          <TextField
            labelName={InputLabel.email}
            type={InputType.email}
            name={InputNames.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            errorText={formik.touched.email && formik.errors.email}
          />
          <TextField
            name={InputNames.login}
            type={InputType.text}
            labelName={InputLabel.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.login}
            errorText={formik.touched.login && formik.errors.login}
          />
          <TextField
            name={InputNames.firstName}
            labelName={InputLabel.firstName}
            type={InputType.text}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.first_name}
            errorText={formik.touched.first_name && formik.errors.first_name}
          />
          <TextField
            name={InputNames.secondName}
            labelName={InputLabel.secondName}
            type={InputType.text}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.second_name}
            errorText={formik.touched.second_name && formik.errors.second_name}
          />
          <TextField
            name={InputNames.phone}
            type={InputType.text}
            labelName={InputLabel.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            errorText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            name={InputNames.password}
            labelName={InputLabel.password}
            type={InputType.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            errorText={formik.touched.password && formik.errors.password}
          />
          <TextField
            name={InputNames.passwordAgain}
            labelName={InputLabel.passwordAgain}
            type={InputType.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password_again}
            errorText={
              formik.touched.password_again && formik.errors.password_again
            }
          />
          <Button
            onClick={() => formik.handleSubmit()}
            type="submit"
            marginTop="0px"
            buttonText="Create user"
          />

          <CommonLink
            onCLick={() => navigate(SIGNIN_PATH)}
            linkText="Sign in"
          />
        </AuthWrapper>
      </form>
    </AuthPagesWrapper>
  );
};

export default SignUp;
