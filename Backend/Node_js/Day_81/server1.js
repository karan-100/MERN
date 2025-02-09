var http = require('http');
// console.log(http);

const server=http.createServer(function (req,res){
    const fs=require("fs");
    let filePath=__dirname+"/index1.html";

    if(req.url=="/" || req.url=="/about"||req.url=="/contact"){
        let path=req.url.split("/")[1].toUpperCase();
        console.log(req.method);
        fs.readFile(filePath,{encoding:'utf-8'},(err,data)=>{
            if(err){
                throw new Error("Not Found");
            }
            else{
                data=data.replace("[path]",path==""?"Home":path);
                res.end(data);
            }
        })
    
    }
    else{
        return res.end(JSON.stringify({meassage:"Not found"}));
    }
})

server.listen(3000,()=>{
    console.log("Server Started");
});