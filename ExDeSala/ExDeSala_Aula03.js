// 01 - Número Maior
console.log(numMaior(7, 10))
function numMaior (numA, NumB) {

    if (numA > NumB) {
        return numA
    }
    else{
        return NumB
     }
}

// 02 - Número retorna True ou False
console.log(numVouF(10, 9))

function numVouF (numC, numD) {
    return (numC > numD)

}

// ou assim
console.log(numVouF(10, 11))

function numVouF (numC, numD) {
    if (numC > numD) {
        return true;
    }
    else {
        return false;
    }
}

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

// 04 - Par ou Impar
console.log(paridade(11))

function paridade (entrada) {
    for (let i = 0; i <= entrada; i++) {
        
        if (i % 2 === 0) {
            console.log(i, "= PAR")
        }
        else
            console.log(i, "= IMPAR")
    }
}

// 05 - Soma de Múltiplos
console.log(somaMultiplos(11));

function somaMultiplos(limite) {
    let soma = 0;

    for (let i = 0; i<= limite; i++){
        if ((i % 3 === 0) || (i % 5 === 0)){
            soma += i;
        }
    }
    return soma;
}