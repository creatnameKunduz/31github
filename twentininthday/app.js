// Запрос у пользователя двух чисел и операции
const num1 = parseFloat(prompt('Введите первое число:'));
const num2 = parseFloat(prompt('Введите второе число:'));
const operation = prompt('Введите операцию (+, -, *, /):');

// Проверка, что введены числа
if (isNaN(num1) || isNaN(num2)) {
  console.log('Пожалуйста, введите корректные числа.');
} else {
  // Выполнение математической операции в зависимости от введенной операции
  let result;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      // Проверка деления на ноль
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        console.log('Ошибка: деление на ноль.');
      }
      break;
    default:
      console.log('Некорректная операция. Введите одну из: +, -, *, /');
  }

  // Вывод результата
  if (result !== undefined) {
    console.log(`Результат: ${result}`);
  }
}
