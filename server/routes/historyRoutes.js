import express from "express"
const router  = express.Router()
import { getFuelHistory } from "../controllers/historyControllers.js"

router.get('/history/', getFuelHistory)

export default router