import { СommentToComment } from '../models/commentToComment.model';
import { Dislikes, Likes } from '../models/emotionsOfComments.model';
import { Topic } from '../models/topic.model';
import { TopicComment } from '../models/topicComment.model';

export const createTopic = (req, res, next) => {
  const { user_id, topic, user_second_name } = req.body;

  //@ts-ignore
  Topic.create({ user_id, topic, user_second_name })
    .then((topic) => res.status(200).send(topic))
    .catch(next);
};

export const getTopic = (req, res, next) => {
  const { id } = req.params;

  Topic.findOne({
    include: [
      {
        model: TopicComment,
        include: [
          { model: СommentToComment, include: [Likes, Dislikes] },
          Likes,
          Dislikes
        ]
      },
      {
        model: Likes
      },
      {
        model: Dislikes
      }
    ],
    where: {
      id: id
    }
  })
    .then((topic) => res.status(200).send(topic))
    .catch((err) => {
      next(err);
    });
};

export const getTopics = (req, res, next) => {
  Topic.findAll()
    .then((topic) => res.status(200).send(topic))
    .catch((err) => {
      next(err);
    });
};

export const likeTopic = (req, res, next) => {
  const { id } = req.params;
  const { user_id } = req.body;

  Likes.findOrCreate({
    where: {
      topic_id: id,
      user_id: user_id
    },
    //@ts-ignore
    defaults: { topic_id: id, user_id: user_id }
  })
    .then(([topic]) => res.status(200).send(topic))
    .catch(next);
};

export const deleteLikeTopic = (req, res, next) => {
  const { id } = req.params;

  Likes.destroy({ where: { id: id } })
    .then(() => res.status(200).end())
    .catch(next);
};

export const dislikeTopic = (req, res, next) => {
  const { id } = req.params;
  const { user_id } = req.body;

  Dislikes.findOrCreate({
    where: {
      topic_id: id,
      user_id: user_id
    },
    //@ts-ignore
    defaults: { topic_id: id, user_id: user_id }
  })
    .then(([topic]) => res.status(200).send(topic))
    .catch(next);
};

export const deleteDislikeTopic = (req, res, next) => {
  const { id } = req.params;

  Dislikes.destroy({ where: { id: id } })
    .then(() => res.status(200).end())
    .catch(next);
};
