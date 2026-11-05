let taskInput = document.getElementById('new-task')
let addTaskButton = document.getElementById('add-task-button')
let taskList = document.getElementById('task-list')
let emptyState = document.getElementById('empty-state')
let taskForm = document.querySelector('.task-entry')
let tasks = []
let newTaskId = 1;

function addTask(){
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Write your task!")
        return;
    }

    let newTask = {
        id: newTaskId++,
        text: taskText,
        completed: false,
    }
    tasks.push(newTask);

    let li = document.createElement('li');
    li.classList.add("task-item");

    let taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    li.append(checkbox,taskSpan);

    taskList.appendChild(li);

    taskInput.value = "";
    emptyState.style.display ="none";
}

taskForm.addEventListener('submit', (e)=>{e.preventDefault(); addTask();})
