const mongoose = require('mongoose');
const Joi = require('joi');


mongoose.connect('mongodb://localhost/project1')
.then(() => console.log("Connected successfully"))
.catch(error => console.log(error));


//joi
const studentJoiSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  age: Joi.number().integer().min(18).required()
}).unknown(true);

// joi.forbidden()


const studentSchemaMongoose = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  age: { type: Number, required: true, min: 18 }
});


studentSchemaMongoose.pre('save', function(next) {
  const { error } = studentJoiSchema.validate(this.toObject());
  if (error) {
    return next(new Error(error.details[0].message));
  }
  next();
});

// Mongoose model
const Student = mongoose.model('StudentDetails', studentSchemaMongoose);


async function createData() {
  
  try {
    const student = new Student({
        name:'Mahaprabu',
        age:18,
      });
    const result = await student.save();
    console.log(result);
  } catch (error) {
    console.log( error.message);
  }
}


createData();
