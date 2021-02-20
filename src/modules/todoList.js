import Project from './Project';
import Task from './Task';

export default class TodoList{
    //initiates todolist with the default as inbox
    constructor(){
        this._projects=[];
        this.pushProject('Inbox');
        let t1 = new Task('t1','d1',new Date(2017,1,5),false,false);
        // inbox.addTask(t1);
        // this._projects.push(inbox);
        // this._projects.push(new Project('today2'));
        // this._projects.push(new Project('today3'));
        // this._projects.push(new Project('today4'));
    }

    get projects(){
        return this._projects;
    }

    //adds a new task to a project
    pushTask(task,project){
        this._projects[this.projectIndex(project)].addTask(task);
    }

    //return the index of the project in the todolist
    projectIndex(newProjectName){
        return this._projects.findIndex(ele=> ele.projectName==newProjectName);
    }

    //adds a new project if it doesnt exist inside the todolist
    pushProject(project){
        if(!this.hasProject(project)){
            this._projects.push(new Project(project));
        }
        
    }

    //checks if the project already exists in the todolist
    hasProject(newProjectName){
        return this._projects.some(ele=>ele.projectName==newProjectName);
    }

    getTask(index,projectName){
        return this._projects[this.projectIndex(projectName)].returnTask(index);
    }

    //remove a task at a given index
    removeTask(taskIndex,projectName){
        if(this.hasProject(projectName)){
            return this._projects[this.projectIndex(projectName)].removeTask(taskIndex);
        }
        else{
            return false
        }
    }

    //deletes a task from a project
    deleteTask(taskTitle,projectName){
        if(this.hasProject(projectName)){
            return this._projects[this.projectIndex(projectName)].deleteTask(taskTitle);
        }
        else{
            return false
        }
    }

    // toggles a task completion
    toggleTaskComplete(taskIndex,projectName){
        if(this.hasProject(projectName)){
            return this._projects[this.projectIndex(projectName)].toggleCompleteTask(taskIndex);
        }
        else{
            return false
        }
    }

    //toggles task priority
    togglePriority(taskIndex,projectName){
        if(this.hasProject(projectName)){
            return this._projects[this.projectIndex(projectName)].togglePriorityTask(taskIndex);
        }
        else{
            return false
        }
    }

    //deletes a project
    deleteProject(projectName){
        if(this.hasProject(projectName)){
            this._projects.splice(this.projectIndex(projectName),1);
        }
        
    }
}