const mongoose = require('mongoose')
const {genreshema} =require('./genres')
const joi=require('joi')


const Rental=mongoose.model('rentals',new mongoose.Schema({
    customer:{
        type:new mongoose.Schema({
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
        }),
        required:true
    }
    ,
    movie:{
     
            type:new mongoose.Schema({
                title:{
                    type:String,
                    required:true,
                    trim:true,
                    minlength:5,
                    maxlength:255
                },
               
                dailyRentalRate:{
                   type:Number,
                   required:true,
                   min:0,
                   max:255
                }
          
        }),
        required:true
    },
    dateOut:{
        type:Date,
        required:true,
        default:Date.now
    },
    datReturned:{
        type:Date
    },
    rentalFee:{
        type:Number,
        min:0
    }
    
}))


function Validation(rental){
    const Schema=joi.object({
        customerId:joi.string().required(),
        movieId:joi.string().required()
    })

    return Schema.validate(rental)
}


exports.Rental=Rental,
exports.validation=Validation

