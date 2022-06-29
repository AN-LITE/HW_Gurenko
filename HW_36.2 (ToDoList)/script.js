'use strict';

const addBtn = document.getElementById('btn_list');
const setInput = document.getElementById('description_task');
const toDoWrap = document.querySelector('.todos_wrapper');

let tasks = null;
let toDoItems = [];

!localStorage.tasks ? tasks = [] : tasks =  JSON.parse(localStorage.getItem('tasks'));

function task (description){
    this.description = description
    this.completed = false
    this.pending = false
}

const createTemplate = (task, index) =>{
    return ` 
    <div class="todo_item">
        <div class="description">${task.description}</div>
            <div class="wrapper_buttons">

                <select class="todos_status" >
                    <option onclick ='No-status(${index}) 'value="no-status">No-status</option> 
                    <option onclick ='completeTask(${index})' value="completed"  ${task.completed ? 'completed' : ""}>Completed</option>
                    <option onclick ='pendingTask(${index})' value="pending"  ${task.pending ? 'pending' : ""}>Pending</option>   
                </select>
                
                <button onclick="deleteTask(${index})" class="btn_delete">Delete</button>
            </div>   
    </div> 
    `
}

const fillTodo = () => {
    toDoWrap.innerHTML = "";
 
    if(tasks.length > 0){ 
        tasks.forEach((item, index) => {
            toDoWrap.innerHTML += createTemplate(item, index);
           
        });

        toDoItems = document.querySelectorAll('.todo_item')       
    }  
}

fillTodo();

const localUp = () =>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// setSelect.addEventListener('change', () =>{
//     this.value

// });

const completeTask = index => {

    tasks[index].copmleted = !tasks[index].copmleted;
    console.log(index);

    // if(tasks[index].copmleted){
    //     toDoItems[index].classList.add('complete');
    // }else{
    //     toDoItems[index].classList.remove('complete');
    // }
    localUp();
    fillTodo();   
}

addBtn.addEventListener('click', () => {

    if(setInput.value == ''){
        return

    }else{       
        tasks.push(new task(setInput.value))
        localUp();
        fillTodo(); 
        setInput.value = ''  
    }

})

const deleteTask = index =>{

    toDoItems[index].classList.add('deletion');
        
    setTimeout(()=>{ 
        tasks.splice(index,1)
        localUp();
        fillTodo();
    },500);

}


