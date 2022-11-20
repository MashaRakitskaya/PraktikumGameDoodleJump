import React from 'react';
import {
  MessageContainer,
  Text,
  Date,
  Сreator,
  TextDateСreatorContainer,
  DateСreatorContainer,
  EmotionsOfComment,
  Like,
  Dislike,
  Count,
  Container
} from './ForumMessageItem.styles';

interface ForumMessageItemProps {
  messageText: string;
  isThemeСreator: boolean;
  creationDate: string;
  creator: string;
  children?: React.ReactNode;
  onLikeClick: () => void;
  onDislikeClick?: () => void;
  isLiked: boolean;
  topicData?: any;
  isDisliked: boolean;
}

const ForumMessageItem = ({
  messageText,
  isThemeСreator = false,
  creationDate,
  children,
  creator,
  onLikeClick,
  onDislikeClick,
  isLiked,
  topicData,
  isDisliked
}: ForumMessageItemProps) => {
  return (
    <MessageContainer isThemeСreator={isThemeСreator}>
      <TextDateСreatorContainer>
        <EmotionsOfComment>
          <Container>
            <Like isLiked={isLiked} onClick={onLikeClick} type="button"></Like>
            <Count>{topicData?.likes?.length}</Count>
          </Container>
          <Container>
            <Dislike
              isDisliked={isDisliked}
              onClick={onDislikeClick}
              type="button"
            ></Dislike>
            <Count>{topicData?.dislikes?.length}</Count>
          </Container>
        </EmotionsOfComment>
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
