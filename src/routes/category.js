import express from 'express';
import { getAll, get, remove, update, create } from '../controllers/category';

const router = express.Router();

router.get("/categories", getAll);
router.get("/categories/:id", get);
router.post("/categories/add", create);
router.delete("/categories/:id", remove);
router.patch("/categories/:id",  update);
export default router