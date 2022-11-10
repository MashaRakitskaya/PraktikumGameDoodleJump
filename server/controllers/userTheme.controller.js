import { RequestHandler } from 'express';
import { UserTheme } from '../models/userTheme.model';

export const findOrCreateUserTheme = (req, res, next) => {
  const { id } = req.params;
  const { theme } = req.body;

  UserTheme.findOrCreate({
    where: {
      user_id: id
    },
    defaults: { theme: theme }
  })
    .then(([userTheme]) => res.status(200).send(userTheme))
    .catch(next);
};

export const updateUserTheme = (req, res, next) => {
  const { id } = req.params;
  const { theme } = req.body;
  UserTheme.update({ theme }, { where: { id } })
    .then(() => {
      UserTheme.findByPk(id)
        .then((user) => res.status(200).send(user))
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
};
