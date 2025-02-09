const http=require("http");

const  server=http.createServer(function(req,res) {
    // console.log(req.method);
    if(req.method=="GET"){
        res.statusCode=500;
        res.end("GET method");
    }
    else if(req.methood=="POST"){
        res.end("POST method");
    }
    else if(req.methood=="DELETE"){
        res.end("DELETE method");
    }
    else if(req.methood=="PUT"){
        res.end("PUT method");
    }
    else if(req.methood=="PATCH"){
        res.end("PATCH method");
    }
});


server.listen(3000,()=>{
    console.log("server started");
});