'use strict'

// Task #1 

let user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';

delete user.name;

// Task #2

// Можно ли изменить объект, объявленный с помощью const?

// ответ : Объект, объявленный через const, может быть изменён. Объявление const защищает от изменений только саму переменную user, а не её содержимое.


const user = {

  name: "John"

};

// // это будет работать?`

// ответ : да

user.name = "Pete";

// Task #3


let salaries = {

  John: 100,
  
  Ann: 160,
  
  Pete: 130
  
};

let sum = 0;

for (let key in salaries) {

  sum += salaries[key];

};

alert (sum); 

//  alert (salaries.John + salaries.Ann + salaries.Pete);