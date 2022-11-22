// #1 Max of two numbers

let number = max(3, 2);
console.log(number);

function max(numOne, numTwo) {
    return (numOne > numTwo) ? numOne: numTwo;
}

// #2 is landscape or portrait

console.log(isLandscape(1,2))

function isLandscape(width, height) {
    return (width > height);
}

// #3 FizzBuzz

console.log(fizzBuzz('p'));

function fizzBuzz(input) {
    if (!Number(input)) return 'Not a number';

    if (input % 15 === 0) return 'FizzBuzz';

    if (input % 3 === 0) return 'Fizz';

    if (input % 5 === 0) return 'Buzz';

    return input;
}