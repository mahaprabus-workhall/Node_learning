
const express=require('express')
const app=express.Router()


const sub=[
    {id:1,name:"Tamil"}
]

app.post("/add",(req,res)=>{
    const subject={
        id:sub.length+1,
        name:req.body.name
    }
    sub.push(subject);
    res.send(subject)
})

app.get("/get",(req,res)=>{
    res.send(JSON.stringify(sub))
})

module.exports=app;