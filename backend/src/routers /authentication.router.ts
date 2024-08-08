import express from "express"
import {signup,login,logout} from "../controlers/authenticaton.controls"
import checkCredentials from "../middlewares/authentication.middleware"

const router = express.Router()
router.use(express.json())

router.post("/login",login)

router.post("/signup",checkCredentials,signup)

router.get("/logout",logout)

// router.get("/abc",test)


export default router
