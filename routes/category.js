import { Router } from "express";
import { create, list, remove, upload } from "../controllers/category";
const router = Router();
router.post('/category',create)
router.get('/category',list)
router.delete('/category/:id',remove)
router.patch('/category/:id',upload)
export default router;