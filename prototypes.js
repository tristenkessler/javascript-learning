function Circle(radius) {
    // Instance member
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }
}

const c1 = new Circle(1);

//Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}
// Returns instance members
console.log(Objects.keys(c1))

// Returns all members (instance + prototype)
for (let key in c1) console.log(key);

Array.prototype.shuffle = function() {
    // ...
}

const array = [];
array.shuffle();
// Don't modify objects you don't own!!!

// *** PROTOTYPICAL INHERITANCE ***

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this,color);

    this.radius = radius;
}

extent(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('draw');
}

function Square(size) {
    this.size = size;
}

extent(Square, Shape);

const s = new Shape;
const c = new Circle(1, 'red');