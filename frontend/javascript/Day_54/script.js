
// // code 1

// const t1=performance.now();

// for(let i=1;i<=100;i++){
//     let para=document.createElement('p');
//     para.textContent="This is para "+ i;
//     document.body.appendChild(para);
// }

// const t2=performance.now();
// console.log("Total time : "+(t2-t1));


// // code 2

// const t3=performance.now();
// let myDic=document.createElement('div');

// for(let i=0;i<=100;i++){
//     let para=document.createElement('p');
//     para.textContent="This is para "+ i;
//     myDic.appendChild(para);
// }

// const t4=performance.now();

// console.log("Total time2 : "+(t4-t3));





// Best code
const t5=performance.now();

let fragment=document.createDocumentFragment();

for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is para "+ i;

    //No reflow & no repaint for the below line
    fragment.appendChild(para);
}

// Below line take 1 reflow & 1 repaint

document.body.appendChild(fragment);

const t6=performance.now();

console.log(t6-t5);