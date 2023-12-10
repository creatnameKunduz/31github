const puzzles = document.querySelectorAll('.puzzle')
puzzles.forEach(puzzle => {
    const answerButton = puzzle.querySelector('.btn-answer')
    const answer = puzzle.querySelector('.answer')
    answerButton.addEventListener('click', function () {
        answer.classList.toggle('show')
        if (
            answer.classList.contains('show')) {
            answerButton.innerHTML = "скрыть ответ"
        } else {
            answerButton.innerHTML = "показать ответ"
        }
    })
})