const http=require("http");

const server=http.createServer((req,res)=>{

    res.writeHead(200,{'Context-Type':'text/html'})
    if(req.url==='/map'){
        res.write('Hello Map 😊');
        res.end();
    }
    else if(req.url==='/tap'){
        res.write("Hello Tap 😒");
        res.end();
    }
    else{
        res.write("welcome to all😁");
        res.write(JSON.stringify([1,2,3,4]))
        res.end();
    }
})

var port=8081;
server.listen(port);
console.log(`Server is listening on ${port}`)