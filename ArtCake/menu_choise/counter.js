// Получаем ссылку на элемент input
var counterInput = document.getElementById("counter");

// Функция для увеличения счётчика
function incrementCounter() {
  counterInput.value = parseInt(counterInput.value) + 1;
}

// Функция для уменьшения счётчика (не уходит в минус)
function decrementCounter() {
  if (parseInt(counterInput.value) > 0) {
    counterInput.value = parseInt(counterInput.value) - 1;
  }
}

const products = [];

// Получаем элементы кнопки и всплывающего окна
const buyButton = document.getElementById("buy-button");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");

// При щелчке на кнопке BUE
buyButton.addEventListener("click", function (e) {
    e.preventDefault(); // Отменяем стандартное действие ссылки
    popup.style.display = "block"; // Отображаем всплывающее окно
});

// При щелчке на кнопке закрытия
closeButton.addEventListener("click", function () {
    popup.style.display = "none"; // Скрываем всплывающее окно
});
