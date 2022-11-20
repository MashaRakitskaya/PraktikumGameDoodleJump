import { Formik } from 'formik';
import React from 'react';
import { InputNames, InputType } from '../../../constans/constans';
import {
  IGetTopicResponse,
  ITopicCommentResponse
} from '../../../models/IForum';
import {
  useFetchDeleteLikeTopicMutation,
  useFetchPutLikeTopicMutation
} from '../../../services/forum';
import { convertDateToLocaleString } from '../../../utils/utils';
import { topicCommentSchema } from '../../../utils/validationSchema/schemaTopic';
import ForumMessageItem from '../../ForumMessageItem/ForumMessageItem';
import MessageForm from '../../MessageForm/MessageForm';
import { MessagesList } from '../ForumChat.styles.js';
import ForumChatCommentToComments from '../ForumChatCommentToComments/ForumChatCommentToComments';

interface ForumChatCommentsProps {
  fetchPostCommentToComments: Function;
  topicData: IGetTopicResponse;
  userId: number;
  userSecondName: string;
  fetchPutLikeTopic: Function;
  fetchDeleteLikeTopic: Function;
  fetchPutDislikeTopic: Function;
  fetchDeleteDislikeTopic: Function;
}

const ForumChatComments = ({
  fetchPostCommentToComments,
  topicData,
  userId,
  userSecondName,
  fetchPutLikeTopic,
  fetchDeleteLikeTopic,
  fetchPutDislikeTopic,
  fetchDeleteDislikeTopic
}: ForumChatCommentsProps) => {
  const isLiked = topicData?.likes.some(({ user_id }) => user_id === userId);
  const isDisliked = topicData?.dislikes.some(
    ({ user_id }) => user_id === userId
  );

  //@ts-ignore
  const getLikeId = (topicData) => {
    if (topicData && topicData.likes) {
      return topicData?.likes.find(
        (like: { user_id: number }) => like.user_id === userId
      )?.id;
    }
  };

  //@ts-ignore
  const getDislikeId = (topicData) => {
    if (topicData && topicData.dislikes) {
      return topicData?.dislikes.find(
        (dislike: { user_id: number }) => dislike.user_id === userId
      )?.id;
    }
  };

  const handleTopicLike = (
    isLiked: boolean,
    topicData: { id: number },
    userId: number
  ) => {
    if (topicData && userId) {
      isLiked
        ? fetchDeleteLikeTopic({
            id: getLikeId(topicData)
          })
        : fetchPutLikeTopic({ id: topicData.id, user_id: userId });
    }
  };

  const handleTopicDislike = (
    isDisliked: boolean,
    topicData: { id: number },
    userId: number
  ) => {
    if (topicData && userId) {
      isDisliked
        ? fetchDeleteDislikeTopic({
            id: getDislikeId(topicData)
          })
        : fetchPutDislikeTopic({ id: topicData.id, user_id: userId });
    }
  };

  return (
    <MessagesList>
      {topicData && (
        <ForumMessageItem
          key={topicData.id}
          messageText={topicData.topic}
          isThemeСreator={true}
          //@ts-ignore
          creationDate={convertDateToLocaleString(topicData.createdAt)}
          creator={topicData.user_second_name}
          onLikeClick={() => handleTopicLike(isLiked, topicData, userId)}
          isLiked={isLiked}
          topicData={topicData}
          onDislikeClick={() =>
            handleTopicDislike(isDisliked, topicData, userId)
          }
          isDisliked={isDisliked}
        />
      )}
      {topicData?.comments.map((item: ITopicCommentResponse) => (
        <ForumMessageItem
          messageText={item.comment}
          isThemeСreator={false}
          //@ts-ignore
          creationDate={convertDateToLocaleString(item.createdAt)}
          key={item.id}
          isCommentator={true}
          creator={item.user_second_name}
        >
          {
            <>
              <ForumChatCommentToComments item={item} userId={userId} />
              <Formik
                initialValues={{
                  user_id: userId,
                  comment: '',
                  topic_comment_id: item.id,
                  user_second_name: userSecondName
                }}
                onSubmit={(values, { resetForm }) => {
                  fetchPostCommentToComments(values);
                  resetForm();
                }}
                validationSchema={topicCommentSchema}
                validateOnChange={true}
                validateOnBlur={true}
              >
                {(props) => (
                  <MessageForm
                    formik={props}
                    inputName={InputNames.comment}
                    inputType={InputType.text}
                    inputValue={props.values.comment}
                    //@ts-ignore
                    topicCommentId={item.id}
                    isMainInput={false}
                  />
                )}
              </Formik>
            </>
          }
        </ForumMessageItem>
      ))}
    </MessagesList>
  );
};

export default ForumChatComments;
