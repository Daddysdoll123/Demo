const JWT=require('jsonwebtoken')
const createError=require('http-errors')


module.exports={
    signAccessToken:(userId)=>{
     return new Promise((resolve,reject) =>{
        const payload={
        }
        const secret=process.env.Access_Token
        const options={
        expiresIn:"15s",
        issuer:"google.com",
        audience:userId
        }
      JWT.sign(payload,secret,options,(err,token)=>{
         if(err) {
            console.log(err.message)
             reject(createError.InternalServerError())
         }
         resolve(token)
      })
     })
    },
    verifyAccessToken:(req,res,next)=>{
        if(!req.headers['authorization'])return next(createError.Unauthorized())
        const authHeader=req.headers['authorization']
    const bearerToken=authHeader.split(' ')
    const token=bearerToken[1];
    JWT.verify(token,process.env.Access_Token,(err,payload)=>{
    if(err){
        return next(createError.Unauthorized())
    }req.payload=payload
    next();
    })




    }
}