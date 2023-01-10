// console.log(numPrimo(30))
// function numPrimo (entrada) {
//     for (let i = 2; i <= entrada; i++) {
        
//         if (entrada % i == 0 )  {     
//             return false 
//         }
//     } 
// }

// for (let i = 2; i < entrada; index++) {
    
// }
let entradaNumPrimo = 50

function numPrimo(num) {
    for (var div = 2; div < num; div++) 
        if (num % div == 0){
            return false;
        }
        
            return true;
        
}
for (var i = 2; i < entradaNumPrimo; i++) 
    if (numPrimo(i)) 
        console.log(i);