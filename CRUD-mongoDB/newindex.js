const mongoD=require('mongoose')

mongoD.connect('mongodb://localhost/project1')
.then(()=>console.log("connected sucessfully"))
.catch(error=>console.log(error))

const Schem=mongoD.Schema({
    name:{type:String , required:true},
    marks:[Number],
    status:{
        type:String,
        enum:['pass','fail']
    },
    
});

const model=mongoD.model('studentDetails',Schem);

async function createData() {

    try{

    model.validate();

    const mod=new model({
        name:"sridharan",
        marks:[80,60,70,60],
        status:true
    })

    const res=await mod.save();
    console.log(res)
    }
    catch(error){
        console.log(error.message)
    }
}

// createData();

async function getData(){
    const res=await model
    .find()

    console.log(res)
}

getData()