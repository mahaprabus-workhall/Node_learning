const winston=require('winston')
function maha(err,req,res,next){

    winston.error(err.message,err,winston.level)     
        //warn error info verbose debug silly
    res.status(500).send('Something Failed due to wrong database connection or collection name')
}

module.exports= maha  