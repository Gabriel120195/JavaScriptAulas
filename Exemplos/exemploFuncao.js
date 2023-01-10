function saudacao(primeiroNome, ultimoNome){
    console.log("Olá " + primeiroNome, ' '  + ultimoNome);

}

saudacao("Gabriel", "Silva");
saudacao("Laura", "Pina");


//Assim retorna as variaveis para a função
console.log(numMaior(8, 5))

function numMaior(numA, numB) {

        if (numA > numB) {
            return numA
        }
        else{
            return numB
        }
}