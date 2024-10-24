const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/StudentName')
.then(()=>console.log("Connected Db sucessfully "))
.catch(err=>console.log(`Error : ${err}`))


const courseSchema = mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date ,default:Date.now},
    isPublished:Boolean
})

const Course=mongoose.model('courses',courseSchema);

async function CreateCourse(){
const course=new Course({
    name:'Python course',
    author:'Mahaprabu',
    tags:['python','pip'],
    isPublished:true
})

const res=await course.save();
console.log(res);
}

// CreateCourse();


// getCourse()

async function getCourse(){

    // const pageNumber=1;
    // const PageSize=10;

    // const res=await Course.find({ author:'Mahaprabu',isPublished:true})
    // .skip((pageNumber-1)*PageSize)
    // .limit(PageSize)
    // .sort({name:1})
    // .select({name:1,tags:3});

    ////comparison
    //eq,ne,gt,lt,gte,lte,in,nin

    // const res=await Course.find({price :{ $in:[15,12]}})
    // .sort({name:-1})
    // .select({name:1,tags:1});

    ////logical
    //and or

    // const res=await Course.find()
    // .or([{Author:'Mahaprabu'},{price:{$in:[12,10]}}])
    // .sort({name:1})
    //  .select({Author:1,name:1,price:1})

    //  start with,ends with,middle

    // const res=await Course
    // // .find({author:/h$/})
    // // .find({author:/^M/})
    // // .find({author:/.*a.*/i})
    // .find()
    // .select({name:1})
    // .countDocuments()

    //pagination
    // const res= await Course
    // .find({author:'Mosh',isPublished:true})
    // .skip(1)
    // .limit()

    // execrcise 1

    // const res=await Course.find({tags:'backend'})
    // .sort({name:1})
    // .select({author:1,name:1})
    // console.log(res)

    // exercise 2

    // const res=await Course
    // .find({isPublished:true,tags:{$in:['backend','frontend']}})
    // .sort({price:-1})
    // .select({name:1,author:1})

    const res=await Course
    .find({isPublished:true})
    .or([{price:{$gte : 15}},{name:/.*by.*/}])


    console.log(res);
}

// updating the document

async function UpdateQuery(id){
//Approach
//findById
//Modify its Properties
//save()

const course=await Course.findById(id)
if(!course) return;

// course.isPublished=true,
// course.name='Mahaprabu books'

// course.save();

course.set({
    isPublished:false,
    name:'Aakash Books'
})
course.save();

}


async function UpdateQueryq(id){
    const course=await Course.findByIdAndUpdate(id,{
        $set:{
            isPublished:true,
            author:"mike"
        }
    },{new:true})
    console.log(course)
}
// UpdateQueryq('6718af88a372a61a1901368e')

async function removeId(id){
const result=await Course.deleteOne({_id:id});
//findByIdAndRemove
console.log(result);
}
removeId('6718af88a372a61a1901368e')