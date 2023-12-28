// Запрос первого слова
let word1 = prompt("Введите первое слово:");

// Запрос второго слова
let word2 = prompt("Введите второе слово:");

// Сравнение количества символов
if (word1.length > word2.length) {
    console.log(`Слово "${word1}" содержит больше символов.`);
} else if (word1.length < word2.length) {
    console.log(`Слово "${word2}" содержит больше символов.`);
} else {
    console.log("Слова содержат одинаковое количество символов.");
}
