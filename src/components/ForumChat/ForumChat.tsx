import React from 'react';
import { useNavigate } from 'react-router-dom';
import { messagesList } from '../../utils/constants';
import ForumMessageItem from '../ForumMessageItem/ForumMessageItem';
import {
  Back,
  DeleteChatButton,
  ForumChatContainer,
  Header,
  Img,
  ImgTitleContainer,
  Input,
  MessageForm,
  MessagesList,
  SubmitButton,
  Title
} from './ForumChat.styles';

const ForumChat = () => {
  const navigate = useNavigate();
  const userId = '25784';
  return (
    <ForumChatContainer>
      <Header>
        <Back type="button" onClick={() => navigate(-1)} />
        <ImgTitleContainer>
          <Img src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"></Img>
          <Title>Elena List</Title>
        </ImgTitleContainer>
        <DeleteChatButton
          onClick={() => window.confirm('Do you want to delete the topic?')}
        >
          delete chat
        </DeleteChatButton>
      </Header>
      <MessagesList>
        {messagesList.map((item) => {
          return (
            <ForumMessageItem
              messageText={item.messageText}
              isOtherPeopleMessages={item.user_id === userId ? false : true}
              key={item.id}
            />
          );
        })}
      </MessagesList>
      <MessageForm>
        <Input
          name="message"
          type="text"
          placeholder="Write a message..."
          autoComplete="off"
        ></Input>
        <SubmitButton type="submit"></SubmitButton>
      </MessageForm>
    </ForumChatContainer>
  );
};

export default ForumChat;
