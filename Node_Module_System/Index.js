
// Module description
// console.log(module);

// module exports 
// var url ="https://a2zblg.com"
function log(message){
    console.log(message)
}

module.exports.logs=log;
// exports.url=url


/*var url ="https://a2zblg.com"
function log(message){
    console.log(message)
}


console.log(__filename)
console.log(__dirname)
module.exports.logs=log;
exports.url=url*/

// module.exports = url
//module.exports.log=log
//exports.log=log

//not in
//exports = log


//path 
/*
const path = require("path")

var pathObj=path.parse(__filename);
console.log(pathObj)
*/

// os
/*
const os=require("os");


var osMem=os.totalmem();
var osAvail=os.freemem();

console.log(`Total memory ${osMem}`);
console.log(`Free memory ${osAvail}`);
*/


/*
const fs=require("fs");

// synchronous
// const files=fs.readdirSync('./')
// console.log(files);

// async

fs.readdir('./',function(err,files){
    if(err) console.log(err);
    else console.log(files);
})
    */


//event 

/*
const EventHAndler = require('events')
const emmiter=new EventHAndler();

emmiter.on('message Loaded',function(){
    console.log('listner called')
})
emmiter.emit('Message loaded')
*/

// Event Argument

const EventHAndler = require('events')
const emmiter=new EventHAndler();

emmiter.on('message Loaded',function(arg){
    console.log('listner called')
})
emmiter.emit('Message loaded',id=1,url='https://')