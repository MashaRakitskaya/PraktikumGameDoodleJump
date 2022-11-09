import { RequestHandler } from 'express';
import { UserTheme } from '../models/userTheme.model';

export const getUserTheme = (req, res, next) => {
  const { id } = req.params;

  UserTheme.findOne({
    where: {
      user_id: id
    }
  })
    .then((userTheme) => res.status(200).send(userTheme))
    .catch(next);
};

export const addToUserTheme = (req, res, next) => {
  const { theme, user_id } = req.body;

  UserTheme.create({ theme, user_id })
    .then((userTheme) => res.status(200).send(userTheme))
    .catch((err) => {
      next(err);
    });
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

// export const addToUserTheme = async (req, res, next) => {
//   const { theme, user_id } = req.body;

//   const userTheme = await UserTheme.create({ theme, user_id });
//   return res.status(200).send(userTheme);
// };

// export const getUserTheme = async (req, res, next) => {
//   console.log('req', req);
//   const { id } = req.params;

//   const userTheme = await UserTheme.findOne({
//     where: {
//       user_id: id
//     }
//   });
//   return res.status(200).send(userTheme);
// };

// export const updateUserTheme = (req, res, next) => {
//   const { user_id } = req.params;
//   const { theme } = req.body;
//   UserTheme.update({ theme }, { where: { user_id } })
//     .orFail(new Error('NotValidId'))
//     .then((user) => res.status(200).send(user))
//     .catch((err) => {
//       if (err.message === 'NotValidId') {
//         next(new NotFoundError('Нет пользователя с таким id'));
//       }
//       if (err.theme === 'ValidationError') {
//         next(new BadRequestError('Переданы некорректный данные'));
//       }
//       next(err);
//     });
// };
