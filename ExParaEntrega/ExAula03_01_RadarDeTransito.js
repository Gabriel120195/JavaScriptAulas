// 01 - Radar
let velocidadeDoVeiculo = 100
let vMaxDaVia = 80

console.log(radar(velocidadeDoVeiculo, vMaxDaVia))

function radar(velocidadeDoVeiculo, vMaxDaVia) {

    if (velocidadeDoVeiculo > vMaxDaVia) {
        console.log("Multado!")
    }
    else{
        console.log("Velocidade Permitida")
    }
}