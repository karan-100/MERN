// let name="manish";
// function outer(){
//     {
//         let name="Raj";
//     }

//     let name="Karan";
//     function inner(){
//         console.log(name);
//     }
//     inner();
// }

// outer();


// Closers concept 

function outerFun(){
    let name="karan";

    function innerFun(){
        console.log(name);
    }

    return innerFun;
}

let inner=outerFun();

inner();