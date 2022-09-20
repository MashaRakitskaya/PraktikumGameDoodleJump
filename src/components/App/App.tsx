import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

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

function App() {
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

  return (
    <AppWrapper>
      <AppWrapperContainer>
        <Sidebar showPopup={showPopup} />
        <Routes>
          <Route path={LEADERBOARD_PATH} element={<Leaderboard />} />
          <Route path={FORUM_PATH} element={<Forum />} />
          <Route path={FORUM_CHAT_ID_PATH} element={<ForumChat />} />
          <Route path={GAME_PATH} element={<Game />} />
        </Routes>

        <Popup
          isOpen={isCreateTopicPopupOpen}
          closeByOverlay={closeByOverlay}
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
  );
}

export default App;
