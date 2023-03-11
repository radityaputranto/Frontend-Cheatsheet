/* 
DESTRUCTURING ASSIGNMENT
extrack array / object to individual variable
*/
const hobbies = ['drawing', 'painting'];
//const [first, second] = ['drawing', 'painting'];
const [first, second] = hobbies;
console.log(first);
console.log(second);

//const car = {
const { name: carName, manafacture, topSpeed } = {
    name: 'Civic',
    manafacture: 'Honda',
    topSpeed: '180kmph'
}
console.log(carName, manafacture, topSpeed);