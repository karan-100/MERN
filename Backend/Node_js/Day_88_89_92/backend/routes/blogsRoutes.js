const express=require("express");
const route=express.Router();

// Blogs route

route.post('/blogs', (req, res) => {
    blogs.push({...req.body, id: blogs.length + 1});
    res.status(201).json({message: 'Blog created successfully'});   
})

route.get('/blogs', (req, res) => {
    let publicData =blogs.filter(blog =>blog.draft === false);
    res.status(200).json(publicData);
})

route.get('/blogs/:id', (req, res) => {
    const {id} = req.params;
    let search =blogs.filter(blog =>blog.id == id);
    res.status(200).json(search);
})

route.put('/blogs/:id', (req, res) => {
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

route.delete('/blogs/:id', (req, res) => {
    const {id} = req.params;
    const filteredBlogs = blogs.filter((item) => item.id != id);
    blogs = filteredBlogs;
    res.status(200).json({message: 'Blog deleted successfully'});
})

module.exports=route;