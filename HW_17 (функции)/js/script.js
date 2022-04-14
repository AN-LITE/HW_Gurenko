'use strict'

let string = 'hello';
let number = 19;
let symbol = '+';
let boolean;
let answer;


function padString(str ,num , sym , bool = true){

    if (typeof str !== 'string'|| str === ''){
        return console.log('some error in the str')
    }

     if (typeof num !== 'number' || num === ''){
        return console.log('some error in the num')
    }
    
    if (typeof sym !== 'string' && sym.length === 1){
        return console.log('some error in the sym')

    } if(num < str.length){

        answer = str.substr(0, num);

        return console.log(answer);
    
    }else{


        let symLong = num - str.length;

            symbol = symbol.repeat(symLong );

        if (boolean === true){

            answer = `${string}${symbol}`;

            return console.log(answer);

        }else if(boolean === false) {

            answer = `${symbol}${string}`;

            return console.log(answer);

        }

    }
    
    
}

padString (string, number, symbol, boolean);

// console.log (padString);


