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