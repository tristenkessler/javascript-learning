
function walk() {
    console.log('walk');
}

let run = function() {
    console.log('run');
};
move = run;
run();
move();