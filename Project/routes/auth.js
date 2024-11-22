const express = require('express')
const joi = require('joi')
const JWT=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const router = express.Router()
const {User}=require('../models/user')
const config=require('config')
router.post('/',async (req,res)=>{
    const {error} = validation(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    
    let user=await User.findOne({email:req.body.email})
    if(!user) return res.status(400).send('invalid email')
 
    const validatePass=await bcrypt.compare(req.body.password,user.password)
    if(!validatePass) return res.status(400).send('Invalid user or password')

//    const jwtToken=JWT.sign({_id:user._id},config.get('JwtPrivateKey'))
     const jwtToken=user.generateAuthToken()
   res.send(jwtToken)
    
})

function validation(value){
    const schema=joi.object({
       
        email:joi.string().min(5).max(30).required().email(),
        password:joi.string().min(8).max(1024).required()
    })
   return schema.validate(value)
}
module.exports=router