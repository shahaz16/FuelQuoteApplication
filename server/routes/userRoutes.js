import express from "express"
import { createRegister, login, getUsers } from "../controllers/userController.js"

const router  = express.Router()

router.post('/register', createRegister)
router.post('/login', login)
router.get('/users', getUsers)

export default router