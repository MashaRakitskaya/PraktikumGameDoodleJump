import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  LEADERBOARD_PATH,
  PROFILE_SETTING_PATH,
  FORUM_PATH,
  PRESENTATION_PATH
} from '../../utils/constants';
import ButtonComponent from '../Button/Button';
import { SideNav } from './Sidebar.styles';

function Sidebar() {
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
      <ButtonComponent notPriority={true} buttonText="Play" />
    </SideNav>
  );
}
export default Sidebar;
