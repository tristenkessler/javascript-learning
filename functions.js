
function walk() {
    console.log('walk');
}

let run = function() {
    console.log('run');
};
move = run;
run();
move();

function sum() {
    let total = 0;
    for (let value of arguments)
        total += value
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6))