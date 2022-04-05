import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import CreateProductController from '../controllers/CreateProductController';
import ListProductController from '../controllers/ListProductController';
import DeleteProductController from '../controllers/DeleteProductController';
import ShowProductController from '../controllers/ShowProductController';
import UpdateProductCrontoller from '../controllers/UpdateProductController';

const productRouter = Router();
const CreateProduct = new CreateProductController();
const ListProduct = new ListProductController();
const UpdateProduct = new UpdateProductCrontoller();
const ShowProduct = new ShowProductController();
const DeleteProduct = new DeleteProductController();

productRouter.get('/', ListProduct.execute);

productRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  ShowProduct.execute,
);

productRouter.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      quantity: Joi.number().integer().required(),
      price: Joi.number().required(),
    },
  }),
  CreateProduct.execute,
);

productRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      quantity: Joi.number().integer().required(),
      price: Joi.number().required(),
    },
  }),
  UpdateProduct.execute,
);

productRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  DeleteProduct.execute,
);

export default productRouter;
