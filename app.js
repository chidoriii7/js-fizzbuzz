// - ciclo for per stampare in console numeri da 1 a 100
// - se il numero è divsibile per 3 stampare "fizz"
// -(colore verde chiaro)
// - se il numero è divisibile per 5 stampare "buzz"
// (colore giallo)
// - se il numero è divisibile sia per 3 che per 5 stampare "fizzbuzz"
// (colore rosso)

for (let number = 1; number <= 100; number++ ){
    
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('fizzbuzz')
    } else if (number % 3 === 0) {
        console.log('fizz')
    } else if (number % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(number)
    }

}