import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import router from '../routes/index.routes';
import errorAPP from '../middleware/errorAPP';
import '@shared/typeorm/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorAPP);

export default app;
