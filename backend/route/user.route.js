import express from "express";
import { login, singup } from "../controller/user.controller.js";
const router = express.Router()

router.post('/singup', singup)
router.post("/login",login)

export default router;