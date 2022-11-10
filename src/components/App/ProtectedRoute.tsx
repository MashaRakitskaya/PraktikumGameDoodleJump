import React, { useContext, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useFetchUserQuery } from '../../services/auth';
import { SIGNIN_PATH } from '../../utils/constants';
import Sidebar from '../Sidebar/Sidebar';
import { ThemeContext } from '../../providers/ThemeProvider/ThemeProvider';
import { config } from 'process';
import { findOrCreateUserTheme } from '../../utils/api/api';

const ProtectedRoute = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const location = useLocation();
  const initRoute = location.pathname === '/';
  const { data: user, isSuccess, isError } = useFetchUserQuery();

  useEffect(() => {
    if (user) {
      findOrCreateUserTheme({ user, isDarkTheme });
    }
  }, [user]);

  if ((isSuccess && !user) || isError) return <Navigate to={SIGNIN_PATH} />;
  return (
    <>
      {!initRoute && !isEmpty(user) && <Sidebar />}
      {!isEmpty(user) && <Outlet />}
    </>
  );
};

export default ProtectedRoute;
