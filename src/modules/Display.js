import Task from './Task';
import Project from './Project';
import TodoList from './todoList';

export default class Display{
    constructor(){
        this._todoList = new TodoList();
    }

    loadHomepage(){
        let task2 = new Task('t2','d1','date1','1priority',false);
        this._todoList.pushTask(task2,'today');
        // this._todoList.displayProject('today');
        Display.overlayDOM();
        this.displayTasks('today');
        
    }

    static overlayDOM(){
        const addTaskButton = document.querySelector('.addTask');
        addTaskButton.addEventListener('click', Display.openOverlay);
    
        const closeTaskButton = document.querySelector('#close');
        closeTaskButton.addEventListener('click',Display.closeOverlay);

        const submitButton = document.querySelector('#submit');
        submitButton.addEventListener('click',Display.submitTask);

        const clearButton = document.querySelector('#clearForm');
        clearButton.addEventListener('click',Display.clearForm)

    }

    static openOverlay(){
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'block';
    }

    static clearForm(){
        document.querySelector('#title').value='';
        document.querySelector('#date').value='';
        document.querySelector('#priority').checked=false;
        document.querySelector('#description').value='';
    }

    static closeOverlay(){
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
    }

    static submitTask(){
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
            let task3 = new Task('t2','d1','date1','1priority',false);
            let temp = new Task(title,description,date,priority,false);
            console.log(this._todoList)
            this._todoList.pushTask(task3,'today');
        }
        

    }

    displayTasks(project){
        let todoList = document.querySelector('.todoList');
        let index = this._todoList.projectIndex(project);
        console.log(this._todoList)
        this._todoList.projects[index].tasks.forEach(task=>todoList.appendChild(this.displayTask(task)));
    }

    displayTask(task){
        let temp = document.createElement('div');

        temp.setAttribute('class','task');
        temp.textContent=`Title: ${task.title} Desc: ${task.description} Priority: ${task.priority} Due Date: ${task.date}`;
        return temp
    }

};