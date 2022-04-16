'use strict'

let a;
let b;

function degree (callback){

   a = +prompt ('Введите число');
   b = +prompt ('Введите степень');

   alert (`Число ${a} Cтепень ${b}`)

   return callback (a,b)

}

function exponentiation (a,b){


   let result;

   result = a**b


   alert (result);
}

degree (exponentiation);



// Доп. задание



// let a;
// let b;

// function degree (callback){

//    a = +prompt ('Введите число');
//    b = +prompt ('Введите второе число');

//    alert (` ${a} умножаем на ${b}`)

//    return callback (a,b)

// }


// function multiplay (a,b){

//    let result;

//    result = a * b


//    alert (result);

// }
// degree (multiplay );



// let a;
// let b;

// function degree (callback){

//    a = +prompt ('Введите число');
//    b = +prompt ('Введите второе число');

//    alert (` ${a} делим на ${b}`)

//    return callback (a,b)

// }


// function division (a,b){

//    let result;

//    result = a / b


//    alert (result);

// }
// degree (division);


// let a;
// let b;

// function degree (callback){

//    a = +prompt ('Введите число');
//    b = +prompt ('Введите второе число');

//    alert (` ${a} остаток от деления  ${b}`)

//    return callback (a,b)

// }


// function modulo(a,b){

//    let result;

//    result = a %  b


//    alert (result);

// }
// degree (modulo);



