

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project1')
  .then(() => console.log("Connected successfully"))
  .catch(error => console.log(error));

const Schem = new mongoose.Schema({
  name: { type: String, required: true, minlength: 4, maxlength: 20 },
  marks: {
    type:Array,
     isAsync:true,
     validator:function(mark){
      return new Promise((resolve,reject)=>{
        
      })
     }
  },
  status: {
    type: String,
    enum: ['pass', 'fail']
  },
  tags: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function(v) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const res = v && v.length > 0;
            resolve(res);
          }, 1000);
        });
      },
      message: 'A Course must have at least one tag'
    }
  }
});

const Model = mongoose.model('studentDetails', Schem);

async function createData() {
  try {
    const mod = new Model({
      name: "mahaprabu",
      marks: [80, 60, 70, 60],
      status: 'pass',
    //   tags: ['marks', 'analysis']
    });
    const res = await mod.save();
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
}

createData();



// async function createData() {
//   try {
//     const mod = new Model({
//       name: "Sridharan",
//       marks: [80, 60, 70, 60],
//       status: 'pass',
//     //   tags: ['marks', 'analysis']
//     });
//     const res = await mod.save();
//     console.log(res);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// createData();
