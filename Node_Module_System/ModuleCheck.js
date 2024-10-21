
//1 . we require the index file to acces the function
// const log=require("./Index")

// log.logs("hello everyone");

// const logger=require("./Index")

// console.log(logger);


// const EventHAndler=require('events');
// const emmiter=new EventHAndler();

// var url='https://';

// class Log extends EventHAndler{
//     log(message){
//         console.log(msg);

//         emmiter.emit('img loaded,:',{id:1,url:'https://'})
//     }

// }

// module.exports=Log;

const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='./main'){
       res.write("pasword is 123$5^8");
       res.end();
    }
    else if(req.url==='./learn1'){
        res.write("Fake one"  )

        res.end();
    }
    else{
        res.write('I am happy ');
    }
})

var port =8080
server.listen(port)
console.log(`Server listening on the port : ${port}`)