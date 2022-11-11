import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../../pages/Auth/SignIn/SignIn';
import SignUp from '../../pages/Auth/SignUp/SignUp';
import Leaderboard from '../../pages/Leaderboard/Leaderboard';
import {
  AppWrapper,
  AppWrapperContainer,
  SwitchThemeButton,
  ThemeStyles,
  ThemeWrapper
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
import { useFetchUserQuery } from '../../services/auth';
import { fetchFindOrCreateUserTheme } from '../../utils/api/api';

const App = (serverAndClientData: {
  placeRendering: string;
  serverTheme?: string;
}) => {
  const { clientTheme, toggleTheme } = useContext(ThemeContext);
  const { data: user } = useFetchUserQuery();
  const { placeRendering, serverTheme } = serverAndClientData;
  const serverRenderingPlace = 'server';
  const themeLight = 'light';

  const changeTheme = () => {
    if (placeRendering === serverRenderingPlace) {
      if (serverTheme === themeLight) {
        return false;
      } else {
        return true;
      }
    } else {
      if (clientTheme === themeLight) {
        return false;
      } else {
        return true;
      }
    }
  };

  useEffect(() => {
    if (user)
      fetchFindOrCreateUserTheme({ userId: user.id, theme: clientTheme });
  }, [user]);

  return (
    <ThemeWrapper>
      <SwitchThemeButton onClick={toggleTheme}>{`Switch to ${
        clientTheme === themeLight ? '🌑' : '🌞'
      }`}</SwitchThemeButton>
      <ThemeStyles SeverOrClientTheme={changeTheme()}>
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
    </ThemeWrapper>
  );
};

export default withErrorBoundary(App, {
  fallback: <>Что-то пошло не так.</>
});
