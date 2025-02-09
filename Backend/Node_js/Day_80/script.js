const fs=require("fs");
console.log("hello");
// console.log(fs);

// const response=fs.writeFileSync(__dirname+"/abc.txt","hello sir");

// const response=fs.writeFileSync(`${__dirname}/abc.txt`,"hello sir");

// fs.writeFile(`${__dirname}/abcd.txt`,"hello sir",function(err){
//     if(err) throw err;
//     console.log("This file has been saved")
// });


// let data =fs.readFileSync("abc.txt","utf-8")
// console.log(data);

// let data=fs.readFile("abcd.txt","utf-8",(err,data)=>{
//     if(err) throw err;
//     else {
//         console.log(data);
//     }
// // })


// Block & unblock code 


// Block the code
// console.log("1");
// const data="a".repeat(500*1024*1024);
// const data2=fs.writeFileSync("abcde.txt",data);
// console.log("2");

//don't block the code
// console.log("1");
// const data="a".repeat(500*1024*1024);
// const data2=fs.writeFile("abcde.txt",data,function(err){
//         if(err) throw err;
//         console.log("This file has been saved");
//     })
// console.log("2");


// fs.unlink
