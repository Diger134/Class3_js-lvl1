'use strict';

function getNumToObj() {
    let num = prompt('Введите число от 0 до 999: ');

    if (num < 0 || num > 999 || isNaN(num) || !Number.isInteger(+(num))) {
        console.log(('Некорректное число'));
        return {};
    } else {
        let arrOfNumeral = num.split('');
        for (let i = 0; i < arrOfNumeral.length; i++) {
            if (arrOfNumeral.length == 3) {
                break;
            }
            arrOfNumeral.unshift(0);
        }
        return {
        hundreds: arrOfNumeral[0],  
        tens: arrOfNumeral[1],
        units: arrOfNumeral[2],
        };
    }
}

getNumToObj();