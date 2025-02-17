const mongoose=require("mongoose")

//Database connection

async function connDB(){
    console.log('Connecting to DB');
    try {
        console.log('Trying to connect');
        await mongoose.connect('mongodb://localhost:27017/blogAppDB');
        console.log('Connected to DB');
    } catch (error) {
        return console.log(error.message);
    }
}

module.exports=connDB;