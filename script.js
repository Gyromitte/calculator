let firstNumber = 0;
let secondNumber = 0;

/*firstNumber = prompt("write the first number: ");
operator = prompt("Write the name of the operator that you want to use: ");
secondNumber = prompt("write the second number: ");*/

//Reference to elements
const screenDisplay = document.getElementById('screen-display');
const AC = document.getElementById('AC');

const cero = document.getElementById('last-button');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

//Events
cero.addEventListener('click', e=>{
    screenDisplay.textContent = "0";
});
one.addEventListener('click', e=>{
    screenDisplay.textContent = "1";
});
two.addEventListener('click', e=>{
    screenDisplay.textContent = "2";
});
three.addEventListener('click', e=>{
    screenDisplay.textContent = "3";
});
four.addEventListener('click', e=>{
    screenDisplay.textContent = "4";
});
five.addEventListener('click', e=>{
    screenDisplay.textContent = "5";
});
six.addEventListener('click', e=>{
    screenDisplay.textContent = "6";
});
seven.addEventListener('click', e=>{
    screenDisplay.textContent = "7";
});
eight.addEventListener('click', e=>{
    screenDisplay.textContent = "8";
});
nine.addEventListener('click', e=>{
    screenDisplay.textContent = "9";
});


function Operate(operator, firstNumber, secondNumber){
    switch (operator){
        case "Add": Add(firstNumber, secondNumber);
        break;
        case "Substract": Substract(firstNumber, secondNumber);
        break;
        case "Multiply": Multiply(firstNumber, secondNumber);
        break;
        case "Divide": Divide(firstNumber, secondNumber);
    }
}

function Add(firstNumber, secondNumber){
    return(firstNumber + secondNumber);
}

function Substract(firstNumber, secondNumber){
    return console.log(firstNumber - secondNumber);
}

function Multiply(firstNumber, secondNumber){
    return (firstNumber * secondNumber);
}

function Divide(firstNumber, secondNumber){
    return (firstNumber / secondNumber);
}

