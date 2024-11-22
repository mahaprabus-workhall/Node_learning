
const mongoose=require('mongoose')
const winston=require('winston')

module.exports=function(){
    mongoose.connect('mongodb://localhost/vidly')
.then(()=>{
    winston.info('connected mongodb')
    console.log("Connected succesfully")})
// .catch(error=>console.log(error));

}