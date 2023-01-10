let notA = 10
let notaB = 0
let notaC = 10
let notaD = 5

console.log(mediaNotas(notA,notaB,notaC,notaD))

function mediaNotas (notA,  notaB, notaC, notaD) {
let media = (notA + notaB + notaC + notaD) / 4
    
    if (media > 10) {
        return "Você digitou notas maiores que 10!"
    }
    else if (media >= 6) {
        return "APROVADO! " + "Sua nota: " + media
    }
    else if (media >= 3 && media < 6) {
        return "EXAME! " + "Sua nota: " + media
    }
    else{
        return "RETIDO! " + "Sua nota: " + media
    }
}
