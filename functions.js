
function walk() {
    console.log('walk');
}

let run = function() {
    console.log('run');
};
move = run;
run();
move();

// function sum(...args) {
//     let total = 0;
//     for (let value of arguments)
//         total += value
//     return total;
// }

function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum(0.1, 20, 30))


