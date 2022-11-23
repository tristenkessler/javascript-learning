
// #1 Address Object

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

function showAddress(address) {
    for(let index in address) {
        console.log(index, address[index]);
    }
}

let myAddress = createAddress('My Street', 'Des Moines', 50316);

showAddress(myAddress);

