const express = require('express')
const joi = require('joi')
const router = express.Router()
const auth=require('../middleware/auth')
const mongoose=require('mongoose')
const {Genre,validation}=require('../models/genres')
const admin=require('../middleware/admin')
// const asyncMiddleware=require('../middleware/async')

const genres=[
    {id:1,name:'action'},
    {id:2,name:'Horror'},
    {id:3,name:'commercial'}
]
router.get('/',async (req,res)=>{
        // throw new Error('could not get the genres')
        const genresS=await Genre.find()
        res.send(genresS)

})

router.post('/',async (req,res)=>{

    const {error} = validation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message)
    }

    let newgenres=new Genre({name:req.body.name})
    newgenres= await newgenres.save()
    res.send(newgenres)

})

router.put('/:id',async (req,res)=>{

    const genre= await Genre.findByIdAndUpdate(req.params.id
        ,{name:req.body.name}
        ,{new:true})
    if(!genre){
        res.status(404).send("The given id not found");
       }


   const {error}=validation(req.body)
   if(error){
    return res.status(400).send(error.details[0].message)
   }
   
   res.send(genre);

})

router.delete('/:id',[auth,admin],async (req,res)=>{

    const genere =await Genre.findByIdAndDelete(req.params.id)
    if(!genere){
        return res.status(404).send('The given genere id is not found');
    }

    res.send(genere)
})

router.get('/:id',async (req,res)=>{
    const genre=await Genre.findById(req.params.id);
    if(!genre) return res.status(404).send('The given id is not found')

    res.send(genre)
})

module.exports=router