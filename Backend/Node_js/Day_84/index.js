const express=require("express");

const app=express();

// app.get("/getBlog",(req,res)=>{

// })

// app.post("/addBlog",(req,res)=>{
    
// })

// app.put("/updateBlog",(req,res)=>{
    
// })

// app.delete("/deleteBlog",(req,res)=>{
    
// })


app.get("/blogs/",(req,res)=>{
    // res.send(req.query);
    res.send(req.headers);
})

app.post("/blogs",(req,res)=>{
    
})

app.put("/blogs/:id",(req,res)=>{
    // res.send(req.params);
    // res.send(req.params.id);
    console.log(req.headers);
    console.log(res.headers);
    res.send(req.headers);
})

app.delete("/blogs",(req,res)=>{
    
})

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(3000,()=>{
    console.log("Server Startedk")
})