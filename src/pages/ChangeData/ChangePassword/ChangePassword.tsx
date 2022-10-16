import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button } from '../../../components/Button';
import { TextField } from '../../../components/TextField/index';
import UserHeaderNav from '../../../components/UserHeader/UserHeaderNav';
import { InputLabel, InputNames, InputType } from '../../../constans/constans';
import { useEditPasswordMutation } from '../../../services/editUser';
import { Wrapper } from '../CommonChangeData.styles';

const ChangePassword = () => {
  const [editPassword, { isError }] = useEditPasswordMutation();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      [InputNames.oldPassword]: '',
      [InputNames.newPassword]: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      await editPassword(values);
    }
  });

  useEffect(() => {
    if (isError) {
      formik.resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  return (
    <Wrapper>
      <UserHeaderNav />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          type={showPassword ? InputType.text : InputType.password}
          name={InputNames.oldPassword}
          labelName={InputLabel.oldPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.oldPassword}
        />
        <TextField
          type={showPassword ? InputType.text : InputType.password}
          name={InputNames.newPassword}
          labelName={InputLabel.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.newPassword}
        />
        <p onClick={() => setShowPassword(!showPassword)}>Show Password</p>
        <Button type="submit" buttonText="Save" />
      </form>
    </Wrapper>
  );
};

export default ChangePassword;
