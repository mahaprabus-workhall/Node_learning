const express =require('express')
const {validation,Movie} = require('../models/movie')
const { Genre } = require('../models/genres')
// const { default: mongoose } = require('mongoose')


const router=express.Router()

router.get('/',async (req,res)=>{
    const movies=await Movie.find()
    res.send(movies)
})

router.post('/',async (req,res)=>{
    const {error}=validation(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    
    const genre=await Genre.findById(req.body.genreId)
    if(!genre) return res.status(404).send('Invalid id')

    let movie=new Movie({
        title:req.body.title,
        genre:{
            _id:genre._id,
            name:genre.name
        },
        numberInStock:req.body.numberInStock,
        dailyRentalRate:req.body.dailyRentalRate

    })
    movie=await movie.save()
    res.send(movie)

})

router.put('/',async (req,res)=>{

    const {error} = validation(req.body)
    if(error) return res.status(400).send(error.details[0].message)
   
    const genere=await Genre.findById(req.body.genreId)
    if(!genere) return res.status(404).send('The given id is invalid')

    const movie=await Movie.findByIdAndUpdate(req.params.id,
        {title:req.body.title},
        {genre:{
            _id:genere._id,
            name:genere.name
        }},
        {numberInStock:req.body.numberInStock},
        {dailyRentalRate:req.body.dailyRentalRate}
    )

    if(!movie) return res.status(404).send('the given id is has no record')

   res.send(movie)
    
})

router.delete('/',async (req,res)=>{
    const movie=await Movie.findByIdAndDelete(req.params.id)
    if(!movie) return res.status(404).send('The given id is not found')

        res.send(movie)
})


module.exports = router