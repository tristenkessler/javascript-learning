
// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log('draw');
//     }
// }

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {}
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle(1);


// Function Declaration
function sayHello() {}

// Function Expression
const sayGoodbye = function() {};
const number = 1;

// Class Declaration
class Circle {
}

// Class Expression
const Square = class {
};