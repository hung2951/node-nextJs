import { Router } from "express";
import { listUser, removeUser, updateUser, userById } from "../controllers/user";


const router = Router()

router.get("/users", listUser)
router.get("/users/:id", userById)
router.delete("/users/:id", removeUser)
router.patch("/users/:id", updateUser)

export default router