const express=require("express")
const { UserModel } = require("../model/User.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const AuthRouter=express.Router()

// ### POST /users/register ###

AuthRouter.post("/register",async(request,response)=>{
    let {username,email,password}=request.body
   try {
     const  existingUser =await UserModel.findOne({email})
     if(existingUser){
      return  response.status(400).json({error:"User already exists"})
     }
     bcrypt.hash(password,2,async(err,hash)=>{
        if(hash){
            const user=new UserModel({username,email,password:hash})
            await user.save()
        }
     })
    
      response.status(200).json({message:"The new user has been registered",registeredUser:request.body})
  
   } catch (error) {
    response.status(400).json({error:error.message})
   }
})

// ### POST /users/login ###


AuthRouter.post("/login",async(request,response)=>{
    const {email,password}=request.body
    try {
      const useremail=await UserModel.findOne({email})
      if(useremail){
        bcrypt.compare(password,useremail.password,(error,result)=>{
            if(result){
                let token=jwt.sign({
              data:"fullstackdevelopment"
                },"diwakar",{expiresIn:120})
                res.status(200).json({msg:"Login successful!", token, refreshToken})
            }else{
                res.status(400).json({error:"Invalid credentials"})

            }
               
        })
      }
    } catch (error) {
        response.status(400).json({error:error.message})
    }
})
module.exports={AuthRouter}