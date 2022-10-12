import React from 'react';
import { isEmpty } from 'lodash';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useFetchUserQuery } from '../../services/auth';
import { SIGNIN_PATH } from '../../utils/constants';
import Sidebar from '../Sidebar/Sidebar';

const ProtectedRoute = () => {
  const location = useLocation();
  const initRoute = location.pathname === '/';
  const { data: user, isSuccess, isError } = useFetchUserQuery();

  if ((isSuccess && !user) || isError) return <Navigate to={SIGNIN_PATH} />;
  return (
    <>
      {!initRoute && !isEmpty(user) && <Sidebar />}
      {!isEmpty(user) && <Outlet />}
    </>
  );
};

export default ProtectedRoute;
