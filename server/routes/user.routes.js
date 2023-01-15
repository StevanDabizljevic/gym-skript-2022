import express from "express";
import { signIn, signUp, deleteUser, getUsers } from "../controllers/user.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router()

router.get('/', protect, getUsers)
router.post('/sign-in', signIn)
router.post('/sign-up', signUp)
router.delete('/deleteUser/:userId', protect, deleteUser)

export default router