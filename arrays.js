
const numbers = [3, 4];

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

//Middle
numbers.splice(2, 0, 'a', 'b')

console.log(numbers)

// Finding Elements

const numbers1 = [1, 2, 3, 4];
console.log(numbers1.indexOf('1'));
console.log(numbers1.indexOf(1, 2));

console.log(numbers1.includes(1));

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

const course = courses.findIndex(function(course) {
// const course = courses.findIndex(course => course.name === 'a');

    return course.name === 'a';
});

console.log(course)

// Remove elements 

// End
const last = numbers.pop();

// Beginning
const first = numbers.shift();

// Middle
numbers.splice(1,1);
console.log(numbers)

