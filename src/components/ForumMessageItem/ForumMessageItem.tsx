import React from 'react';
import { Message } from './ForumMessageItem.styles.ts';

interface ForumMessageItemProps {
  messageText: string;
  isOtherPeopleMessages?: boolean;
}

const ForumMessageItem = ({
  messageText,
  isOtherPeopleMessages = false
}: ForumMessageItemProps) => (
  <Message isOtherPeopleMessages={isOtherPeopleMessages}>{messageText}</Message>
);

export default ForumMessageItem;
