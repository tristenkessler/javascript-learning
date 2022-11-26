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

