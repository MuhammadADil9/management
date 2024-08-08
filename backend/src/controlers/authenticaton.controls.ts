import  { Request, Response} from "express"
import checkCredentials from "../modifiers/authentication.modifer"
import prisma from "../database/db.prisma"
import bs from "bcryptjs"
import generateToken from "../token/jwt.token"
// user is verified  Done
// > hash the provided password Done
// > create user model in the database Done
// > return back the cookie that is created Done


const signup = async (req:Request, res:Response) => {
    try{
    const {name,email,password} = req.body
    
    //generating a salt gen and then hashing thr password
    let saltgen = await bs.genSalt(10)
    let hashedPassword = await bs.hash(password,saltgen)


    const userProfile = await prisma.user.create({
        data : {
            name : name,
            email : email,
            password : hashedPassword 
        }
    })

    if(userProfile){
    console.log("user created successfully")
    generateToken(userProfile.id,res)

    res.status(200).json({message:"Profile created successfully"})
    console.log("cookie sent back to the user")    
}

    } catch(error:any){
        res.status(500).json({message : "Internal Server Error"})
    }

}



const login = async (req:Request, res:Response) => {

}

const logout = async (req:Request, res:Response) => {
    
}

// const test = async (req:Request, res:Response) => {
//     const {name,gender} = req.query
//     console.log(name,gender)
// }

export {signup,login,logout}

