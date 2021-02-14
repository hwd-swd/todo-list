import Task from './Task';
import Project from './Project';

export default class Display{
    constructor(){
        this.today = new Project('today');
    }

    
    

    static loadHomepage(){
        Display.overlayDOM();
    }



    static overlayDOM(){
        const addTaskButton = document.querySelector('.addTask');
        addTaskButton.addEventListener('click', Display.openOverlay);
    
        const closeTaskButton = document.querySelector('#close');
        closeTaskButton.addEventListener('click',Display.closeOverlay);

        const submitButton = document.querySelector('#submit');
        submitButton.addEventListener('click',Display.addTask);

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

    static addTask(){
        const title = document.querySelector('#title').value;
        const date = document.querySelector('#date').value;
        const priority = document.querySelector('#priority').checked;
        const description = document.querySelector('#description').value;
    
        console.log(title);
        console.log(date);
        console.log(priority);
        console.log(description);

        return false
    }

    static loadTasks(){
        let todoList = document.querySelector('.todoList');
    }
};