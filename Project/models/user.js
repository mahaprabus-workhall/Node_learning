const mongoose=require('mongoose')
const joi=require('joi')
const JWT=require('jsonwebtoken')
const config=require('config')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30,
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:1024
    },
    isAdmin:{
        type:Boolean,
        required:true,

    }
})

userSchema.methods.generateAuthToken=function(){
    const token=JWT.sign({_id:this.id,isAdmin:this.isAdmin},config.get('JwtPrivateKey'))
    return token
}

const User=mongoose.model('Users',userSchema)

function validation(value){
    const schema = joi.object({
        name:joi.string().min(4).max(30).required(),
        email:joi.string().min(5).max(50).required().email(),
        password:joi.string().min(8).max(1024).required(),
        isAdmin:joi.boolean().required()
    })
    return schema.validate(value)
}

exports.UserSchema = userSchema
exports.validation=validation
exports.User=User