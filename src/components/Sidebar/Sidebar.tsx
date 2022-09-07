import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import {
  LEADERBOARD_PATH,
  PROFILE_SETTING_PATH,
  FORUM_PATH,
  PRESENTATION_PATH
} from '../../utils/constants';
import ButtonComponent from '../Button/Button';
import { SideNav } from './Sidebar.styles';
interface SidebarProps {
  showPopup: () => void;
}

function Sidebar({ showPopup }: SidebarProps) {
  const [isButtonAddTopic, setButtonAddTopic] = useState(false);
  const location = useLocation();

  const showButtonAddChat = (isPathForum: boolean) => {
    if (isPathForum) {
      setButtonAddTopic(true);
    } else {
      setButtonAddTopic(false);
    }
  };

  useEffect(() => {
    showButtonAddChat(location.pathname === FORUM_PATH);
  }, [location.pathname]);

  return (
    <SideNav>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'sidenav-link-active' : 'sidenav-link'
        }
        to={PROFILE_SETTING_PATH}
      >
        User
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? 'sidenav-link-active' : 'sidenav-link'
        }
        to={FORUM_PATH}
      >
        Forum
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? 'sidenav-link-active' : 'sidenav-link'
        }
        to={LEADERBOARD_PATH}
      >
        Leaderboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'sidenav-link-active' : 'sidenav-link'
        }
        to={PRESENTATION_PATH}
      >
        Presentation of the game
      </NavLink>
      {isButtonAddTopic && (
        <ButtonComponent
          onClick={() => {
            showPopup();
          }}
          buttonText="Add topic"
          type="button"
        />
      )}
      <ButtonComponent type="button" notPriority={true} buttonText="Play" />
    </SideNav>
  );
}
export default Sidebar;
