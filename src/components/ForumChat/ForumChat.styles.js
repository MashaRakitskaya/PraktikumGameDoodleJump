import styled from '@emotion/styled';
import back from '../../images/back.svg';

export const ForumChatContainer = styled.section`
  height: 100vh;
  width: 100%;
  background-color: var(--third-bg-color);
  display: grid;
  grid-template-rows: 40px 1fr 49px;
`;

export const Header = styled.div`
  background-color: var(--main-bg-color);
  display: flex;
  flex-direction: row;
`;

export const Back = styled.button`
  background: url(${back}) no-repeat;
  cursor: pointer;
  border: none;
  width: 30px;
  margin: 0;
  padding: 0;
  margin: 5px;

  &:hover {
    opacity: var(--main-opacity);
  }
`;

export const Title = styled.h3`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--secondary-font-color);
  margin: 0;
`;

export const MessagesList = styled.ul`
  margin: 0px;
  overflow-y: auto;
  overflow-x: hidden;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
