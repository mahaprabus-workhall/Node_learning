const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/Mongo-Modeliing')
.then(()=>{console.log("MongoDb connected succesfully")})
.catch(err=>console.log(err))

const MongoModel=mongoose.model('Author',new mongoose.Schema({
    name:String,
    bio:String,
    website:String
}))

const MongoCourse=mongoose.model('Courses',new mongoose.Schema({
    name:String,
    author:mongoose.Schema.Types.ObjectId
}))

async function createCourse(name,bio,website){
    const course =new MongoModel({
        name,
        bio,
        website
    })

    const res=await course.save();
    console.log(res)
}

