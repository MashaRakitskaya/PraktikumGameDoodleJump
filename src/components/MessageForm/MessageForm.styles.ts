import styled from '@emotion/styled';
import arrow from '../../images/arrow.svg';
interface InputProps {
  isMainInput?: boolean;
}

export const MessageFormStyled = styled.form`
  border: var(--border);
  border-radius: 2px;
  display: grid;
  grid-template-columns: 1fr 38px;
  margin: 0;
`;

export const Input = styled.input<InputProps>`
  margin: 8px 23px;
  margin: ${({ isMainInput }) => (isMainInput ? '8px 23px' : '0px 5px')};
  padding-top: 8px;
  padding-bottom: 8px;
  border: 0;
  background: var(--third-bg-color);
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  &:placeholder {
    color: var(--placeholder-font-color);
  }

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  background: url(${arrow}) no-repeat;
  background-position: left;
  border: 0;
  width: 38px;
  height: 100%;

  &:hover {
    opacity: var(--main-opacity);
    cursor: pointer;
  }
`;
