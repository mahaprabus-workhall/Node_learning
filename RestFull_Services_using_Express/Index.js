const express=require('express');
const Joi = require('joi')
const app=express();

app.use(express.json())
app.get('/',(req,res)=>{
   res.send([1,2,34,4]);
})
app.get('/api/courses',(req,res)=>{
    res.send("hello");
})

app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id)
})

app.get('/api/courses/:year/:month',(req,res)=>{
    res.send(req.params)
})

// get request

const subjects =[
    {id:1,name:"Tamil"},
    {id:2,name:"English"},
    {id:3,name:"Maths"},
    {id:4,name:"Science"},
    {id:5,name:"physics"},
]


app.get("/get/subject/:sub",(req,res)=>{
    const name=subjects.find(c=>c.name===req.params.sub);
    if(!name){
        res.send(404).console.log("The subject is not found");
    }
    else{
        res.send(name);
    }
})


// post request

app.get("/get/sub",(req,res)=>{
    // console.log(subjects)
    res.end(JSON.stringify(subjects))
})
app.post("/add/sub",(req,res)=>{
    const course={
        id:subjects.length+1,
        name:req.body.name
    }
    subjects.push(course);
    res.send(subjects);
})

app.post("/add/subj",(req,res)=>{
   const schema=
   Joi.object({
    name:Joi.string().min(3).required()
   })
   const result=schema.validate(req.body);
   if(result.error){
    res.status(400).send(result.error);
    return;
   }

   const course={
    id:subjects.length+1,
    name:req.body.name
}
subjects.push(course);
res.send(subjects);
})

// put 

app.put('/api/course/:id',(req,res)=>{
    const name=subjects.find(c=>c.id===parseInt(req.params.id));
    if(!name){
        return res.send(404).console.log("The subject is not found");
    }

    const {error}=validateS(req.body)
    if(error){
     res.status(400).send(result.error);
     return;
    }

    subjects.name=req.body.name;
    res.send(course);

})


function validateS(obb){
    const schema=
    Joi.object({
     name:Joi.string().min(3).required()
    })


    return schema.validate(obb);
}



//delete

app.delete("/del/:id",(req,res)=>{
    const name=subjects.find(c=>c.id===parseInt(req.params.id));
    if(!name){
        return res.send(404).console.log("The subject is not found");
    }

    const index=subjects.indexOf(req.params.id);
    subjects.splice(index,1);
    res.send(subjects)
})
const port=process.env.PORT || 3000;
app.listen(port)
console.log(`The port is listening on ${port}`)


