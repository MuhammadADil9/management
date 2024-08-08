import express from "express";
import authentication from "./routers /authentication.router"

//created express application
const app = express()


app.use("/api/auth",authentication)
// app.use("/api/history/",workingHistory)

//using express json for parsing the incoming requests
// app.use(express.json())


app.listen(5100,()=>{
    console.log("Welcome to the programm")    
})