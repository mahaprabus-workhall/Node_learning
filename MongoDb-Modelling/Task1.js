
//Task 1
// pass an array of elements 1,2,3 in marks,to create a custom validation error

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/Task')
.then(()=>console.log("Conected succesfully"))
.catch(err=>console.log(`Error ${err}`))


const studentSchemaMongoose = new mongoose.Schema({
  name: { type: String, required: true, minlength: 4, maxlength: 20 },
  marks: {
    type: [Number],
    validate: {
      validator: function(marks) {
        for (let i = 0; i < marks.length; i++) {
          if (marks[i] < 1 || marks[i] > 2) {
            throw new Error(`Error at index ${i}: ${marks[i]} is out of range (must be between 1 and 2)`);
          }
        }
        return true;
      },
      message: 'Invalid marks array'
    }
  },
  

});


const model=mongoose.model('studetDetails',studentSchemaMongoose);

async function createData(){

  try{
    const detail=new model({
        name:'Mahaprabu',
        marks:[1,2,1]
    })

    const res=await detail.save();
    console.log(res);
  }
  catch(err){
    console.log(err.message);
  }
}

createData();