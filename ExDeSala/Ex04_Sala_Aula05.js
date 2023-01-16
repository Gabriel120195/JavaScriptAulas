//Escreva uma função que conte as vezes que um elemento aparece 
//numa array. A função deve receber uma array e o elemento a ser contado 
//e retorne a quantidade de vezes que o elemento aparece na array.

const numeros = [1, 2, 3, 4, 5, 1, 1, 1, 1, 4, 5];
console.log(contaOcorrencias(numeros, 1));

function contaOcorrencias(array, elementosASerContado) {
    const arrayAuxiliar = [];
    for (let elementoDaArray of array) {
        if (elementosASerContado === elementoDaArray) {
            arrayAuxiliar.push(elementosASerContado);
        }
    }
    return arrayAuxiliar.length;
}