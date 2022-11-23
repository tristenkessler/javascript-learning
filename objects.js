
function createCircle(radius) {
    return {
        radius, // = radius: radius,
        draw() { // = draw: function() {}
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

