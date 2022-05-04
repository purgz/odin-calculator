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

function power(num1,num2){
    return Math.pow(num1,num2);
}

function sqrt(num1){
    return Math.sqrt(num1);
}

function factorial(num1){
    let factorial = 1;
    for (let i = 1; i <= num1; i ++){
        factorial *= i;
    }
    return factorial;
}

function log(num1){
    return Math.log(num1);
}

function logb10(num1){
    return Math.log10(num1);
}

function operate(operator,num1,num2){

    num1 = Number(num1);
    num2 = Number(num2);
    
    topDisplay.textContent = "";
    topDisplay.textContent +=`${num1} ${operator} ${num2}`;

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
            topDisplay.textContent = "";
            return flipSign(num1)
        case "^":
            return power(num1,num2);
        case "!":
            topDisplay.textContent = num1 + operator;
            return factorial(num1);
        case "√":
            topDisplay.textContent = operator + num1;
            return sqrt(num1);
        case "ln":
            topDisplay.textContent = `${operator}(${num1})`
            return log(num1);
        case "log":
            topDisplay.textContent = `${operator}(${num1})`
            return logb10(num1);
    }
}
var newValue = "";
var previousValue = "";
var operator;

const digitBtns = document.querySelectorAll(".digit");
const currentDisplay = document.querySelector(".bottom");
const topDisplay = document.querySelector(".top");
const operatorBtns = document.querySelectorAll(".operator");
const enterBtn = document.querySelector("#enter");
const singleOpBtns = document.querySelectorAll(".singleOperator");
const deleteBtn = document.querySelector("#delete");

deleteBtn.addEventListener("click",()=>{
    previousValue = previousValue.toString().substring(0,previousValue.toString().length-1);
    currentDisplay.textContent = previousValue;
})

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

singleOpBtns.forEach((button)=>{
    button.addEventListener("click", ()=>{
        operator = button.textContent;
        compute();
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

enterBtn.addEventListener("click",compute)

//reset
function clearDisplay(){
    currentDisplay.textContent = "";
    topDisplay.textContent = "";
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

