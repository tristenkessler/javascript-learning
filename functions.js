
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


function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest(10000))


const person1 = {
    firstName: 'Tristen',
    lastName: 'Kessler',
    get fullName() {
        return `${person1.firstName} ${person1.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person1.fullName = 'John Smith';

console.log(person1);