document.addEventListener('DOMContentLoaded', function() {
  const todoList = document.getElementById('todoList');

  function createTodoItem(text) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const todoText = document.createElement('span');
    todoText.textContent = text;
    todoItem.appendChild(todoText);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      editTodoItem(todoItem, todoText.textContent);
    });
    todoItem.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteTodoItem(todoItem);
    });
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
  }

  function editTodoItem(todoItem, currentText) {
    const newText = prompt('Enter new text:', currentText);
    if (newText !== null) {
      todoItem.querySelector('span').textContent = newText;
    }
  }

  function deleteTodoItem(todoItem) {
    todoList.removeChild(todoItem);
  }

  // Example: Adding initial items
  createTodoItem('Task 1');
  createTodoItem('Task 2');
  createTodoItem('Task 3');
});
