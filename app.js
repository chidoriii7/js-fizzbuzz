//fizzbuzz

const maxNumber = 100;
const containerDOMElement = document.getElementById('container')

for (let number = 1; number <= maxNumber; number++) {

    if (number % 3 === 0 && number % 5 === 0) {
        containerDOMElement.innerHTML += '<div class="box box--fizzbuzz" > fizzbuzz </div>';
    } else if (number % 5 === 0 ){
        containerDOMElement.innerHTML += '<div class="box box--buzz" > buzz </div>';
    } else if (number % 3 === 0) {
        containerDOMElement.innerHTML += '<div class="box box--fizz"> fizz </div>';
    } else {
        containerDOMElement.innerHTML += '<div class="box"> ${mumber} </div>';
    }
}