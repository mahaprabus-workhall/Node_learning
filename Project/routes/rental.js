const express =require('express')
const {validation,Rental}=require('../models/rental')
const { route } = require('./Customer')
const { Customer } = require('../models/Customer')
const { Movie } = require('../models/movie')
const router=express.Router()

// const mongoose=require('mongoose')
// const Fawn=require('fawn')



// Fawn.init(mongoose)

router.get('/',async(req,res)=>{
    const rental=await Rental.find().sort()
    res.send(rental)
})

router.post('/',async(req,res)=>{
    const {error}=validation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const customer=await Customer.findById(req.body.customerId)
    if(!customer) return res.status(400).send('Invalid customer id')
    
    const movie=await Movie.findById(req.body.movieId)
    if(!movie) return res.status(400).send('Invalid movie id')

    if(movie.numberInStock==0) return res.status(400).send('movie not in stock')

    let rental=new Rental({
        customer:{
            _id:customer._id,
            name:customer.name,
            phone:customer.phone

        },
        movie:{
            _id:movie._id,
            title:movie.title,
            dailyRentalRate:movie.dailyRentalRate
        }
    })

    rental=await rental.save()

    movie.numberInStock--
    movie.save()

    // try{
    //     new Fawn.Task()
    //     .save('rentals',rental)
    //     .update('movies',{_id:movie.id},{$inc:{numberInStock:-1}})
    //     .run()

        res.send(rental)
    // }catch(e){
    //     res.status(400).send('The Error',e)
    // }

   
})

router.get('/:id',async (req,res)=>{
    const rent=await Rental.getById(req.params.id)
    if(!rent) return res.status(400).send('invalid id')

    res.send(rent)
})

module.exports=router