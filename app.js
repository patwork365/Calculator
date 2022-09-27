
const allButtons=document.querySelectorAll(".buttons");
const screen =document.querySelector("#screen");
const clear = document.querySelector("#btn");
const allButtons_o =document.querySelectorAll(".buttons_o");
const eql =document.querySelector("#equal");
const showingVal =document.querySelector("#show");
let firstNumber;
let secondNumber;
let Operator;


         clear.addEventListener("click", (event) => {
            screen.innerHTML = " ";
            showingVal.innerHTML="";
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
            setTimeout(screen.innerHTML ="",15000); 

        })});

        eql.addEventListener("click",(event)=>{
            secondNumber=screen.innerHTML;
            screen.innerHTML = event.value;
            console.log(secondNumber);
            }); 
            
        const cal = () => {
        secondNumber=Number(secondNumber);
        firstNumber=Number(firstNumber);
        let output;
        showingVal.innerHTML=`${firstNumber}${Operator}${secondNumber}`;
        if (Operator == '-'){
            screen.innerHTML= firstNumber - secondNumber;
        } else if (Operator == '+'){
            screen.innerHTML= firstNumber + secondNumber;
        } else if (Operator == '*'){
            output= firstNumber - secondNumber;
            screen.innerHTML=output.toFixed(2);
            // screen.innerHTML=firstNumber * secondNumber;
        } else if (Operator == '-' ){
            output= firstNumber - secondNumber;
            screen.innerHTML=output.toFixed(2);
            // screen.innerHTML=firstNumber - secondNumber.toFixed(2);
        } else if (Operator =="/"){
            output= firstNumber - secondNumber;
            screen.innerHTML=output.toFixed(2);
            // screen.innerHTML= firstNumber / secondNumber.toFixed(2);
        }
        else return 0 ;
        };
        eql.addEventListener ("click",cal);  

    
    // with steph..... dont delete
// const screen =document.querySelector("#screen");
    // allButtons.forEach((number) => {
    //         number.addEventListener("click",(event)=>{
    //          screen.innerHTML += number.value;
    //          console.log (number.value);
    //          document.getElementById("result").innerHTML= number.value;
    //         })});

