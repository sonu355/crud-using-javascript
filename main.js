//selectors
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)

//functions
function addTodo(e){
    e.preventDefault();
    //create li
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

    //crate new list
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    //add the button
    const checkButton = document.createElement('button')
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('complete-btn')
    todoDiv.appendChild(checkButton)

    //add the delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn')
    todoDiv.appendChild(deleteButton)

    todoList.appendChild(todoDiv)

    todoInput.value = ''
}

function deleteCheck(e){
    console.log(e.target)
}