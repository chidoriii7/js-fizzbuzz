

const containerDOM = document.querySelector('div.container');

// - ciclo for per stampare in console numeri da 1 a 100
for (let number = 1; number <= 100; number++ ){
    
    //aggiungere una casella per ogni giro del ciclo for
    const divElement  = document.createElement('div')
    
    
    if (number % 3 === 0 && number % 5 === 0) {
        
        
        containerDOM.append(divElement)
        divElement.append(number)
        // (colore rosso)
        divElement.classList.add('box')
        console.log('FizzBuzz');


        // - se il numero è divsibile per 3 stampare "fizz"
    } else if (number % 3 === 0) {
        
    
        containerDOM.append(divElement)
        divElement.append('Fizz')
        // -(colore verde chiaro)
        divElement.classList.add('box')
        console.log('fizz');
        
        
        // - se il numero è divisibile per 5 stampare "buzz"
    } else if (number % 5 === 0) {
        
        containerDOM.append(divElement)
        divElement.append('Buzz')


        // (colore giallo)
        divElement.classList.add('box')

        console.log('buzz');

    } else {
        containerDOM.append(divElement)
        divElement.append(number)

        //colore azzurro
        divElement.classList.add('box')
        console.log(number);

    }

}