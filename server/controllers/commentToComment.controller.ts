import { СommentToComment } from '../models/commentToComment.model';

export const createTopicComment = (req, res, next) => {
  const { user_id, comment, topic_comment_id, user_second_name } = req.body;

  СommentToComment
    .create({ user_id, comment, topic_comment_id, user_second_name })
    .then((topic) => res.status(200).send(topic))
    .catch(next);
};
