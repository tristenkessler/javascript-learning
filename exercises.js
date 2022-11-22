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
// Demerit points

console.log(checkSpeed(125));

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5
    const pointsToSuspend = 12

    points = Math.floor((speed - speedLimit)/ kmPerPoint);

    if (points <= 0) return 'Ok';

    if (points > pointsToSuspend) return 'License suspended';

    else return ('Point: ' + points);
}

// Even / odd numbers

showNumbers(10);

function showNumbers(limit) {
    for(let i = 0; i <= limit; i++) {
        if ((i % 2) === 1) console.log(i + ' "ODD"');

        else console.log(i + ' "EVEN"');
    }
}