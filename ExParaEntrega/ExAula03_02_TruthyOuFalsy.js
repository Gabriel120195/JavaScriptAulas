
console.log(valorTouF(NaN))

function valorTouF (entrada) {

    switch (entrada) {
       
        case 0:
            console.log("Falsy")
            break;

        case 0n:
            console.log("Falsy")
            break;

        case undefined:
            console.log("Falsy")
            break;

        case false:
            console.log("Falsy")
            break;

        case null:
            console.log("Falsy")
            break;

        case "":
            console.log("Falsy")
            break;

        case NaN:
            console.log("Falsy")
            break;
        
        default:
            console.log("Truthy")
    }
    
}

console.log(fVerificador("",5));

function fVerificador (vA, vB) {
         return (vA > vB);
}
    console.log(!!"");
    console.log(!!" ");