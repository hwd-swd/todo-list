import Task from './modules/Task';
import {initiateStorage,updateStorage} from './modules/Storage'
import {isToday} from 'date-fns'
import {menuDOM} from './modules/navBar'

let loadHomepage=function(){
    overlayDOM();
    projectDOM();
    displayTasks('Inbox');
    displayProjects();
    projectSwapDOM();
    menuDOM();
    
};

// DOM for the submit task overlay
let overlayDOM = function(){
    const addTaskButton = document.querySelector('.addTask');
    addTaskButton.addEventListener('click', openOverlay);

    const closeTaskButton = document.querySelector('#close');
    closeTaskButton.addEventListener('click',closeOverlay);

    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click',submitTask);

    const clearButton = document.querySelector('#clearForm');
    clearButton.addEventListener('click',clearForm);
};

//overlay to add new projects
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
    let oldDate = document.querySelector('#date').value;
    
    const priority = document.querySelector('#priority').checked;
    const description = document.querySelector('#description').value;

    if (title==''){
        alert('Please fill out a title');
    }
    else if (oldDate==''){
        alert('Please fill out a date')
    }
    else{
        let [year,month,day]=oldDate.split('-');
        let date = new Date(parseInt(year),parseInt(month)-1,parseInt(day));
        let task3 = new Task(title,description,date,priority,false);
        todoList.pushTask(task3,projectName);

        displayTasks(projectName);

        closeOverlay();
    };
};

//displays all the tasks in the specified project
let displayTasks=function(project){
    closeProject();
    if (project=='Today'){  //if "today is selected"
        clearTasks();
        let header = document.querySelector('.todoTitle');
        header.textContent='Today';
        let todoListDOM = document.querySelector('.todoList');
        
        todoList.projects.forEach(project=>{
            for(let i=0;i<project.tasks.length;i++){
                let task = project.tasks[i];
                if(isToday(task.date)){
                    todoListDOM.appendChild(displayTask(task,project.projectName,i));
            
                }
                
            };
        });
    }else if(todoList.hasProject(project)){
        clearTasks();
        let header = document.querySelector('.todoTitle');
        header.textContent=project;
        let todoListDOM = document.querySelector('.todoList');
        let index = todoList.projectIndex(project);
    
        for(let i=0;i<todoList.projects[index].tasks.length;i++){
            let task = todoList.projects[index].tasks[i];
            todoListDOM.appendChild(displayTask(task,project,i));
        }
        
    };
    //displays the active project
    const projects = document.querySelectorAll('.project');
    projects.forEach(ele=>{
        if(ele.textContent==project){
            ele.classList.add('active');
            
        }
        else{
            ele.classList.remove('active');
        };
    });
    updateStorage(todoList);
};

//creates a new task to display
let displayTask=function(task,project,i){
    let main = document.createElement('div');

    let temp = document.createElement('div');
    temp.setAttribute('class','taskContainer');
    if (task.complete){
        temp.className+=' completed';
    };
    main.appendChild(temp);


    let taskLeft = document.createElement('div');
    taskLeft.setAttribute('class','taskLeft');
    
    temp.appendChild(taskLeft);
    main.appendChild(displayDetails(task,project,i));
    


    //check box for task complete
    let taskComplete = document.createElement('div');
    taskComplete.setAttribute('class','checkBox');
    taskLeft.appendChild(taskComplete);
    taskComplete.setAttribute('value',i);
    
    let oldCheck = document.createElement('input');
    oldCheck.setAttribute('type','checkbox');
    oldCheck.setAttribute('value',i);
    oldCheck.setAttribute('project',project);

    if(task.complete==true){
        oldCheck.setAttribute('checked',true);
    }
    taskComplete.appendChild(oldCheck);
    taskComplete.addEventListener('click',toggleComplete);
    
    //task title
    let taskTitle = document.createElement('p');
    taskTitle.textContent = `${task.title}`;
    taskTitle.classList.add('wide');
    taskLeft.appendChild(taskTitle);
    if (task.complete){
        taskTitle.className+=' completedText';
    }
    taskTitle.setAttribute('value',i);
    taskTitle.setAttribute('project',project);
    taskTitle.addEventListener('click',toggleDetails);


    let taskRight = document.createElement('div');
    taskRight.setAttribute('class','taskRight');
    temp.appendChild(taskRight);

    //edit button for task
    let editButton = document.createElement('i');
    editButton.classList.add('fas');
    editButton.classList.add('fa-edit');
    editButton.classList.add('taskEdit');
    // editButton.setAttribute('class','button');
    editButton.setAttribute('value',i);
    editButton.setAttribute('project',project);

    editButton.addEventListener('click',openEdit);
    taskRight.appendChild(editButton);


    //toggle for task priority
    // let priorityCheck = document.createElement('input');
    let priorityCheck = document.createElement('i');
    priorityCheck.classList.add('fas');
    priorityCheck.classList.add('fa-star');
    priorityCheck.classList.add('priority');

    // priorityCheck.setAttribute('type','checkbox');
    priorityCheck.setAttribute('value',i);
    priorityCheck.setAttribute('project',project);

    if(task.priority==true){
        priorityCheck.classList.add('checked');
        // priorityCheck.setAttribute('checked',true);
    }
    taskRight.appendChild(priorityCheck);
    priorityCheck.addEventListener('click',togglePriority);


    //task date
    let taskDate = document.createElement('p');
    taskDate.setAttribute('class','date');
    taskDate.textContent=`${task.getDate()}`;
    taskRight.appendChild(taskDate);
    if (task.complete){
        taskDate.className+=' completedText';
    }
 
    //task delete
    let taskDelete = document.createElement('p');
    taskDelete.setAttribute('class','taskDelete');
    taskDelete.textContent = 'X';
    taskDelete.setAttribute('value',i);
    taskDelete.setAttribute('project',project);
    
    taskDelete.addEventListener('click',deleteTask);
    taskRight.appendChild(taskDelete);

    return main
};

//details button
let toggleDetails = function(e){
    let taskIndex = e.target.getAttribute('value');
    let projectTitle = e.target.getAttribute('project');
    let detail = document.getElementById(`${projectTitle}-${taskIndex}`);
    // detail.classList.toggle('hide');
    if(detail.style.height=='50px'){
        detail.style.height='0px';
        detail.style.padding='0px';
        detail.style.border='0px solid #f8f8f8';
    }else{
        detail.style.height='50px';
        detail.style.padding='.5rem';
        detail.style.border='1px solid #f8f8f8';
    }
};

//details DOM
let displayDetails = function(task,project,i){
    let details = document.createElement('div');
    details.classList.add('details');
    details.classList.add('hide');
    details.setAttribute('id',`${project}-${i}`);

    let title = document.createElement('p');
    title.innerHTML=`<strong>Title:</strong> ${task.title}`;
    details.appendChild(title);

    let description = document.createElement('p');
    description.innerHTML=`<strong>Description:</strong> ${task.description}`;
    details.appendChild(description);

    let date = document.createElement('p');
    date.innerHTML=`<strong>Due Date:</strong> ${task.getDate()}`;
    details.appendChild(date);

    let priority = document.createElement('p');
    priority.innerHTML=`<strong>Priority:</strong> ${task.priority}`;
    details.appendChild(priority);

    return details
};

//edit button
let openEdit = function(e){
    const overlay = document.querySelector('#overlay');
    overlayProjects();

    let taskIndex = e.target.getAttribute('value');
    let projectTitle = e.target.getAttribute('project');   

    const task = todoList.getTask(taskIndex,projectTitle);

    overlay.style.display = 'block';
    document.querySelector('#project').value=projectTitle;
    document.querySelector('#title').value=task.title;
    document.querySelector('#date').value=task.getDateNormal();
    

    if (task.priority){
        document.querySelector('#priority').checked=true;
    }
    document.querySelector('#description').value=task.description;
    todoList.removeTask(taskIndex,projectTitle);
};

//deletes the task
let deleteTask = function(e){
    let taskIndex = e.target.getAttribute('value');
    let projectTitle = e.target.getAttribute('project');
    const projectName = document.querySelector('.todoTitle').textContent;
    todoList.removeTask(taskIndex,projectTitle);
    displayTasks(projectName);
};

//toggles task completion
let toggleComplete = function(e){
    let taskIndex = e.target.getAttribute('value');
    let projectTitle = e.target.getAttribute('project');
    const projectName = document.querySelector('.todoTitle').textContent;
    todoList.toggleTaskComplete(taskIndex,projectTitle);
    displayTasks(projectName);
};

//toggles task priority
let togglePriority = function(e){
    let taskIndex = e.target.getAttribute('value');
    let projectTitle = e.target.getAttribute('project');
    const projectName = document.querySelector('.todoTitle').textContent;
    todoList.togglePriority(taskIndex,projectTitle);
    displayTasks(projectName);
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
    projects.forEach(project=>{
        project.addEventListener('click',(e)=>displayTasks(e.target.textContent))
    }
    );
};

//adds a new project to the todo list
let submitProject = function(){
    const projectTitle = document.querySelector('#projectTitle').value;
    if(projectTitle!=''&&!todoList.hasProject(projectTitle)){
        todoList.pushProject(projectTitle);
        displayProjects();
        closeProject();
        displayTasks(projectTitle);
    };
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
    
    let temp = document.createElement('div');
    temp.setAttribute('class','row');
    // temp.setAttribute('class','project');

    let header = document.createElement('h2');
    header.textContent= project.projectName;
    header.setAttribute('class','project');
    temp.appendChild(header);

    let projectButton = document.createElement('p');
    projectButton.textContent='X';
    projectButton.setAttribute('project',project.projectName);
    projectButton.classList.add('taskDelete');
    projectButton.addEventListener('click',deleteProject);
    temp.appendChild(projectButton);
    return temp
};

//deletes a project
let deleteProject = function(e){
    let projectTitle = e.target.getAttribute('project');
    const projectName = document.querySelector('.todoTitle').textContent;
    todoList.deleteProject(projectTitle);
    if(projectTitle == projectName){
        displayTasks('Inbox');
    }
    else{
        displayTasks(projectName);
    };
    displayProjects();
};


//clears out the projects
let clearProjects = function(){
    let customProjectsDOM = document.querySelector('.customProjects');
    customProjectsDOM.innerHTML='';
};

// clearStorage();
let todoList = initiateStorage();
loadHomepage()