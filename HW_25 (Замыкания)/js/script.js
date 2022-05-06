'use strict'

function sum (n) {

    return function (num){

        return n + num 
    }

}


const sumResult = sum(3);

console.log(3);
console.log(sumResult(5));
console.log(sumResult(20));



