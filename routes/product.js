import { Router } from "express";
import { list, post, read, remove, search, update } from "../controllers/product";
const router = Router();

router.get('/products', list)
router.get('/products/:id', read)
router.post('/products', post)
router.put('/products/:id', update)
router.delete('/products/:id', remove)
router.post("/search", search)
export default router;












// router.get('/products', checkAuth, list)
// router.get('/products/:id', checkAuth, read)
// router.post('/products/:userId', requireSignin, isAuth, isAdmin, post)
// router.put('/products/:userId/:id', checkAuth, update)
// router.delete('/products/:userId/:id', checkAuth, remove)
// router.post("/search", search)
// router.param('userId', userById)
// export default router;