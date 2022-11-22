
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment (++)
console.log(++x);
console.log(x++);
console.log(x);

// Decrement (--)
console.log(--x);
console.log(x--);
console.log(x);

x = 10;

x = x - 5;
x += 5;

x = x * 5;
x /= 5;

x = 1;

console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

console.log(x === 1);
console.log(x !== 1);

console.log(x === '1');
console.log(x == true);
console.log(x == '1');
console.log('1' == true);


// If a costomer has more than 100 points,
// they are 'gold' costomer, otherwise,
// they are a 'silver' costomer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);
