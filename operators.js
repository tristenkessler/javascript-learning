
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


// Logical AND (&&)
console.log(true && true);
console.log(true && false);

// Logical OR (||)
console.log(true || true);
console.log(true || False);

// NOT (!)
console.log(!true);
console.log(!false);

// Falsy (false)
// undefined, null, 0, false, '', NaN

// Anything that is not falsy -> truthy

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);


console.log(1 | 2);
console.log(1 & 2);

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);

x = 2 + 3 * 4;

console.log(x);

let a = 'red';
let b = 'blue';

x = a;
a = b;
b = x;

console.log(a);
console.log(b);
