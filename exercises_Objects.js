
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

// Object equality

let myAddress2 = createAddress('My Street', 'Des Moines', 50316);

function areEqual(address1, address2) {
    for(key in address1) {
        if (address1[key] !== address2[key])
            return false;
    }
    return true;
}
function areSame(address1, address2) {
    return address1 === address2;
}
console.log(areEqual(myAddress,myAddress2));
console.log(areSame(myAddress,myAddress2));



// Blog post object

let blogPost = {
    title: 'My Blog Post',
    body: 'Writing about emotions!?!',
    author: 'me',
    views: 100,
    comments: [
        {author: 'someoneAweful',body: 'You Suck!!!'},
        {author: 'BKGiraffes',body: 'Great post hope to hear from you again!!'},
    ],
    isLive: false
}
console.log(blogPost);