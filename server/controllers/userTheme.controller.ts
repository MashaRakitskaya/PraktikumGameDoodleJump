import { UserTheme } from '../models/userTheme.model';

export const findOrCreateUserTheme = (req, res, next) => {
  const { id } = req.params;
  const { theme } = req.body;

  UserTheme.findOrCreate({
    where: {
      user_id: id
    },
    //@ts-ignore
    defaults: { theme: theme }
  })
    .then(([userTheme]) => res.status(200).send(userTheme))
    .catch(next);
};

export const updateUserTheme = (req, res, next) => {
  const { id } = req.params;
  const { theme } = req.body;
  UserTheme.update({ theme }, { where: { user_id: id } })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      next(err);
    });
};

export const getUserTheme = (req, res, next) => {
  const { id } = req.params;

  UserTheme.findOne({
    where: {
      user_id: id
    }
  })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      next(err);
    });
};
