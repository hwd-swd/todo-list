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

    //adds a task to the project and then sorts it
    addTask(task){
        this._tasks.push(task);
        this.sortProject();
    }

    //returns a boolean if the task exists in the project
    hasTask(taskTitle){
        return this._tasks.some(ele=>ele.title==taskTitle);
    }

    returnTask(index){
        return this._tasks[index]
    }

    //removes a task from the project
    removeTask(index){
        this._tasks.splice(index,1);
    }

    //deletes a task from the project
    deleteTask(taskTitle){
        if (this.hasTask(taskTitle)){
            this.removeTask(this.taskIndex(taskTitle));
        }
        else{
            return false
        }
    }

    //returns the index of a given task title
    taskIndex(taskTitle){
        return this._tasks.findIndex(ele=>ele.title==taskTitle);
    }

    //toggles a task completion
    toggleCompleteTask(taskIndex){
        // if (this.hasTask(taskIndex)){
        //     this._tasks[this.taskIndex(taskIndex)].toggleComplete();
        //     this.sortProject();
        // }
        // else{
        //     return false
        // }
        this._tasks[taskIndex].toggleComplete();
        this.sortProject();
    }

    //toggls a task priority
    togglePriorityTask(taskIndex){
        // if (this.hasTask(taskTitle)){
        //     this._tasks[this.taskIndex(taskTitle)].togglePriority();
        //     this.sortProject();
        // }
        // else{
        //     return false
        // }
        this._tasks[taskIndex].togglePriority();
        this.sortProject();
    }

    //sorts the project by completion, priority, and due date
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
    };
};