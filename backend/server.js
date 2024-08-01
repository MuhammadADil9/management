import express from "express"
import cors from "cors"
import bp from "body-parser"
import mongoose from "mongoose"
import {signup,login,test,saveTask} from "./api/Apis.js"

const app = express()
const port = 5175

app.use(cors())
app.use(bp.json())
app.use("/api",signup)
app.use("/api",login)
app.use("/api",saveTask)

mongoose.connect("mongodb://localhost:27019/management").then(()=>{
    console.log("Connected with local mongo DB server")
}).catch((error)=>{
    console.log(error)
})



app.listen(port,()=>{
    console.log("application is running on the desired port")
})













