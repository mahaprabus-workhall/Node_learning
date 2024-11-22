const mongoose = require('mongoose')

const joi =require('joi')

const schema =mongoose.Schema({
    name:{type:String,
    minlength:3,
    maxlength:20,
    required:true}
});


const Genre=mongoose.model('Genre',schema)
function validation(value){
   
    const createSchema = joi.object({
        name:joi.string().max(10).min(3).required()
    })
    return createSchema.validate(value)
}


exports.genreshema=schema
exports.validation=validation
exports.Genre=Genre