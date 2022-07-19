'use strict';

let cache = new Map();

let arr = [];

const stringtoUpperCase = (str)=> str = str.toUpperCase();

const foo = (arg, callback)=>{

    if(!cache.has(arg)){

        const result = callback(arg);

        cache.set(arg, result);

        arr.push(arg)

        if(arr.length > 10){
            cache.delete(arr[0])
            arr.shift()
           
        }
    }
    return cache.get(arg);
}

foo('key1',stringtoUpperCase);
foo('key2',stringtoUpperCase);
foo('key3',stringtoUpperCase);
foo('key4',stringtoUpperCase);
foo('key5',stringtoUpperCase);
foo('key6',stringtoUpperCase);
foo('key7',stringtoUpperCase);
foo('key8',stringtoUpperCase);
foo('key9',stringtoUpperCase);
foo('key10',stringtoUpperCase);
foo('key11',stringtoUpperCase);

console.log(arr);
console.log(cache);


