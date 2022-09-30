import React from 'react';
import { StyledHeader } from './HeaderStyles';

interface IHeaderProps {
  title: string;
}
const Header: React.FC<IHeaderProps> = ({ title }) => {
  return <StyledHeader>{title}</StyledHeader>;
};

export default Header;
