"use strict";
//Type Aliases and Interface
const userName = 'Shaik';
console.log(userName);
const createNewUser = (user) => {
    console.log('user Info', user);
};
createNewUser({
    name: 'Shaik',
    email: 'sha@gmail.com',
    age: 25,
    jobDetail: 'Software Engineer'
});
