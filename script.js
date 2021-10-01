var operator;
var firstNumber="";
var secondNumber=""; 

const screenDisplay = document.getElementById('screen-display');
const AC = document.getElementById('AC');
const symbols = document.getElementById('symbols');
const add = document.getElementById('add');
const substract = document.getElementById('substract');
const equal = document.getElementById('equal');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const modular = document.getElementById('modular');
const dot = document.getElementById('dot');

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
        if(screenDisplay.textContent.length < 12){
            screenDisplay.textContent += "0";
        }
        secondNumber = screenDisplay.textContent;
    });
    one.addEventListener('click', e=>{
        if(screenDisplay.textContent.length < 12){
            screenDisplay.textContent += "1";
        }
        secondNumber = screenDisplay.textContent;
    });
    two.addEventListener('click', e=>{
        if(screenDisplay.textContent.length < 12){
            screenDisplay.textContent += "2";
        }
        secondNumber = screenDisplay.textContent;
    });
    three.addEventListener('click', e=>{
        if(screenDisplay.textContent.length < 12){
            screenDisplay.textContent += "3";
        }
        secondNumber = screenDisplay.textContent;
    });
    four.addEventListener('click', e=>{
        if(screenDisplay.textContent.length < 12){
            screenDisplay.textContent += "4";
        }
        secondNumber = screenDisplay.textContent;
    });
    five.addEventListener('click', e=>{
        if(screenDisplay.textContent.length < 12){
            screenDisplay.textContent += "5";
        }
        secondNumber = screenDisplay.textContent;
    });
    six.addEventListener('click', e=>{
        if(screenDisplay.textContent.length < 12){
            screenDisplay.textContent += "6";
        }
        secondNumber = screenDisplay.textContent;
    });
    seven.addEventListener('click', e=>{
        if(screenDisplay.textContent.length < 12){
            screenDisplay.textContent += "7";
        }
        secondNumber = screenDisplay.textContent;
    });
    eight.addEventListener('click', e=>{
        if(screenDisplay.textContent.length < 12){
            screenDisplay.textContent += "8";
        }
        secondNumber = screenDisplay.textContent;
    });
    nine.addEventListener('click', e=>{
        if(screenDisplay.textContent.length < 12){
            screenDisplay.textContent += "9";
        }
        secondNumber = screenDisplay.textContent;
    });

    symbols.addEventListener('click', e=>{
        if(screenDisplay.textContent.length < 12){
            if(screenDisplay.textContent[0] == "-"){
            screenDisplay.textContent = screenDisplay.textContent.substring(1);
            }else{
            screenDisplay.textContent = screenDisplay.textContent[0] = "-" + screenDisplay.textContent; 
            }
        }
    });
    dot.addEventListener('click', e=>{
        if(screenDisplay.textContent.length < 12){
            if(!screenDisplay.textContent.includes(".")){
                screenDisplay.textContent += ".";
                console.log("right!");
            }
        }
    });


//Operators
AC.addEventListener('click', e=>{
    screenDisplay.textContent = "";
    firstNumber = "";
    secondNumber = "";
});
add.addEventListener('click', e=>{
    firstNumber = screenDisplay.textContent;
    screenDisplay.textContent = "";
    operator = "Add";
});
substract.addEventListener('click', e=>{
    firstNumber = screenDisplay.textContent;
    screenDisplay.textContent = "";
    operator = "Substract";
});
multiply.addEventListener('click', e=>{
    firstNumber = screenDisplay.textContent;
    screenDisplay.textContent = "";
    operator = "Multiply";
});
divide.addEventListener('click', e=>{
    firstNumber = screenDisplay.textContent;
    screenDisplay.textContent = "";
    operator = "Divide";
});
modular.addEventListener('click', e=>{
    firstNumber = screenDisplay.textContent;
    operator = "Modular";
    Operate(operator, firstNumber, secondNumber);
});
equal.addEventListener('click', e=>{
    Operate(operator, firstNumber, secondNumber);
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
        break;
        case "Modular": Modular(firstNumber);
        break;
    }
}

function Add(firstNumber, secondNumber){
    //Converts the strings to numbers to prevent a concatanation
    firstNumber = firstNumber * 1;
    secondNumber = secondNumber * 1;
    return screenDisplay.textContent = firstNumber + secondNumber;
}

function Substract(firstNumber, secondNumber){
    return screenDisplay.textContent = firstNumber - secondNumber;
}

function Multiply(firstNumber, secondNumber){
    return screenDisplay.textContent = firstNumber * secondNumber;
}

function Divide(firstNumber, secondNumber){
    return screenDisplay.textContent = firstNumber / secondNumber;
}

function Modular(firstNumber){
    return screenDisplay.textContent = firstNumber / 100;
}

