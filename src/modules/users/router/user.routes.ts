import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

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
);

export default userRouter;
