function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num2 == 0 ? "Cant divide by zero" : num1 / num2;
}

function flipSign(num1){
    return num1 * -1;
}

function operate(operator,num1,num2){

    num1 = Number(num1);
    num2 = Number(num2);
    

    switch (operator)
    {
        case "+":
            return add(num1,num2);
            
        case "÷":
            return divide(num1,num2);
            
        case "x":
            return multiply(num1,num2);
            
        case "-":
            return subtract(num1,num2);
        case "±":
            return flipSign(num1)
    }
}
var newValue = "";
var previousValue = "";
var operator;

const digitBtns = document.querySelectorAll(".digit");
const currentDisplay = document.querySelector(".bottom");
const operatorBtns = document.querySelectorAll(".operator");
const enterBtn = document.querySelector("#enter");
const flipSignBtn = document.querySelector("#plus-minus");


digitBtns.forEach((button)=>{
    button.addEventListener("click",()=>{
        //if active operator then enter 2nd value
        if (operator){
            newValue += button.textContent;
            currentDisplay.textContent = newValue;
        } else {
            previousValue += button.textContent;
            currentDisplay.textContent = previousValue;
        }
    })
})

//set operator
operatorBtns.forEach((button)=>{
    button.addEventListener("click",()=>{
        if (operator){
            compute();
        }
        operator = button.textContent;
    })
})


flipSignBtn.addEventListener("click",(button)=>{
    operator = flipSignBtn.textContent;
    compute();
})


enterBtn.addEventListener("click",compute)

//reset
function clearDisplay(){
    currentDisplay.textContent = "";
    previousValue = "";
    newValue = "";
    operator = null;
}

function compute(){
    previousValue = operate(operator,previousValue,newValue)
    newValue = "";
    currentDisplay.textContent = previousValue;
    operator = null;
}

