let cores1 = ["Azul", "Branco","Amarelo","Azul", "Vermelho" ]

//Adicionar elemento no FIM do Array
//cores.push("Verde", "Preto") 

//Adicionar elemento no INICIO do Array
//cores.unshift("Cinza", "Rosa")

//Verifica se dentro do Array existe determinado valor.. 
//Retorna False ou True
//console.log(cores.includes("Branco"))

//Mostra em qual posição está determinado valor..
//Obs retorna PRIMEIRA posição do valor encotrado
//console.log(cores.indexOf("Azul"))

//Mostra em qual posição está determinado valor..
//Obs retorna ULTIMA posição do valor encotrado
//console.log(cores.lastIndexOf("Azul"))

//Vai Removendo ULTIMOS elementos do Array
//cores.pop()

//Vai Removendo PRIMEIROS elementos do Array
//cores.shift()

//Retira dois elemento a partir do indice 2 ou seja [amarelo e azul]
//cores.splice(2,2)

//Faz a mesma coisa que o de cima
// e add outro elemento a partir do primeiro tirado
//cores.splice(2,2, "gelo")

let cores2 = ["Marron", "Roxo"]
let combinado = cores1.concat(cores2);
console.log(combinado)