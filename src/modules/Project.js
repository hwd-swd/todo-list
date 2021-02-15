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

    hasTask(taskTitle){
        return this._tasks.some(ele=>ele.title==taskTitle);
    }

    removeTask(index){
        this._tasks.splice(index,1);
    }

    deleteTask(taskTitle){
        if (this.hasTask(taskTitle)){
            this.removeTask(this.taskIndex(taskTitle));
        }
        else{
            return false
        }
    }

    taskIndex(taskTitle){
        return this._tasks.findIndex(ele=>ele.title==taskTitle);
    }
};