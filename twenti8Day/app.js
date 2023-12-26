// Запрос месяца у пользователя
const userInput = prompt('Введите месяц (например, "январь"):').toLowerCase();

// Определение сезона года с использованием switch
let season;

switch (userInput) {
  case 'декабрь':
  case 'январь':
  case 'февраль':
    season = 'зима';
    break;
  case 'март':
  case 'апрель':
  case 'май':
    season = 'весна';
    break;
  case 'июнь':
  case 'июль':
  case 'август':
    season = 'лето';
    break;
  case 'сентябрь':
  case 'октябрь':
  case 'ноябрь':
    season = 'осень';
    break;
  default:
    console.log('Некорректный ввод месяца.');
}

// Вывод результата
if (season) {
  console.log(`Введенный месяц принадлежит к сезону ${season}.`);
}
