const joi=require('joi')
const mongoose=require('mongoose')
const {genreshema}=require('./genres')

const Movie = mongoose.model('Movie',new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:255
    },
    genre:{
        type:genreshema,
        required:true
    },
    numberInStock:{
        type:Number,
        required:true,
        min:0,
        max:255
    },
    dailyRentalRate:{
       type:Number,
       required:true,
       min:0,
       max:255
    }
}))

function validateMovie(movie){
    const schema=joi.object({
        title:joi.string().min(5).max(255).required(),
        genreId:joi.string().required(),
        numberInStock:joi.number().min(0).max(255).required(),
        dailyRentalRate:joi.number().min(0).max(255).required()
    })
    return schema.validate(movie)
}

exports.Movie=Movie
exports.validation=validateMovie