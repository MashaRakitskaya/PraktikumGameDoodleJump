import styled from '@emotion/styled';

interface ButtonProps {
  notPriority?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props: any) => (props.notPriority ? '121px' : '360px')};
  height: 44px;
  text-align: center;
  border-radius: 2px;
  background: ${(props: any) =>
    props.notPriority ? 'var(--third-bg-color)' : 'var(--fourth-bg-color)'};
  cursor: pointer;
  font-weight: ${(props: any) => (props.notPriority ? '700' : '400')};
  font-size: ${(props: any) => (props.notPriority ? '20px' : '14px')};
  line-height: ${(props: any) => (props.notPriority ? '23px' : '16px')};
  border: none;
  color: var(--third-font-color);
  &:hover {
    opacity: var(--main-opacity);
  }
`;
