import styled from '@emotion/styled';

export const Button = styled.button`
  width: 121px;
  height: 44px;
  text-align: center;
  border-radius: 2px;
  background: var(--third-bg-color);
  cursor: pointer;
  margin-top: 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  border: none;
  color: var(--third-font-color);
  &:hover {
    opacity: var(--main-opacity);
  }
`;
