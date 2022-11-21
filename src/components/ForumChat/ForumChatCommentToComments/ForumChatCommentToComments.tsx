import React from 'react';
import { ITopicCommentResponse } from '../../../models/IForum';
import { convertDateToLocaleString } from '../../../utils/utils';
import ForumMessageItem from '../../ForumMessageItem/ForumMessageItem';
import { CommentContainer } from './ForumChatCommentToComments.styles.js';

interface ForumChatCommentToCommentsProps {
  item: ITopicCommentResponse;
  userId: number;
}

const ForumChatCommentToComments = ({
  item,
  userId
}: ForumChatCommentToCommentsProps) => {
  return (
    <CommentContainer>
      {item?.comments.map(
        (nestedItem: {
          comment: string;
          createdAt: string;
          id: number;
          user_second_name: string;
        }) => {
          return (
            <ForumMessageItem
              messageText={nestedItem.comment}
              isThemeСreator={false}
              //@ts-ignore
              creationDate={convertDateToLocaleString(nestedItem.createdAt)}
              key={nestedItem.id}
              isCommentator={false}
              userId={userId}
              topicCommentId={nestedItem.id}
              creator={nestedItem.user_second_name}
            />
          );
        }
      )}
    </CommentContainer>
  );
};

export default ForumChatCommentToComments;
