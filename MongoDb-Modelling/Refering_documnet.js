const { default: mongoose } = require('mongoose')
const mongoDb=require('mongoose')

mongoDb.connect('mongodb://localhost/playground')
.then(()=>console.log("Connected mongoDb"))
.catch(error=>console.log(`Error : ${error}`))

const Author =mongoDb.model('Author',new mongoDb.Schema({
    name:String,
    bio:String,
    website:String
}))

const Course = mongoDb.model('Course',new mongoDb.Schema({
    name:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author'
        }
}))

async function createAuthor(name,bio,website){
    const author=new Author({
        name,
        bio,
        website
    })
    const res=await author.save();
    console.log(res);
}

async function createCourse(name,author){
    const course=new Course({
        name,
       author
    })
    const res=await course.save();
    console.log(res)
}

async function listCourse(){
    const course=await Course
    .find()
    .populate('author','name-_id')
    .select('name');
    console.log(course)
}

// createCourse('MoneyWithHoney','6721db2c7525d1b499937f7d')

// createAuthor('Mahaprabu','He is written 2 books','mahaprabusivasamy.com')


listCourse();