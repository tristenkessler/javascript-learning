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