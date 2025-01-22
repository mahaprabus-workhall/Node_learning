
const genres = require('../routes/genres')
const customer=require('../routes/Customer')
const movie=require('../routes/movies')
const rental = require('../routes/rental')
const User=require('../routes/user')
const auth=require('../routes/auth')
const create_folder_and_file=require('../routes/create_folder_and_file')
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
    app.use('/api/create_folder_and_file',create_folder_and_file)
    
    app.use(err)
    

// app.use(function(err,req,res,next){
//     res.status(500).send('Something Failed')
// })
} 
