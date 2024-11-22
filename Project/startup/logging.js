
require('express-async-errors')
require('winston-mongodb')
const winston=require('winston')
module.exports=function(){
    

    winston.rejections.handle(
        new winston.transports.Console({colorize:true,prettyPrint:true}),
        new winston.transports.File({filename:'unhandle.logs'})
    )
    process.on('unhandleRejection',(ex)=>{
        // console.log('WE GOT AN UNCAUGHT ERROR')
        // winston.error(ex.message,ex)
        throw ex;
    })
    
    process.on('uncaughtException',(ex)=>{
        console.log('WE GOT AN UNCAUGHT ERROR')
        winston.error(ex.message,ex)
        process.exit(1)
    })
    
    
    // logger
    winston.add(new winston.transports.File({filename:'logfile.log',level:'error'}))
    
    winston.add(new winston.transports.MongoDB({db:'mongodb://localhost/vidly'}))
    // throw new Error('Error during the process')
    
    // const p=Promise.reject(new Error('something failed miserable!'))
    // p.then(()=>console.log('DOne')) 
    
}