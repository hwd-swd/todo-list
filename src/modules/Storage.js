import Task from './Task';
import TodoList from './todoList';
import {parseISO} from 'date-fns'


//creates the local storage if one is not created already
let initiateStorage = function(){
    if (localStorage.getItem('todoList')===null){
        let todoList = new TodoList();
        localStorage.setItem('todoList',JSON.stringify(todoList));
        return getStorage();
    }
    else{
        return getStorage();
    };
};

// returns a todolist from the local storage
let getStorage = function(){
    let todoListStorage = JSON.parse(localStorage.getItem('todoList'));
    let todoList = new TodoList();
    todoListStorage._projects.forEach(project=>{
        todoList.pushProject(project._projectName);

        project._tasks.forEach(task=>{
            let temp = new Task(task._title,task._description,parseISO(task._date),task._priority,task._complete);
            todoList.pushTask(temp,project._projectName);
        });
    });
    return todoList
};

//updates the local storage
let updateStorage = function(todoList){
    localStorage.setItem('todoList',JSON.stringify(todoList));
};

let clearStorage = function(){
    localStorage.clear();  
};


export {initiateStorage,getStorage,updateStorage,clearStorage}