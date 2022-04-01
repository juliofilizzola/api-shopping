import { Router } from 'express';
import productRouter from '@modules/products/router/product.routes';
import userRouter from '@modules/users/router/user.routes';

const router = Router();

router.use('/product', productRouter);
router.use('/user', userRouter);

export default router;
