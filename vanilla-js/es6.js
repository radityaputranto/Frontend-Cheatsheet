//ARROW FUNCTION
const increment = x => x + 1;
//equal with function below
const incrementDefault = function (x) {
    return x + 1;
}

//arrow function without argument
const logSomething = () => console.log("Testing");
logSomething();
//arrow function with argument
const multiply = (x, y) => console.log(x * y);
multiply(3, 2);

//arrow function multiple line
const isCheckAge = (n) => {
    if (n <= 17) {
        return false;
    }
    return true;
}
console.log(isCheckAge(10));

/* ------------------------------------------------- */
//SPREAD SYNTAX
//using "..." to concat array to another array
let numbers = [3, 4];
let anotherNumebrs = [1, 2, ...numbers, 5, 4];
console.log(anotherNumebrs);

//default apply array
function sumThreeNumbers(a, b, c) {
    return a + b + c;
}
const threeNumber = [2, 5, 76];
sumThreeNumbers.apply(null, threeNumber);
//apply array es6
console.log(...threeNumber);

//assign object to another object
const obj1 = {
    firstname: "jhon",
    lastname: "Lennon"
};
const obj2 = { birthdate: "9 Oktober 1940" };
//const object3 = Object.assign(obj1,obj2);
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

/* ------------------------------------------------- */
//FOR OF METHOD
const forNumbers = [100, 200, 300];
for (const number of forNumbers) {
    console.log(number);
}
const string = 'abcdef';
for (const alphabeth of string) {
    console.log(alphabeth);
}

const numberObj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in numberObj) {
    console.log(`${key} => ${numberObj[key]}`);
}
const forNumbers2 = [50, 100, 150];
for (const key in forNumbers2) {
    console.log(forNumbers2[key]);
}
