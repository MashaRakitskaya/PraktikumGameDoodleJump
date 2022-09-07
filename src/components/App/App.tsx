import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Leaderboard from '../../pages/Leaderboard/Leaderboard';
import Sidebar from '../Sidebar/Sidebar';
import { AppWrapper, AppWrapperContainer } from './app.styles';
import { LEADERBOARD_PATH } from '../../utils/constants';

function App() {
  return (
    <AppWrapper>
      <AppWrapperContainer>
        <Sidebar />
        <Routes>
          <Route path={LEADERBOARD_PATH} element={<Leaderboard />} />
        </Routes>
      </AppWrapperContainer>
    </AppWrapper>
  );
}

export default App;
