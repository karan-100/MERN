const express = require('express');

const app = express();

app.use(express.json());
// users route
let users = []; 

app.post('/users', (req, res) => {
    
    try {
        const {name, email, password} = req.body;
        if(req.body.length === 0){
            return res.status(400).json({success:false,message: 'Body is required'});   
        }
        if(!name){
            return res.status(400).json({success:false,message: 'Name is required'});
        }
        if(!email){
            return res.status(400).json({success:false,message: 'Email is required'});
        }
        if(!password){
            return res.status(400).json({success:false,message: 'Password is required'});
        }
        users.push({...req.body, id: users.length + 1});
        return res.status(201).json({success:true,message: 'User created successfully'});

    } catch (error) {
        return res.status(500).json({success:false,message: error.message});
    }
})

app.get('/users', (req, res) => {
    try {
        if(users.length === 0){
            return res.status(404).json({success:false,message: 'No user found'});
        }
        else{
            return res.status(200).json(users);
        }
    } catch (error) {
        return res.status(500).json({success:false,message: error.message});        
    }
})

app.get('/users/:id', (req, res) => {
    try {
        const {id} = req.params;
        let search =users.filter(user =>user.id == id);
        if(search.length === 0){
            return res.status(404).json({success:false,message: 'No user found'});
        }
        else{
            return res.status(200).json(search);
        }
    } catch (error) {
        return res.status(500).json({success:false,message: error.message});
    }
})


app.put('/users/:id', (req, res) => {
    try {
        const {id} = req.params;
        let index=users.findIndex(user =>user.id == id);
        users[index]={...users[index], ...req.body};
        return res.status(200).json({success:true,message: 'User updated successfully'});
    } catch (error) {
        return res.status(500).json({success:false,message: error.message});
    }
})

app.delete('/users/:id', (req, res) => {
    try { 
        const {id} = req.params;
        const filteredUsers = users.filter((item) => item.id != id);
        users = filteredUsers;
        return res.status(200).json({success:true,message: 'User deleted successfully'});
    } catch (error) {
        return res.status(500).json({success:false,message: error.message});
    }
})
// Blogs route

let blogs = [];

app.post('/blogs', (req, res) => {
    blogs.push({...req.body, id: blogs.length + 1});
    res.status(201).json({message: 'Blog created successfully'});   
})

app.get('/blogs', (req, res) => {
    let publicData =blogs.filter(blog =>blog.draft === false);
    res.status(200).json(publicData);
})

app.get('/blogs/:id', (req, res) => {
    const {id} = req.params;
    let search =blogs.filter(blog =>blog.id == id);
    res.status(200).json(search);
})

app.put('/blogs/:id', (req, res) => {
    const {id} = req.params;
    // index=blogs.findIndex(blog =>blog.id == id);
    // blogs[index] = {...blogs[index], ...req.body};

    let updatedBlog = blogs.map(blog => {     
        if(blog.id == id){
            return {...blog, ...req.body};
        }
        return blog;
    })
  
    res.status(200).json({message: 'Blog updated successfully'});  
})

app.delete('/blogs/:id', (req, res) => {
    const {id} = req.params;
    const filteredBlogs = blogs.filter((item) => item.id != id);
    blogs = filteredBlogs;
    res.status(200).json({message: 'Blog deleted successfully'});
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})