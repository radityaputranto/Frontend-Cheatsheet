/* example Callback*/
/* function greeting(name) { //declare callback
    alert('hello ' + name);
}
function processUserInput(callback) { //declare call function
    var name = prompt('Please enter your name.');
    callback(name);
}
processUserInput(greeting); //throw callback as argument
 */

/* style 2 writing callback  using anonymous function*/
/* 
using anonymus
processUserInput(function (name){
    alert('Hello '+name);
});
 */

/* style 3 writing callback  using arrow function*/
const processUserInput = (callback) => {
    var name = prompt('Please enter your name.');
    callback(name);
};

processUserInput((name) => {
    alert('Hello ' + name);
});


/* customize build in function with callback */
/* default function */
var list = ['celana', 'sabuk', 'alas kaki', 'baju'];
sorted = list.sort();
console.log(sorted);

/* build in function witout callback */
var number = [1, 30, 4, 21, 10000];
sortedNumber = number.sort();
console.log(sortedNumber); //output: 1,1000,21,30,4

/* build in function with callback */
function compareNumbers(a, b) {
    return a - b;
}
sortedNumberCallback = number.sort(compareNumbers);  //output: 1,4,21,30,1000
console.log(sortedNumberCallback);
/* refactor code */
console.log(number.sort((a, b) => a - b));