//Escreva uma função que receba dois parâmetros numéricos (min e 
//max) e retorne um array em que os elementos estejam ordenados de 
//forma crescente, começando do valor min, indo até o valor max.

console.log(entradaArray(0, 10))


function entradaArray (vMin, vMax) {

    const valores = [];

    for (let i = vMin; i <= vMax; i++) {
        
        valores.push(i);
    }
    return valores;
    
}