const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost/StudentName")
.then(()=>console.log("Connected sucessfully"))


const Sch= mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    isPublished:Boolean,
    date:{type:Date,default:Date.now},
    price:Number,

})

const Model=mongoose.model('courses',Sch);
// const course=new Model({
//     name:"mahaprabu",

// })

async function create(){

    const ss= await course.save();
    console.log(ss);
}

// create();
async function getdata(){
    const res=await Model
    .find({})
    // .find({isPublished:true,tags:{$in:['frontend','backend']}})
    // .sort({price:-1})
    // .select({name:-1,author:1})

    console.log(res)
}

// async function update(id){
//     const up=await Model.findByIdAndUpdate(id,{
//         $set:{
//             author:'mm',
//             isPublished:fasle
//         }
//     })
// }
getdata();
// console.log(Model)