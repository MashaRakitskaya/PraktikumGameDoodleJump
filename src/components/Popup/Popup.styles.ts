import styled from '@emotion/styled';
import close from '../../images/close.svg';

interface ModalWindowProps {
  isOpen: boolean;
}

export const ModalWindowContent = styled.div`
  background: var(--main-bg-color);
  border-radius: 2px;
  width: 100%;
  max-width: 450px;
  position: relative;
  box-sizing: border-box;
  padding: 50px 45px;
`;

export const ModalWindowTitle = styled.h3`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--secondary-font-color);
`;

export const ModalWindow = styled.div<ModalWindowProps>`
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-opacity);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: visibility 0.6s, opacity 0.5s linear;
`;

export const ButtonClose = styled.button`
  background: url(${close}) no-repeat 50%;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: -40px;
  right: -40px;
  padding: 0px;
  margin: 0px;
  transition: opacity 0.2s ease;
  outline: none;
  &:hover {
    opacity: var(--main-opacity);
  }
`;
