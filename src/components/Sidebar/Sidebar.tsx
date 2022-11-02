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
import Popup from '../Popup/Popup';
import { TextField } from '../TextField';

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
          onClick={() => togglePopup(!showPopup)}
          buttonText="Add topic"
          type="button"
        />
      )}
      <Popup
        isOpen={showPopup}
        title={'Create topic'}
        closePopup={() => togglePopup(false)}
      >
        <form>
          <TextField labelName="title" name="title" type="title" />
          <Button onClick={() => {}} buttonText="Create" type="submit" />
        </form>
      </Popup>
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
