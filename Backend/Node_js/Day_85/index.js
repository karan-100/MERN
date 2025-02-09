const express = require("express")
const moment=require("moment");
const app = express();
const fs = require("fs")

app.use(express.json())


function fun(req, res, next) {
    // console.log(req);
    req.nishant = "saini"
    console.log("hello");
    next()
}

function fun2(req, res, next) {
    // console.log(req);
    req.channel = "codethread"
    console.log("hello 2");
    next()
}

app.use(fun) // middleware
app.use(fun2)

app.get("/blogs", logDetails,(req, res  ,next) => {
    try {
        
        return res.status(200).json({ message: "hello ji" })
    } catch(err) {
        console.log(err);
        return res.status(500).json({message : "please try again"})
    }

})


function logDetails(req,res, next){
    // const currentDate = new Date();
    // const formattedDate = new Intl.DateTimeFormat('en-US', {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric',
    //   }).format(currentDate);
    const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    let data  = currentDate +  " " + req.method
    fs.appendFile(__dirname + "/logFile.txt" , `${data}\n` , (err) => {
        next()
    } )
}

app.post("/blogs", logDetails ,(req, res) => {
    console.log(req.method);
    console.log(req.nishant);
    console.log(req.channel);
    return res.status(200).json({ message: "post method" })
})

app.use((req, res, next) => {
    // console.log("sss");
    res.status(500).json({ message: "not found" })

})


app.use((err, req, res, next) => {
    console.error("err.stack")
    res.status(500).send('Something broke!')
})


app.listen(3000, () => {
    console.log("server started");
})