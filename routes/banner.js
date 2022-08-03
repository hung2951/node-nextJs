import { Router } from "express";
import { list, post, read, remove, update } from "../controllers/banner";


const router = Router();

router.get('/banners', list)
router.get('/banners/:id', read)
router.post('/banners/', post)
router.patch('/banners/:id', update)
router.delete('/banners/:id', remove)

export default router;