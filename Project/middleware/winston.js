const winston=require('winston')

// const logger=winston.createLogger({
//     transports:[
//         new winston.transports.Console(),
//         new winston.transports.File({filename:'logFIle.log'})
//     ]
// })
const logger = winston.createLogger({ 
    level: 'info', 
    format: winston.format.json(),
     transports: [
         new winston.transports.File({ filename: 'logFile.log' }),
          new winston.transports.Console() ]
})

module.exports=logger