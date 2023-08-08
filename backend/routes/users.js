const usersRouter = require('express').Router();
const {
  getUser,
  getUsers,
  getUserById,
  updateUser,
  updateUserAvatar,
} = require('../controllers/users');
const {
  getUserByIdValidation,
  updateUserValidation,
  updateUserAvatarValidation,
} = require('../utils/validation');

usersRouter.get(getUsers);
usersRouter.get('/me', getUser);
usersRouter.get('/:userId', getUserByIdValidation, getUserById);
usersRouter.patch('/me', updateUserValidation, updateUser);
usersRouter.patch('/me/avatar', updateUserAvatarValidation, updateUserAvatar);

module.exports = usersRouter;
