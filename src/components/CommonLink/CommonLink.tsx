import React from 'react';
import { StyledLink } from './CommonLinkStyles';

interface ICommonLinkProps {
  linkText: string;
  onCLick?: () => void;
}
const CommonLink = ({ linkText, onCLick }: ICommonLinkProps) => {
  return <StyledLink onClick={onCLick}>{linkText}</StyledLink>;
};

export default CommonLink;
