// async function getData() {
//     setTimeout(function(){
//         console.log("I am inside set timeout block");
//     },3000);
// }


// let output=getData();

// await --?

//Fetch API


// calls

// 1. get
// 2. post 
// 3. put
// 4. delete
// async function getData(){

//     //get request --> async
//     let response=await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');

//     //parse json --> async
//     let data=await response.json();

//     console.log(data);
// }

// getData();
//Scenario:

// Prepare URL / api end-point --> sync
// await // fetch data --> network call --> async
// process data --> sync

const myHeaders=new Headers();
myHeaders.append("Content-Type","application/json");

const url="https://jsonplaceholder.typicode.com/posts";
const options={
    method:"POST",
    body: JSON.stringify({username: "Karan pandit"}),
    Headers:myHeaders,
};

async function getData() {
    const response=await fetch(url);
    let data=await response.json();
    console.log("Get data response", data);
}

async function postData(){
    const response=await fetch(url,options);
    let data=await response.json();
    console.log("Post data response",data );
} 

async function processData() {
    await postData();
    await getData();
}

processData();