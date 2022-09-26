// let results = "";

// console.log(allButtons[0]);
// allButtons[0].addEventListener("click",(event) =>{
//     event.preventDefault();  
//     // console.log("clicked");

const allButtons=document.querySelectorAll(".buttons");
const screen =document.querySelector("#screen");
const clear = document.querySelector("#btn");
const allButtons_o =document.querySelectorAll(".buttons_o");
const eql =document.querySelector("#equal");
let firstNumber;
let secondNumber;
let Operator;

// console.log(allButtons_o.values);
// if (allButtons_o.values="C"){
//     screen.innerHTML = " ";
//     console.log(allButtons_o.values)
// };
clear.addEventListener("click", (event) => {
    screen.innerHTML = " ";
});

    allButtons.forEach((number) => {
            number.addEventListener("click",(event)=>{
             screen.innerHTML += number.value;
             console.log (number.value);
            
            })});
            
        allButtons_o.forEach((ops) => {
            ops.addEventListener("click",(event)=>{
            firstNumber=screen.innerHTML;
            screen.innerHTML =ops.value;
            Operator= ops.value;
            console.log(Operator);
            console.log(firstNumber);
            setTimeout(screen.innerHTML ="",5000); 

        })});

        eql.addEventListener("click",(event)=>{
            secondNumber=screen.innerHTML;
            screen.innerHTML = event.value;
            console.log(secondNumber);

            }); 
            
        const cal = () => {
        secondNumber=Number(secondNumber);
        firstNumber=Number(firstNumber);
        if (Operator == '-'){
            screen.innerHTML= firstNumber - secondNumber;
        } else if (Operator == '+'){
            screen.innerHTML= firstNumber + secondNumber;
        } else if (Operator == '*'){
            screen.innerHTML=firstNumber * secondNumber;
        } else if (Operator == '-' ){
            screen.innerHTML=firstNumber - secondNumber;
        } else if (Operator =="/"){
            screen.innerHTML= firstNumber / secondNumber.toFixed(2);
        }
        else return 0 ;
        };
        eql.addEventListener ("click",cal);  
    
            // while (Operator != "=") {
            //     allButtons.forEach((number) => {
            //         number.addEventListener("click",(event)=>{
            //          screen.innerHTML += number.value;
            // })})};    
            // secondNumber=screen.innerHTML;
            // console.log(secondNumber);
    // console.log(Operator);
        // operation.addEventListener("click",(event)=>{
        //     screen.innerHTML += number.value;
        //     console.log (number.value);
        //     document.getElementById("#screen").innerHTML= number.value;
        // });
        // allButtons_o.addEventListener("click",(event) =>{
    //         event.preventDefault();  
    //         console.log("clicked");


    // with steph..... dont delete
// const screen =document.querySelector("#screen");
    // allButtons.forEach((number) => {
    //         number.addEventListener("click",(event)=>{
    //          screen.innerHTML += number.value;
    //          console.log (number.value);
    //          document.getElementById("result").innerHTML= number.value;
    //         })});

