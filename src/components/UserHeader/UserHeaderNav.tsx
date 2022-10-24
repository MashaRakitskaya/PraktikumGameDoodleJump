import React from 'react';
import {
  PROFILE_SETTING_PATH,
  PASSWORD_SETTING_PATH
} from '../../utils/constants';
import { SideNavLink } from '../Sidebar/Sidebar.styles';
import { UserHeaderNavWrapper } from './UserHeaderNab.styles';

function UserHeaderNav() {
  const settingsPath: { title: string; path: string }[] = [
    { title: 'Сhange user data', path: PROFILE_SETTING_PATH },
    { title: 'Change password', path: PASSWORD_SETTING_PATH }
  ];
  return (
    <UserHeaderNavWrapper>
      {settingsPath.map((el) => (
        <SideNavLink key={el.path} to={el.path}>
          {el.title}
        </SideNavLink>
      ))}
    </UserHeaderNavWrapper>
  );
}
export default UserHeaderNav;
