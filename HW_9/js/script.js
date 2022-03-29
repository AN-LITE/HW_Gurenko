'use strict'

// Задание 1

// if(numOrStr === null) {
//     console.log('вы отменили')
// } else if( numOrStr.trim() === '' ) {
//     console.log('Empty String');
// } else if( isNaN( +numOrStr ) ) {
//     console.log(' number is Ba_NaN');
// }



if (numOrStr === null || numOrStr.trim() === ''|| isNaN( +numOrStr)){
    console.log (lol);
} else {
    (console.log('OK!'));
}
    

// Задание 2

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if(numOrStr === null) {
//     console.log('вы отменили')
// } else if( numOrStr.trim() === '' ) {
//     console.log('Empty String');
// } else if( isNaN( +numOrStr ) ) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }



let numOrStr = prompt('input number or string');
console.log(numOrStr)


switch (numOrStr) {

    case null :
        console.log('вы отменили');
        break; 

    case '' :
        console.log ('Empty String');
        break; 

    case isNaN +numOrStr :
        console.log (' number is Ba_NaN')
        break; 
        
    default:
        console.log( 'OK!' );

}


