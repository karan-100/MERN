const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const connDB = require('./config/dbConnect');
const User = require('./models/userSchema');
const userRoute=require("./routes//userRoutes");
const blogRoutes=require("./routes/blogsRoutes");

app.use(express.json());
app.use(cors());

app.use(userRoute);
app.use(blogRoutes);

//Versioning
// app.use("/",userRoute);
// app.use("/",blogRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    connDB();
})



