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
import { SideNav, SideNavLink, ButtonExit } from './Sidebar.styles';

interface SidebarProps {
  showPopup: () => void;
}

const Sidebar = ({ showPopup }: SidebarProps) => {
  const [isButtonAddTopic, setButtonAddTopic] = useState(false);
  const location = useLocation();

  const showButtonAddChat = (isPathForum: boolean) => {
    setButtonAddTopic(isPathForum);
  };

  useEffect(() => {
    showButtonAddChat(location.pathname === FORUM_PATH);
  }, [location.pathname]);

  const playGame = () => {
    //в будущем сделаю анимацю сдвига сайдбара и инициалищацию игры
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
      <ButtonExit type="button" onClick={logout}>
        Exit
      </ButtonExit>
      <SideNavLink to={PROFILE_SETTING_PATH}>User</SideNavLink>
      <SideNavLink to={FORUM_PATH}>Forum</SideNavLink>
      <SideNavLink to={LEADERBOARD_PATH}>Leaderboard</SideNavLink>
      <SideNavLink to={PRESENTATION_PATH}>Presentation of the game</SideNavLink>

      {isButtonAddTopic && (
        <Button
          marginTop="0px"
          onClick={showPopup}
          buttonText="Add topic"
          type="button"
        />
      )}
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
