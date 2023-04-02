let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

// As stringArr defined with string onlyy so it accepts string only and guitars array has strin and number both type so accepts both
stringArr[0]='Shaik'
guitars.push(12)

const test=[]  //accepts any type of data
let bands:string[]=[]
bands.push('amin')
console.log(bands)

// Tuple :=specific position a ki type  data boshbey shei jnno
let myTuple: [string, number, boolean] = ['Dave', 42, true]

myTuple[0]="shah"

console.log(myTuple)


// Objects with TS

interface User {
    name:String;
    age:Number|String;
    id:(String)[]
}

// Now create object
const user1:User={
    name:"shaik",
    age:31,
    id:['1']
}

const user2:User={
    name:"Mewao",
    age:'22',
    id:['2']
}

console.log(user1,user2)

// Here object interface created but name? means obj with using the interface can have name parameter or not
interface Guitarist {
    name?: string,   //property optional
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    active: true,
    albums: ['I', 'II', 'IV']
}

console.log(evh,jp)


//function

const testFuntion=(payload:Guitarist)=>{
    console.log(`name of the albums: ${payload?.albums}`)
}

testFuntion(jp)



// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
    U = 100,
    D,
    C,
    B,
    A,
}

console.log(Grade.C)
