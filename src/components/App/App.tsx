import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../../pages/Auth/SignIn/SignIn';
import SignUp from '../../pages/Auth/SignUp/SignUp';
import Leaderboard from '../../pages/Leaderboard/Leaderboard';
import {
  AppWrapper,
  AppWrapperContainer,
  SwitchThemeButton,
  ThemeStyles
} from './App.styles';
import {
  PROFILE_SETTING_PATH,
  SIGNIN_PATH,
  SIGNUP_PATH,
  FORUM_PATH,
  FORUM_CHAT_ID_PATH,
  GAME_PATH,
  LEADERBOARD_PATH,
  PASSWORD_SETTING_PATH,
  PRESENTATION_PATH
} from '../../utils/constants';
import Forum from '../../pages/Forum/Forum';
import ForumChat from '../ForumChat/ForumChat';
import Game from '../../pages/Game/Game';
import { withErrorBoundary } from 'react-error-boundary';
import ProtectedRoute from './ProtectedRoute';
import ChangePassword from '../../pages/ChangeData/ChangePassword/ChangePassword';
import Presentation from '../../pages/Presentation/Presentation';
import Profile from '../../pages/ChangeData/UserProfile/Profile';
import { ThemeContext } from '../../providers/ThemeProvider/ThemeProvider';

const App = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ position: 'relative' }}>
      <SwitchThemeButton onClick={toggleTheme}>{`Switch to ${
        isDarkTheme === true ? '🌞' : '🌑'
      }`}</SwitchThemeButton>
      <ThemeStyles isDarkTheme={isDarkTheme}>
        <AppWrapper id="app-root">
          <AppWrapperContainer>
            <Routes>
              <Route path={SIGNIN_PATH} element={<SignIn />} />
              <Route path={SIGNUP_PATH} element={<SignUp />} />
              <Route path={PROFILE_SETTING_PATH} element={<ProtectedRoute />}>
                <Route index element={<Profile />} />
              </Route>
              <Route path={PASSWORD_SETTING_PATH} element={<ProtectedRoute />}>
                <Route index element={<ChangePassword />} />
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
              <Route path={PRESENTATION_PATH} element={<ProtectedRoute />}>
                <Route index element={<Presentation />} />
              </Route>

              {/* <Route path="*" element={<Navigate to={SIGNIN_PATH} replace />} /> */}
            </Routes>
          </AppWrapperContainer>
        </AppWrapper>
      </ThemeStyles>
    </div>
  );
};

export default withErrorBoundary(App, {
  fallback: <>Что-то пошло не так.</>
});
