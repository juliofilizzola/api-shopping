import upload from '@config/upload';
import isAuthenticated from '@shared/http/middleware/isAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import multer from 'multer';
import UserController from '../controller/UserController';

const userController = new UserController();
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
  userController.create,
);

userRouter.get('/show', isAuthenticated.index, userController.index);

userRouter.put(
  '/update',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
    },
  }),
  isAuthenticated.index,
  up.single('avatar'),
  userController.update,
);

export default userRouter;
