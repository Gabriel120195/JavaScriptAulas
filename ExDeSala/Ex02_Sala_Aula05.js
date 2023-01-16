//Escreva uma função que receba duas arrays. A primeira array é a 
//original e a segunda array representa os valores que queremos excluir da 
//array original. A função deve retornar a array original sem os valores que 
//estiverem na segunda array.

const numeros = [0, 5, 4, 0, 5, 2, 3];
const numerosApagar = [0 , 5];

console.log(limpaArray(numeros, numerosApagar))


function limpaArray (arrayOriginal, arrayDeLimpeza) {
    const saida = [];

    for (let elemento of arrayOriginal) {
        if (!arrayDeLimpeza.includes(elemento)) {
            
            saida.push(elemento);
        }
    }
    return saida;
}
