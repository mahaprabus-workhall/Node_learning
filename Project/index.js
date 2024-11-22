
const express =require('express')
const winston=require('winston')
const logger=require('./middleware/winston')
const app=express()
require('./startup/routes')(app)
require('./startup/mongoDb')()
require('./startup/logging')()
require('./startup/config')()

const port=process.env.port || 3000
app.listen(port,logger.info(`The server is listening on ${port}`))