import express from "express"
let router = express.Router()
import jwt from "jsonwebtoken"
import modeling from "../database/model.js"


let jwtModifier = (req,res,next) => {
    if(req.body.jwt != null){
        res.json({message : "User already exist, please log in"}) 
    }else{
        next()
    }
}

let signup = router.get('/sign', jwtModifier ,(req, res) => {
    const data = req.body;
    console.log(data)
    if (data.name) {
      const token = jwt.sign({ name: data.name }, 'secret'); // Correctly passing payload as an object
      res.status(200).json({
        message: token
      });
      console.log(token)
    } else {
      res.status(404).json({
        message: 'Please provide us with a name'
      });
    }
    console.log('Signup Request Received');
  });
  

let login = router.get("/login",(req,res)=> {
    const data = req.body
    console.log(data)
    if(data.jwt){
        try{
        jwt.verify(data.jwt,"secret")
        res.status("200").json({link : "/home"})
        }catch(err){
            res.status("404").json({message : "Error authentication"})    
        }
    }else{
        res.sendStatus("404").json({
            message:"User not found! /n Signup or check ursername",
            link: "/signup"
        })
    }
})


let saveTask = router.post('/addtask',async(req,res)=>{
  const {task} = req.body
  
  try{
  let newTask = new modeling({
      title: task
  })
  await newTask.save()
  res.status("200").json({message : "Task saved"})
}catch(error){
  res.status("404").json({message: error})
}})



let test = router.get("/check",(req,res)=>{
    res.send("hello")
})

export {signup,login,test,saveTask}



// app.get("/", (req,res)=>{
//     let nameOfPerson = req.body.name
//     let Id = req.body.id
    
//     console.log(nameOfPerson,Id)

//     let tokenn =  jwt.sign({
//        data : {
//            name : nameOfPerson,
//            id : Id
//        }
//     },key,{expiresIn : '1h'})
//     res.send(tokenn)
//     })

// app.get("/verify",(req,res) => {
//     let data = req.body.data
//     try{
//      let decode = jwt.verify(data,key)
//      console.log(decode,"verification Done")
//     }catch(err){
//         console.log("Error")
//     }
//     res.send('<h1>Welcome to homepage')
// })



// What will prevent a user from signup again once he already is signed up
// Can be the email stored within the database.
// can be the jwt for a lifetime access.

//accessed for signup api, assigned a jwt
//went for login, logged in successfully
//went again for signup, will check for jwt existence, if it will be ther, will return a message that a user already exist.