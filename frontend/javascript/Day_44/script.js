// Array

// let obj={
//     name :"karan",
//     "full name": "karan sharma",
//     age:20,
//     height: "5ft 10in",
//     greet : function(){
//         console.log("Hello jee kaise ho");
//     }
// };

// console.log(obj);
// obj.greet();

// console.log(typeof(obj));


// // creation of array

// let arr=[1,2,3,4,5];

// //Array constructor

// let brr=new Array('karan',1,true);

// // Built in function


// brr.push('sharma');
// brr.pop();
// console.log(brr);


// arr.shift();
// console.log(arr);

// arr.unshift("karan sharma");
// console.log(arr);

// // console.log(arr.slice(2,4));
// console.log(arr);

// arr.splice(1,2,'Raj');  // insert+remove +update

// console.log(arr);



// // map function
// let arr=[1,2,3,4]

// arr.map((number) =>{
//     console.log(number+1)
// })

// let ansArray=arr.map((number) =>{
//     return number*number;
// })

// console.log(ansArray);


// Filter metod

// let arr=[12,13,43,45,22,456,76,34];

// let evenArray=arr.filter((Number) =>{
//     if(Number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(evenArray);


// Filter function

// let arr=[1,2,'love','kunal',null];

// let ans=arr.filter((value)=>{
//     if(typeof(value)==='number'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(ans);


// Reduce method

// let arr=[10,20,30,40];

// let ans=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0);

// console.log(ans);


//sort

// let arr=[12,13,43,45,22,76,34];
// arr.sort();
// console.log(arr);

// console.log(arr.indexOf(34));







// let arr=[10,20,30];

// let length=arr.length;
// console.log("length : ",length);

// for(let index=0;index<length;index++){
//     console.log(arr[index]);
// }

// arr.forEach((value,index)=>{
//     console.log("Number : " , value," Index : ",index);
// })



// let obj={
//     name :"karan",
//     "full name": "karan sharma",
//     age:20,
//     height: "5ft 10in",
//     greet : function(){
//         console.log("Hello jee kaise ho");
//     }
// };

// for(let key in obj){
//     console.log(key," : ",obj[key]);
// }


// let arr=[10,20,30,40];

// for(let value of arr){
//     console.log(value);
// }


// let fullName="Karan";

// for(let value of fullName){
//     console.log(value);
// }







// Arrays with function

let arr=[12,13,43,45,22,76,34];

// function sum(arr){
//     let  len=arr.length;
//     let sum=0;

//     for(let value=0;value<len;value++){
//         sum=sum+arr[value];
//     }
//     return sum;
// }
// let totalSum=sum(arr);
// console.log(totalSum);

function getSum(arr){
    let len=arr.lenth;
    let sum=0;

    arr.forEach((value)=>{
        sum=sum+value;
    })

    return sum;
}

let totalSum=getSum(arr);
console.log(totalSum);
