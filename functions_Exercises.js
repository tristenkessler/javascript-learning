
console.log(sum([1, 2, 3, 4], [5, 6, 7, 8, 9, 10]));

function sum(...args) {
    let total = 0;
    for (let value of arguments) {
        if(Array.isArray(value)){
            let valueTotal = 0
            for (let item of value)
                valueTotal += item;
            total += valueTotal;
        }
        else
            total += value;
    }
    return total;
}
