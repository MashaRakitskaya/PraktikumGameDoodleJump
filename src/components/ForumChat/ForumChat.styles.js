import styled from '@emotion/styled';
import back from '../../images/back.svg';
import arrow from '../../images/arrow.svg';

export const ForumChatContainer = styled.section`
  height: 100vh;
  width: 100%;
  background-color: var(--third-bg-color);
  display: grid;
  grid-template-rows: 67px 1fr 49px;
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
  margin: 19px 13px 19px 13px;

  &:hover {
    opacity: var(--main-opacity);
  }
`;

export const ImgTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Img = styled.img`
  margin-right: 15px;
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 2px;
  border-color: transparent;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: var(--secondary-font-color);
  margin: 0;
`;

export const DeleteChatButton = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--fourth-font-color);
  border: 0;
  background: transparent;
  margin-left: auto;
  margin-right: 18px;

  &:hover {
    opacity: var(--main-opacity);
    cursor: pointer;
  }
`;

export const MessagesList = styled.ul`
  margin: 0px;
  overflow-y: auto;
  overflow-x: hidden;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
`;

export const MessageForm = styled.form`
  border: var(--border);
  display: grid;
  grid-template-columns: 1fr 38px;
  margin: 0;
`;

export const Input = styled.input`
  margin: 8px 23px;
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
    outline: 0;
    border: 0;
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
