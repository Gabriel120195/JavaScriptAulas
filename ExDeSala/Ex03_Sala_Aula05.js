//Escreva uma função que mova um elemento pela array. A função 
//deverá receber uma array, o índice do elemento que será movimentado e 
//a quantidade de casas que o elemento será movimentado. A função 
//deverá retornar uma nova array com o elemento reordenado.

const numeros = [1, 2, 3, 4, 5];
console.log(moveArray(numeros, 0, 4))

function moveArray (array, indice, deslocamento) {
    const posicao = indice + deslocamento;

    if (posicao >= array.length) {
        console.error("Entrada inválida");
        return;
    }
    const saida = [... array];
    const elemento = saida.splice(indice, 1) [0];
    saida.splice(posicao, 0, elemento);
    return saida;
}