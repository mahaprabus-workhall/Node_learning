const express = require('express')
const _ = require('lodash')
const bcrypt=require('bcrypt')
const joi = require('joi')
const router = express.Router()
const mongoose=require('mongoose')
const {User,UserSchema,validation}=require('../models/user')
const JWT=require('jsonwebtoken')
const config=require('config')
const auth =require('../middleware/auth')

router.get('/me',auth,async(req,res)=>{
    const user=await User.findById(req.user._id).select('-password')
    res.send(user)
}) 

router.post('/',async (req,res)=>{
    const {error} = validation(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    
    let user=await User.findOne({email:req.body.email})
    if(user) return res.status(400).send('The user is already registered')

    user = new User(_.pick(req.body,['name','email','password','isAdmin']))
    const salt=await bcrypt.genSalt(10)
    user.password=await bcrypt.hash(user.password,salt)
    await user.save()

    // const jwtToken=JWT.sign({_id:newUSer._id},config.get('JwtPrivateKey'))
    const jwtToken=user.generateAuthToken()
    res.header('x-auth-token',jwtToken).send(_.pick(user,['_id','name','email','isAdmin']))
    // res.send(_.pick(newUSer,['_id','name','email']))
    
    
})

module.exports=router