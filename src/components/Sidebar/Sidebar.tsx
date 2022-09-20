import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  LEADERBOARD_PATH,
  PROFILE_SETTING_PATH,
  FORUM_PATH,
  PRESENTATION_PATH,
  GAME_PATH
} from '../../utils/constants';
import ButtonComponent from '../Button/Button';

import { SideNav, SideNavLink } from './Sidebar.styles';

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

  return (
    <SideNav>
      <SideNavLink to={PROFILE_SETTING_PATH}>User</SideNavLink>
      <SideNavLink to={FORUM_PATH}>Forum</SideNavLink>
      <SideNavLink to={LEADERBOARD_PATH}>Leaderboard</SideNavLink>
      <SideNavLink to={PRESENTATION_PATH}>Presentation of the game</SideNavLink>
      {isButtonAddTopic && (
        <ButtonComponent
          marginTop="0px"
          onCLickFunc={() => {
            showPopup();
          }}
          buttonText="Add topic"
          type="button"
        />
      )}

      <ButtonComponent
        marginTop="0px"
        onCLickFunc={playGame}
        notPriority={true}
        buttonText="Play"
        type="button"
      />
    </SideNav>
  );
};
export default Sidebar;
