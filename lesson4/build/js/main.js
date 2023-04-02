"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
// As stringArr defined with string onlyy so it accepts string only and guitars array has strin and number both type so accepts both
stringArr[0] = 'Shaik';
guitars.push(12);
const test = []; //accepts any type of data
let bands = [];
bands.push('amin');
console.log(bands);
// Tuple :=specific position a ki type  data boshbey shei jnno
let myTuple = ['Dave', 42, true];
myTuple[0] = "shah";
console.log(myTuple);
// Now create object
const user1 = {
    name: "shaik",
    age: 31,
    id: ['1']
};
const user2 = {
    name: "Mewao",
    age: '22',
    id: ['2']
};
console.log(user1, user2);
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    active: true,
    albums: ['I', 'II', 'IV']
};
console.log(evh, jp);
//function
const testFuntion = (payload) => {
    console.log(`name of the albums: ${payload === null || payload === void 0 ? void 0 : payload.albums}`);
};
testFuntion(jp);
// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 100] = "U";
    Grade[Grade["D"] = 101] = "D";
    Grade[Grade["C"] = 102] = "C";
    Grade[Grade["B"] = 103] = "B";
    Grade[Grade["A"] = 104] = "A";
})(Grade || (Grade = {}));
console.log(Grade.C);
