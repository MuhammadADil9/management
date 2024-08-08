import express from "express"
import {signup,login,logout} from "../controlers/authenticaton.controls"


const router = express.Router()
router.use(express.json())

router.post("/login",login)

router.post("/signup",signup)

router.get("/logout",logout)

// router.get("/abc",test)


export default router
