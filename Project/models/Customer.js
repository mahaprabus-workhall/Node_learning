const express = require('express')
const joi = require('joi')
const mongoose=require('mongoose')
const schema =mongoose.Schema({
    name:{type:String,
    minlength:3,
    maxlength:20,
    required:true
},
    isGold:{
        type:Boolean,
        default:false
    },
    phone:{
    type:String,
    minlength:5,
    maxlength:20
    }
});

const Customer=mongoose.model('Customer',schema)

function validation(value){
   
    const createSchema = joi.object({
        name:joi.string().max(50).min(5).required(),
        phone:joi.string().max(50).min(5).required(),
        isGold:joi.boolean()   
        })
    return createSchema.validate(value)
}

exports.validation=validation
exports.Customer=Customer