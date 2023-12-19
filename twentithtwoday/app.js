function getDataType(value) {
  var type = typeof value;
  console.log(type);
  return type;
}

// Примеры использования функции:
getDataType(false);           // Вывод: boolean
getDataType('hello world!');  // Вывод: string
getDataType(42);              // Вывод: number
