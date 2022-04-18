'use strict'

let string = 'hello';
let number = 19;
let symbol = '+';
let boolean;


function padString(str ,num , sym , bool = true){

    if (typeof str !== 'string'|| str === '') return console.log('some error in the str');

    if (typeof num !== 'number' || num === '') return console.log('some error in the num');

    if (typeof sym !== 'string' && sym.length === 1) return console.log('some error in the sym')

    if(num < str.length) return str.substr(0, num);

    let symLong = num - str.length;

    let res = symbol.repeat(symLong) 

    return bool ?str + res : res + str
   
    
}

const res = padString (string, number, symbol);

console.log(res);
