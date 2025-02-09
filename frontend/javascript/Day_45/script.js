//Hosting

// var Hosting (using only var keyword)

// var age; // only variable declairation shift not a value
// console.log(age);  // undefined
// var age=25; 


// Function Hosting 


// Function hosting with plane function
// sayMyName("Karan");
// function sayMyName(fname){  // it will shift in the strting of their scope
//     console.log(fname);
// }

// sayMyName("Karan");


// Function hosting with plane function

// sayHello();

// let sayHello=function(){
//     clonsole.log("Hello jee , kaise ho sare");
// }

// const obj1=new Human(); // Error : hosting not possible
// class Human{

// }
// const obj1=new Human(); // Normal object






// Function Call Stack

// Function as an argument

// function greetMe(greet,fName){
//     console.log("hello",fName);
//     greet();
// }

// let greet=function(){
//     console.log("Greeting for the today");
// }

// greetMe(greet,"karan Sharma");



// return Function

// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }

// let ans=solve(5);
// // console.log(ans);

// let finalAns=ans(10);
// console.log(finalAns);




// Function in DS

// let arr=[
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ];



// let first=arr[2];
// let ans=first(10,5);
// console.log(ans);






// let obj={
//     age:25,
//     wt:36,
//     ht:5.9,
//     greet:()=>{
//         console.log("Hello Duniya");
//     }
// }


// console.log(obj.age);
// obj.greet();





// let greet=function(){  //Fat jaega boom
//     console.log("namaste duniya");
// }

// var greet;

console.log(greet);

var greet=function(){  // Variable hosting
    console.log("namaste duniya");
}

// greet();

















