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
            
    }
}

var displayValue = "";
var acc = null;
var operator;

const digitBtns = document.querySelectorAll(".digit");
const currentDisplay = document.querySelector(".bottom");
const operatorBtns = document.querySelectorAll(".operator");

digitBtns.forEach((button)=>{
    button.addEventListener("click",()=>{
        displayValue += button.textContent;
        currentDisplay.textContent = displayValue;
    })
})

operatorBtns.forEach((button)=>{
    button.addEventListener("click",()=>{
       
    })
})

function clearDisplay(){
    displayValue = "";
    currentDisplay.textContent = "";
    acc = null;
}
