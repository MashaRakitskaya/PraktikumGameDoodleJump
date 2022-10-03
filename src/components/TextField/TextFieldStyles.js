import styled from '@emotion/styled';

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: var(--primary-font-color);
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
`;
export const StyledInput = styled.input`
  background: none;
  font-size: 13px;
  border: none;
  border-bottom: var(--border);
  width: 360px;
  outline: none;
  &:focus {
    border-bottom: var(--border-focus);
  }
`;

export const ErrorTextTextField = styled.span`
  color: var(--error-color);
`;
