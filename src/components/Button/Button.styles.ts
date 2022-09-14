import styled from '@emotion/styled';

interface ButtonProps {
  notPriority?: boolean;
  marginTop?: string;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.notPriority ? '121px' : '100%')};
  height: 44px;
  text-align: center;
  border-radius: 2px;
  background: ${(props) =>
    props.notPriority
      ? 'var(--secondary-button-color)'
      : 'var(--main-button-color)'};
  cursor: pointer;
  font-weight: ${(props) => (props.notPriority ? '700' : '400')};
  font-size: ${(props) => (props.notPriority ? '20px' : '14px')};
  line-height: ${(props) => (props.notPriority ? '23px' : '16px')};
  border: none;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '40px')};
  color: var(--third-font-color);
  &:hover {
    opacity: var(--main-opacity);
  }
`;
