const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
  { name: 'David', age: 35 },
  { name: 'Eva', age: 28 },
  { name: 'Frank', age: 40 },
  { name: 'Grace', age: 32 },
  { name: 'Henry', age: 27 },
];

// Найти самого молодого пользователя
const youngestUser = users.reduce((youngest, user) => (user.age < youngest.age ? user : youngest));

// Найти самого старого пользователя
const oldestUser = users.reduce((oldest, user) => (user.age > oldest.age ? user : oldest));

// Разница в возрасте
const ageDifference = Math.abs(oldestUser.age - youngestUser.age);

// Вывести результат в консоль
console.log(`Пользователь ${oldestUser.name} старше ${youngestUser.name} на ${ageDifference} лет.`);
