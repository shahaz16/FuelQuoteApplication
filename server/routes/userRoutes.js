import express from "express"
import { createRegister, login } from "../controllers/userController.js"

const router  = express.Router()

router.post('/register', createRegister)
router.post('/login', login)

export default router