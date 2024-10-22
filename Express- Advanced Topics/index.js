const express=require('express')
const newM = require('./Logger')

const debug=require('debug')('app:startup')
const config=require('config')
const morgan=require('morgan');

const sub=require('./routes/subjects')

const app=express();
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(express.static('public'))


app.set('view engine','pug')
app.set('views','./views')

console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`app :${app.get('env')}`)

app.use('/courses/api',sub)

console.log("Application Name"+config.get('name'))
console.log("mail server"+config.get('mail.host'))
// console.log("Password"+config.get('mail.password'))

if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    // console.log("Morgan is listening.....")
    debug('Morgon is enabled')
}


debug("Hello")
app.use(function(req,res,next){
    console.log("Listeining");
    next();
})


app.use(newM)


app.get('/',(req,res)=>{
    res.render('index',{title:'Express app',message:"hello everybody"})
})

let port = process.env.port || 3000
app.listen(port,console.log(`Listeining in the port ${port}`))

