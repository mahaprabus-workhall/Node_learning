require('express-async-errors')
const winston=require('winston')
const express =require('express')

const mongoose=require('mongoose')
const genres = require('./routes/genres')
const customer=require('./routes/Customer')
const movie=require('./routes/movies')
const rental = require('./routes/rental')
const User=require('./routes/user')
const auth=require('./routes/auth')
const config=require('config')
const err=require('./middleware/error')
const app=express()


process.on('uncaughtException',(ex)=>{
    console.log('WE GOT AN UNCAUGHT ERROR')
    winston.error(ex.message,ex)
})

if(!config.get('JwtPrivateKey')){
    console.error('Fatal Error')
    process.exit(1)
}


winston.add(new winston.transports.File({filename:'logfile.log'}))
throw new Error('Error during the process')

mongoose.connect('mongodb://localhost/vidly')
.then(()=>{console.log("Connected succesfully")})
.catch(error=>console.log(error));


app.use(express.json())

app.use('/api/genres',genres)
app.use('/api/customers',customer)
app.use('/api/movies',movie)
app.use('/api/rentals',rental)
app.use('/api/user',User)
app.use('/api/auth',auth)

app.use(err)
// app.use(function(err,req,res,next){
//     res.status(500).send('Something Failed')
// })

const port=process.env.port || 3000
app.listen(port,console.log(`The server is listening on ${port}`))