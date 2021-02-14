import Task from './modules/Task';
import Project from './modules/Project';
import TodoList from './modules/todoList';

let todoList = new TodoList();


let loadHomepage=function(){
    
    let task2 = new Task('t2','d1','1997-11-10','1priority',false);
    todoList.pushTask(task2,'today');
    
    // this._todoList.displayProject('today');
    overlayDOM();
    displayTasks('today');
    displayProjects();
    
};

let overlayDOM = function(){
    const addTaskButton = document.querySelector('.addTask');
    addTaskButton.addEventListener('click', openOverlay);

    const closeTaskButton = document.querySelector('#close');
    closeTaskButton.addEventListener('click',closeOverlay);

    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click',submitTask);

    const clearButton = document.querySelector('#clearForm');
    clearButton.addEventListener('click',clearForm)

};

let openOverlay= function(){
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'block';
};

let clearForm= function(){
    document.querySelector('#title').value='';
    document.querySelector('#date').value='';
    document.querySelector('#priority').checked=false;
    document.querySelector('#description').value='';
};

let closeOverlay=function(){
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
};

let submitTask=function(){
    const title = document.querySelector('#title').value;
    const date = document.querySelector('#date').value;
    const priority = document.querySelector('#priority').checked;
    const description = document.querySelector('#description').value;

    if (title==''){
        alert('Please fill out a title');
    }
    else if (date==''){
        alert('Please fill out a title')
    }
    else{
        let task3 = new Task(title,description,date,priority,false);
        todoList.pushTask(task3,'today');
        displayTasks('today');
        closeOverlay();
    }
    

};

let displayTasks=function(project){
    clearTasks();
    let todoListDOM = document.querySelector('.todoList');
    let index = todoList.projectIndex(project);
    console.log(todoList)
    todoList.projects[index].tasks.forEach(task=>todoListDOM.appendChild(displayTask(task)));
};

let displayTask=function(task){
    let temp = document.createElement('div');
    temp.setAttribute('class','taskContainer');

    let taskLeft = document.createElement('div');
    taskLeft.setAttribute('class','taskLeft')
    temp.appendChild(taskLeft);
    
    let taskTitle = document.createElement('p');
    taskTitle.textContent = `${task.title}`;
    taskLeft.appendChild(taskTitle);

    let taskRight = document.createElement('div');
    taskRight.setAttribute('class','taskRight');
    temp.appendChild(taskRight);

    let taskDate = document.createElement('p');
    taskDate.textContent=`${task.getDate()}`;
    taskRight.appendChild(taskDate);

    let taskPriority = document.createElement('p');
    taskPriority.textContent = `${task.priority}`;
    taskRight.appendChild(taskDate);

    return temp
};

let clearTasks = function(){
    let todoListDOM = document.querySelector('.todoList');
    todoListDOM.innerHTML=''
};

let displayProjects=function(){
    let customProjectsDOM = document.querySelector('.customProjects');
    todoList.projects.forEach(project=>customProjectsDOM.appendChild(displayProject(project)));
};

let displayProject = function(project){
    let temp = document.createElement('h2');
    temp.setAttribute('class','project');
    temp.textContent= project.projectName;
    return temp
};

let clearProjects = function(){
    let customProjectsDOM = document.querySelector('.customProjects');
    customProjectsDOM.innerHTML='';
};



loadHomepage()