const express = require('express');
const mongoose= require('mongoose');

const app = express();

async function connDB(){
    console.log('Connecting to DB');
    try {
        console.log('Trying to connect');
        await mongoose.connect('mongodb://localhost:27017/myDB');
        console.log('Connected to DB');
    } catch (error) {
        return console.log(error);
    }
}

const userSchema = new mongoose.Schema({
    name: String,
    email:{
        type:String,
        unique: true
    },
    password: String
})

const User = new mongoose.model("User", userSchema);

async function createUser(){
    try {
        let newUser=await User.create({
            name: "sumit pant",
            email: "afp@gmail.com",
            password: "3x4w456"
            
        })
        console.log(newUser);

    } catch (error) {
        console.log(error.message);
    }
    

    // let newUser=new User({
    //     name: "Karan",
    //     email: "abc@gmail.com",
    //     password: "karan1234"
    // })

    // await newUser.save();

    // const user=await User.find();
    // const user=await User.findById("67af1fad713de36608c362b7");
    // const user=await User.findOne({name: "Karan"});
    // const user=await User.find({name: "Karan"});
    // const user=await User.findByIdAndDelete("67af1fad713de36608c362b7");
    // const user=await User.findByIdAndUpdate("67af2193fe7c883ecb332c0e",{name: "Karan sharma"},{new: true});   

} 

app.listen(3000,()=>{
    console.log('Server is running at port 3000');
    connDB();
    createUser();
});  