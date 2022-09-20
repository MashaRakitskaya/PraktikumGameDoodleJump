import styled from '@emotion/styled';
import { keyframes } from 'styled-components';

const appear = keyframes`
from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-150px);
  }
  to {
    transform: translateY(0);
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  left: 15em;
  bottom: 5em;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${appear};
  animation-duration: 300ms;
`;

export const ModalDialog = styled.div`
  width: 100%;
  max-width: 550px;
  background: var(--secondary-bg-color);
  position: relative;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: ${slideIn};
  animation-duration: 0.5s;
`;

export const ModalHeader = styled.div`
  border-bottom: 1px solid #dbdbdb;
  justify-content: space-between;
`;
