import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  LEADERBOARD_PATH,
  PROFILE_SETTING_PATH,
  FORUM_PATH
} from '../../utils/constants';
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
    </SideNav>
  );
}
export default Sidebar;
