import Task from './modules/Task';
import Project from './modules/Project';
import TodoList from './modules/todoList';

let todoList = new TodoList();


let loadHomepage=function(){
    
    let task2 = new Task('t2','d1','1997-11-10','1priority',false);
    todoList.pushTask(task2,'Inbox');
    
    // this._todoList.displayProject('today');
    overlayDOM();
    projectDOM();
    displayTasks('Inbox');
    displayProjects();
    projectSwapDOM();
    
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

let overlayProjects = function(){
    const projectSelector = document.querySelector('#project');
    projectSelector.innerHTML='';

    todoList.projects.forEach(project=>{
        let option = document.createElement('option');
        option.setAttribute('value',project.projectName);
        option.textContent=project.projectName;
        projectSelector.appendChild(option);
    });
};

// opens the overlay to add a task
let openOverlay = function(){
    const overlay = document.querySelector('#overlay');
    overlayProjects();
    overlay.style.display = 'block';
    
};


//clears overlay
let clearForm = function(){
    document.querySelector('#title').value='';
    document.querySelector('#date').value='';
    document.querySelector('#priority').checked=false;
    document.querySelector('#description').value='';
};


//closes overlay
let closeOverlay = function(){
    clearForm();
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
};


//submits a task
let submitTask=function(){
    const projectName = document.querySelector('#project').value;
    const title = document.querySelector('#title').value;
    const date = document.querySelector('#date').value;
    const priority = document.querySelector('#priority').checked;
    const description = document.querySelector('#description').value;

    if (title==''){
        alert('Please fill out a title');
    }
    else if (date==''){
        alert('Please fill out a date')
    }
    else{
        let task3 = new Task(title,description,date,priority,false);
        todoList.pushTask(task3,projectName);
        displayTasks(projectName);
        closeOverlay();
    };
};

//displays all the tasks in the specified project
let displayTasks=function(project){
    if(todoList.hasProject(project)){
        clearTasks();
        let header = document.querySelector('.todoTitle');
        header.textContent=project;
        let todoListDOM = document.querySelector('.todoList');
        let index = todoList.projectIndex(project);
        todoList.projects[index].tasks.forEach(task=>todoListDOM.appendChild(displayTask(task)));
    };
};

//creates a new task to display
let displayTask=function(task){
    let temp = document.createElement('div');
    temp.setAttribute('class','taskContainer');
    if (task.complete){
        temp.className+=' completed';
    }


    let taskLeft = document.createElement('div');
    taskLeft.setAttribute('class','taskLeft')
    temp.appendChild(taskLeft);


    //check box for task complete
    let taskComplete = document.createElement('div');
    taskComplete.setAttribute('class','checkBox');
    taskLeft.appendChild(taskComplete);
    taskComplete.setAttribute('value',task.title)
    
    let oldCheck = document.createElement('input');
    oldCheck.setAttribute('type','checkbox');
    oldCheck.setAttribute('value',task.title)
    taskComplete.appendChild(oldCheck);
    taskComplete.addEventListener('click',toggleComplete);
    
    
    let taskTitle = document.createElement('p');
    taskTitle.textContent = `${task.title}`;
    taskLeft.appendChild(taskTitle);
    if (task.complete){
        taskTitle.className+=' completedText';
    }


    let taskRight = document.createElement('div');
    taskRight.setAttribute('class','taskRight');
    temp.appendChild(taskRight);

    let taskPriority = document.createElement('p');
    taskPriority.textContent = `${task.priority}`;
    taskRight.appendChild(taskPriority);

    let taskDate = document.createElement('p');
    taskDate.setAttribute('class','date');
    taskDate.textContent=`${task.getDate()}`;
    taskRight.appendChild(taskDate);
    if (task.complete){
        taskDate.className+=' completedText';
    }
 
    let taskDelete = document.createElement('p');
    taskDelete.setAttribute('class','taskDelete');
    taskDelete.textContent = 'X';
    taskDelete.setAttribute('value',task.title)
    taskDelete.addEventListener('click',deleteTask);
    taskRight.appendChild(taskDelete);

    return temp
};

//deletes the task
let deleteTask = function(e){
    let taskTitle = e.target.getAttribute('value');
    let projectTitle = document.querySelector('.todoTitle').textContent;
    todoList.deleteTask(taskTitle,projectTitle);
    displayTasks(projectTitle);
};

//completes the task
let toggleComplete = function(e){
    let taskTitle = e.target.getAttribute('value');
    let projectTitle = document.querySelector('.todoTitle').textContent;
    todoList.toggleTaskComplete(taskTitle,projectTitle);
    displayTasks(projectTitle);
};

//clears the tasks
let clearTasks = function(){
    let todoListDOM = document.querySelector('.todoList');
    todoListDOM.innerHTML='';
};

//adds DOM elements to the add project form
let projectDOM = function(){
    const addProjectButton = document.querySelector('.addProject');
    addProjectButton.addEventListener('click', openProject);

    const submitProjectButton = document.querySelector('#submitProject');
    submitProjectButton.addEventListener('click', submitProject);

    const closeProjectButton = document.querySelector('#cancelProject');
    closeProjectButton.addEventListener('click', closeProject);
};

//adds dom elements to all of the projects
let projectSwapDOM = function(){
    const projects = document.querySelectorAll('.project');
    projects.forEach(project=>project.addEventListener('click',(e)=>displayTasks(e.target.textContent)));
}

//adds a new project to the todo list
let submitProject = function(){
    const projectTitle = document.querySelector('#projectTitle').value;
    console.log(todoList.hasProject(projectTitle));
    if(projectTitle!=''&&!todoList.hasProject(projectTitle)){
        todoList.pushProject(projectTitle);
        displayProjects();
        closeProject();
        displayTasks(projectTitle);
    }
};

//opens the add project form
let openProject = function(){
    const addProjectButton = document.querySelector('.addProject');
    addProjectButton.style.display='none';

    const addProjectForm = document.querySelector('.addProjectForm');
    addProjectForm.style.display='flex';
};

//closes the add project form
let closeProject = function(){
    const addProjectButton = document.querySelector('.addProject');
    addProjectButton.style.display='flex';

    const addProjectForm = document.querySelector('.addProjectForm');
    document.querySelector('#projectTitle').value='';
    addProjectForm.style.display='none';
};


//displays the projects
let displayProjects=function(){
    clearProjects();
    let customProjectsDOM = document.querySelector('.customProjects');
    todoList.projects.forEach(project=>{
        if (project.projectName!='Inbox'){
            customProjectsDOM.appendChild(displayProject(project))
        }
    });
    projectSwapDOM();
};

//displays one project
let displayProject = function(project){
    
    let temp = document.createElement('h2');
    temp.setAttribute('class','project');
    temp.textContent= project.projectName;
    return temp
};


//clears out the projects
let clearProjects = function(){
    let customProjectsDOM = document.querySelector('.customProjects');
    customProjectsDOM.innerHTML='';
};



loadHomepage()