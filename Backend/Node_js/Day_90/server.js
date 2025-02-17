const e = require('express');
const express = require('express');
const { default: mongoose } = require('mongoose');

const app = express();

async function connDB(){
    try {
        await mongoose.connect('mongodb://localhost:27017/myfirstdb');
        console.log('Connected to DB');
    } catch (error) {
        return console.log(error);
    }
}


app.listen(5000, connDB);  