import { Formik } from 'formik';
import React from 'react';
import { InputNames, InputType } from '../../../constans/constans';
import {
  IDeleteDislikeTopicCommentParams,
  IDeleteDislikeTopicParams,
  IDeleteLikeTopicCommentParams,
  IDeleteLikeTopicParams,
  IGetTopicResponse,
  IPostCommentToCommentsParams,
  IPutDislikeTopicCommentParams,
  IPutDislikeTopicParams,
  IPutLikeTopicCommentParams,
  IPutLikeTopicParams
} from '../../../models/IForum';
import { convertDateToLocaleString } from '../../../utils/utils';
import { topicCommentSchema } from '../../../utils/validationSchema/schemaTopic';
import ForumMessageItem from '../../ForumMessageItem/ForumMessageItem';
import MessageForm from '../../MessageForm/MessageForm';
import { MessagesList } from '../ForumChat.styles.js';
import ForumChatCommentToComments from '../ForumChatCommentToComments/ForumChatCommentToComments';

interface ForumChatCommentsProps {
  fetchPostCommentToComments: (arg: IPostCommentToCommentsParams) => void;
  topicData: IGetTopicResponse;
  userId: number;
  userSecondName: string;
  fetchPutLikeTopic: (arg: IPutLikeTopicParams) => void;
  fetchDeleteLikeTopic: (arg: IDeleteLikeTopicParams) => void;
  fetchPutDislikeTopic: (arg: IPutDislikeTopicParams) => void;
  fetchDeleteDislikeTopic: (arg: IDeleteDislikeTopicParams) => void;
  fetchDeleteDislikeTopicComment: (
    arg: IDeleteDislikeTopicCommentParams
  ) => void;
  fetchDeleteLikeTopicComment: (arg: IDeleteLikeTopicCommentParams) => void;
  fetchPutDislikeTopicComment: (arg: IPutDislikeTopicCommentParams) => void;
  fetchPutLikeTopicComment: (arg: IPutLikeTopicCommentParams) => void;
}

const ForumChatComments = ({
  fetchPostCommentToComments,
  topicData,
  userId,
  userSecondName,
  fetchPutLikeTopic,
  fetchDeleteLikeTopic,
  fetchPutDislikeTopic,
  fetchDeleteDislikeTopic,
  fetchDeleteDislikeTopicComment,
  fetchDeleteLikeTopicComment,
  fetchPutDislikeTopicComment,
  fetchPutLikeTopicComment
}: ForumChatCommentsProps) => {
  const isLiked = (likes: { user_id: number }[]) => {
    return likes.some(({ user_id }) => user_id === userId);
  };

  const isDisliked = (dislikes: { user_id: number }[]) => {
    return dislikes.some(({ user_id }) => user_id === userId);
  };

  //@ts-ignore
  const getLikeId = (data) => {
    if (data && data.likes) {
      return data?.likes.find(
        (like: { user_id: number }) => like.user_id === userId
      )?.id;
    }
  };

  //@ts-ignore
  const getDislikeId = (data) => {
    if (data && data.dislikes) {
      return data?.dislikes.find(
        (dislike: { user_id: number }) => dislike.user_id === userId
      )?.id;
    }
  };

  const handleLike = (
    isLiked: boolean,
    data: { id: number },
    userId: number,
    fetchDeleteLike: (arg: { id: number }) => void,
    fetchPutLike: (arg: { id: number; user_id: number }) => void
  ) => {
    if (data && userId) {
      isLiked
        ? fetchDeleteLike({
            id: getLikeId(data)
          })
        : fetchPutLike({ id: data.id, user_id: userId });
    }
  };

  const handleDislike = (
    isDisliked: boolean,
    data: { id: number },
    userId: number,
    fetchDeleteDislik: (arg: { id: number }) => void,
    fetchPutDislike: (arg: { id: number; user_id: number }) => void
  ) => {
    if (data && userId) {
      isDisliked
        ? fetchDeleteDislik({
            id: getDislikeId(data)
          })
        : fetchPutDislike({ id: data.id, user_id: userId });
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
          onLikeClick={() =>
            handleLike(
              isLiked(topicData?.likes),
              topicData,
              userId,
              //@ts-ignore
              fetchDeleteLikeTopic,
              fetchPutLikeTopic
            )
          }
          isLiked={isLiked(topicData?.likes)}
          likes={topicData.likes}
          dislikes={topicData.dislikes}
          onDislikeClick={() =>
            handleDislike(
              isDisliked(topicData?.dislikes),
              topicData,
              userId,
              //@ts-ignore
              fetchDeleteDislikeTopic,
              fetchPutDislikeTopic
            )
          }
          isDisliked={isDisliked(topicData?.dislikes)}
        />
      )}

      {topicData?.comments.map((item: any) => (
        <ForumMessageItem
          messageText={item.comment}
          isThemeСreator={false}
          //@ts-ignore
          creationDate={convertDateToLocaleString(item.createdAt)}
          key={item.id}
          isCommentator={true}
          creator={item.user_second_name}
          onLikeClick={() =>
            handleLike(
              isLiked(item?.likes),
              item,
              userId,
              fetchDeleteLikeTopicComment,
              fetchPutLikeTopicComment
            )
          }
          isLiked={isLiked(item?.likes)}
          likes={item.likes}
          dislikes={item.dislikes}
          onDislikeClick={() =>
            handleDislike(
              isDisliked(item?.dislikes),
              item,
              userId,
              fetchDeleteDislikeTopicComment,
              fetchPutDislikeTopicComment
            )
          }
          isDisliked={isDisliked(item?.dislikes)}
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
