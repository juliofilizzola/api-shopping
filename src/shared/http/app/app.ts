import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';
import router from '../routes/index.routes';
import errorAPP from '../middleware/errorAPP';
import '@shared/typeorm';
import upload from '@config/upload';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(upload.directory));
app.use(router);
app.use(errors());
app.use(errorAPP);

export default app;
