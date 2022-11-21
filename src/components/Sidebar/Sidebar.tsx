import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetchLogoutMutation } from '../../services/auth';
import { useLocation } from 'react-router-dom';
import {
  LEADERBOARD_PATH,
  PROFILE_SETTING_PATH,
  FORUM_PATH,
  PRESENTATION_PATH,
  SIGNUP_PATH,
  GAME_PATH
} from '../../utils/constants';
import Button from '../Button/Button';
// @ts-ignore
import { SideNav, SideNavLink, ButtonExit } from './Sidebar.styles.ts';
import TopicPopup from '../Popup/types/TopicPopup';

const Sidebar = () => {
  const [isButtonAddTopic, setButtonAddTopic] = useState(false);
  const location = useLocation();
  const [showPopup, togglePopup] = useState(false);

  const showButtonAddChat = (isPathForum: boolean) => {
    setButtonAddTopic(isPathForum);
  };

  useEffect(() => {
    showButtonAddChat(location.pathname === FORUM_PATH);
  }, [location.pathname]);

  const playGame = () => {
    window.location.href = GAME_PATH;
  };

  const [fetchLogout] = useFetchLogoutMutation();
  const navigate = useNavigate();

  const logout = async () => {
    await fetchLogout();
    navigate(SIGNUP_PATH);
  };

  return (
    <SideNav>
      <SideNavLink
        isActive={location.pathname === PROFILE_SETTING_PATH}
        to={PROFILE_SETTING_PATH}
      >
        User
      </SideNavLink>
      <SideNavLink isActive={location.pathname === FORUM_PATH} to={FORUM_PATH}>
        Forum
      </SideNavLink>
      <SideNavLink
        isActive={location.pathname === LEADERBOARD_PATH}
        to={LEADERBOARD_PATH}
      >
        Leaderboard
      </SideNavLink>
      <SideNavLink
        isActive={location.pathname === PRESENTATION_PATH}
        to={PRESENTATION_PATH}
      >
        Presentation of the game
      </SideNavLink>

      <ButtonExit type="button" onClick={logout}>
        Exit
      </ButtonExit>

      {isButtonAddTopic && (
        <Button
          marginTop="0px"
          onClick={() => togglePopup(!showPopup)}
          buttonText="Add topic"
          type="button"
        />
      )}
      <TopicPopup showPopup={showPopup} togglePopup={togglePopup} />

      <Button
        marginTop="0px"
        onClick={playGame}
        notPriority={true}
        buttonText="Play"
        type="button"
      />
    </SideNav>
  );
};
export default Sidebar;
