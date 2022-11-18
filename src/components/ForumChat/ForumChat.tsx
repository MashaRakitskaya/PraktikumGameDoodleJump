import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { InputNames, InputType } from '../../constans/constans';
import { IPostTopicCommentParams } from '../../models/IForum';
import { useFetchUserQuery } from '../../services/auth';
import { useFetchPostCommentToCommentsMutation } from '../../services/commentToComments';
import { useFetchGetTopicMutation } from '../../services/forum';
import { useFetchPostTopicCommentMutation } from '../../services/topicComment';

import { topicCommentSchema } from '../../utils/validationSchema/schemaTopic';
import MessageForm from '../MessageForm/MessageForm';
import { Back, ForumChatContainer, Header } from './ForumChat.styles.js';
import ForumChatComments from './ForumChatComments/ForumChatComments';

const ForumChat = () => {
  const navigate = useNavigate();

  const params = useParams();
  const topicId = params.forumChatId;

  const [fetchGetTopic, { data: topicData }] = useFetchGetTopicMutation();

  const { data: user } = useFetchUserQuery();
  const userId = user?.id;
  const userSecondName = user?.second_name;

  const [fetchPostTopicComment, { isSuccess: isSuccessPostTopic }] =
    useFetchPostTopicCommentMutation();

  const [
    fetchPostCommentToComments,
    { isSuccess: isSuccessPostCommentToComments }
  ] = useFetchPostCommentToCommentsMutation();

  const formik = useFormik<IPostTopicCommentParams>({
    initialValues: {
      user_id: userId,
      comment: '',
      topic_id: Number(topicId),
      //@ts-ignore
      user_second_name: userSecondName
    },
    validationSchema: topicCommentSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      fetchPostTopicComment(values);
      resetForm();
    }
  });

  useEffect(() => {
    fetchGetTopic({ id: Number(topicId) });
  }, [isSuccessPostTopic, isSuccessPostCommentToComments]);

  return (
    <ForumChatContainer role="forumChat">
      <Header>
        <Back type="button" onClick={() => navigate(-1)} role="buttonBack" />
      </Header>
      <ForumChatComments
        fetchPostCommentToComments={fetchPostCommentToComments}
        //@ts-ignore
        topicData={topicData}
        userId={userId}
        //@ts-ignore
        userSecondName={userSecondName}
      />
      <MessageForm
        formik={formik}
        inputName={InputNames.comment}
        inputType={InputType.text}
        inputValue={formik.values.comment}
      />
    </ForumChatContainer>
  );
};

export default ForumChat;
