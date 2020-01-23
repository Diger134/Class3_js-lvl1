document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

let slider = document.querySelector('.slider');

// Создаем иконку загрузки
let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

// Создаем левую стрелку
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

// Создаем правую стрелку
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);

// Ждем когда весь контент целиком загрузится
window.addEventListener('load', function () {
    leftArrow.addEventListener('click', function () {
        images.setNextLeftImage();
    });

    rightArrow.addEventListener('click', function () {
        images.setNextRightImage();
    });

    // Инициализация слайдера
    images.init();
    // Скрываем иконку загрузки
    hideLoadIcon(loadIcon);
});

/**
 * Функция скрывает иконку загрузки
 * @param {HTMLElement} loadIcon 
 */
function hideLoadIcon(loadIcon) {
    loadIcon.style.display = "none";
}

/**
 * Функция берет у элемента слайдера его data-атрибуты размеров,
 * и если они определены, то самому слайдеру меняет размеры.
 * @param {HTMLDivElement} slider 
 */
function setSizes(slider) {
    let width = slider.getAttribute("data-width");
    let height = slider.getAttribute("data-height");
    if (width !== null && width !== "") {
        slider.style.width = width;
    }
    if (height !== null && height !== "") {
        slider.style.height = height;
    }
}
setSizes(slider);

// Объект слайдера
let images = {
    /* {int} Номер текущего изображения */
    currentIdx: 0,
    
    /* {int} Номер предыдущего изображения */
    prevIdx: 0,

    /* {int} Номер последующего изображения */
    nextIdx: 0,

    /* {HTMLDivElement[]} slides элементы слайдов */
    slides: [],
    
    /** Получаем все слайды и показываем первый слайд. */
    init() {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageWithCurrentIdx();
    },

    /** Берем слайд с текущим индексом и убираем у него класс
     * hidden-slide. */
    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden-slide');
    },

    /** Всем слайдам добавляем класс hidden-slide. (с задержкой в 700мс)*/
    hideVisibleImages() {
        this.slides.forEach(function (slide) {
            setTimeout(() => {
                slide.classList.add('hidden-slide');    
                }, 700);
        });
    },

    /**  добавление класса проигрывания анимации для элемента */
    addAnimateCLass(imgIdx, animateClass) {
        this.slides[imgIdx].classList.add(animateClass);
    },

    /**  удаления класса проигрывания анимации для элемента */
    removeAnimateClassAfter1s(imgIdx, animateClass) {
            this.slides[imgIdx].classList.remove(animateClass);
    },

    /** Переключиться на предыдущее изображение. */
    setNextLeftImage() {
        this.hideVisibleImages();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
            this.nextIdx = 0;
        } else {
            this.currentIdx--;
            this.nextIdx = this.currentIdx + 1;
        }
        this.showImageWithCurrentIdx();
        this.addAnimateCLass(this.currentIdx, 'animate_forward');
        this.addAnimateCLass(this.nextIdx, 'animate_next_forward');

         /** удаление классов проигрывания анимации после завершения */
        setTimeout(() => {
            this.removeAnimateClassAfter1s(this.currentIdx, 'animate_forward');
            this.removeAnimateClassAfter1s(this.nextIdx, 'animate_next_forward'); 
        }, 700);  
         /** Делаем видимым текущий слайд с задержкой в 701мс */
        setTimeout(() => {
            this.showImageWithCurrentIdx()
        }, 701);
    },

    /** Переключиться на следующее изображение. */
    setNextRightImage() {
        this.hideVisibleImages();        
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
            this.prevIdx = this.slides.length - 1;
        } else {
            this.currentIdx++;
            this.prevIdx = this.currentIdx - 1;
        }
        
        this.showImageWithCurrentIdx() 
        this.addAnimateCLass(this.currentIdx, 'animate_back');
        this.addAnimateCLass(this.prevIdx, 'animate_prev_back');
        
        /** удаление классов проигрывания анимации после завершения */
        setTimeout(() => {
            this.removeAnimateClassAfter1s(this.currentIdx, 'animate_back');
            this.removeAnimateClassAfter1s(this.prevIdx, 'animate_prev_back');  
        }, 700);  
        /** Делаем видимым текущий слайд с задержкой в 1001мс */
        setTimeout(() => {
            this.showImageWithCurrentIdx()
        }, 701);
        
    },
}

