// Ex 02 Truthy ou Falsy
console.log(fVerificador("",5));

function fVerificador (vA, vB) {
         return (vA > vB);
}
    console.log(!!"");
    console.log(!!" ");


// OUTRA FORMA DE FAZER
console.log(verificaValor(NaN))

function verificaValor (valor) {
    if (valor) {
        return valor+ " Truthy"
    }
    else{
        return valor+ " Falsy"
    }
}
