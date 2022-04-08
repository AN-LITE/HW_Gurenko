'use strist'

let num = +prompt('Введите число')

let result;

if (num < 1) {
    alert(NaN);
} else if (num === 1) {
    result = num;
    alert(result);
    
}else{
    for (i = 2; i <= num; i++) {
        if (num % i === 0) {
            result = i;
            break;
        } else if (i === num) {
            result = num;
        }
    }
    alert(result);
} 



