let buttonBasket = document.querySelector('.dropdown-toggle');
let basketPanel = document.querySelector('.basketPanel');
let basketBtns = document.querySelectorAll('.toBasketBtn');
/**Открываем и закрываем модальное окно по клику мыши */
buttonBasket.addEventListener('click', function () {
    if (basketPanel.classList.contains('hiddendisplay')) {
        openModalWindow();
    } else {
        closeModalWindow();
    }
});
//берем все кнопки "В корзину" и слушаем клики по ним
basketBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        let id = event.srcElement.dataset.id;
        let price = event.srcElement.dataset.price;
        let name = event.srcElement.dataset.name;
        basket.addProduct({ 
            id: id, 
            price: price, 
            name: name 
        })
    })
});

let basket = {
    products: {},

    /**
     * Метод добавляет продукт в корзину.
     * @param {{ id: string, price: string, name: string }} product
     */
    addProduct(product) {
        this.addProductToObject(product);
        this.renderProductInBasket(product);
        this.renderTotalSum();
        this.addRemoveBtnsListeners();
    },

    /**
     * Обработчик события клика по кнопке удаления товара.
     * @param {MouseEvent} event
     */
    removeProductListener(event) {
        //console.log(this); this будет указывать на кнопку, а не на объект basket
        //здесь мы используем basket вместо this, потому что контекст вызова не имеет
        //этих методов и нам надо явно обратиться к нашему объекту корзины
        basket.removeProduct(event);
        basket.renderTotalSum();
    },

    /**
     * Добавляем слушателей события клика по кнопкам удалить.
     */
    addRemoveBtnsListeners() {
        let btns = document.querySelectorAll('.productRemoveBtn');
        btns.forEach(btn => {
            btn.addEventListener('click', this.removeProductListener);
        });
    },

    /**
     * Метод отображает общую сумму заказа в корзине.
     */
    renderTotalSum() {
        document.querySelector('.total').innerText = this.getTotalSum();
    },

    /**
     * Метод добавляет продукт в объект с продуктами.
     * @param {{ id: string, price: string, name: string }} product
     */
    addProductToObject(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                count: 1
            }
        } else {
            this.products[product.id].count++;
        }
    },

    /**
     * Метод отрисовывает продукт в корзине, если там такой уже есть просто
     * увеличивает счетчик на 1.
     * @param {{ id: string, price: string, name: string }} product
     * @returns
     */
    renderProductInBasket(product) {
        let productExist = document.querySelector(`.product_qty[data-id="${product.id}"]`);
        if (productExist) {
            productExist.innerText++;
            return;
        }
        let productRow = `
            <tr>
                <th>${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="product_qty" data-id="${product.id}">1</td>
                <td class="productRemoveBtn" data-id="${product.id}">X</td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", productRow);
    },

    /**
     * Метод считает стоимость всех продуктов в корзине.
     * @returns {number}
     */
    getTotalSum() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].count;
        }
        return sum;
    },

    /**
     * Метод удаляет продукт из объекта продуктов, а также из корзины на странице.
     * @param {MouseEvent} event
     */
    removeProduct(event) {
        let id = event.srcElement.dataset.id;
        this.removeProductFromObject(id);
        this.removeProductFromBasket(id);
    },

    /**
     * Метод удаляет товар из корзины. Если количество больше 1, то просто уменьшает его.
     * @param {string} id
     */
    removeProductFromBasket(id) {
        let countTd = document.querySelector(`.product_qty[data-id="${id}"]`);
        if (countTd.innerText == 1) {
            countTd.parentNode.remove();
        } else {
            countTd.innerText--;
        }
    },

    /**
     * Метод удаляет продукт из объекта с продуктами.
     * @param {string} id
     */
    removeProductFromObject(id) {
        if (this.products[id].count == 1) {
            delete this.products[id];
        } else {
            this.products[id].count--;
        }
    }
}

function openModalWindow() {
    basketPanel.classList.remove('hiddendisplay');
    basketPanel.classList.add('showeddisplay');
}

function closeModalWindow() {
    basketPanel.classList.remove('showeddisplay');
    basketPanel.classList.add('hiddendisplay');
}