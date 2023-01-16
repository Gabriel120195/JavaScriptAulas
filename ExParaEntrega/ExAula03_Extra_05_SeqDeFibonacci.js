// Ex 05 - Extra - Seq fibonacci
// let entradaSeqFibo = 25

// let fibonacciAA = [0,1]

// function seqFibonacci (entradaSeqFibo) {
//     for (let i = 1; i < entradaSeqFibo; i++) {
//         fibonacciAA.push(fibonacciAA[i] + fibonacciAA[i - 1])
//     }
//         console.log(fibonacciAA)
// }
//  seqFibonacci(entradaSeqFibo)

// OUTRO MODO
console.log(fibonacci(10))

function fibonacci (termo) {
    let primeiroNumero = 0;
    let segundoNumero = 1;
    let proximoNumero;

    for (let j = 1; j <= termo; j++) {
        console.log(primeiroNumero);

        proximoNumero = primeiroNumero + segundoNumero;
        primeiroNumero = segundoNumero;
        segundoNumero = proximoNumero;
        
    }
}