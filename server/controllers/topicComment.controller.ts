import { Dislikes, Likes } from '../models/emotionsOfComments.model';
import { TopicComment } from '../models/topicComment.model';

export const createTopicComment = (req, res, next) => {
  const { user_id, comment, topic_id, user_second_name } = req.body;

  TopicComment.create({ user_id, comment, topic_id, user_second_name })
    .then((topic) => res.status(200).send(topic))
    .catch(next);
};

export const likeTopicComment = (req, res, next) => {
  const { id } = req.params;
  const { user_id } = req.body;

  Likes.findOrCreate({
    where: {
      topic_comment_id: id,
      user_id: user_id
    },
    //@ts-ignore
    defaults: { topic_comment_id: id, user_id: user_id }
  })
    .then(([topic]) => res.status(200).send(topic))
    .catch(next);
};

export const deleteLikeTopicComment = (req, res, next) => {
  const { id } = req.params;

  Likes.destroy({ where: { id: id } })
    .then(() => res.status(200).end())
    .catch(next);
};

export const dislikeTopicComment = (req, res, next) => {
  const { id } = req.params;
  const { user_id } = req.body;

  Dislikes.findOrCreate({
    where: {
      topic_comment_id: id,
      user_id: user_id
    },
    //@ts-ignore
    defaults: { topic_comment_id: id, user_id: user_id }
  })
    .then(([topic]) => res.status(200).send(topic))
    .catch(next);
};

export const deleteDislikeTopicComment = (req, res, next) => {
  const { id } = req.params;

  Dislikes.destroy({ where: { id: id } })
    .then(() => res.status(200).end())
    .catch(next);
};
