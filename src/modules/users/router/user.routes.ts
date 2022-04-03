import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import UserController from '../controller/UserController';

const userController = new UserController();
const userRouter = Router();

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

userRouter.get('/show', userController.index);

export default userRouter;
