'use strict';

const addBtn = document.getElementById('btn_list');
const setInput = document.getElementById('description_task');
const toDoWrap = document.querySelector('.todos_wrapper');
let tasks;
!localStorage.tasks ? tasks = [] : tasks =  JSON.parse(localStorage.getItem('tasks'));

function task (description){
    this.description = description
    this.completed = false
}

const createTemplate = (task, index) =>{
    return ` 
    <div class="todo_item" ${task.completed ? 'cheked' : ""}>
        <div class="description">${task.description}</div>
            <div class="wrapper_buttons">

                <input class="btn_checkbox" type="checkbox" ${task.completed ? 'cheked' : "" }>
                <button class="btn_delete">Delete</button>
            </div>   
    </div> 
    `
}

const fillTodo = () => {
    toDoWrap.innerHTML = "";
    if(tasks.length > 0){
        tasks.forEach((item, index) => {
            toDoWrap.innerHTML += createTemplate(item, index);
        })
    }
}

fillTodo();

const localUp = () =>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

addBtn.addEventListener('click', () =>{
    tasks.push(new task(setInput.value))
    localUp();
    fillTodo(); 
})