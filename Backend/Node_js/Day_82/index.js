const express=require("express");
const path=require("path");
const app=express();
const fs=require("fs");
function dynamicData(req,res,route){
    
    fs.readFile(__dirname+"/index.html",{encoding:'utf-8'},(err,data)=>{
        if(err){
            throw new Error("Not Found");
        }
        else{
            data=data.replace("[path]",route==""?"Home":route);
            res.end(data);
        }
    })
}


// app.get("/",(req,res)=>{
//     console.log("Hello");
//     // res.send("Hello");
//     //res.end("Hello");
//     // res.json({"message": "Hello"})
//     dynamicData(req,res,"Home");
// })
// app.get("/contact",(req,res)=>{
//     console.log("Hello");
//     // res.send("Hello");
//     //res.end("Hello");
//     // res.json({"message": "Hello"})
//     // res.sendFile(path.join(__dirname,"index.html"));
//     dynamicData(req,res,"Contact");
// })
app.get(["/","/about","/contact"],(req,res)=>{
    console.log("Hello");
    // res.send("Hello");
    // res.end("Hello");
    // res.json({"message": "Hello"})
    // res.sendFile(path.join(__dirname,"index.html"));
    // dynamicData(req,res,"About");
    let path=req.url.split("/")[1].toUpperCase();
        console.log(req.method);
        fs.readFile(__dirname+"/index.html",{encoding:'utf-8'},(err,data)=>{
            if(err){
                throw new Error("Not Found");
            }
            else{
                data=data.replace("[path]",path==""?"Home":path);
                res.end(data);
            }
        })
})
app.post("/",(req,res)=>{
    res.send("Hello mai post hu")
})


app.listen(3000,()=>{
    console.log("chal gaya server");
})