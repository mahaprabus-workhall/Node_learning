const express = require('express')
const joi = require('joi')
const router = express.Router()

const genres=[
    {id:1,name:'action'},
    {id:2,name:'Horror'},
    {id:3,name:'commercial'}
]
router.get('/',(req,res)=>{
  res.send(genres)
})

router.post('/',(req,res)=>{
    const {error} = validation(req.body);

    if(error){
        return res.status(400).send(error.details[0].message)
    }

    const newgenres={
        id:genres.length+1,
        name:req.body.name
    }
    genres.push(newgenres)
    res.send(genres)

})

router.put('/:id',(req,res)=>{
   const genre= genres.find(e=>e.id===req.params.id)

   if(!genre){
    res.status(404).send("The given id not found");
   }

   const {error}=validation(req.body)
   if(error){
    return res.status(400).send(error.details[0].message)
   }
   
   genre.name=req.body.name;
   res.send(genre);

})

router.delete('/:id',(req,res)=>{
    const id =genres.find(e=>e.id===req.params.id);
    if(!id){
        return res.status(404).send('The given genere id is not found');
    }

    const index=genres.indexOf(id,1)
    genres.splice(index,1);

    res.send(genres)
})

router.get('/:id',(req,res)=>{
    const genre=genres.find(c=>c.id===id);
    if(!genre) return res.status(404).send('The given id is not found')

    res.send(genre)
})

function validation(value){
   
    const createSchema = joi.object({
        name:joi.string().max(10).min(3).required()
    })
    return createSchema.validate(value)
}
module.exports=router