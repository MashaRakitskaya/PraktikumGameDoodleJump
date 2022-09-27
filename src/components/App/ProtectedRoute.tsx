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
  const [isCreateTopicPopupOpen, setCreateTopicPopupOpen] = useState(false);

  const closePopup = () => {
    setCreateTopicPopupOpen(false);
  };

  const showPopup = () => {
    setCreateTopicPopupOpen(true);
  };

  const closeByOverlay = (
    event: React.MouseEvent<Element, MouseEvent>
  ): void => {
    const id = (event.target as HTMLDivElement).id;
    if (id === 'popup') {
      closePopup();
    }
  };

  if ((isSuccess && !user) || isError) return <Navigate to={SIGNIN_PATH} />;
  return (
    <>
      {!initRoute && (
        <>
          <Sidebar showPopup={showPopup} />
          <Popup
            isOpen={isCreateTopicPopupOpen}
            closeByOverlay={closeByOverlay}
            title={'Create topic'}
            closePopup={closePopup}
          >
            <form>
              <TextField />
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
