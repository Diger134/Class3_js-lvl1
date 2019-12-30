//Задание N°3 пункт2
'use strict';
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + ' - это ноль');
    } else if (i % 2 == 0) {
        console.log(i + ' - четное число');
    } else {
        console.log(i + ' - нечетное число');
    }
}
//Задание N°4 пункт 3
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
//Задание N°3 пункт 4
const product = [{
        id: 3,
        price: 200
    },
    {
        id: 4,
        price: 900
    },
    {
        id: 1,
        price: 1000
    },
];
product.map((element) => element.price * 0.85);
console.log(product.map((element) => element.price * 0.85));

//Задание N°3 пункт 5
const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
let productWithPhoto = products.filter((withphotos) => withphotos.photos && withphotos.photos.length);
console.log(productWithPhoto);
products.sort((a, b) => a.price - b.price);
console.log(products);
//Задание N°3 пункт 6
for (let n = 0; n < 10; console.log(n++)) {}
//Задание N°3 пункт 7
let slide = 'x';
for (let i = 0; i < 20; i++) {
    console.log(slide);
    slide += 'x';
}