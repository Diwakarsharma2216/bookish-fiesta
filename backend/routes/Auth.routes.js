const express=require("express")
const { UserModel } = require("../model/User.model")

const AuthRouter=express.Router()


//  ###### POST Request #########

AuthRouter.post("/register",async(request,response)=>{
    let {username,email,password}=req.body
   try {
     const  existingUser =await UserModel.find
   } catch (error) {
    response.status(400).json({error:error.message})
   }
})


module.exports={AuthRouter}