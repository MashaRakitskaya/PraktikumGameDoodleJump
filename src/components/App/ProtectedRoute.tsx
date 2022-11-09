import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useFetchUserQuery } from '../../services/auth';
import { SIGNIN_PATH } from '../../utils/constants';
import Sidebar from '../Sidebar/Sidebar';
import {
  useAddToUserThemeMutation,
  useGetUserThemeQuery,
  useUpdateUserThemeMutation
} from '../../services/userTheme';

const ProtectedRoute = () => {
  const location = useLocation();
  const initRoute = location.pathname === '/';
  const { data: user, isSuccess, isError } = useFetchUserQuery();
  // console.log('data', user);
  // useEffect(() => {
  //   if (user) {
  //     const { data } = useGetUserThemeQuery({ id: user?.id });
  //     console.log('addUserTheme', data);
  //   }
  // }, [user]);

  // const { data } = useGetUserThemeQuery({ id: user?.id });
  // console.log('addUserTheme', data);
  // const addUserTheme = (user: any) => {
  //   if (user.id) {
  //     const { data, isSuccess } = useGetUserThemeQuery({ id: user.id });
  //     console.log('addUserTheme', data);

  //     if (isSuccess && !data) {
  //       const [addToUserTheme, { data: userData }] =
  //         useAddToUserThemeMutation();
  //       addToUserTheme({ theme: 'dark', user_id: userData.id });
  //     } else {
  //       const [updateUserTheme] = useUpdateUserThemeMutation();

  //       updateUserTheme({
  //         body: { theme: 'dark' },
  //         id: user.id
  //       });
  //     }
  //   }
  // };
  //  console.log('data', user);

  // addUserTheme(user);

  if ((isSuccess && !user) || isError) return <Navigate to={SIGNIN_PATH} />;
  return (
    <>
      {!initRoute && !isEmpty(user) && <Sidebar />}
      {!isEmpty(user) && <Outlet />}
    </>
  );
};

export default ProtectedRoute;
