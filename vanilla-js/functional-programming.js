
/* ------------------------------------------------- */
//NON FUNCTIONAL PROGRAMING
// will effect change global variable
const numbers2 = [1, 2, 3, 4, 5];
let totalSum = 0;
function sum() {
    for (let index = 0; index < numbers2.length; index++) {
        totalSum = totalSum + numbers2[index];
        //side effect change global variable "totalSum"
    }
}
sum();
console.log(totalSum);

/* ------------------------------------------------- */
//FUNCTIONAL PROGRAMING
/* 
input will give same output
no need declare global variable 
using higher order function like "map, filter, reduce, find"
*/
function sum2(nums) {
    const initial = 0;
    const output = nums.reduce((prev, current) => {
        console.log(prev);
        return prev + current;
    }, initial);

    return output;
}
const numbers3 = [1, 2, 3, 4, 5];
const totalSum2 = sum2(numbers3);

/* example using filter */
const students = [
    { name: 'Jhon', age: 15 },
    { name: 'Doe', age: 18 },
    { name: 'Wick', age: 12 },
    { name: 'Martin', age: 20 },
]
const output = students.filter(student => student.age > 17);
console.log(output);

/* example using map */
const outputMap = students.map(student => `Nama: ${student.name} | Usia: ${student.age}`);
console.log(outputMap)

/* example reduce */
const sumAges = students.reduce((prev, current) => prev + current.age, 0);
console.log(sumAges);
const averageAge = sumAges / students.length;
console.log(averageAge);

/* example currying */
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(2)(2));

const generateURL = (protocol) => (hostname) => (page) => {
    return `${protocol}${hostname}${page}`;
}
const mainDomain = generateURL('http://')('domain.com');
const loginPage = mainDomain('/login');
const registPage = mainDomain('/regist-user');
console.log(loginPage);
console.log(registPage);