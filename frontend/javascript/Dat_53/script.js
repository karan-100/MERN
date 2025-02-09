
function changeText(event){
    console.log(event);
    let fpara=document.getElementById("fpara");
    fpara.textContent="Hello Karan";
}

let fpara=document.getElementById("fpara");

fpara.addEventListener('click',changeText);

fpara.removeEventListener('click',changeText);



function changeTxt(event){
    // let anchorElement=document.getElementById("fanchor");
    event.preventDefault();
    anchorElement.textContent="Click done bhai";
}

let anchorElement=document.getElementById("fanchor");
// document.write(anchorElement);
anchorElement.addEventListener('click', changeTxt);


// console.log("hi");

// let paras=document.querySelectorAll('p');

// function alertPara(event){
//     alert("You have clicked on para : "+ event.target.textContent);
// }

// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',alertPara);
// }