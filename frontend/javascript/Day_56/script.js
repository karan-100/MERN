
// Sync code with promise

// let promise1=new Promise((resolve,reject)=>{
//     console.log("Karan Sharma");
//     // resolve(1001);
//     reject(new Error("Internal Server Error"));
// })



// Async Code with promise

// function sayMyName(){
//     console.log("Hello Karan");
// }

// let promise2=new Promise((resolve,reject)=>{
//     setTimeout(sayMyName,15000);
//     resolve(1);
// })




// then() & catch

// let  promise3=new Promise((resolve,reject)=>{
//     let success=false;

//     if(success){
//         resolve("Promise Fullfilled");
//     }
//     else{
//         reject("Promise rejected");
//     }
// })


// // promise3.then((messagge)=>{
// //     console.log("Then ka message " + messagge);
// // }).catch((error)=>{
// //     console.log("Error : "+ error);
// // })



// // multiple then block : Promise chaining

// promise3.then((message)=>{
//     console.log("First msg : "+ message);
//     return "Promise fullfilled second msg";
// }).then((message)=>{
//     console.log("Second msg :"+message);
// }).catch((error)=>{
//     console.log(error);
// }).finally((message)=>{
//     console.log("Mai to final hu , chalunga hi");
// })


let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
})
let promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"Second");
})
let promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"third");
})

Promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log("Error : "+error);
})