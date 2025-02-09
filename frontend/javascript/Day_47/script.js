// class Human{
//     // Properties
//     age=13;  // public
//     #wt=80;  //  private
//     ht=5.6;

//     //Constructor
//     constructor(newAge,newWeight,newHeight){
//         this.age=newAge;
//         this.ht=newHeight;
//         this.#wt=newWeight;
//     }

//     //Beahavior

//     walking(){
//         console.log("I am walking");
//     }

//     running(){
//         console.log("I am running");
//     }

//     #weight(){
//         console.log("My weight is ",this.#wt);
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }

//     set modifyWeight(val){
//         this.#wt=val;
//     }

// }

// let obj=new Human(50,190,101);

// console.log(obj.age);
// obj.modifyWeight=5;
// console.log(obj.fetchWeight);
// obj.walking();
// // console.log(obj.wt); // Not accesable
// obj.weight();






// Default parameters

// function sayName(myName="karan sharma"){
// console.log("My name is ",myName);
// }

// sayName();


// Multiple default parameter

// function sayName(fname="karan",lname="sharma"){
//     console.log("My name is ",fname," ",lname);
//     }
    
// sayName("Raj");
    


// Dependent parameter

// function sayName(fname="karan",lname=fname.toUpperCase()){
//     console.log("My name is ",fname," ",lname);
//     }
    
// // sayName("raj");
// sayName("vansh","kumar");
    
// Parameter with object

// function solve(value={age:15,wht:40,ht:5.6}){
//     console.log("Hello jii ",value);
// }

// solve();

// // Parameter with list 

// function solve1(value=["Karan","Sharma"]){
//     console.log("Hello jii ",value);
// }

// solve1();


// game of Null & undefind

// function solve1(value="Rahul"){
//     console.log("Hello jii ",value);
// }

// solve1(null);   //null

// solve1(undefined);  // Rahul


function getage(){
    return 18;
}

function utility(name="Karan",age=getage()){
    console.log(name," ",age);
}

utility();





