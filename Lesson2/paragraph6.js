'use strict';
//задание №2 пункт 6
let quesAmountMoney = prompt('Какую сумму вы хотите положить на счет в банке?');
    if (quesAmountMoney == null) {
        alert('Операция отменена');
    } else if (isNaN(quesAmountMoney)) {
        alert('Сумма введена некоректно')
    } else if (quesAmountMoney == '') {
        alert('Вы не ввели сумму');
    } 
  /**
   * Функция возвращает значение последнего символа в строке
   */
  function getLastNum() {
    return quesAmountMoney.charAt(quesAmountMoney.length-1);
  }
  /**
   * Функция возвращает значение двух последних символов в строке
   */
  function getLast2Num() {
   return quesAmountMoney.slice(-2);
  }
  function showAmountMoneyinBank() {
    if (getLast2Num() >= 10 && getLast2Num() < 20) {
        alert(`Ваша сумма в ${quesAmountMoney} рублей успешно зачислена.`)
    } else {
    let rubles = 0;
    switch (getLastNum()){
      case '1':
        rubles = 'рубль'
        alert(`Ваша сумма в ${quesAmountMoney} ${rubles} успешно зачислена.`)
        break;
      case '2':
      case '3':
      case '4':
        rubles = 'рубля'
        alert(`Ваша сумма в ${quesAmountMoney} ${rubles} успешно зачислена.`)
        break;
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        rubles = 'рублей'
        alert(`Ваша сумма в ${quesAmountMoney} ${rubles} успешно зачислена.`)
        break;
    }
    }
  }
showAmountMoneyinBank();
