'use strict';

function getNumToObj() {
    let num = prompt('Введите число от 0 до 999: ');
    let arrOfNumeral = num.split('');
    let objOfNumeral = {};

    if (num < 0 || num > 999 || isNaN(num) || !Number.isInteger(+(num))) {
        console.log(('Некорректное число'));
        return objOfNumeral;
    } else {
        for (let i = 0; i < arrOfNumeral.length; i++) {
            if (arrOfNumeral.length == 3) {
                break;
            }
            arrOfNumeral.unshift(0);
        }
        objOfNumeral.hundreds = arrOfNumeral[0];
        objOfNumeral.tens = arrOfNumeral[1];
        objOfNumeral.units = arrOfNumeral[2];
        console.log(objOfNumeral);
    }
}

getNumToObj();