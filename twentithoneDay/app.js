const books = [
    { title: 'Книга 1', genre: 'fantasy' },
    { title: 'Книга 2', genre: 'mystery' },
    { title: 'Книга 3', genre: 'fantasy' },
    // Добавьте другие книги с разными жанрами
];

function filterBooks() {
    const genreSelect = document.getElementById('genreSelect');
    const selectedGenre = genreSelect.value;
    const bookListContainer = document.getElementById('bookList');

    // Очищаем текущий список книг
    bookListContainer.innerHTML = '';

    // Фильтруем книги по выбранному жанру или показываем все книги
    const filteredBooks = selectedGenre === 'all' ? books : books.filter(book => book.genre === selectedGenre);

    // Выводим книги
    filteredBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.textContent = book.title;
        bookListContainer.appendChild(bookElement);
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    filterBooks();
});

