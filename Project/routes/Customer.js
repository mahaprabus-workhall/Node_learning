const express = require('express')
// const joi = require('joi')
const router = express.Router()
const {Customer,validation}=require('../models/Customer')
// const mongoose=require('mongoose')


const genres=[
    {id:1,name:'action'},
    {id:2,name:'Horror'},
    {id:3,name:'commercial'}
]
router.get('/',async (req,res)=>{
const customer=await Customer.find()
  res.send(customer)
})

router.post('/',async (req,res)=>{

    const {error} = validation(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    

    let customer=new Customer({name:req.body.name,isGold:req.body.isGold,phone:req.body.phone})
    customer= await customer.save()
    res.send(customer)

})
router.put('/:id',async (req,res)=>{
    const customer=await Customer.findByIdAndUpdate(req.params.id,
      {name:req.body.name},
      {isGold:req.body.isGold},
      {phone:req.body.phone},{new:true})
    if(!customer) return res.status(404).send("The given customer id is not found")
    
    const {error}=validation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    // let cust = await customer.save()
    res.send(customer)
})

router.delete('/:id',async (req,res)=>{
  const customer=await Customer.findByIdAndDelete(req.params.id);
  if(!customer) return res.status(404).send('The given id is not found')

  res.send(customer)

})

module.exports=router