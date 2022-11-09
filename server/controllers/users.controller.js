import { BadRequestError } from '../errors/BadRequestError.js';
import { User } from '../models/user.model.ts';

export const getUsers = (req, res, next) => {
  User.findAll({})
    .then((users) => res.status(200).send(users))
    .catch(next);
};

export const createUser = (req, res, next) => {
  const { first_name, user_id } = req.body;

  User.create({ first_name, user_id })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректный данные'));
      }
      next(err);
    });
};
