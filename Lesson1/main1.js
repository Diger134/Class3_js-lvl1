'use strict';
// Задание №1 пункт 1
let Tc = prompt('Введите температуру в градусах по Цельсию: ');
let Tf = (9 / 5) * Tc +32;
alert('Температура в градусах по Фаренгейту: ' +Tf + '°');

// Задание №1 пункт 2
let name = 'Василий';
let admin = name;
alert(admin);


// Задание №1 пункт 3
let result1 = 10 + 10 + "10";
console.log(result1);
/*
1. К 10 прибавляем 10 получаем 20
2. К 20 прибавляем  "10"(т.к один из операндов строчного типа происходит конкатенация)
получаем "2010"
3 "2010" присваеваем в переменную result1
4. С помощью console.log выводим result1 в консоль    
 */
let result2 = 10 + "10" + 10;
console.log(result2);
/*
1. К 10 прибавляем "10" получаем "1010"
2. К "1010" прибавляем 10 получаем "101010"
3 "101010" присваеваем в переменную result2
4. С помощью console.log выводим result2 в консоль    
 */
let result3 = 10 + 10 +  +"10";
console.log(result3);
/*
1. С помощью унарного плюса преобразовываем строку "10" в число 10(т.к. у унарного плюса приоритет выше - это действие выполняется первым)
2. К 10 прибавляем 10 получаем 20
3. К 20 прибавляем 10 получаем 30
4. 30 присваеваем в переменную result3
5. С помощью console.log выводим result3 в консоль    
 */
let result4 = 10 / -"";
console.log(result4);
/*
1. С помощью унарного минуса преобразовываем пустую строку в число -0
2. 10 делим на -0 получаем -бесконечность(-infinity)
3 -infinity присваеваем в переменную result4
4. С помощью console.log выводим result4 в консоль    
 */
let result5 = 10 / +"2.5";
console.log(result5);
/*
1. С помощью унарного плюса преобразовываем строку "2.5" в число 2.5
2. 10 делим на 2.5 получаем 4
3 4 присваеваем в переменную result5
4. С помощью console.log выводим result5 в консоль    
 */

// Задание №1 пункт 4
// let mode = "normal"; - данное имя переменной корректно
// let my_value3 = 102; -  данное имя переменной корректно
// let 3my_value3 = "102"; данное имя переменной не корректно т.к.  имя переменной не может начинаться с числа
// let __hello__ = "world"; - данное имя переменной корректно
// let $$$ = "money"; - данное имя переменной корректно
// let !0_world = true; - данное имя переменной не корректно т.к. в имени переменной не может быть символов кроме $ и _