let userName: string;
let age: number;
let loading: boolean;
let test: any;
userName = "Amin";
userName = "Tofayel";
age = 24;
loading = true;
test = "shah";

console.log(userName, age, loading, test);

// function
function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(2, 2));

// Union type
let newName: string | number;

newName = 420;
console.log("using union type", newName);

// reg exp
let re: RegExp = /\w+/g;

console.log(re);
