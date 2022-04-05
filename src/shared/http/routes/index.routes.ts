import { Router } from 'express';
import productRouter from '@modules/products/router/product.routes';
import userRouter from '@modules/users/router/user.routes';
import sessionsRouter from '@modules/users/router/sessions.routes';

const router = Router();

router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/sessions', sessionsRouter);

export default router;
