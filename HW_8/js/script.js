'use strict'


// Task# 1



Boolean(Number('10')) + 1 ; ответ : Number (2)
'sub' + Number(false);      ответ :'sub0'
16  *  '      91     '  ;   ответ : Number (1456)
true-70 ;                   ответ : Number (-69)
Number(1 + String(1)) + 1;  ответ : Number (12)


// Task# 2

let question = prompt ('Какое количество часов я должен перевести в секунды?');

question =  Number (question) ;

let hour = Number (60) ;

let hourResault = (Number (question) *Number (hour) ) *Number (hour);

alert (hourResault);


// Task #3 

var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);

