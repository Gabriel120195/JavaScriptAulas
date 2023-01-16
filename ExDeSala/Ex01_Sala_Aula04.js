const numeros = [1, 2, 3, 4, 1]

console.log(contaOcorrencias(numeros,1));

function contaOcorrencias(Array, elemento) {
    let count = 0;

    for (const dado of Array) {
        if (dado === elemento){
            count++;
        }
    }
    return count;
}