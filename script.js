let firstNumber = 0;
let secondNumber = 0;

/*firstNumber = prompt("write the first number: ");
operator = prompt("Write the name of the operator that you want to use: ");
secondNumber = prompt("write the second number: ");*/

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

Operate(operator, firstNumber, secondNumber);