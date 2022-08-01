import { Router } from "express";
import { list, post, readID, remove } from "../controllers/comment";
const router = Router();

router.post('/cmt', post)
router.get('/cmt', list)
router.delete('/cmt/:id', remove)
router.get('/cmt/cmtByProduct/:id', readID)


export default router;