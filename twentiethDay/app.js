const createButton =document.querySelector('#create_button')
const input =document.querySelector('#input')
const todoList =document.querySelector('todo_list')

const creatTodo =() =>{
    if (input.value===''){
        return  alert('Вы ввели неправелные данные, введите текст а не пустату')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')
    const divButton= document.createElement('div')
    divButton.setAttribute('class', 'div_button')
    const deleteButton =  document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')
    deleteButton.innerText ='EDIT'
    const text = document.createElement('h3')
    text.innerText= input.value
    text.addEventListener ('click',()=>{
        text.classList.toggle('toggle')
    })

    divButton.append(deleteButton, editButton)
    div.append(divButton)

    todoList.prepend(div)
    input.value = ''

}

createButton.onclick =()=> creatTodo()
window.onkeydown= (event)=>{
    if(event.code=== 'Enter'){
    creatTodo()
    }
}


