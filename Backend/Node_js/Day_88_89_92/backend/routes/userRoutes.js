// users route
const express=require("express");
const User = require("../controller/userController");
const route=express.Router();

route.post('/users',User.createUser)

route.get('/users',User.allUser)

route.get('/users/:id',User.getUser );

route.put('/users/:id',User.updateUser);

route.delete('/users/:id',User.deleteUser)

module.exports=route;