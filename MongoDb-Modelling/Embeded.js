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
    author:{
        type:authorSchema,
        required:true
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


async function UpdateNAme(CourseId){
    const ss=await Course.findById(CourseId)
    ss.author.name='Mahaprabu Sivasamy'
    const res=await ss.save();
    console.log(res)
}
// createCourse('Times of money',new Author({name:'Sivasamy'}))
UpdateNAme('6721df96f43a55ab96d06a1f')
// createAuthor('Mahaprabu','He is written 2 books','mahaprabusivasamy.com')


// listCourse();

