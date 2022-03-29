import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';
import router from '../routes/index.routes';
import errorAPP from '../middleware/errorAPP';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errors());
app.use(errorAPP);

export default app;
