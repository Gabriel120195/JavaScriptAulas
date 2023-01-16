
// let entradaNumPrimo = 50
// function numPrimo(num) {
//     for (var div = 2; div < num; div++) 
//         if (num % div == 0){
//             return false;
//         }
        
//             return true;
        
// }
// for (var i = 2; i < entradaNumPrimo; i++) 
//     if (numPrimo(i)) 
//         console.log(i);

// OUTRO MODO DE FAZER
console.log(mostraPrimos(25))

function mostraPrimos (limite) {
    for(let numero = 2; numero <= limite; numero++) {
        if (verificaPrimo(numero)) {
            console.log(numero);
        }
    }
}

function verificaPrimo (numero) {
    for (let fator = 2; fator < numero; fator++) {
        if (numero % fator === 0) {
            return false;
        }
    }
        return true;
}