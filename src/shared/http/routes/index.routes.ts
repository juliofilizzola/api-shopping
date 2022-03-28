import { Router } from "express";
import api from "../controller/ApiController";

const router = Router();

router.get('/', api);

export default router;
