// let n = 25
// let fibonacci = [0,1];
    
// function listFibonacci(n) {
//   for (let i = 1; i < n; i++) {
//             fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
//         }
//         console.log(fibonacci);
//     }

// listFibonacci(n);

let entradaSeqFibo = 25

let fibonacciAA = [0,1]

function seqFibonacci (entradaSeqFibo) {
    for (let i = 1; i < entradaSeqFibo; i++) {
        fibonacciAA.push(fibonacciAA[i] + fibonacciAA[i - 1])
    }
        console.log(fibonacciAA)
}
 seqFibonacci(entradaSeqFibo)