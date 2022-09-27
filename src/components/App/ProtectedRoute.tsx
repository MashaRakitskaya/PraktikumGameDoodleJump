import React, { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useFetchUserQuery } from '../../services/auth';
import { SIGNIN_PATH } from '../../utils/constants';
import { Button } from '../Button';
import Popup from '../Popup/Popup';
import Sidebar from '../Sidebar/Sidebar';
import { TextField } from '../TextField';

const ProtectedRoute = () => {
  const location = useLocation();
  const initRoute = location.pathname === '/';
  const { data: user, isSuccess, isError } = useFetchUserQuery();
  const [showPopup, togglePopup] = useState(false);

  const closePopup = () => {
    togglePopup(false);
  };

  const openPopup = () => {
    togglePopup(!showPopup);
  };

  if ((isSuccess && !user) || isError) return <Navigate to={SIGNIN_PATH} />;
  return (
    <>
      {!initRoute && (
        <>
          <Sidebar showPopup={openPopup} />
          <Popup
            isOpen={showPopup}
            title={'Create topic'}
            closePopup={closePopup}
          >
            <form>
              <TextField labelName="title" name="title" type="title" />
              <Button
                onCLickFunc={() => {}}
                buttonText={'Create'}
                type={'submit'}
              />
            </form>
          </Popup>
        </>
      )}
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
