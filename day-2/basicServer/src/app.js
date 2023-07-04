const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname ="127.0.0.1";
const port ="3000";

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.statusCode =200;
        res.setHeader("Content-Type","text/html");
        let reqPath = path.join(__dirname,"../client/index.html")
        let readableStrem = fs.createReadStream(reqPath);
        readableStrem.pipe(res);
    }
    else if(req.url=="/product"){
        let product =[{id:1,name:"pramod"},
            {id:1,name:"gautam"}]
        res.statusCode =200;
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(product));
    }
    
    //res.end("Hello !!");
});

server.listen(port,hostname,()=>{
    console.log('server running at http://${hostname}:${port}/');
});