let firstNumber = 0;
let secondNumber = 0;

firstNumber = prompt("write the first number: ");
secondNumber = prompt("write the second number: ");

function Add(firstNumber, secondNumber){
    return(firstNumber + secondNumber);
}

function Substract(firstNumber, secondNumber){
    return (firstNumber - secondNumber);
}

function Multiply(firstNumber, secondNumber){
    return (firstNumber * secondNumber);
}

function Divide(firstNumber, secondNumber){
    return console.log(firstNumber / secondNumber);
}

Divide(firstNumber, secondNumber);
