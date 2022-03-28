import { Router } from 'express';
import api from '@shared/http/controller/ApiController';

const router = Router();

router.get('/', api);

export default router;
