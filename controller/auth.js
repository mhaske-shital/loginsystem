const user=require("./../model/user")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

exports.login=async(req,res,next)=>{
    try{
        const{email,password}=req.body
        const result=await user.findOne({email})
        if(!result){
            throw new Error("no email matched")
        }
        const matched=await bcrypt.compare(password,result.password)
        if(!matched){
                throw new Error("Password do not macthed")
        }
        // const expire=Date.now()
        const token=jwt.sign({id:result._id},process.env.JWT_KEY,{expiresIn:"10000"})
        res.json({
            success:true,
            message:"login success",
            result:{
                id:result._id,
                name:result.name,
                email:result.email,
                isAdmin:result.isAdmin,
                token
            }
        })
    }catch(error){
        next(error)
    }
}

