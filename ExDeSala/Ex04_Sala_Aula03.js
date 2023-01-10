// 04 - Par ou Impar
console.log(paridade(11))

function paridade (entrada) {
    for (let i = 0; i <= entrada; i++) {
        
        if (i % 2 === 0) {
            console.log(i, "= PAR")
        }
        else
            console.log(i, "= IMPAR")
    }
}