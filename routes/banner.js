import { Router } from "express";
import { list, post, read, remove, update } from "../controllers/banner";
import { userById } from "../controllers/user";
import { checkAuth, isAuth, isAdmin, requireSignin } from "../middlewares/checkAuth";
const router = Router();

router.get('/banners', list)
router.get('/banners/:id', read)
router.post('/banners/', post)
router.put('/banners/:id', update)
router.delete('/banners/:id', remove)
router.param('userId', userById)
export default router;


// router.get('/banners', checkAuth, list)
// router.get('/banners/:id', checkAuth, read)
// router.post('/banners/:userId', requireSignin, isAuth, isAdmin, post)
// router.put('/banners/:userId/:id', checkAuth, update)
// router.delete('/banners/:userId/:id', checkAuth, remove)
// router.param('userId', userById)
// export default router;