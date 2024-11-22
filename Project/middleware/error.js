const winston=require('winston')
function maha(err,req,res,next){

    winston.error(err.message,err)
    res.status(500).send('Something Failed')
}

module.exports= maha  