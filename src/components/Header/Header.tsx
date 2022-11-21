import React from 'react';
import { StyledHeader } from './Header.styles.js';

interface IHeaderProps {
  title: string;
}
const Header: React.FC<IHeaderProps> = ({ title }) => {
  return <StyledHeader>{title}</StyledHeader>;
};

export default Header;
