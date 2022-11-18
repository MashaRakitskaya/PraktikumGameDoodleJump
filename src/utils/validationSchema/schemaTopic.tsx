import * as yup from 'yup';
import { InputNames } from '../../constans/constans';

export const topicSchema = yup.object().shape({
  [InputNames.topic]: yup.string().trim().required()
});

export const topicCommentSchema = yup.object().shape({
  [InputNames.comment]: yup.string().trim().required()
});
