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

    static addTask(title,description,date,priority,done){
        this._tasks.push(new Task(title,description,date,priority,done));
    }

    static removeTask(index){
        this._task = [...this.task.slice(0,index),this.task.slice(index+1)];
    }




};