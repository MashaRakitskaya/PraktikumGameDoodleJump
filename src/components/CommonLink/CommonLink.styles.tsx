import styled from '@emotion/styled';

export const StyledLink = styled.div`
  width: 100%;
  height: 44px;
  text-align: center;
  background: none;
  cursor: pointer;
  border: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  color: var(--secondary-font-color);
  &:hover {
    color: var(--primary-font-color);
  }
`;
