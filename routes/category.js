import { Router } from "express";
import { create, list, read, remove, upload } from "../controllers/category";
const router = Router();
router.post('/category',create)
router.get('/category',list)
router.delete('/category/:id',remove)
router.patch('/category/:id',upload)
router.get('/category/:id',read)
export default router;