import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import Leaderboard from '../../pages/Leaderboard/Leaderboard';
import Game from '../../pages/Game/Game';
import Sidebar from '../Sidebar/Sidebar';
import { AppWrapper, AppWrapperContainer } from './app.styles';
import {
  LEADERBOARD_PATH,
  FORUM_PATH,
  FORUM_CHAT_ID_PATH,
  GAME_PATH
} from '../../utils/constants';
import Forum from '../../pages/Forum/Forum';
import ForumChat from '../ForumChat/ForumChat';
import Popup from '../Popup/Popup';
import Field from '../Field/Field';
import Button from '../Button/Button';

const App = () => {
  const [showPopup, togglePopup] = useState(false);

  const closePopup = () => {
    togglePopup(false);
  };

  const openPopup = () => {
    togglePopup(!showPopup);
  };

  return (
    <BrowserRouter>
      <AppWrapper>
        <AppWrapperContainer>
          <Sidebar showPopup={openPopup} />
          <Routes>
            <Route path={LEADERBOARD_PATH} element={<Leaderboard />} />
            <Route
              path="/"
              element={<Navigate replace to={LEADERBOARD_PATH} />}
            />
            <Route path={FORUM_PATH} element={<Forum />} />
            <Route path={FORUM_CHAT_ID_PATH} element={<ForumChat />} />
            <Route path={GAME_PATH} element={<Game />} />
          </Routes>

          <Popup
            isOpen={showPopup}
            title={'Create topic'}
            closePopup={closePopup}
          >
            <form>
              <Field label="title" name="title" type="title" />
              <Button
                onCLickFunc={() => {}}
                buttonText={'Create'}
                type={'submit'}
              />
            </form>
          </Popup>
        </AppWrapperContainer>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
