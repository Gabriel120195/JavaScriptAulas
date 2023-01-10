// 03 - FizzBuzz
console.log(fizzBuzz(9)) // Fizz
console.log(fizzBuzz(20)) // Buzz
console.log(fizzBuzz(15)) // FizzBuzz
console.log(fizzBuzz(11)) // Retorno número
console.log(fizzBuzz("g")) // Retorno Not a Number

function fizzBuzz(entrada) {

    if (typeof entrada !== "number") {
        return "Not a Number"
    }
    else if (entrada % 3 === 0 && entrada % 5 === 0) {
        return "FizzBuzz";
    }
    else if (entrada % 3 === 0) {
        return "Fizz"
    }
    else if (entrada % 5 === 0){
        return "Buzz";
    }
    else {
        return entrada
    }
}