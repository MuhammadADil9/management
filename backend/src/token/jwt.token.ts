import jwt from "jsonwebtoken"
import { response, Response } from "express"      
import { number } from "zod"
import dotenv from "dotenv"
dotenv.config()


//jwr_secret! means that this variable is not null it is defined
const generateToken = async (userId : number, res:Response) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET!,{expiresIn:"1d",})

    res.cookie("token",token,{
        maxAge : 1*24*60*60*1000,
        httpOnly : true,
        secure : process.env.NODE_ENV !== "development"
    })

    console.log("token created :- ", token)
    return token
}


export default generateToken