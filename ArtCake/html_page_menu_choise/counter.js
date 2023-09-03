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
