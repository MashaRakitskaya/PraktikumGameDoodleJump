import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Leaderboard from '../../pages/Leaderboard/Leaderboard';
import Sidebar from '../Sidebar/Sidebar';
import { AppWrapper, AppWrapperContainer } from './app.styles';
import {
  LEADERBOARD_PATH,
  FORUM_PATH,
  FORUM_CHAT_ID_PATH
} from '../../utils/constants';
import Forum from '../../pages/Forum/Forum';
import ForumChat from '../ForumChat/ForumChat';
import Popup from '../Popup/Popup';

function App() {
  const [isCreateTopicPopupOpen, setCreateTopicPopupOpen] = useState(false);

  const closePopup = () => {
    setCreateTopicPopupOpen(false);
  };

  const showPopup = () => {
    setCreateTopicPopupOpen(true);
  };

  function closeByOverlay(event: any): void {
    if (event.target.classList.contains('popup')) {
      closePopup();
    }
  }

  return (
    <AppWrapper>
      <AppWrapperContainer>
        <Sidebar showPopup={showPopup} />
        <Routes>
          <Route path={LEADERBOARD_PATH} element={<Leaderboard />} />
          <Route path={FORUM_PATH} element={<Forum />} />
          <Route path={FORUM_CHAT_ID_PATH} element={<ForumChat />} />
        </Routes>

        <Popup
          isOpen={isCreateTopicPopupOpen}
          closeByOverlay={closeByOverlay}
          title={'Create topic'}
          buttonText={'Create'}
          buttonType={'submit'}
        >
          <input></input>
        </Popup>
      </AppWrapperContainer>
    </AppWrapper>
  );
}

export default App;
