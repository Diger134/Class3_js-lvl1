'use strict'

const buttons = document.querySelectorAll('button');
const productNames = document.querySelectorAll('.productName');
const imgs = document.querySelectorAll('img');

buttons.forEach(function (button) {
    button.onclick = function (event) {
        if (button.innerText == 'Подробнее') {
            button.innerText = 'Отмена';
            button.insertAdjacentHTML('beforebegin', '<div class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing' +
                'elit. Aliquid aliquamperspiciatisillum, asperiores sequi. Aliquid aliquamperspiciatisillum, asperiores sequi</div>');
            imgs.forEach(function (img) {
                if(button.parentNode == img.parentNode) {
                    img.style.display = 'none';
                }
            });
            
        } else if (button.innerText == 'Отмена') {
            button.innerText = 'Подробнее';
            const descs = document.querySelectorAll('.desc');
            descs.forEach(function (desc) {
                if (button.parentNode == desc.parentNode) { 
                    desc.remove();
                }
            });
            
            imgs.forEach(function (img) {
                if (button.parentNode == img.parentNode) {
                    img.style.display = 'block';   
                }
            });
            

        }
    };
});