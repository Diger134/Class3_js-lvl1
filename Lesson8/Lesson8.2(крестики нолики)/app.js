"use strict";
class Status {
    constructor() {
        this.status = 'playing';
    }
    /**
     * Проверка что мы "играем", что игра не закончена.
     * @returns {boolean} Вернет true, статус игры "играем", иначе false.
     */
    isStatusPlaying() {
        return this.status === 'playing';
    }

    /**
     * Ставит статус игры в "остановлена".
     */
    setStatusStopped() {
        this.status = 'stopped';
    }


}

class Map {
    constructor() {
        this.gameTableElement = document.getElementById('game');
        this.mapValues = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
    }

    /**
     * Вывод ячеек в html.
     */
    renderMap() {
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);
            for (let col = 0; col < 3; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    }


}

class Phrases {

    /**
     * Сообщает о победе.
     */
    sayWonPhrase(figure) {
        
        alert(`${figure} выиграли!`);
    }
    /**
     * Сообщает о ничьей.
     */
    sayDrawPhrase() {
        alert('Ничья!');
    }

}

class Game {
    constructor() { 
    this.phase = 'X';
    this.move = 0;
}
    init(status, map) {
        this.status = status;
        this.map = map;
        this.phrases = phrases;
    }
    /**
     * Инициализация игры.
     */
    run() {
        // Выводим все ячейки.
        this.map.renderMap();
        // Инициализируем обработчики событий.
        this.initEventHandlers();
    }

    
    /**
     * Инициализация обработчиков событий.
     */
    initEventHandlers() {
        // Ставим обработчик, при клике на таблицу вызовется функция this.cellClickHandler.
        this.map.gameTableElement.addEventListener('click', event => this.cellClickHandler(event));
    }

    /**
     * Обработчик события клика.
     * @param {MouseEvent} event
     */
    cellClickHandler(event) {
        // Если клик не нужно обрабатывать, уходим из функции.
        if (!this.isCorrectClick(event)) {
            return;
        }

        // Заполняем ячейку.
        this.fillCell(event);
        // Если кто-то выиграл, заходим в if.
        if (this.hasWon()) {
            // Ставим статус в "остановлено".
            this.status.setStatusStopped();
            // Сообщаем о победе пользователя.
            this.phase === 'X' ? this.phrases.sayWonPhrase('крестики') : this.phrases.sayWonPhrase('нолики');
        } 
        // Меняем фигуру (крестик или нолик).
        this.togglePhase();

        this.increaseMoveByOne();
        let maxVoveCount = 9;
        if (this.move == maxVoveCount && !this.hasWon()) {
            this.phrases.sayDrawPhrase();
        }
    }
    /**метод увеличивает кол - во сделанных ходов на 1 */
    increaseMoveByOne() {
        return this.move++;
    }

    /**
     * Проверка был ли корректный клик, что описан в событии event.
     * @param {Event} event
     * @returns {boolean} Вернет true в случае если статус игры "играем", клик что описан в объекте event был
     * по ячейке и ячейка куда был произведен клик был по пустой ячейке.
     */
    isCorrectClick(event) {
        return this.status.isStatusPlaying() && this.isClickByCell(event) && this.isCellEmpty(event);
    }

    
    /**
     * Проверка что клик был по ячейке.
     * @param {Event} event
     * @param {HTMLElement} event.target
     * @returns {boolean} Вернет true, если клик был по ячейке, иначе false.
     */
    isClickByCell(event) {
        return event.target.tagName === 'TD';
    }

    /**
     * Проверка что в ячейку не ставили значение (крестик или нолик).
     * @param {Event} event
     * @param {HTMLElement} event.target
     * @returns {boolean} Вернет true, если ячейка пуста, иначе false.
     */
    isCellEmpty(event) {
        // Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        return this.map.mapValues[row][col] === '';
    }

    /**
     * Заполняет ячейку в которую кликнул пользователь в событии event.
     * @param {Event} event
     * @param {HTMLElement} event.target
     */
    fillCell(event) {
        // Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        // Заполняем ячейку и ставим значение в массиве, в свойстве mapValues.
        this.map.mapValues[row][col] = this.phase;
        event.target.textContent = this.phase;
    }

    /**
     * Проверка есть ли выигрышная ситуация на карте.
     * @returns {boolean} Вернет true, если игра выиграна, иначе false.
     */
    hasWon() {

        return this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }) ||
            this.isLineWon({ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }) ||
            this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }) ||

            this.isLineWon({ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }) ||
            this.isLineWon({ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }) ||
            this.isLineWon({ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }) ||

            this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }) ||
            this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 });
    }

    /**
     * Проверка есть ли выигрышная ситуация на линии.
     * @param {{x: int, y: int}} a 1-ая ячейка.
     * @param {{x: int, y: int}} b 2-ая ячейка.
     * @param {{x: int, y: int}} c 3-я ячейка.
     * @returns {boolean} Вернет true, если линия выиграна, иначе false.
     */
    isLineWon(a, b, c) {
        let value = this.map.mapValues[a.y][a.x] + this.map.mapValues[b.y][b.x] + this.map.mapValues[c.y][c.x];
        return value === 'XXX' || value === '000';
    }


    /**
     * Меняет фигуру (крестик или нолик).
     */
    togglePhase() {
        this.phase = this.phase === 'X' ? '0' : 'X';
    }
};

const game = new Game();
const status = new Status();
const map = new Map();
const phrases = new Phrases();

game.init(status, map, phrases);
game.run();
