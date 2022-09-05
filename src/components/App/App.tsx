import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Leaderboard from '../../pages/Leaderboard/Leaderboard';
import Game from '../../pages/Game/Game';
import Sidebar from '../Sidebar/Sidebar';
import { AppWrapper, AppWrapperContainer } from './app.styles';
import { GAME_PATH, LEADERBOARD_PATH } from '../../utils/constants';

function App() {
  return (
    <AppWrapper>
      <AppWrapperContainer>
        <Sidebar />
        <Routes>
          <Route path={LEADERBOARD_PATH} element={<Leaderboard />} />
          <Route path={GAME_PATH} element={<Game />} />
        </Routes>
      </AppWrapperContainer>
    </AppWrapper>
  );
}

export default App;
