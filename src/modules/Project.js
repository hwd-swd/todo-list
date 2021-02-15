import {isBefore} from 'date-fns'

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
        this.sortProject();
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

    toggleCompleteTask(taskTitle){
        if (this.hasTask(taskTitle)){
            this._tasks[this.taskIndex(taskTitle)].toggleComplete();
            this.sortProject();
        }
        else{
            return false
        }
    }

    togglePriorityTask(taskTitle){
        if (this.hasTask(taskTitle)){
            this._tasks[this.taskIndex(taskTitle)].togglePriority();
            this.sortProject();
        }
        else{
            return false
        }
    }

    sortProject(){
        this._tasks.sort((a,b)=>
        {if(a.complete==true&&b.complete==false){
            return 1
        }
        else if(a.complete==false&&b.complete==true){
            return -1
        }
        else{
            if(a.priority==true&&b.priority==false){
                return -1
            }
            else if(a.priority==false&&b.priority==true){
                return 1
            }
            else{
                if(isBefore(a.date,b.date)){
                    return -1
                }
                else{
                    return 1
                }
            }
        }
        });
    }
};