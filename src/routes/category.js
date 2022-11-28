import { Router } from "express";
import { create, getOne, list, read, remove, upload } from "../controllers/category";
const router = Router();
router.post('/category',create)
router.get('/category',list)
router.delete('/category/:id',remove)
router.patch('/category/:id',upload)
router.get('/productbycategory/:id',read)
router.get('/category/:id',getOne)
export default router;