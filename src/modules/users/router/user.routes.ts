import upload from '@config/upload';
import isAuthenticated from '@shared/http/middleware/isAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import multer from 'multer';
import CreateUserController from '../controller/CreateUserController';
import ShowUserController from '../controller/ShowUserController';
import UpdateAvatarUserController from '../controller/UpdateAvatarUserController';
import UpdateUserController from '../controller/UpdateUserController';

const UpdateAvatarUser = new UpdateAvatarUserController();
const UpdateUser = new UpdateUserController();
const ShowUser = new ShowUserController();
const CreateUser = new CreateUserController();
const userRouter = Router();
const up = multer(upload);

userRouter.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  CreateUser.execute,
);

userRouter.get('/show', isAuthenticated.index, ShowUser.execute);

userRouter.patch(
  '/avatar',
  isAuthenticated.index,
  up.single('avatar'),
  UpdateAvatarUser.execute,
);

userRouter.put(
  '/update',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
    },
  }),
  UpdateUser.execute,
);

export default userRouter;
