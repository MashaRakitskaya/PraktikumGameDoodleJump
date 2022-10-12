import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 121px;
  padding-top: 30px;
  padding-left: 32px;
  padding-right: 70px;
  gap: 24px;
`;

export const SideNavLink = styled(NavLink)`
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-decoration: none;
  color: var(--main-font-color);
  &.active {
    font-weight: 700;
    text-decoration: underline;
  }
  &:hover {
    opacity: var(--main-opacity);
    cursor: pointer;
  }
`;

export const ButtonExit = styled.button`
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  margin: 0;
  padding: 0;
  color: var(--fourth-font-color);
  background: transparent;
  text-align: left;
  &:hover {
    opacity: var(--main-opacity);
    cursor: pointer;
  }
`;
