import { BadRequestError } from '../errors/BadRequestError.js';
import { ConflictError } from '../errors/ConflictError.js';
import { User } from '../models/user.model.ts';

export const getUsers = (req, res, next) => {
  User.findAll({})
    .then((users) => res.status(200).send(users))
    .catch(next);
};

export const createUser = (req, res, next) => {
  const { first_name } = req.body;

  User.create({ first_name })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректный данные'));
      } else if (err.name === 'MongoError' && err.code === 11000) {
        next(new ConflictError('Пользователь с таким email уже существует!'));
      }
      next(err);
    });
};
