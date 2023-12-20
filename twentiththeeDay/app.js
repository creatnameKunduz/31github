
    function toggleAnswer(id) {
      var answer = document.getElementById('answer' + id);
      var button = document.querySelector('.riddle:nth-child(' + (id * 2) + ') button');

      if (answer.style.display === 'none') {
        answer.style.display = 'block';
        button.textContent = 'Скрыть ответ';
      } else {
        answer.style.display = 'none';
        button.textContent = 'Показать ответ';
      }
    }