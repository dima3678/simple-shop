// 1. Знаходимо всі елементи на сторінці
let btnApple = document.getElementById('btn-apple');
let btnBread = document.getElementById('btn-bread');
let btnCheese = document.getElementById('btn-cheese');
let btnChoco = document.getElementById('btn-choco');
let btnMilk = document.getElementById('btn-milk');

let ul = document.getElementById('cart-list');
let totalPrice = document.getElementById('total-price');
let btnClear = document.getElementById('clear-btn');

// --- ЧАСТИНА 1: ЗАВАНТАЖЕННЯ (Те, що відбувається при старті) ---

// Відновлюємо гроші (якщо нема - то 0)
let total = Number(localStorage.getItem('myShopTotal')) || 0;
totalPrice.textContent = total;

// Відновлюємо список товарів (якщо нема - то пустий масив)
let myItems = JSON.parse(localStorage.getItem('savedCart')) || [];

// Малюємо збережені товари на екрані
myItems.forEach(function(item) {
    let newItem = document.createElement('li');
    newItem.textContent = item;
    ul.appendChild(newItem);
});


// --- ЧАСТИНА 2: ФУНКЦІЯ ДОДАВАННЯ ---

function addToCart(name, price) {
    // 1. Оновлюємо гроші
    total = total + price;
    totalPrice.textContent = total;
    localStorage.setItem('myShopTotal', total); // Зберегли гроші

    // 2. Оновлюємо екран (список)
    const newItem = document.createElement('li');
    newItem.textContent = name;
    ul.appendChild(newItem);

    // 3. Оновлюємо пам'ять (масив)
    myItems.push(name); // Додали в коробку
    localStorage.setItem('savedCart', JSON.stringify(myItems)); // Зберегли коробку
}


// --- ЧАСТИНА 3: КЛІКИ ПО КНОПКАХ ---

btnApple.addEventListener('click', function() {
    addToCart("Яблуко 🍎", 10);
});

btnBread.addEventListener('click', function() {
    addToCart("Хліб 🍞", 20);
});

btnCheese.addEventListener('click', function () {
    addToCart('Сир 🧀', 120);
});

btnChoco.addEventListener('click', function () {
    addToCart('Шоколадка 🍫', 45);
});

btnMilk.addEventListener('click', function () {
    addToCart('Молоко 🥛', 30);
});


// --- ЧАСТИНА 4: ОЧИЩЕННЯ ---

btnClear.addEventListener('click', function () {
    // Чистимо екран
    ul.innerHTML = '';
    total = 0;
    totalPrice.textContent = 0;

    // Чистимо пам'ять браузера
    localStorage.setItem('myShopTotal', 0);
    
    // Чистимо масив товарів
    myItems = []; 
    localStorage.setItem('savedCart', JSON.stringify(myItems));
});