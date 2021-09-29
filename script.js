let secondNumber = 0;

/*firstNumber = prompt("write the first number: ");
operator = prompt("Write the name of the operator that you want to use: ");
secondNumber = prompt("write the second number: ");*/

const screenDisplay = document.getElementById('screen-display');
let firstNumber = screenDisplay.textContent;
const AC = document.getElementById('AC');
const symbols = document.getElementById('symbols');

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
    screenDisplay.textContent += "0";
    firstNumber = screenDisplay.textContent;
});
one.addEventListener('click', e=>{
    screenDisplay.textContent += "1";
    firstNumber = screenDisplay.textContent;
});
two.addEventListener('click', e=>{
    screenDisplay.textContent += "2";
    firstNumber = screenDisplay.textContent;
});
three.addEventListener('click', e=>{
    screenDisplay.textContent += "3";
    firstNumber = screenDisplay.textContent;
});
four.addEventListener('click', e=>{
    screenDisplay.textContent += "4";
    firstNumber = screenDisplay.textContent;
});
five.addEventListener('click', e=>{
    screenDisplay.textContent += "5";
    firstNumber = screenDisplay.textContent;
});
six.addEventListener('click', e=>{
    screenDisplay.textContent += "6";
    firstNumber = screenDisplay.textContent;
});
seven.addEventListener('click', e=>{
    screenDisplay.textContent += "7";
    firstNumber = screenDisplay.textContent;
});
eight.addEventListener('click', e=>{
    screenDisplay.textContent += "8";
    firstNumber = screenDisplay.textContent;
});
nine.addEventListener('click', e=>{
    screenDisplay.textContent += "9";
    firstNumber = screenDisplay.textContent;
});

//Operators
AC.addEventListener('click', e=>{
    screenDisplay.textContent = "";
});

symbols.addEventListener('click', e=>{
    if(screenDisplay.textContent[0] == "-"){
        screenDisplay.textContent = screenDisplay.textContent.substring(1);
    }else{
        screenDisplay.textContent = screenDisplay.textContent[0] = "-" + screenDisplay.textContent; 
    }
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

