import { Router } from "express";
import { list, post, read, remove, search, update } from "../controllers/product";
const router = Router();

router.get('/products', list)
router.get('/products/:id', read)
router.post('/products', post)
router.patch('/products/:id', update)
router.delete('/products/:id', remove)
router.post("/search", search)
export default router;