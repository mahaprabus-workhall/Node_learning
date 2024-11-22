const { default: mongoose } = require('mongoose')
const mongoDb=require('mongoose')

mongoDb.connect('mongodb://localhost/playground')
.then(()=>console.log("Connected mongoDb"))
.catch(error=>console.log(`Error : ${error}`))


const authorSchema=mongoDb.Schema({
    name:String,
    bio:String,
    website:String
})
const Author =mongoDb.model('Author',authorSchema)


const Course = mongoDb.model('Course',new mongoDb.Schema({
    name:String,
    authors:[authorSchema]
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

async function createCourse(name,authors){
    const course=new Course({
        name,
       authors
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


async function addAuthor(courseId,author){
 const course=await Course.findById(courseId)
 course.authors.push(author)
 const res=await course.save()
 console.log(res)
}

async function removeAuthor(courseId,authorId){
    const course=await Course.findById(courseId)
   course.authors.pop(authorId)
    
     const res=await course.save();
     console.log(res)
}
// createCourse('Money Hell',[
//     new Author({name:'Kavin'}),
//     new Author({name:'Ragav'})
// ])
// async function addAuthor(){
//     const 
// }
// listCourse();

addAuthor('6721ff1df11e72313e95c072',new Author({name:'rakesh'}))

// removeAuthor('6721ff1df11e72313e95c072','6721ff1df11e72313e95c070')