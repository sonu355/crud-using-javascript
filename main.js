//selectors
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');
const filterOption = document.querySelector('.filter-todo')
//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

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
    const item = e.target
    const no = item.classList[0]
    console.log(no)

    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement
        todo.classList.add("fall")
        console.log("start")
        todo.addEventListener('transitionend', function(){
            console.log("end")
            todo.remove()
        })
        return;
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
}

function filterTodo(e){
    console.log(e.target.value)
    const todos = todoList.childNodes
    console.log(todos)
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all" : 
                todo.style.display = "flex"
                break;
            case "completed" : 
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }
                break;
            case "uncompleted" :
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }
                break;
        }    
    })
}