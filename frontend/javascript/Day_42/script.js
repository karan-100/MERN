// Loops in javascript

// 1) for loop

//Counting
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

//Reverse count
// for(let i=10;i>=1;i--){
//     console.log(i);
// }

// 2 impotant keyword



//Break

// for(let i=1;i<=10;i++){
//     if(i==4){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

//Continue

// for(let i=1;i<=10;i++){
//     if(i==4){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }

// 2) while loop

//counting


// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

//Reverse count
// let j=10;
// while(j>=1){
//     console.log(j);
//     j--;
// }


// let a=1;
// while(a<=10){
//     if(a==4){
//         break;
//     }
//     else{
//         console.log(a);
//     }
//     a++;
// }


// let a=1;
// while(a<=10){
//     console.log("inside loop");
//     if(a==4){
//         a++;
//         continue;
//     }
//     else
//         console.log(a);
//     a++;
// }




// 3) do-while loop : at least one time execution

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<4);






// Strings : sequence of characters

// let firstName="karan sharma";
// let lastName="Sharma";

// console.log(firstName);
// console.log(lastName);

// //backticks
// let name=`my name 
// is 
// karan.`;

// console.log(name);

// let myName=new String("karan sharma");


// Operations in string 

// - Concatination
// let op1=`Hindi`;
// let op2=` English`;

// // let op3=op1 + op2;

// let op3=`${op1}${op2} `;

// console.log(op3);

// // - Length

// console.log(op2.length);

// - Uppercase


let fullName="karan sharma";
let myName="KARAN";

console.log(fullName.toUpperCase());
console.log(myName.toLowerCase());


// - Substring

let str="HelloWorld";

console.log(str.substring(2));
console.log(str.substring(2,8));

// - Split

//let sentence="How are you?";
// console.log(sentence.split(' '));
 
//     // use of slash(\)

//     let sen="How \"are\" you?";

//     console.log(sen);

let sentence="How \\are \\you?";

let words=sentence.split('\\');

console.log(words);

console.log(words.join('@'));





// - Lowercase
// - charAt
// - indexOf