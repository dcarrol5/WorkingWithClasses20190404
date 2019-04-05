//import Person from './person' ES6

var Person = require('./Person.js');

var employee1 = new Person('Alberto', 'Botero', 47)

employee1._age = 'Forty-Seven'
console.log(`${employee1.firstName} is ${employee1.age} years old.`)
console.log(employee1);