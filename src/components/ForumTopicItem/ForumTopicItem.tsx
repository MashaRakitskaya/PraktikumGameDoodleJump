import React from 'react';
import {
  TopicItem,
  TopicImg,
  TitleMessageContainer,
  Title,
  Message,
  TimeNumberMessagesContainer,
  Time,
  NumberMessages
} from './ForumTopicItem.styles.js';

interface ForumTopicItemProps {
  forumTopicsItem: {
    title: string;
    lastMessage: string;
    numberMessages: number;
    time: string;
    urlImg: string;
  };
  onTopicClick: () => void;
}

const ForumTopicItem = ({
  forumTopicsItem,
  onTopicClick
}: ForumTopicItemProps) => {
  const { urlImg, title, lastMessage, numberMessages, time } = forumTopicsItem;
  return (
    <TopicItem role="topic" onClick={onTopicClick}>
      <TopicImg alt="topic img" src={urlImg}></TopicImg>
      <TitleMessageContainer>
        <Title>{title}</Title>
        <Message>{lastMessage}</Message>
      </TitleMessageContainer>
      <TimeNumberMessagesContainer>
        <Time>{time}</Time>
        <NumberMessages>{numberMessages}</NumberMessages>
      </TimeNumberMessagesContainer>
    </TopicItem>
  );
};

export default ForumTopicItem;
