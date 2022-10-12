import React from 'react';
import { StyledLink } from './CommonLink.styles';

interface ICommonLinkProps {
  linkText: string;
  onCLick?: () => void;
}
const CommonLink = ({ linkText, onCLick }: ICommonLinkProps) => {
  return <StyledLink onClick={onCLick}>{linkText}</StyledLink>;
};

export default CommonLink;
