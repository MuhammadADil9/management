import express from "express"
import {signup,login,logout} from "../controlers/authenticaton.controls"
import {checkCredentials,LogInCheck } from "../middlewares/authentication.middleware"
import cookieparser from "cookie-parser"

const router = express.Router()
// router.use()

router.use(cookieparser())
router.use(express.json())


// Done
router.post("/signup",checkCredentials,signup)


// Done
router.post("/login",LogInCheck,login)


// Done
router.get("/logout",logout)

// router.get("/abc",test)


export default router
