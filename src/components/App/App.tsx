import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SugnIn from '../../pages/Auth/SignIn/SugnIn';
import SignUp from '../../pages/Auth/SignUp/SignUp';
import CreateUser from '../../pages/CreateUser/CreateUser';
import Leaderboard from '../../pages/Leaderboard/Leaderboard';
import { AppWrapper, AppWrapperContainer } from './app.styles';
import {
  PROFILE_SETTING_PATH,
  SIGNIN_PATH,
  SIGNUP_PATH,
  FORUM_PATH,
  FORUM_CHAT_ID_PATH,
  GAME_PATH,
  LEADERBOARD_PATH
} from '../../utils/constants';
import Forum from '../../pages/Forum/Forum';
import ForumChat from '../ForumChat/ForumChat';

import Game from '../../pages/Game/Game';
import { withErrorBoundary } from 'react-error-boundary';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <AppWrapper>
      <AppWrapperContainer>
        <Routes>
          <Route path={SIGNIN_PATH} element={<SugnIn />} />
          <Route path={SIGNUP_PATH} element={<SignUp />} />
          <Route path={PROFILE_SETTING_PATH} element={<ProtectedRoute />}>
            <Route index element={<CreateUser />} />
          </Route>
          <Route path={LEADERBOARD_PATH} element={<ProtectedRoute />}>
            <Route index element={<Leaderboard />} />
          </Route>
          <Route path={FORUM_PATH} element={<ProtectedRoute />}>
            <Route index element={<Forum />} />
          </Route>
          <Route path={FORUM_CHAT_ID_PATH} element={<ProtectedRoute />}>
            <Route index element={<ForumChat />} />
          </Route>
          <Route path={GAME_PATH} element={<ProtectedRoute />}>
            <Route index element={<Game />} />
          </Route>
          <Route path="*" element={<Navigate to={SIGNIN_PATH} replace />} />
        </Routes>
      </AppWrapperContainer>
    </AppWrapper>
  );
};
export default withErrorBoundary(App, {
  fallback: <>Что-то пошло не так.</>
});
