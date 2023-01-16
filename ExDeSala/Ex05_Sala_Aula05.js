//Crie uma função que receba uma array de números e retorne o maior 
//número da array. Caso seja uma array vazia, retorne undefined.

const numeros = [1, 2, 5, 4, 8];
console.log(maximo(numeros));

function maximo (array) {
    if (array.length === 0) {
        return undefined;
    }
    let max = array [0];

    for (let i = 1; i < array.length; i++) {
        if (array [i] > max) {
            max = array [i];
        }
    }
    return max;
    
}