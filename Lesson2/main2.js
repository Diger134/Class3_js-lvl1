'use strict';
//задание №2 пункт 2
let a = 1, b = 1, c, d;
c = ++a; 
alert(c);      // Ответ 2  Префиксная форма инкремента. 
               //1. Увеличиваем переменную 'a' на 1, 
               //2. Присваеваем значение 'a' переменной 'c'.
d = b++; 
alert(d);      // Ответ 1  Постфиксная форма инкремента. 
               //1. Присваеваем переменной 'd' значение переменной 'b'
               //2. 'b' увеличиваем на 1. 
c = 2+ ++a; 
alert(c);      // Ответ 5 
               //1. Увеличиваем 'a' на 1(получается 3)
               //2. К 2 прибавляем значение 'a'
               //3. Присваеваем переменной 'c' полученное значение.
d = 2+ b++; 
alert(d);      // Ответ 4
               //1. К 2 прибавляем значение 'b'(на данный момент 2)
               //2. Присваеваем переменной 'd' полученное значение
               //3. Увеличиваем 'b' на 1(получается 3)
alert(a);      // Ответ 3 Выводим значение 'a' на данный момент 
alert(b);      // Ответ 3 Выводим значение 'b' на данный момент 
//задание №2 пункт 2
let y = 2;
let x = 1 + (y *= 2);
console.log(`Значение перменной x: ${x}`)
/* Ответ 5
1. Обьявляем переменную 'y' и присваеваем ей значение 2
2. Обьявляем переменную 'x'
3. 2 умножаем на 2 и присваеваем переменной 'y' значение 4 (выражение y *= 2(присваивание с умножением) это сокращенная форма выражения y = y * 2)
4. К 1 прибавляем 4 получаем 5
5. Присваеваем переменной 'x' полученное значение
*/
//задание №2 пункт 3
let num1 = 5;
let num2 = 4;
let result = 0;
if (num1 >= 0 && num2 >= 0) {
 result = num1 - num2;
 console.log('Разность чисел: ' + result);
} else  if (num1 < 0 && num2 < 0){
 result = num1 * num2;
 console.log('Произведение чисел: ' +  result);
} else {
 result = num1 + num2;
 console.log('Сумма чисел: ' +  result);
}
//задание №2 пункт 4
/**
 * Сумма двух чисел
 * @param {Number} a Слагаемое  
 * @param {Number} b Слагаемое 
 * @returns {Number} Сумма
 */
function getSum(a,b) {
 let sum = Number(a) + Number(b);
 return sum;
}
/**
 * Разность двух чисел
 * @param {Number} a Уменьшаемое  
 * @param {Number} b Вычитаемое
 * @returns {Number} Разность
 */
function getSubtraction(a,b) {
 let sub = Number(a) - Number(b);
 return sub;
}
/**
 * Произведение двух чисел
 * @param {Number} a Множитель
 * @param {Number} b Множитель
 * @returns {Number} Произведение
 */
function getMultiplication(a,b) {
 let mult = Number(a) * Number(b);
 return mult;
}
/**
 * Деление двух чисел
 * @param {Number} a Делимое 
 * @param {Number} b Делитель
 * @returns {Number} Частное
 */
function getDivision(a,b) {
 let div = Number(a) / Number(b);
 return div;
}
//задание №2 пункт 5
/**
 * Арифметическое действие в зависимости от значения параметра operation
 * @param {Number} arg1 Число
 * @param {Number} arg2 Число
 * @param {String} operation поддерживаются значения 'сложение' 'вычитание' 'умножение' 'деление'
 * @throws {Error} если передано неверное арифметическое действие, то будет выброшена ошибка 
 * @returns {Number}
 */
 function mathOperation(arg1,arg2,operation) {
 let result;
 switch (operation) {
  case 'сложение':
    result = getSum(arg1,arg2);
    return result;
  case 'вычитание':
    result = getSubtraction(arg1,arg2);
    return result;
    case 'умножение':
    result = getMultiplication(arg1,arg2);
    return result;
    case 'деление':
    result = getDivision(arg1,arg2);
    return result;
    default:
     throw new Error('Не верное арифметическое действие: ' + operation);
  }
 }
console.log(mathOperation(10, 5, 'сложение'));
console.log(mathOperation(10, 5, 'вычитание'));
console.log(mathOperation(10, 5, 'умножение'));
console.log(mathOperation(10, 5, 'деление'));
console.log(mathOperation(10, 5, 'отнимание'));
