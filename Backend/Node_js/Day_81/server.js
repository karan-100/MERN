var http = require('http');
// console.log(http);

const server=http.createServer(function (req,res){
    const fs=require("fs");
    let filePath=__dirname+"/index.html";

    if(req.url=="/"){
        fs.readFile(filePath,{encoding:'utf-8'},(err,data)=>{
            if(err){
                throw new Error("Not Found");
            }
            else{
                res.end(data);
            }
        })
    
    }
    else{
        return res.end(JSON.stringify({meassage:"Server started"}));
    }
})

server.listen(3000,()=>{
    console.log("Server Started");
});