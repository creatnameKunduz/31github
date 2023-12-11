let num1Input = document.getElementById('num1');
let num2Input = document.getElementById('num2');
let addButton = document.getElementById('add');
let subtractButton = document.getElementById('subtract');
let multiplyButton = document.getElementById('multiply');
let divideButton = document.getElementById('divide');
let calculateButton = document.getElementById('calculate');
let result = document.getElementById('result');

addButton.addEventListener('click', () => performOperation('+'));
subtractButton.addEventListener('click', () => performOperation('-'));
multiplyButton.addEventListener('click', () => performOperation('*'));
divideButton.addEventListener('click', () => performOperation('/'));

function performOperation(operator) {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultSpan.textContent = 'Ошибка: Введите числа';
        return;
    }

    switch (operator) {
        case '+':
            resultSpan.textContent = num1 + num2;
            break;
        case '-':
            resultSpan.textContent = num1 - num2;
            break;
        case '*':
            resultSpan.textContent = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultSpan.textContent = 'Ошибка: Деление на ноль';
            } else {
                resultSpan.textContent = num1 / num2;
            }
            break;
        case '=':
            resultSpan.textContent = 'Выберите операцию';
            break;
        default:
            resultSpan.textContent = 'Ошибка: Неизвестная операция';
            break;
    }
}

//
function filterBooksByLetterU(...books) {
  const booksWithLetterU = [];
  const otherBooks = [];

  for (const book of books) {
    if (book.includes('у')) {
      booksWithLetterU.push(book);
    } else {
      otherBooks.push(book);
    }
  }

  console.log('Книги с буквой "у":', booksWithLetterU);
  console.log('Остальные книги:', otherBooks);
}

// Пример использования функции:
filterBooksByLetterU('Шантарам', 'Мой Эверест', 'Бегущий за ветром', 'Книга без "у"');
