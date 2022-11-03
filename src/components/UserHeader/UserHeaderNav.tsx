import React from 'react';
import { useLocation } from 'react-router';
import {
  PROFILE_SETTING_PATH,
  PASSWORD_SETTING_PATH
} from '../../utils/constants';
// @ts-ignore
import { SideNavLink } from '../Sidebar/Sidebar.styles.ts';
import { UserHeaderNavWrapper } from './UserHeaderNab.styles.js';

const UserHeaderNav = () => {
  const location = useLocation();
  const settingsPath: { title: string; path: string }[] = [
    { title: 'Сhange user data', path: PROFILE_SETTING_PATH },
    { title: 'Change password', path: PASSWORD_SETTING_PATH }
  ];
  return (
    <UserHeaderNavWrapper>
      {settingsPath.map((el) => (
        <SideNavLink
          isActive={location.pathname === el.path}
          key={el.path}
          to={el.path}
        >
          {el.title}
        </SideNavLink>
      ))}
    </UserHeaderNavWrapper>
  );
};
export default UserHeaderNav;
