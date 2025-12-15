let btnApple = document.getElementById('btn-apple');
let ul = document.getElementById('cart-list');
let totalPrice = document.getElementById('total-price');
let btnBread = document.getElementById('btn-bread');
let btnClear = document.getElementById('clear-btn');
let btnMilk = document.getElementById('btn-milk');
let btnChokolate = document.getElementById('btn-choco');
let btnCheese = document.getElementById('btn-cheese');



let total = 0;

// btnApple.addEventListener('click', function () {
//     total = total + 10;
//     totalPrice.textContent = total;

//     let newItem = document.createElement('li');
//     newItem.textContent = "Яблуко 🍎";
//     ul.appendChild(newItem);
// });

// btnBread.addEventListener('click', function () {
//     total = total + 20;
//     totalPrice.textContent = total;

//     let twoItem = document.createElement('li');
//     twoItem.textContent = "Хліб 🍞";
//     ul.appendChild(twoItem);
// })
function addToCart(name, price) {
    total = total + price;
    totalPrice.textContent = total;
    const newItem = document.createElement('li');
    newItem.textContent = name;
    ul.appendChild(newItem);
}
btnApple.addEventListener('click', function() {
    addToCart("Яблуко 🍎", 10);
});

// Для Хліба
btnBread.addEventListener('click', function() {
    addToCart("Хліб 🍞", 20);
});

btnCheese.addEventListener('click', function () {
    addToCart('Сир 🧀', 120);
});

btnChokolate.addEventListener('click', function () {
    addToCart('Шоколадка 🍫', 45);
});

btnMilk.addEventListener('click', function () {
    addToCart('Молоко 🥛', 30);
});
btnClear.addEventListener('click', function () {
    ul.innerHTML = '';
    total = 0;
    totalPrice.textContent = 0;
});