import React, { useEffect } from 'react';
import { AuthPagesWrapper, AuthWrapper } from '../CommonAuthStyles';
import { useNavigate } from 'react-router-dom';
import { PROFILE_SETTING_PATH, SIGNUP_PATH } from '../../../utils/constants';
import { useFormik } from 'formik';
import { signInSchema } from '../../../utils/validationSchema/schemaAuthPages';
import { TextField } from '../../../components/TextField/index';
import { useFetchSignInMutation } from '../../../services/auth';
import { InputLabel, InputNames, InputType } from '../../../constans/constans';
import { ISignInParams } from '../../../models/ISignInParams';
import Header from '../../../components/Header/Header';
import Error from '../../Error/Error';
import { Button } from '../../../components/Button';

const SignIn = () => {
  let navigate = useNavigate();
  const formik = useFormik<ISignInParams>({
    initialValues: {
      [InputNames.password]: '',
      [InputNames.login]: ''
    },
    validationSchema: signInSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      fetchLogin(values);
      navigate(PROFILE_SETTING_PATH);
    }
  });

  const [fetchLogin, { data, isSuccess, isError }] = useFetchSignInMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate(PROFILE_SETTING_PATH);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isError) {
    return (
      <>
        <Error />
      </>
    );
  }
  return (
    <AuthPagesWrapper>
      <form onSubmit={formik.handleSubmit}>
        <AuthWrapper>
          <Header title={'Login'} />
          <TextField
            name={InputNames.login}
            labelName={InputLabel.login}
            type={InputType.text}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.login}
            errorText={formik.touched.login && formik.errors.login}
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
          <Button
            onCLickFunc={() => formik.handleSubmit()}
            type="submit"
            marginTop={'0'}
            buttonText={'Sign in'}
          />
          <Button
            marginTop={'0'}
            type="button"
            onCLickFunc={() => navigate(SIGNUP_PATH)}
            buttonText={'Sign up'}
          />
        </AuthWrapper>
      </form>
    </AuthPagesWrapper>
  );
};

export default SignIn;
