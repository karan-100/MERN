
// Compile time error

// console.log(1;)    //Syntax error




// Runtime error

// console.log(x);  // reference error




// File handling

// try{
//     console.log("Try block starts here.");
//     console.log(x);
//     console.log("Try block ends here.");
    
//     //a

//     //b

//     //c
// }

// catch(error){
//     // Define karte h , error k sath aap kya krna chahte h
//     // Retry logic
//     // fallback machanism
//     // logging
//     // custom error

//     console.log("I am inside catch block.");
//     console.log("Your error is here : ", error)
// }

// finally{
//     console.log("I will run everytime , as I am finally block.");
// }





// Let's create custom error

try{
    // Refference error

    console.log(x);
}

catch(err){
    throw new Error("Bhai pahle declare to karlr, fir print karna");
    
}