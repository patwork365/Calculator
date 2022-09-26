// let results = "";

// console.log(allButtons[0]);
// allButtons[0].addEventListener("click",(event) =>{
//     event.preventDefault();  
//     // console.log("clicked");

const allButtons=document.querySelectorAll(".buttons");
const screen =document.querySelector("#screen");
    allButtons.forEach((number) => {
            number.addEventListener("click",(event)=>{
             screen.innerHTML += number.value;
             console.log (number.value);
             document.getElementById("result").innerHTML= number.value;
            })});
