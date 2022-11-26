
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

// #4 Moving an Element

const output1 = move(numbers3, 0, 7)

console.log(output1);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output;
}