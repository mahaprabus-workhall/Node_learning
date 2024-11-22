
const genres = require('../routes/genres')
const customer=require('../routes/Customer')
const movie=require('../routes/movies')
const rental = require('../routes/rental')
const User=require('../routes/user')
const auth=require('../routes/auth')
const err=require('../middleware/error')
const express=require('express')

module.exports=function(app){
    
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
} 
