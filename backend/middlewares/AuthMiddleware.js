const jwt=require("jsonwebtoken")

const authmiddleware=async(request,response,next)=>{
    let token=request.headers.authorization?.split(" ")[1]

    jwt.verify(token,"diwakar",(err,decode)=>{
        if(decode){
            next()
        }else{
            response.status("200").json({message:"Not Authorise"})
        }
    })
}

module.exports={authmiddleware}