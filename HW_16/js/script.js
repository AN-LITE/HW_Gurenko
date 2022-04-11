'use strict'

let num = prompt('Введите число')
let degree = prompt ('Введите степерь')

let result;

function pow(num, degree) {

  if  (isNaN (num)|| isNaN(degree) ) {
    return alert ('some error')

  }else if (num >= 1 || degree >= 1){
    result = num ** degree;
    return alert('вот эта ' + result);

  }else {
    alert ('ты по-моему перепутал')

  }
    
}
pow(num, degree)

