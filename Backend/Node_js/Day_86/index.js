const express=require("express");
const fs=require("fs");
const app=express();
app.use(express.json());
// let todos=[
//     {
//         title:"Todo 1",
//         desc:"DESC 1",
//         isCompleted:false
//     },
//     {
//         title:"Todo 2",
//         desc:"DESC 2",
//         isCompleted:true
//     },{
//         title:"Todo 3",
//         desc:"DESC 3",
//         isCompleted:true
//     }
// ]

let todos=[];
let path=__dirname+"/todosFile.json";

app.put("/todos/:id",(req,res)=>{
    try {

        fs.readFile(path,{encoding:"utf-8"},(err,todos)=>{
            todos=todos? JSON.parse(todos) : [];
            const index=todos.findIndex(todo=>todo.id==req.params.id);
            todos[index]={...todos[index],...req.body};
            fs.writeFile(path,JSON.stringify(todos),{encoding:"utf-8"},(err)=>{
                if(err){
                    return res.status(500).json({"message" : "please try again"});
                }
                else{
                    return res.status(200).json({"Message":"Update Successfully"})
                }
            })
        })

        // const index=todos.findIndex(todo=>todo.id==req.params.id);
        // console.log(index);
        // todos[index]={...todos[index],...req.body}; 
        // return res.status(200).json({"Message":"Update Successfully"})    
    } catch (err) {
        return res.status(500).json({"message":"Please try again"})
    }
})

app.delete("/todos/:id",(req,res)=>{
    const {userid}=req.headers;
    if(!userid){
        return res.status(400).json({"message":"Please provide userid"})
    }
    try {
        
        fs.readFile(path,{encoding:"utf-8"},(err,todos)=>{
            todos=todos? JSON.parse(todos) : [];
            list=todos.filter(todo=>todo.userid==userid);
            const filteredTodo=todos.filter(todo=>todo.id!=req.params.id);
            fs.writeFile(path,JSON.stringify(filteredTodo),{encoding:"utf-8"},(err)=>{
                if(err){
                    return res.status(500).json({"message" : "please try again"});
                }
                else{
                    return res.status(200).json({"Message":"Todo deleted successfully"});
                }
            })
        })
        // todos.splice(Number(req.params.id)-1,1);
        // or
        // const filteredTodo=todos.filter(todo=>todo.id!=req.params.id);
        // todos=[...filteredTodo]
        // return res.status(200).json({"Message":"Todo deleted successfully"});
    } catch (err) {
        return res.status(500).json({"message" : "please try again"});
    }
})

app.post("/todos",(req,res)=>{
    try {
        const {title,description}=req.body;
        const {userid}=req.headers;
        // userId=1000+userId;
        // or
        // const title=req.body.title;
        // const description=req.body.description;
        // todos.push({title,description});
        fs.readFile(path,{encoding:"utf-8"},(err,todos)=>{
            todos=todos? JSON.parse(todos) : [];
            todos.push({...req.body,isCompleted:false, id:todos.length+1,userid});
            fs.writeFile(path,JSON.stringify(todos),{encoding:"utf-8"},(err)=>{
                if(err){
                    return res.status(500).json({"message" : "please try again"});
                }
                else{
                    return res.status(200).json({"Message":"Todo created successfully"});
                }
            })
        })
        
       
    } catch (err) {
        return res.status(500).json({"message" : "please try again"});
    }
})


app.get("/todos",(req,res)=>{
    const {userid}=req.headers;
    try {
        fs.readFile(path,{encoding:"utf-8"},(err,todos)=>{
            todos=todos? JSON.parse(todos) : []
            todos=todos.filter(todo=>todo.userid==userid);
            return res.status(200).json({todos })
        })
    } catch (err) {
        return res.status(500).json({"message" : "please try again"});
    }
})


// app.post()

app.listen(3000,(req,res)=>{
    console.log("server started");
})     