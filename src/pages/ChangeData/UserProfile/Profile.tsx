import React, { useCallback, useEffect } from 'react';
import { useFormik } from 'formik';
import { Button } from '../../../components/Button';
import { IconButton, Avatar } from '@mui/material';
import {
  ENDPOINTS,
  InputLabel,
  InputNames,
  InputType
} from '../../../constans/constans';
import { IEditUserProfileParamsResponse } from '../../../models/IUser';
import { useFetchUserQuery } from '../../../services/auth';
import {
  useEditAvatarMutation,
  useEditProfileMutation
} from '../../../services/editUser';
import { TextField } from '../../../components/TextField';
import { AvatarWrapper, UserEditForm } from './Profile.styles';
import UserHeaderNav from '../../../components/UserHeader/UserHeaderNav';

const Profile = () => {
  const { data: user, isSuccess } = useFetchUserQuery();
  const [editProfile] = useEditProfileMutation();
  const [editAvatar] = useEditAvatarMutation();

  const formik = useFormik<IEditUserProfileParamsResponse>({
    initialValues: {
      [InputNames.firstName]: '',
      [InputNames.secondName]: '',
      [InputNames.login]: '',
      [InputNames.email]: '',
      [InputNames.phone]: '',
      [InputNames.displayName]: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      await editProfile(values);
    }
  });

  useEffect(() => {
    if (isSuccess) {
      formik.setFieldValue(InputNames.displayName, user.display_name);
      formik.setFieldValue(InputNames.firstName, user.first_name);
      formik.setFieldValue(InputNames.secondName, user.second_name);
      formik.setFieldValue(InputNames.login, user.login);
      formik.setFieldValue(InputNames.email, user.email);
      formik.setFieldValue(InputNames.phone, user.phone);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onSubmitAvatar = useCallback(
    async (evt: React.ChangeEvent<HTMLInputElement>) => {
      const payload = evt.target.files;
      const image = payload && payload[0];
      const formData = new FormData();
      formData.append('avatar', image!);
      await editAvatar(formData);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div>
      <UserHeaderNav />
      <AvatarWrapper>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          sx={{
            width: 140,
            alignSelf: 'center',
            marginBottom: 4
          }}
        >
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={onSubmitAvatar}
          />
          <Avatar
            title={'avatar'}
            sx={{ width: 120, height: 120 }}
            src={ENDPOINTS.RESOURCES + (user?.avatar ?? '')}
          />
        </IconButton>
      </AvatarWrapper>
      <UserEditForm onSubmit={formik.handleSubmit} className="form">
        <TextField
          name={InputNames.displayName}
          labelName={InputLabel.displayName}
          type={InputType.text}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.display_name}
        />

        <TextField
          type={InputType.text}
          name={InputNames.firstName}
          labelName={InputLabel.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.first_name}
        />

        <TextField
          type={InputType.text}
          name={InputNames.secondName}
          labelName={InputLabel.secondName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.second_name}
        />

        <TextField
          name={InputNames.login}
          labelName={InputLabel.login}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.login}
        />

        <TextField
          type={InputType.email}
          name={InputNames.email}
          labelName={InputLabel.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        <TextField
          type={InputType.text}
          name={InputNames.phone}
          labelName={InputLabel.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />

        <Button buttonText={'Save'} type="submit" />
      </UserEditForm>
    </div>
  );
};

export default Profile;
