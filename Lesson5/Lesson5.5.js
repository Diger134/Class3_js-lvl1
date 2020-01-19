'use strict'

function getChessBoard() {
    const body = document.querySelector('body');
    body.insertAdjacentHTML("beforebegin", '<div class="chess_board"></div>');
    const chessBoard = document.querySelector('.chess_board');
    for (let row = 0; row < 9; row++) {
        if (row == 8) {
            for (let col = 0; col < 9; col++) {
                let chessCell = document.createElement('div');
                if (col == 0) {
                    chessBoard.append(chessCell);
                    chessCell.classList.add('chess_empty_cell')
                } else {
                    chessBoard.append(chessCell);
                    chessCell.classList.add('chess_letter_cell')
                }
            }
        } else
        if (row == 0 || row % 2 !== 0) {
            for (let col = 0; col < 9; col++) {
                let chessCell = document.createElement('div');
                if (col == 0) {
                    chessBoard.append(chessCell);
                    chessCell.classList.add('chess_number_cell')
                } else if (chessBoard.children.length % 2 == 0) {
                    chessBoard.append(chessCell);
                    chessCell.classList.add('chess_black_cell')
                } else {
                    chessBoard.append(chessCell);
                    chessCell.classList.add('chess_white_cell')
                }
            }
        } else {
            for (let col = 0; col < 9; col++) {
                let chessCell = document.createElement('div');
                if (col == 0) {
                    chessBoard.append(chessCell);
                    chessCell.classList.add('chess_number_cell')
                } else if (chessBoard.children.length % 2 == 0) {
                    chessBoard.append(chessCell);
                    chessCell.classList.add('chess_black_cell')
                } else {
                    chessBoard.append(chessCell);
                    chessCell.classList.add('chess_white_cell')
                }
            }
        }
    }
    const chessLetterCells = document.querySelectorAll('.chess_letter_cell');
    let arrOfletter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    loop1:
        for (let i = 0; i < arrOfletter.length; i++) {
            for (let k = 0; k < chessLetterCells.length; k++) {

                if (chessLetterCells[k].innerText == '') {
                    chessLetterCells[k].innerText = arrOfletter[i];
                    continue loop1;
                }
            }

        }
    const chessNumberCells = document.querySelectorAll('.chess_number_cell');
    let arrOfNumber = [8, 7, 6, 5, 4, 3, 2, 1];
    loop2:
        for (let i = 0; i < arrOfNumber.length; i++) {
            for (let k = 0; k < chessNumberCells.length; k++) {

                if (chessNumberCells[k].innerText == '') {
                    chessNumberCells[k].innerText = arrOfNumber[i];
                    continue loop2;
                }
            }

        }
    return chessBoard;
}
getChessBoard();