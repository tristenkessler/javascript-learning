
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw();

// Factories
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle0 = createCircle(1);

// Constructor Function
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    let computeOptimumLocation = function(factor) {
        // ...
    }

    this.draw = function() {
        computeOptimumLocation(0.1);
        // defaultLocation
        // this.radius

        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y)
                throw new Error('Invalid location.');

            defaultLocation = value;
        }
    });
}
const another1 = new Circle(1);
Circle.call({}, 1);
Circle.apply({}, [1, 2 , 3]);

// Primatives copied by value
// Objects copied by reference

for (let key in circle) {
    if (typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

