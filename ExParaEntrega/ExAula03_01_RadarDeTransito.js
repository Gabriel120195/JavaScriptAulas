// 01 - Radar
// let velocidadeDoVeiculo = 100
// let vMaxDaVia = 80

console.log(radar(80, 100));

function radar(velocidadeDoVeiculo, vMaxDaVia) {

    if (velocidadeDoVeiculo > vMaxDaVia) {
        console.log("Multado!");
    }
    else{
        console.log("Velocidade Permitida");
    }
}