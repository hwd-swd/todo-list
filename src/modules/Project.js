import Task from './Task';

export default class Project {
    constructor(projectName){
        this._projectName = projectName;
        this._tasks = [];

    }

    get projectName(){
        return this._projectName;
    }

    get tasks(){
        return this._tasks
    }

    addTask(task){
        this._tasks.push(task);
    }

    removeTask(index){
        this._task = [...this.task.slice(0,index),this.task.slice(index+1)];
    }

    displayTasks(){
        this._tasks.forEach(task=>console.log({task}))
    }


};