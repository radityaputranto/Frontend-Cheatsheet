function logAfterTwoSecond() {
    console.log(1);
}
console.log(2);
setTimeout(logAfterTwoSecond, 2000);
console.log(3);

//callback in async
function onButtonClick() {
    console.log('button is clicked');
}
const buttonElement = document.getElementById('button');
buttonElement.addEventListener('click', onButtonClick);