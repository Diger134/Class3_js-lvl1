'use strict'
const buttonOpen = document.querySelector('.open_button');
const modal = document.querySelector('.modal_wrapper');
const modalContainer = document.querySelector('.modal_container');
const buttonClose = document.querySelector('.close_button')

buttonOpen.onclick = function() {
   modalContainer.classList.remove('modal_anime_close')
   modal.style.display = "block";
};
buttonClose.onclick = function() {
    modalContainer.classList.add('modal_anime_close')
    setTimeout(function(){
        modal.style.display = "none";
      }, 1000);
 };