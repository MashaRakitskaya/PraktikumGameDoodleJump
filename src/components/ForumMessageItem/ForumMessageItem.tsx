import React from 'react';
import {
  MessageContainer,
  Text,
  Date,
  Сreator,
  TextDateСreatorContainer,
  DateСreatorContainer
} from './ForumMessageItem.styles';

interface ForumMessageItemProps {
  messageText: string;
  isThemeСreator: boolean;
  creationDate: string;
  creator: string;
  children?: React.ReactNode;
}

const ForumMessageItem = ({
  messageText,
  isThemeСreator = false,
  creationDate,
  children,
  creator
}: ForumMessageItemProps) => {
  return (
    <MessageContainer isThemeСreator={isThemeСreator}>
      <TextDateСreatorContainer>
        <Text>{messageText}</Text>
        <DateСreatorContainer>
          <Date>{creationDate}</Date>
          <Сreator>{creator}</Сreator>
        </DateСreatorContainer>
      </TextDateСreatorContainer>

      {children}
    </MessageContainer>
  );
};

export default ForumMessageItem;
