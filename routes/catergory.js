import { Router } from "express";
import { create, list, remove, upload } from "../controllers/catergory";
const router = Router();
router.post('/catergory',create)
router.get('/catergory',list)
router.delete('/catergory/:id',remove)
router.patch('/catergory/:id',upload)
export default router;