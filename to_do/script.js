let taskInput = document.getElementById('new-task')
let addTaskButton = document.getElementById('add-task-button')
let taskList = document.getElementById('task-list')
let emptyState = document.getElementById('empty-state')
let taskForm = document.querySelector('.task-entry')
let tasks = []
let newTaskId = 1;

function saveChange(){
    let stringifyTasks = JSON.stringify(tasks)
    localStorage.setItem("tasks", stringifyTasks);
}

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Write your task!")
        return;
    }

    let newTask = {
        id: newTaskId++,
        text: taskText,
        completed: false,
    }
    tasks.push(newTask);
    saveChange();

    taskInput.value = "";

}



function renderTask(task){


    let li = document.createElement('li');
    li.classList.add("task-item");

    let taskSpan = document.createElement('span');
    taskSpan.textContent = task.text;
    taskSpan.classList.add("task-text")

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("add-button")
    if (task.completed) {
        taskSpan.classList.add("completed");
    }

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox-visual");
    li.append(checkbox, taskSpan, deleteBtn);

    taskList.appendChild(li);

    checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked;
        saveChange();
        taskSpan.classList.toggle("completed");

    })
     checkbox.checked = task.completed;

    emptyState.style.display = "none";

    deleteBtn.addEventListener('click', () => {
        let uniqueId = task.id;
        let position = tasks.findIndex((tasks) => tasks.id == uniqueId)
        tasks.splice(position, 1);
        saveChange();
        deleteBtn.parentElement.remove();
        if (tasks.length > 0) {
            emptyState.style.display = "none";
        } else {
            emptyState.style.display = "block";
        }

    })

}


function loadData(){
  let dataHai =  localStorage.getItem("tasks");
    if(dataHai === null){
        newTaskId = 1;
    }else{
        let restoreData =  JSON.parse(dataHai);
        tasks = restoreData;
        let newId = tasks.reduce((acc, curval)=> Math.max( acc , curval.id) , 0)
        newTaskId = newId + 1;
    }
}

taskForm.addEventListener('submit', (e) => { e.preventDefault(); addTask(); })

