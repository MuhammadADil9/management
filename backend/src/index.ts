import express from "express";
const app = express()
import authentication from "./routers /auth.router"


app.use("/api/auth/",authentication)
// app.use("/api/history/",workingHistory)



app.get("/",(req,res)=>{
    res.send("<h1> Hello world </h1>")
})

app.listen(5000,()=>{
    console.log("Welcome to the programm")    
})