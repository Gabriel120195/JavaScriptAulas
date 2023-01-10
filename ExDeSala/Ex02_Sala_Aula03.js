// 02 - Número retorna True ou False
console.log(numVouF(10, 9))

function numVouF (numC, numD) {
    return (numC > numD)

}

// ou assim
console.log(numVouF(10, 11))

function numVouF (numC, numD) {
    if (numC > numD) {
        return true;
    }
    else {
        return false;
    }
}


