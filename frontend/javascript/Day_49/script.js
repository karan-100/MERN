console.log("Hello duniya");

// Dynamic nature of object

// let obj={
//     age:12,
//     wt:70,
//     ht:170
// }

// console.log(obj);

// obj.color="white";


// console.log(obj);






// Object cloning 


// 1) Spread operator


// let src={
//     age:12,
//     wt:70,
//     ht:170
// }


// let dest={...src}; // Perfect copy(with diffrent sddress)

// // let dest=src;    //Reference copy

// src.age=37;     // Successfully cloning

// console.log("Src : ",src);
// console.log("Dest : ",dest);



// 2) Assign Method


let src={
    age:12,
    wt:70,
    ht:170
}

src.age=54;

let dest=Object.assign({},src);
console.log("Src : ",src);
console.log("Dest : ",dest);