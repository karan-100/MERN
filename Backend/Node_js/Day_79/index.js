// fundamentals of JavaScript
// Array and objets
// function return
// async js coding



// Array 

// let arr=[1,2,3,4];

// forEach | map | filter | find | indexOf

// arr.forEach(function(val){
//     console.log(val + " Hello");
// })

// let newArr=arr.map(function(val){
//     return val +12;
// })

// console.log(newArr);

// let ans=arr.filter(function(val){
//     if(val>=3) {return true;}
//     else return false;
// })

// console.log(ans);

// let ans=arr.find(function(val){
//     if(val==2) return val;
// })
// console.log(ans);

// let index=arr.indexOf(2);
// console.log(index);


// objects

// let obj={
//     name: "karan pandit",
//     age: 21
// }

// // Object.freeze(obj);

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj['name']);



// function : function are basically object in javascript

// function abcd(a,b,c,d){
    
// }
// // abcd.length =>> parameters of function 
// console.log(abcd.length);


// function abcd(){
//     return "Hello coders"
// }


// let ans=abcd();
// console.log(ans);




// Async js in coding

// Line by line code chale isey kahte hai synchronous 

// Jo bhi code async nature ka ho , usey side stack mein bhej do and agle code ko bhi ,sync nature ka ho , jab bhi saara sync code chal jaaye , tab check karo ki async code complete hua ya nahi and agar wo complete hua to usey main stack mai laao ans chalao

async function abcd(){
    const blob=await fetch('https://randomuser.me/api');
    const ans=await blob.json()
    console.log(ans.results[0].location.street);
}

abcd();

































