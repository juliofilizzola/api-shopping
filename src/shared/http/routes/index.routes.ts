import { Router } from 'express';
import productRouter from '@modules/products/router/product.routes';

const router = Router();

router.use('/product', productRouter);

export default router;
