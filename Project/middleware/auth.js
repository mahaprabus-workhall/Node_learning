const JWT=require('jsonwebtoken')
const config=require('config')


function auth(req,res,next){
    const token=req.header('x-auth-token')
    if(!token) return res.status(401).send('no Auth Token is there')
    
    try{
        const decoded=JWT.verify(token,config.get('JwtPrivateKey'))
        req.user=decoded
        console.log(decoded)
        next()
    }
    catch(e){
        res.status(400).send("Invalid Token")
    }
}


module.exports=auth