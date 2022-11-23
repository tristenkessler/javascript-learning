
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
        if (typeof value !== 'string') 
            throw new Error('Value is not a string.');
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name')
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person1.fullName = '';
}
catch (e) {
    alert(e);
}

console.log(person1);


