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
// #4 Demerit points

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

// #5 Even / odd numbers

showNumbers(10);

function showNumbers(limit) {
    for(let i = 0; i <= limit; i++) {
        if ((i % 2) === 1) console.log(i + ' "ODD"');

        else console.log(i + ' "EVEN"');
    }
}

// #6 Count Truthy

const array = [0, null, undefined, null, null, 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}

// #7 String properties

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (let property in obj) {
        if (typeof movie[property] === 'string') console.log(property, movie[property]);
    }
}