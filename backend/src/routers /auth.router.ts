import express from "express"
import {signup,login,logout} from "../controlers/authenticaton.controls"
const router = express.Router()

router.post("/login",login)

router.post("/signup",signup)

router.get("/logout",logout)

export default router