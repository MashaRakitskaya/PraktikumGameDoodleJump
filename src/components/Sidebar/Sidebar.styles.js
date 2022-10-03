import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 121px;
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 70px;
  gap: 24px;
`;

export const SideNavLink = styled(NavLink)`
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
