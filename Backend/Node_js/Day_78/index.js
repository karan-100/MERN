// console.log("Kya haal hai bhai ke");



// Global objects

// 1) Process object 

// console.log(process.env);      // It gives us user environment details

// console.log(process.argv);

// let num1=process.argv[2];
// let num2=process.argv[3];

// console.log(Number(num1)+Number(num2));


// console.log("Hello clg");

// process.stdout.write("Hello process");

// console.stdout.write("Hello process");

// process.exit();
// process.exit(0);
// process.exit(1);


// 2) _dirname

// console.log(__dirname);
// console.log(__dirname.split(`Node`));


// 3) __filename



// console.log(__filename);

// 4) modules

import addFun from "./addFun"

let result =addFun(4,5);

console.log(result);