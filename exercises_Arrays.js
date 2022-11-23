
// #1 Array from range
const numbers2 = arrayFromRange(-10, -4);

console.log(numbers2);

function arrayFromRange(min,max){
    const output = [];
    for(let i = min; i <= max; i++)
        output.push(i);
    return output;
}

// #2 Includes

const numbers3 = [1, 1, 2, 3, 4];

// console.log(numbers3.includes(1))
console.log(includes(numbers3, 0))

function includes(array, searchElement) {
    for(i = 0; i < array.length; i++)
        if (array[i] === searchElement)
            return true;
    return false;
}

// #3 Except

const output = except(numbers3, [1, 2]);

console.log(output);

function except(array, excludes) {
    const output = [];
    for(let element of array)
        if (!excludes.includes(element)) 
            output.push(element);
    return output;
}