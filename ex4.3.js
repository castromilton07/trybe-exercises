// Ex. 01
function ex01(n) {
    if (n > 1) {
        let arrayEx01 = '';
        for (let column = 1; column <= n; column += 1) {
            for (let row = 1; row <= n; row += 1) {
                arrayEx01 = arrayEx01 + '*';
            }
            console.log(arrayEx01);
            arrayEx01 = '';
        }
    }
}
ex01(5);

// Ex. 02
function ex02(n) {
    if (n > 1) {
        let arrayEx02 = '';
        for (let column = 1; column <= n; column += 1) {
            for (let row = 1; row <= column; row += 1) {
                arrayEx02 = arrayEx02 + '*';
            }
            console.log(arrayEx02);
            arrayEx02 = '';
        }
    }
}
ex02(5);

// Ex. 03
function ex03(n) {
    if (n > 1) {
        let arrayEx03 = '';
        let control = n;
        for (let column = 1; column <= n; column += 1) {
            for (let row = 1; row <= n; row += 1) {
                if(row < control) {
                    arrayEx03 = arrayEx03 + ' ';  
                } else arrayEx03 = arrayEx03 + '*';
            }
            control -= 1;
            console.log(arrayEx03);
            arrayEx03 = '';
        }
    }
}
ex03(5);

// Ex. 04
function ex04(n) {
    let arrayEx04 = '';
    let control = 0;
    // caso par
    if ((n > 1) && (n % 2 === 0)) {
        for (let column = 1; column <= n; column += 1) {
            for (let row = 1; row <= column; row += 1) {
                if(column <= (n/2)) {
                    arrayEx04 = arrayEx04 + ' ';
                } else {
                    control = n - row;
                    if (column <= control) {
                        arrayEx04 = arrayEx04 + ' ';
                    } else arrayEx04 = arrayEx04 + '*';
                }
            }
            console.log(arrayEx04);
            arrayEx04 = '';
        }
    // caso ímpar
    } else if ((n > 1) && (n % 2 !== 0)) {
        for (let column = 1; column <= n; column += 1) {
            for (let row = 1; row <= column; row += 1) {
                if(column <= (Math.round(n/2) - 1)) {
                    arrayEx04 = arrayEx04 + ' ';
                } else {
                    control = n - row;
                    if (column <= control) {
                        arrayEx04 = arrayEx04 + ' ';
                    } else arrayEx04 = arrayEx04 + '*';
                }
            }
            console.log(arrayEx04);
            arrayEx04 = '';
        }
    }
}
ex04(5);

// Bônus

// Ex. 05

// Ex. 06

/* Feito na época do P.S encontrar e exibir números primos de um array
function buscaNumeroPrimos(n) {
    var numerosPrimos = [];
    for(var contador1 = 0; contador1 <= n; contador1++) {
        var auxiliar = 0;
        for(var contador2 = 1; contador2 <= n ; contador2++) {
            if(contador1%contador2 === 0) {
                auxiliar++;
            }
        }
        if(auxiliar === 2) {
            numerosPrimos.push(contador1);
        }
    }
    return numerosPrimos;
}
*/