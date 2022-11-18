import { Formik } from 'formik';
import React from 'react';
import { InputNames, InputType } from '../../../constans/constans';
import {
  IGetTopicResponse,
  ITopicCommentResponse
} from '../../../models/IForum';
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
}

const ForumChatComments = ({
  fetchPostCommentToComments,
  topicData,
  userId,
  userSecondName
}: ForumChatCommentsProps) => {
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
