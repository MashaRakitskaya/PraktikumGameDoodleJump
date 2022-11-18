import { СommentToComment } from '../models/commentToComment.model';
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
    // include: [TopicComment, СommentToComment],
    include: [
      {
        model: TopicComment,
        include: [СommentToComment]
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
