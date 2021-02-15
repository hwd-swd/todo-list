import Project from './Project';
import Task from './Task';

export default class TodoList{
    constructor(){
        this._projects=[];
        let today = new Project('Inbox');
        let t1 = new Task('t1','d1',new Date(2017,1,5),false,false);
        today.addTask(t1);
        this._projects.push(today);
        this._projects.push(new Project('today2'));
        this._projects.push(new Project('today3'));
        this._projects.push(new Project('today4'));
    }

    get projects(){
        return this._projects;
    }

    pushTask(task,project){
        this._projects[this.projectIndex(project)].addTask(task);
    }

    projectIndex(newProjectName){
        return this._projects.findIndex(ele=> ele.projectName==newProjectName);
    }

    pushProject(project){
        this._projects.push(new Project(project));
    }

    hasProject(newProjectName){
        return this._projects.some(ele=>ele.projectName==newProjectName);
    }

    deleteTask(taskTitle,projectName){
        if(this.hasProject(projectName)){
            return this._projects[this.projectIndex(projectName)].deleteTask(taskTitle);
        }
        else{
            return false
        }
    }

    toggleTaskComplete(taskTitle,projectName){
        if(this.hasProject(projectName)){
            return this._projects[this.projectIndex(projectName)].toggleCompleteTask(taskTitle);
        }
        else{
            return false
        }
    }

    togglePriority(taskTitle,projectName){
        if(this.hasProject(projectName)){
            return this._projects[this.projectIndex(projectName)].togglePriorityTask(taskTitle);
        }
        else{
            return false
        }
    }
}