import React from 'react';
import { convertDateToLocaleString } from '../../utils/utils.ts';
import {
  TopicItem,
  Message,
  DateStyle,
  Сreator,
  DateAndСreatorContainer
} from './ForumTopicItem.styles.js';

interface ForumTopicItemProps {
  topic: string;
  createdAt: string;
  creator: string;
  onTopicClick: () => void;
}

const ForumTopicItem = ({
  onTopicClick,
  topic,
  createdAt,
  creator
}: ForumTopicItemProps) => {
  return (
    <TopicItem role="topic" onClick={onTopicClick}>
      <Message>{topic}</Message>
      <DateAndСreatorContainer>
        <Сreator>{creator}</Сreator>
        <DateStyle>{convertDateToLocaleString(createdAt)}</DateStyle>
      </DateAndСreatorContainer>
    </TopicItem>
  );
};

export default ForumTopicItem;
