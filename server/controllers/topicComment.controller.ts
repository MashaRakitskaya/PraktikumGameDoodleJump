import { TopicComment } from '../models/topicComment.model';

export const createTopicComment = (req, res, next) => {
  const { user_id, comment, topic_id, user_second_name } = req.body;

  TopicComment.create({ user_id, comment, topic_id, user_second_name })
    .then((topic) => res.status(200).send(topic))
    .catch(next);
};
