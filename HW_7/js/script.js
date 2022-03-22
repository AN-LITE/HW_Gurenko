'use stric'

const question = prompt ('Что мне посчитать для тебя? Выбирай : plus, minus, multiply, divide ');

const plus = 'plus';
const minus = 'minus';
const multiply = 'multiply';
const divide = 'divide';

let firstNumber = prompt ('First Number', '')
firstNumber = Number (firstNumber);

let secondNumber = prompt ('Second Number', '')
secondNumber = Number (secondNumber);

let plusResault = Number (firstNumber) + Number (secondNumber);
let minusResault = Number (firstNumber) - Number (secondNumber);
let multiplyResault = Number (firstNumber) * Number (secondNumber);
let divideResault = Number (firstNumber) / Number (secondNumber);

if (question === plus){
    alert (`${firstNumber} + ${secondNumber} = ${plusResault}`);
}

else if (question === minus){
    alert (`${firstNumber} - ${secondNumber} = ${minusResault}`);
}

else if (question === multiply){
    alert (`${firstNumber} * ${secondNumber} = ${multiplyResault}`);
}

else if (question === divide){
    alert (`${firstNumber} / ${secondNumber} = ${divideResault}`);
}






 

