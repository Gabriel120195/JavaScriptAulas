// 01 - Radar
let velocidadeDoVeiculo = 100
let vMaxDaVia = 80

console.log(radar(velocidadeDoVeiculo, vMaxDaVia))

function radar(velocidadeDoVeiculo, vMaxDaVia) {

    if (velocidadeDoVeiculo > vMaxDaVia) {
        console.log("Multado!")
    }
    else{
        console.log("Velocidade Permitida")
    }
}


// 02 - Truthy ou False
// Professor, Tentei fazer com Switch Case, pórem não consegui entrar no case de valor (NaN)
console.log(valorTouF(NaN))

function valorTouF (entrada) {

    switch (entrada) {
       
        case 0:
            console.log("Falsy")
            break;

        case 0n:
            console.log("Falsy")
            break;

        case undefined:
            console.log("Falsy")
            break;

        case false:
            console.log("Falsy")
            break;

        case null:
            console.log("Falsy")
            break;

        case "":
            console.log("Falsy")
            break;

        case NaN:
            console.log("Falsy")
            break;
        
        default:
            console.log("Truthy")
    }
    
}
//como o Switch case não deu certo, busquei outra forma 
console.log(fVerificador("",5));

function fVerificador (vA, vB) {
         return (vA > vB);
}
    console.log(!!"");
    console.log(!!" ");


// 03 - Média das Notas
let notA = 10
let notaB = 0
let notaC = 10
let notaD = 5

console.log(mediaNotas(notA,notaB,notaC,notaD))

function mediaNotas (notA,  notaB, notaC, notaD) {
let media = (notA + notaB + notaC + notaD) / 4
    
    if (media > 10) {
        return "Você digitou notas maiores que 10!"
    }
    else if (media >= 6) {
        return "APROVADO! " + "Sua nota: " + media
    }
    else if (media >= 3 && media < 6) {
        return "EXAME! " + "Sua nota: " + media
    }
    else{
        return "RETIDO! " + "Sua nota: " + media
    }
}


// 04 - Números Primos
let entradaNumPrimo = 50

function numPrimo(num) {
    for (var div = 2; div < num; div++) 
        if (num % div == 0){
            return false;
        }
        
            return true;
        
}
for (var i = 2; i < entradaNumPrimo; i++) {


    if (numPrimo(i)) 
        console.log(i);

}


// 05 -  Extra - Sequência de Fibonacci
let entradaSeqFibo = 25

let fibonacciAA = [0,1]

function seqFibonacci (entradaSeqFibo) {
    for (let i = 1; i < entradaSeqFibo; i++) {
        fibonacciAA.push(fibonacciAA[i] + fibonacciAA[i - 1])
    }
        console.log(fibonacciAA)
}
 seqFibonacci(entradaSeqFibo)
