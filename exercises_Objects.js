
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

// #2 Factory and Constructor Functions
// Factory ^^^

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
const myNewAddress = new Address('My Street', 'Des Moines', 50316);

console.log(myNewAddress);