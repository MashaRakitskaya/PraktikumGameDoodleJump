import styled from '@emotion/styled';

export const Label = styled.label`
  position: relative;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: var(--label-font-color);
`;

export const Input = styled.input`
  position: relative;
  margin: 0;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  color: var(--input-font-color);
  width: 100%;
  border: 0;
  border-bottom: var(--border);
  background: transparent;
  padding: 0;
  padding-bottom: 6px;
  padding-top: 6px;

  &:focus {
    outline: 0;
    border: 0;
    border-bottom: var(--border-focus);
  }
`;

export const Span = styled.span`
  width: 100%;
  font-weight: 400;
  font-size: 8px;
  line-height: 9px;
  color: var(--fourth-font-color);
  visibility: hidden;
  display: block;
  margin-top: 4px;
`;
