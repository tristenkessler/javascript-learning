console.log('Hello World');

let name = 'Tristen';
let age = 30;
let isApproved = true;
let firstName = undefined;
let selectedColor = null;
console.log(name);

const interestRate = 0.3;
// interestRate = 1;  "<< bad code"
console.log(interestRate);

let person = {
    name: 'Tristen',
    age: 30
};

person.name = 'John';

let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 4;
console.log(selectedColors.length);

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');
greet('Mary');

function square(number) {
    return number * number;
}

console.log(square(2));