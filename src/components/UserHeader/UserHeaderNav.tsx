import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  PROFILE_SETTING_PATH,
  PASSWORD_SETTING_PATH
} from '../../utils/constants';
import { UserHeaderNavWrapper } from './UserHeaderNav.Styles';

function UserHeaderNav() {
  const settingsPath: { title: string; path: string }[] = [
    { title: 'Сhange user data', path: PROFILE_SETTING_PATH },
    { title: 'Change password', path: PASSWORD_SETTING_PATH }
  ];
  return (
    <UserHeaderNavWrapper>
      {settingsPath.map((el) => (
        <NavLink
          key={el.path}
          className={({ isActive }) =>
            isActive ? 'sidenav-link-active' : 'sidenav-link'
          }
          to={el.path}
        >
          {el.title}
        </NavLink>
      ))}
    </UserHeaderNavWrapper>
  );
}
export default UserHeaderNav;
