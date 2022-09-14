import React from 'react';
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

const App = () => {
  return (
    <AppWrapper>
      <AppWrapperContainer>
        <Sidebar />
        <Routes>
          <Route path={LEADERBOARD_PATH} element={<Leaderboard />} />
          <Route path={FORUM_PATH} element={<Forum />} />
          <Route path={FORUM_CHAT_ID_PATH} element={<ForumChat />} />
        </Routes>
      </AppWrapperContainer>
    </AppWrapper>
  );
};

export default App;
